const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const cors = require("cors");
const nodemailer = require('nodemailer');

app.use(cors({
   origin : "*"
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/',(req ,res)=>{
      res.send('Hello')
})



app.post('/mail', async (req , res)=>{
    console.log(req.body)
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'umerprogrammer@gmail.com',
          pass: 'kfbwoukjnvdulnek'
      }
  });
  
  console.log('created');
  transporter.sendMail({
  from: 'umerprogrammer@gmail.com',
    to: 'umerprogrammer@gmail.com',
    subject: 'hello world!',
    text: 'hello world!'
  });

})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
