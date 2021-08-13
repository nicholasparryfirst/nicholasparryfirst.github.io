let spreadSubmit = '<button id="spreadSubmitButton" onclick="numberedSpread()">Go!</button>'
let spreadSelect = '<select name="chooseSpread" id="chooseSpread">' +
'<option value="10">Celtic Cross</option>' +
'<option value="7">Horseshoe Spread</option>' +
'<option value="12">Horoscope Wheel</option>' +
'<option value="10">Tree Of Life</option>' +
'<option value="3">Past, Present, Future</option>' +
'<option value="2">Problem, Solution</option>' +
'<option value="3">3 Cards</option>' +
'<option value="4">4 Cards</option>' +
'<option value="5">5 Cards</option>' +
'<option value="6">6 Cards</option>' +
'<option value="7">7 Cards</option>' +
'<option value="8">8 Cards</option>' +
'<option value="9">9 Cards</option>' +
'<option value="10">10 Cards</option>' +
'<option value="11">11 Cards</option>' +
'<option value="12">12 Cards</option>' +
'<option value="13">13 Cards</option>' +
'<option value="14">14 Cards</option>' +
'<option value="15">15 Cards</option>' +
'</select>';


function chooseASpread() {

  document.getElementById("rightTextField1").innerHTML = spreadSelect + spreadSubmit;

  document.getElementById("rightTextField2").innerHTML = "The choice is yours to make!";

  document.getElementById("rightTextField3").innerHTML = "";
  document.getElementById("rightTextField4").innerHTML = "";


};

function numberedSpread () {

  let j = document.getElementById("chooseSpread");
  let grabAmmount = j.value;
  let cardsPulled = new Array;
  let indexAvailable = Array.from(Array(77).keys());

      // note jj = counting number
      let jj = 0;


      do {

        let shuffle = Math.floor(Math.random() * tarotCards.length);

        if (indexAvailable[shuffle] == "p") {

          let shuffle = Math.floor(Math.random() * tarotCards.length);

        }

        else {

         indexAvailable.splice(shuffle, 1);
         indexAvailable.splice(shuffle,0,"p");

         cardsPulled.push(shuffle);

        jj++;
      }

      } while (jj < grabAmmount);

      //render new array in right container
      let hh = 0;
      let mod = "";

      document.getElementById("rightTextField2").innerHTML = "";

      do {

        document.getElementById("rightTextField2").innerHTML += '<p class="spreadItems" id="speadID' + cardsPulled[hh] + '" onClick="displayCardImage(' + cardsPulled[hh] + ')"> Card #' + (hh+1) + " is: " + tarotCards[cardsPulled[hh]] + "</p>";
          console.log(tarotCards[cardsPulled[hh]]);

          hh++;

      } while (hh < grabAmmount);


      document.getElementById("rightTextField3").innerHTML = "" ;
      document.getElementById("rightTextField4").innerHTML = "" ;


};


function displayCardImage(mod){

  document.getElementById("numRend").innerHTML = sNum2rNum[mod];
  document.getElementById("nameRend").innerHTML = tarotCards[mod];

    let cardImagePath = "./resources/images/cardimages/" + mod + ".png";

    console.log(mod);

    document.getElementById('imgRend').innerHTML = '<img src="' + cardImagePath + '" />';

    let lookupButton = '<button class="dynamicButton" id="dynamicLookupButton" name="dynamicLookupButton" value="lookup" formmethod="get" onclick="lookupFromMenu()">Lookup this card</button>';
    let similarButton = '<button class="dynamicButton" id="dynamicSimilarButton" name="dynamicSimilarButton" value="similar" formmethod="get">Similar cards</button>';
    let yomamaButton = '<button class="dynamicButton" id="dynamicYomamaButton" name="dynamicYomamaButton" value="Yomama" formmethod="get">Ur Moms card</button>';
    let noButton = '<div class="noButton" id="noButton" name="noButton" value="noButton" formmethod="get"></div>';
    let mbpButton = '<a href="https://madebyparry.com"><button class="dynamicMbpButton" id="dynamicMbpButton" name="dynamicMbpButton" value="Yomama" formmethod="get">MadeByParry</button></a>';
    document.getElementById("bottomButton1").innerHTML = lookupButton;
    document.getElementById("bottomButton2").innerHTML = yomamaButton;
    document.getElementById("bottomButton3").innerHTML = similarButton;
    document.getElementById("bottomButton4").innerHTML = noButton;
    document.getElementById("bottomButton5").innerHTML = mbpButton;

  window.lookupSeed=mod;

}
