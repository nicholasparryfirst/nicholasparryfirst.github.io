

  let lookupLabel = '<label class="lookupLabel" for="chooseCard">Pick a card</label>';
  let lookupSubmit = '<button id="lookupSubmit" onclick="lookupACard()">Submit</button>';
  let lookupSelect = '<select name="chooseCard" class="lookupSelect" id="chooseCard">' +
  '<option value="0">The Fool</option>' +
  '<option value="1">The Magician</option>' +
  '<option value="2">The High Priestess</option>' +
  '<option value="3">The Empress</option>' +
  '<option value="4">The Emperor</option>' +
  '<option value="5">The Hierophant</option>' +
  '<option value="6">The Lovers</option>' +
  '<option value="7">The Chariot</option>' +
  '<option value="8">Strength</option>' +
  '<option value="9">The Hermit</option>' +
  '<option value="10">Wheel of Fortune</option>' +
  '<option value="11">Justice</option>' +
  '<option value="12">The Hanged Man</option>' +
  '<option value="13">Death</option>' +
  '<option value="14">Temperance</option>' +
  '<option value="15">The Devil</option>' +
  '<option value="16">The Tower</option>' +
  '<option value="17">The Star</option>' +
  '<option value="18">The Moon</option>' +
  '<option value="19">The Sun</option>' +
  '<option value="20">Judgment</option>' +
  '<option value="21">The World</option>' +
  '<option value="22">Ace of Wands</option>' +
  '<option value="23">Two of Wands</option>' +
  '<option value="24">Three of Wands</option>' +
  '<option value="25">Four of Wands</option>' +
  '<option value="26">Five of Wands</option>' +
  '<option value="27">Six of Wands</option>' +
  '<option value="28">Seven of Wands</option>' +
  '<option value="29">Eight of Wands</option>' +
  '<option value="30">Nine of Wands</option>' +
  '<option value="31">Ten of Wands</option>' +
  '<option value="32">Page of Wands</option>' +
  '<option value="33">Knight of Wands</option>' +
  '<option value="34">Queen of Wands</option>' +
  '<option value="35">King of Wands</option>' +
  '<option value="36">Ace of Cups</option>' +
  '<option value="37">Two of Cups</option>' +
  '<option value="38">Three of Cups</option>' +
  '<option value="39">Four of Cups</option>' +
  '<option value="40">Five of Cups</option>' +
  '<option value="41">Six of Cups</option>' +
  '<option value="42">Seven of Cups</option>' +
  '<option value="43">Eight of Cups</option>' +
  '<option value="44">Nine of Cups</option>' +
  '<option value="45">Ten of Cups</option>' +
  '<option value="46">Page of Cups</option>' +
  '<option value="47">Knight of Cups</option>' +
  '<option value="48">Queen of Cups</option>' +
  '<option value="49">King of Cups</option>' +
  '<option value="50">Ace of Swords</option>' +
  '<option value="51">Two of Swords</option>' +
  '<option value="52">Three of Swords</option>' +
  '<option value="53">Four of Swords</option>' +
  '<option value="54">Five of Swords</option>' +
  '<option value="55">Six of Swords</option>' +
  '<option value="56">Seven of Swords</option>' +
  '<option value="57">Eight of Swords</option>' +
  '<option value="58">Nine of Swords</option>' +
  '<option value="59">Ten of Swords</option>' +
  '<option value="60">Page of Swords</option>' +
  '<option value="61">Knight of Swords</option>' +
  '<option value="62">Queen of Swords</option>' +
  '<option value="63">King of Swords</option>' +
  '<option value="64">Ace of Pentacles</option>' +
  '<option value="65">Two of Pentacles</option>' +
  '<option value="66">Three of Pentacles</option>' +
  '<option value="67">Four of Pentacles</option>' +
  '<option value="68">Five of Pentacles</option>' +
  '<option value="69">Six of Pentacles</option>' +
  '<option value="70">Seven of Pentacles</option>' +
  '<option value="71">Eight of Pentacles</option>' +
  '<option value="72">Nine of Pentacles</option>' +
  '<option value="73">Ten of Pentacles</option>' +
  '<option value="74">Page of Pentacles</option>' +
  '<option value="75">Knight of Pntcls</option>' +
  '<option value="76">Queen of Pentacles</option>' +
  '<option value="77">King of Pentacles</option>' +
  '</select>';


    function chooseACard(){

      document.getElementById("rightTextField1").innerHTML = lookupSelect + " " + lookupSubmit;
      document.getElementById("rightTextField2").innerHTML = "Choose Wisely. . .";
      document.getElementById("rightTextField3").innerHTML = "";
      document.getElementById("rightTextField4").innerHTML = "";

    };

  console.log("lookup options loaded");



