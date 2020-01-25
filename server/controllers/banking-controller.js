const config = require('../common/libs/config-util');
const MessageUtil = require('../common/libs/massage-util');
const MailUtil = require('../common/libs/mail-util');
//const DateUtil = require('../common/libs/date-util');
const RestUtil = require('../common/libs/rest-util');
const UserService = require('../services/banking-service');



class WebhookController {
    constructor() {
        this.userService = new UserService(config);
        
        this.show=this.show.bind(this);
        this.onChangeP=this.onChangeP.bind(this);
        this.onlogin=this.onlogin.bind(this);
        
        
        this.ondeposit= this.ondeposit.bind(this);
        this.onwithdraw= this.onwithdraw.bind(this);
        this.onCheck=this.onCheck.bind(this);
        
        this.onalltransaction=this.onalltransaction.bind(this);
        this.restUtil = new RestUtil();
        this.MailUtil=new MailUtil();
        this.phone_number = 0;
 }

   async show(req,res){
       try{
        var phoneno = /^\d{10}$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let account_no=(Math.floor(Math.random()*1E16));
        let acc_no = account_no.toString();
      
        // console.log(typeof parseInt(account_no));
        // let acc_no = toString(account_no);
        
        // console.log("^^^^^^^^^^", typeof acc_no);
        // console.log("$$$$$$$$$$$$$",acc_no);
        //  console.log(typeof acc_no);
        let data={
            email:req.body.email,
            username: req.body.username,
            password:req.body.password,
            phone_no:req.body.phone_no,
            gender:req.body.gender,
            city:req.body.city,
            Account_no:acc_no   
        }
        
        
        //console.log("______________",data.Account_no);

        if(data.username=="" && data.email=="" &&data.password==""){
            res.send(MessageUtil.getMessage().allDetail);
        }
        
        if(data.phone_no.match(phoneno) && data.email.match(mailformat))
         {   
           //console.log(data);
            let param = {"email":data.email};
            
            let users = await this.userService.getUser(param);
                    if(users[0]){
                        console.log("^^^^^^^^^^^^^^^^^^",users[0]);
                        
                        let messageJson= {"message":MessageUtil.getMessage().alexist};
                        res.send(messageJson);
                       
                    }
                    else{
                        
                            let value = await this.userService.saveDetails(data)
     
                                    if(value){
                                       
                                            
                                            let receiver=req.body.email,
                                             subject='Account created',
                                              text="Your Account NO is "+data.Account_no
                                              //html= "<h1></h1>"
                                              
                                
                                       
                                        MailUtil.sendUserMail(receiver,subject,text);
                                        var myObj = {"name":value.ops[0].username , "account_no":value.ops[0].Account_no, "email":value.ops[0].email};
                                       // console.log("itemssssssss======",myObj);
                                            res.send(myObj);
                                            
                                }else{
                                return res.json({
                                        success: false,
                                        message: 'Failed in saving details'
                                    })
                            
                                }

                    }
                
            
        }
        else{
            res.send(MessageUtil.getMessage().FORMAT_ERROR);
        }
          

       }catch(e){
        console.log('Error!', e);
            res.setHeader('Content-Type', 'application/json');
            res.send(MessageUtil.getMessage().Unable_Fetch);
            res.end();
       }
   }
   async onlogin(req,res){
       try{
        if(req.body.username=="" || req.body.password=="")
            {
            let json2={MessageUtil:getMessage().allDetail};
            res.send(json2);
            }
        else
             {
                let loginD = {"username":req.body.username,"password":req.body.password};
                let result = await this.userService.getUser(loginD);
                
                if(result[0])
                {
                    res.send({"message": MessageUtil.getMessage().loginS, "status": "SUCCESS"});
                }
                else
                {
                    let loginJson= {"message":MessageUtil.getMessage().userNE, "status": "FAILED"};
                        res.send(loginJson);
                       
                    
                }
             }
            }catch(e){
            console.log('Error!', e);
            res.setHeader('Content-Type', 'application/json');
            res.send(MessageUtil.getMessage().Unable_Fetch);
            res.end();
       }

   }


