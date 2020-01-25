
const RestUtil = require('../common/libs/rest-util');
const MongoDB = require('../common/libs/mongo-util');


class UserService{
    constructor(config){
        this.config = config;
        this.restUtil = new RestUtil();
        this.mongoDB = new MongoDB(config.get('mongodb:url'));
        this.saveDetails = this.saveDetails.bind(this); 
        this.savedepositDetails = this.savedepositDetails.bind(this); 
        this.saveTransactionDetails=this.saveTransactionDetails.bind(this);
        this.getUser = this.getUser.bind(this);
        this.findUser = this.findUser.bind(this);
        this.findcheckacc = this.findcheckacc.bind(this);
        this.findcheckTransaction = this.findcheckTransaction.bind(this);
        this.findcheckTransaction1 = this.findcheckTransaction1.bind(this);
        this.findUserwithdraw = this.findUserwithdraw.bind(this);
        this.findUserwithdraw1 = this.findUserwithdraw1.bind(this);
        this.find1User = this.find1User.bind(this);
        this.getUserdepositdetail = this.getUserdepositdetail.bind(this);
        this.getUserwithdrawdetail = this.getUserwithdrawdetail.bind(this);
        this.chnageUserPassword = this.chnageUserPassword.bind(this);
        this.getUserde=this.getUserde.bind(this);
    }

    async getUserde(changeD){
        return this.mongoDB.findRecord("people", changeD , {});
    }
    async chnageUserPassword(findChangedata,updatedata){
        return this.mongoDB.findAndUpdate("people", findChangedata,updatedata);
    }

    // async chnageUserPassword(query,update){
    //     return this.mongoDB.updateRecord("people", query,update);
    // }
    async findcheckacc(checkacc){
        return this.mongoDB.findRecord("balances", checkacc , {});
    }
    async findcheckTransaction (checkTransactionAcc){
        return this.mongoDB.findRecord("balances", checkTransactionAcc , {});
    }
    async findcheckTransaction1 (checkTransactionAcc){
        return this.mongoDB.findRecord("Transactions", checkTransactionAcc , {});
    }

    async findUserwithdraw(withdraw_no){
        return this.mongoDB.findRecord("balances", withdraw_no , {});
    }
    async findUserwithdraw1(withdraw_no1){
        return this.mongoDB.findRecord("people", withdraw_no1 , {});
    }
    async getUserwithdrawdetail(withdraw_no1,newwithdrawvalue){
        return this.mongoDB.findAndUpdate("balances", withdraw_no1,newwithdrawvalue );
    }


    async findUser(depositNo){
        return this.mongoDB.findRecord("people", depositNo , {});
    }
    async find1User(depositNo1){
        return this.mongoDB.findRecord("balances", depositNo1 , {});
    }
    async savedepositDetails(depositData){
        let result = await this.mongoDB.createRecord("balances",depositData);
        return result; 
    }
    async saveTransactionDetails(depositData,withdrawRs){
        let result = await this.mongoDB.createRecord("Transactions",depositData,withdrawRs);
        return result; 
    }
    async getUserdepositdetail(depositNo1,newdepositvalue){
        return this.mongoDB.findAndUpdate("balances", depositNo1 ,newdepositvalue );
    }
    async getUser(loginD){
        return this.mongoDB.findRecord("people", loginD , {});
    }
   
    
    async saveDetails(data){
        let result = await this.mongoDB.createRecord("people",data);
        return result; 
    }

}

module.exports = UserService;