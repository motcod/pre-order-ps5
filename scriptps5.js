const axios = require("axios");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "Gmail",
    auth: {
      user: "maw6293@gmail.com",
      pass: "D3ax8oQXCc",
    },
  })
);
// hashtag #preorder in subject for ifttt trigger
const mailOptions = {
  from: "maw6293@gmail.com",
  to: "maw6293@gmail.com",
  subject: "#preorderPS5",
  text: "New stock",
};

const mailList = ["ori@ezracpa.co.il", "trigger@applet.ifttt.com"];
const urlNintedo = "https://www.bug.co.il/brand/nintendo-switch/redandblueversion11/"
const urlPs5 = "https://www.bug.co.il/brand/ps5/ps5/console/digital";
const addToCart = "button action primary tocart sprite";

async function makeGetRequest() {
  let res = await axios.get(urlPs5);
  if (res.status >= 200 && res.status < 300) {
    console.log(`status is ${res.statusText}, status number is ${res.status}`);
    if (res.data.toLowerCase().includes(addToCart.toLowerCase())) {
      //pre order open
      console.log(`there is "add to cart" now`);

      // send mail
      mailList.forEach((address) => {
        mailOptions.to = address;
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      });
    } else {
      console.log(`still no "add to cart"`);
    }
  } else {
    console.log(
      `bad status, status is ${res.statusText}, status number is ${res.status}`
    );
  }
}

setInterval(makeGetRequest, 10000);