   async onChangeP(req,res)
   {
        try
        {
                if(req.body.password=="" ||req.body.newPassword=="" || req.body.conPassword=="" || req.body.email=="")
                {
                        let json={"message":MessageUtil.getMessage().allDetail};
                        res.send(json);
                }
                else
                {
                        let changeD={"email":req.body.email,"password":req.body.password};
                        
                        
                        let results = await this.userService.getUserde(changeD);
                        
                        if(results[0])
                        {        
                                if(req.body.newPassword==req.body.conPassword)
                                {
                                    let findChangedata={"email":req.body.email};
                                    let updatedata = {
                                        "$set": {
                                            "password":req.body.newPassword
                                        }
                                      };
                                   console.log("==%%%%%%%update", updatedata);
                                   
                                  let changeResult=await this.userService.chnageUserPassword(findChangedata,updatedata);
                                
                                  console.log("====",changeResult.ok);
                                  
                                  if(changeResult.ok==1){
                                    return res.json({
                                        success: true,
                                        message: 'chnage password scucessfully'
                                    })
                                  }else{
                                     
                                return res.json({
                                        success: false,
                                        message: 'Failed in changing details'
                                    })
                                    
                                }

                                    
                                }
                                else{
                                    return res.json({
                                        success: false,
                                        message: 'enter the same password in new password and confirm password'
                                    })
                                    
                                }
                        }
                        else
                        {
                           let json1={"message":MessageUtil.getMessage().userNE};
                           res.send(json1);
                        }

                }


        }
        catch(e){
            console.log('Error!', e);
            res.setHeader('Content-Type', 'application/json');
            res.send(MessageUtil.getMessage().Unable_Fetch);
            res.end();
        }
   }
  

   async ondeposit(req,res){
       try  
       {
        let depositData={
            Account_no:req.body.Account_no,
           depositAmount:parseFloat(req.body.depositAmount),
          
            date: new Date()
            

        }
                // console.log("*********************", typeof depositData.depositAmount)
            let depositNo ={"Account_no":depositData.Account_no};
            let depositA = await this.userService.findUser(depositNo);
             
            
            if(depositA[0]){
               
                    let depositNo1 ={"Account_no":depositData.Account_no};
                    let depositA1 = await this.userService.find1User(depositNo1);
                    console.log(depositA1);
                    if(depositA1[0]){
                        if(depositData.depositAmount<0){
                            return res.json({
                                success: false,
                                message: 'invalid deposit amount'
                            })
                        }
                        else{

                       
                        
                        let newDepositAmount= parseFloat(depositA1[0].depositAmount)+parseFloat(req.body.depositAmount); 
                        
                        let newdepositvalue = {
                            "$set": {
                                "depositAmount":newDepositAmount,
                                "date":depositData.date,
                               
                            }
                          };
                          
                          let transactionvalue = await this.userService.saveTransactionDetails(depositData);
                          
                        let depositA2 = await this.userService.getUserdepositdetail(depositNo1,newdepositvalue);
                        console.log("@@@@@@@@@@@@@@@",depositA2);
                        
                        if(depositA2){
                            let receiver=depositA[0].email,
                            subject='deposit  scucessfully',
                             text= "Deposit Amount is "+depositData.depositAmount+"     ,"  +"now the current blance is "+newDepositAmount
               
                     
                           MailUtil.sendUserMail(receiver,subject,text);
                            return res.json({
                                success: true,
                                messageS: 'deposit  scucessfully'
                            })
                        }
                        else{
                            return res.json({
                                success: false,
                                message: 'something wrong'
                            })
                            
                        }

                    }
                }
                    else{
                        if(depositData.depositAmount<0){
                            return res.json({
                                success: false,
                                message: 'invalid deposit amount'
                            })
                        }
                        else{
                        let transactionvalue = await this.userService.saveTransactionDetails(depositData)
                        let value = await this.userService.savedepositDetails(depositData)
                        
                        if(value){
                            let receiver=depositA[0].email,
                            subject='deposit  scucessfully',
                             text="Deposit Amount is "+depositData.depositAmount
               
                      console.log(depositA[0].email);
                           MailUtil.sendUserMail(receiver,subject,text);
                            return res.json({
                                success: true,
                                messageS: 'deposit  sucessfully first time'
                            })
                        }else{
                        return res.json({
                                success: false,
                                message: 'Failed in deposit'
                            })
                    
                        }
                    }
            }
            }
            else{
                
                return res.json({
                    success: false,
                    message: 'user not exist'
                })
           
                
             }
                    
        }
       catch(e)
       {
        console.log('Error!', e);
        res.setHeader('Content-Type', 'application/json');
        res.send(MessageUtil.getMessage().Unable_Fetch);
        res.end();
       }
   }


