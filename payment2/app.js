const express = require('express');
const bodyParser = require("body-parser");
const qr = require('qr-image');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();

// Set view engine
app.set('view engine', 'ejs')

// Set static folder
app.use(express.static('./public'))
//sendgrid
const sgMail = require('@sendgrid/mail');
var apikey='';

sgMail.setApiKey(apikey);
const nodemailer = require('nodemailer');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//CONECTING DB// APP CONFI


//mongodb://127.0.0.1:27017/blockchainPayment
//mongodb+srv://travelappdb:travelappdb@cluster0-m1klw.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://travelappdb:travelappdb@cluster0-m1klw.mongodb.net/blockchainPayment?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://travelappdb:travelappdb@cluster0-m1klw.mongodb.net/tourapp?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false
  });
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 


app.post('/blocks', function(req,res){ 
	//unique barcode id
 var qr_txt = Math.random().toString(36).substring(2) + Date.now().toString(36);
    var name = req.body.user_name; 
    var phone =req.body.user_phone;
    var desc=req.body.user_desc; 
    //var aa=req.body.user_aa;
    var aa=qr_txt;
    var bb=req.body.user_bb;
    var cc=req.body.user_cc;
    var email=req.body.user_email;
  
    var data = { 
        "name": name, 
        "phone":phone, 
        "desc":desc, 
        "aa":aa,
         "bb":bb,
         "cc":cc
    } 
db.collection('blocks').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    
// new partzzzzzz
 
	var user=req.body.user_email;
	
      var resource= cc.substr(0, cc.indexOf('%'));
    // Generate QR Code from text
    var qr_png = qr.imageSync(qr_txt,{ type: 'png'})

    // Generate a random file name 
    var qr_code_file_name = 'EntryKey' + '.png';

    fs.writeFileSync('./public/qr/' + qr_code_file_name, qr_png, (err) => {
        if(err){
            console.log(err);
        }
        
    })

    // Send the link of generated QR code
    // res.send({
    //     'qr_img': "qr/" + qr_code_file_name
    // });
	
	//send email
 pathToAttachment = `./public/qr/EntryKey.png`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");
 const msg = {
  to: user,
  from: 'rohanp1996@gmail.com',
  subject: 'Booking Confrimation QR Code',
  text: '123456',
  html: '<p><h1>Hello&nbsp;'+name+'</h1></p><h1>Key to your resource</h1><h2>Please find the booking confirmation details:</h2><p>Owned by:<b>'+bb+'</b></p><p>Resource:<b>'+resource+'</b></p>',
    attachments: [
    {
      content: attachment,
      filename: "yourkey.png",
      contentType:  'image/png',
      disposition: "attachment"
    }
  ]

  
};
sgMail.send(msg);

return  res.redirect('http://localhost:3000');



}) 

app.get('/blocks/new', (req, res) => {
    res.render('new')
})  
  
app.listen('5000', () => console.log('Server started at port 5000'))
  
console.log("server listening at port 5000"); 