function lookupACard(){
  //grab selected number
  let j = document.getElementById("chooseCard");
  let selectedLookup = j.value;

  //render rightContainer
  document.getElementById("rightTextField2").innerHTML = "Ah, " + tarotCards[selectedLookup] + "!" + '<br>';
  document.getElementById("rightTextField3").innerHTML = "";
  document.getElementById("rightTextField3").innerHTML += tarotCardSummaries[selectedLookup] + "<br/> <br/>";
  document.getElementById("rightTextField3").innerHTML += tarotCardDescriptions[selectedLookup];
  document.getElementById("rightTextField4").innerHTML = '<br>' + "What a great choice.";

  //render leftContainer
  let romNum = sNum2rNum[selectedLookup];
  let singlePull = tarotCards[selectedLookup];
  document.getElementById("numRend").innerHTML = romNum
    //typeEffect code
    let i = 0;
    document.getElementById("nameRend").innerHTML = "";

    function typeEffect() {
      if (i < tarotCards[selectedLookup].length) {
          document.getElementById("nameRend").innerHTML += singlePull.charAt(i);
          i++;
          setTimeout(typeEffect, 50);
        };
  };

    typeEffect();

  console.log("Single Card pulled:");
  console.log(singlePull, romNum);

  //render cardImage
  let cardImagePath = "./resources/images/cardimages/" + [selectedLookup] + ".png";
  document.getElementById('imgRend').innerHTML = '<img src="' + cardImagePath + '" />';

    //render bottomContainer
    document.getElementById("bottomButton1").innerHTML = similarButton;
    document.getElementById("bottomButton2").innerHTML = noButton;
    document.getElementById("bottomButton3").innerHTML = noButton;
    document.getElementById("bottomButton4").innerHTML = noButton;
    document.getElementById("bottomButton5").innerHTML = mbpButton;


};


function lookupFromMenu(){
  //grab selected number
  let selectedLookup = lookupSeed;


  //render rightContainer
  document.getElementById("rightTextField2").innerHTML = "Ah, " + tarotCards[selectedLookup] + "! <br>" ;
  document.getElementById("rightTextField3").innerHTML = "";
  document.getElementById("rightTextField3").innerHTML += tarotCardSummaries[selectedLookup] + "<br/> <br/>";
  document.getElementById("rightTextField3").innerHTML += tarotCardDescriptions[selectedLookup];
  document.getElementById("rightTextField4").innerHTML = '<br>' + "Learning is such a virtue.";

  //render leftContainer
  let romNum = sNum2rNum[selectedLookup];
  let singlePull = tarotCards[selectedLookup];
  document.getElementById("numRend").innerHTML = romNum

  let i = 0;
  document.getElementById("nameRend").innerHTML = "";

  function typeEffect() {
    if (i < tarotCards[selectedLookup].length) {
        document.getElementById("nameRend").innerHTML += singlePull.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
      };
};

  typeEffect();
  console.log(singlePull, romNum);

  //render bottomContainer
  document.getElementById("bottomButton1").innerHTML = backToSpreadButton;
  document.getElementById("bottomButton2").innerHTML = similarButton;
  document.getElementById("bottomButton3").innerHTML = noButton;
  document.getElementById("bottomButton4").innerHTML = noButton;
  document.getElementById("bottomButton5").innerHTML = mbpButton;


  //render image
  let cardImagePath = "./resources/images/cardimages/" + [selectedLookup] + ".png";
  document.getElementById('imgRend').innerHTML = '<img src="' + cardImagePath + '" />';

};