     async onwithdraw(req,res){
         try{
            let withdrawRs={
                withdrawAmount:parseFloat(req.body.withdrawRs),
                Account_no:req.body.Account_no,
                date: new Date()
            }

            let withdraw_no1 ={"Account_no":withdrawRs.Account_no};
            let withdrawvalue1 = await this.userService.findUserwithdraw1(withdraw_no1);
            console.log("**********",withdrawvalue1[0]);
            console.log("*********^^^^^^^^^*",withdrawvalue1);
            if( withdrawvalue1[0]){

            
            
            let withdraw_no ={"Account_no":withdrawRs.Account_no};
            let withdrawvalue = await this.userService.findUserwithdraw(withdraw_no);
            
            if(withdrawvalue[0]){
                if(withdrawRs.withdrawAmount<0){
                    console.log('invalid');
                    return res.json({
                        success: false,
                        message: 'invalid withdraw amount'
                    })

                }
                else{
                let transactionvalue = await this.userService.saveTransactionDetails(withdrawRs);
                var oldDepositAmount=parseInt(withdrawvalue[0].depositAmount);
                
                if(oldDepositAmount > withdrawRs.withdrawAmount){
                    var newDepositAmount=oldDepositAmount-withdrawRs.withdrawAmount;
                    let withdraw_no1 ={"Account_no":req.body.Account_no};
                    let newwithdrawvalue = {
                        "$set": {
                            "depositAmount":newDepositAmount,
                           " withdrawRs":parseFloat(withdrawRs.withdrawAmount),
                           "date":withdrawRs.date,
                               
                        }
                      };
                      
                      let withdrawvalueA = await this.userService.getUserwithdrawdetail(withdraw_no1,newwithdrawvalue);
                      console.log(withdrawvalueA);
                      if(withdrawvalueA){
                        let receiver=withdrawvalue1[0].email,
                        subject='withdraw  scucessfully',
                         text= "Withdraw Amount is "+withdrawRs.withdrawAmount+"     ,"  +"now the current blance is "+newDepositAmount
           
                  
                       MailUtil.sendUserMail(receiver,subject,text);
                       return res.json({
                        success: true,
                        message: 'sucessfull'
                    })
               
                         

                      }
                      else{

                        return res.json({
                            success: false,
                            message: 'error'
                        })
                   
                      }
                        
                     
                      
                 }
                 else{
                    return res.json({
                        success: false,
                        message: 'cannot withdraw that much money you have less balance'
                    })
               
                     
                 }
                }
            }else{
                return res.json({
                    success: false,
                    message: 'user not exist'
                })
           
              
            }

        }
        else{
            return res.json({
                success: false,
                message: 'user not exist'
            })
       
            
        }
    
         }catch(e){
            console.log('Error!', e);
        res.setHeader('Content-Type', 'application/json');
        res.send(MessageUtil.getMessage().Unable_Fetch);
        res.end();
         }

     }
     async onCheck(req,res){
         try{
            let checkacc={"Account_no":req.body.Account_no};
            let checkvalue = await this.userService.findcheckacc(checkacc);
            console.log("^^^^^^^^^^",checkvalue);
            if(checkvalue[0]){
                res.send({"message":checkvalue[0].depositAmount});

            }
            else{
                return res.json({
                    success: false,
                    message: 'User not exist'
                })
               
            }


         }
         catch(e){
         console.log('Error!', e);
        res.setHeader('Content-Type', 'application/json');
        res.send(MessageUtil.getMessage().Unable_Fetch);
        res.end();
    }
     }

      async onalltransaction(req,res){
          try{
            let checkTransactionAcc={"Account_no":req.body.Account_no};
            let checkTransactionvalue = await this.userService.findcheckTransaction(checkTransactionAcc);
            console.log(checkTransactionvalue);
            if(checkTransactionvalue){
               
            let checkTransactionvalue1 = await this.userService.findcheckTransaction1(checkTransactionAcc);
            console.log("*****",checkTransactionvalue1);
            let json5={"balance":checkTransactionvalue1};
            res.send(json5);
            }
            else{
                return res.json({
                    success: false,
                    message: 'error'
                })
            }



          }
          catch(e){
                 console.log('Error!', e);
                res.setHeader('Content-Type', 'application/json');
                res.send(MessageUtil.getMessage().Unable_Fetch);
                res.end();
                }

      }
    }
      module.exports = WebhookController;