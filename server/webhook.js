/****************Helper and services***************************/
const config = require('./common/libs/config-util');



/******************* ROUTES ************************************/
const webhook = require('./route/banking-route');

/*******************NPM Libraries*****************************/
const express = require('express');
const helmet = require('helmet');
const nodemailer = require('nodemailer');

const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
/****************************Middleware***********************************************/
//app.use(helmet());
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
app.use(express.static(__dirname));
 
app.use(cors());

/*************************************************Routes********************************************/


app.use('/webhook',webhook);

/*******************************Server Hosting*****************************************/
const server = app.listen(config.get('server:port'), function() {
    console.log('Node server is running..' + config.get('server:port'));
});
