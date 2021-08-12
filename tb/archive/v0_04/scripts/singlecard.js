
//button generates a random pull from tarotCards list
function generateACard(){
  //declarations and shuffle//
  let shuffle = Math.floor(Math.random() * tarotCards.length);
  let romNum = sNum2rNum[shuffle];
  let singlePull = tarotCards[shuffle];

  //name generation//
  document.getElementById("numRend").innerHTML = romNum;

  //typeEffect code
  let i = 0;
  document.getElementById("nameRend").innerHTML = "";

  function typeEffect() {
    if (i < tarotCards[shuffle].length) {
        document.getElementById("nameRend").innerHTML += singlePull.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
      };
  };

  typeEffect();

  console.log("Single Card pulled:");
  console.log(singlePull, romNum);

  // card rendering //
  let cardImagePath = "./resources/images/cardimages/" + [shuffle] + ".png";
console.log(cardImagePath);
  document.getElementById('imgRend').innerHTML = '<img src="' + cardImagePath + '" />';

  //description rendering
  let description1 = tarotCardDescriptions[shuffle];
  let description2 = tarotCardSummaries[shuffle];


  document.getElementById("rightTextField1").innerHTML = singlePull;
  document.getElementById("rightTextField2").innerHTML = description1;
  document.getElementById("rightTextField3").innerHTML = description2;
  document.getElementById("rightTextField4").innerHTML = "";


  //bottomContainer rendering
  document.getElementById("bottomButton1").innerHTML = lookupButton;
  document.getElementById("bottomButton2").innerHTML = similarButton;
  document.getElementById("bottomButton3").innerHTML = noButton;
  document.getElementById("bottomButton4").innerHTML = noButton;
  document.getElementById("bottomButton5").innerHTML = mbpButton;

window.lookupSeed=shuffle;
};


//logs
console.log("singlecard.js loaded");
