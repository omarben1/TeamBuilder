const Eureka = require('eureka-js-client').Eureka;
const express = require('express');
const nodemailer = require("nodemailer");

const eurekaHost = '127.0.0.1';
const app = express();
app.use(express.json());

const emailFrom = "omaroujda1999@gmail.com";
const emailTo = "omarbench1999@gmail.com";

const user = "youremail@gmail.com";
const password = "your password";

app.listen(8082, () => {
    console.log("user-service on 3000");
    console.log(eurekaHost);
  })
  app.post('/',(req,res) => {
    console.log(req.body);
    async function main() {

      let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: user,
          pass: password
        }
      });
      let info = await transporter.sendMail({
        from: emailFrom, // sender address
        to: emailTo, // list of receivers
        subject: "[TeamBuilder] Full list of your members's group", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log("Message sent: %s", info.messageId);
    }
    
    main().catch(console.error);
    res.json("ok");
  })
const client = new Eureka({
    // application instance information
    instance: {
      app: 'emailService',
      hostName: 'localhost',
      ipAddr: '172.0.0.1',
      port:{
        '$': 8082,
        '@enabled': 'true',
      },
      vipAddress: 'emailService',
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      },
    },
    eureka: {
      // eureka server host / port
      host: '127.0.0.1',
      port: 8761,
      servicePath: '/eureka/apps',
    },
  });
  client.start();

