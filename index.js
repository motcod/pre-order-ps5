const axios = require("axios");


const mailList = ["maw6293@gmail.com"];
const urlGame = "https://www.bug.co.il/brand/ps5/marvel/spider/man/miles/morales/ultimate/edition"
const urlPs5 = "https://www.bug.co.il/brand/ps5/ps5/console/digital";
const addToCart = "addToCart(this";
const theURL = "https://api.telegram.org/bot1515740642:AAG6xmaFJGJnVvLWqY9NHzhV3KF0KjiLp9c/sendMessage?chat_id=-491433102&text='NEW STOCK'"

async function makeGetRequest() {
  let res = await axios.get(urlPs5);
  if (res.status >= 200 && res.status < 300) {
    console.log(`status is ${res.statusText}, status number is ${res.status}`);
    if (res.data.toLowerCase().includes(addToCart.toLowerCase())) {
      //pre order open
      console.log(`there is "add to cart" now`);

      // MSG
  
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	  var xmlHttp = new XMLHttpRequest();
	  xmlHttp.open( "GET", theURL, false ); // false for synchronous request
      xmlHttp.send( null );
	  
    } else {
      console.log(`still no "add to cart"`);
    }
  } else {
    console.log(
      `bad status, status is ${res.statusText}, status number is ${res.status}`
    );
  }
}

setInterval(makeGetRequest, 50000);
