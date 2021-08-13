
let fromImport = require ("./import.js")

let devNotes = "OFF"

//establish variables

    let allCards = fromImport.tarotCards.slice();

    let grabAmmount = process.env.cardAmmount

    let cardsPulled = new Array;

    let indexAvailable = Array.from(Array(77).keys())

    // note jj = counting number
    let jj = 0;


//define function

function pullCards(){

  do {

    let shuffle = Math.floor(Math.random() * allCards.length);

    if (indexAvailable[shuffle] == "p") {

      let shuffle = Math.floor(Math.random() * allCards.length);

    }

    else {

     indexAvailable.splice(shuffle, 1);
     indexAvailable.splice(shuffle,0,"p");

     cardsPulled.push(shuffle);

    jj++;
  }

  } while (jj < grabAmmount);


}




//start function
pullCards();

//print devnotes

if (devNotes == "ON") {
  console.log("Dev note: cardsPulled:");
  console.log(cardsPulled);
};

//button generates a random pull from tarotCards list
function readCardsPulled() {

  let jj = 0;

  do {

      console.log("");
      console.log(  fromImport.sNum2rNum[cardsPulled[jj]]);
      console.log("");
      console.log(fromImport.tarotCards[cardsPulled[jj]]);
      console.log('\n');
      console.log(" . ");
      console.log("");
      console.log(" . ");
      console.log("");
      jj++;

  } while (jj < grabAmmount);
};

readCardsPulled();
