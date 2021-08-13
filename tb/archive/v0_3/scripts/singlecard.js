
//button generates a random pull from tarotCards list
function generateACard(){
  //declarations and shuffle//
  let shuffle = Math.floor(Math.random() * tarotCards.length);
  let romNum = sNum2rNum[shuffle];
  let singlePull = tarotCards[shuffle];

  //name generation//
  document.getElementById("numRend").innerHTML = romNum
  document.getElementById("nameRend").innerHTML = singlePull
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
  let lookupButton = '<button class="dynamicButton" id="dynamicLookupButton" name="dynamicLookupButton" value="lookup" formmethod="get" onclick="lookupFromMenu()">Lookup this card</button>';
  let similarButton = '<button class="dynamicButton" id="dynamicSimilarButton" name="dynamicSimilarButton" value="similar" formmethod="get">Similar cards</button>';
  let noButton = '<div class="noButton" id="noButton" name="noButton" value="noButton" formmethod="get"></div>';
  let yomamaButton = '<button class="dynamicButton" id="dynamicYomamaButton" name="dynamicYomamaButton" value="Yomama" formmethod="get">Ur Moms card</button>';
  let mbpButton = '<a href="https://madebyparry.com"><button class="dynamicMbpButton" id="dynamicMbpButton" name="dynamicMbpButton" value="Yomama" formmethod="get">MadeByParry</button></a>';
  document.getElementById("bottomButton1").innerHTML = lookupButton;
  document.getElementById("bottomButton2").innerHTML = yomamaButton;
  document.getElementById("bottomButton3").innerHTML = lookupButton;
  document.getElementById("bottomButton4").innerHTML = similarButton;
  document.getElementById("bottomButton5").innerHTML = mbpButton;

window.lookupSeed=shuffle;
};


//logs
console.log("singlecard.js loaded");
