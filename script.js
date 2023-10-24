// ==UserScript==
// @name         cbplus
// @namespace    https://github.com/valzar-cbp/
// @downloadURL  https://raw.githubusercontent.com/valzar-cbp/cbplus/master/index.js
// @version      1.2.0
// @description  Better Chaturbate!
// @author       ValzarMen
// @include      https://www.chaturbate.com/*
// @include      https://chaturbate.com/*
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/master/require/video.min.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/master/require/jquery.min.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/master/require/jquery-ui.min.js
// @require      lvJs https://unpkg.com/@videojs/http-streaming@0.9.0/dist/videojs-http-streaming.js
// @resource     vjCSS https://unpkg.com/video.js@6.7.1/dist/video-js.css
// @resource     jqCSS https://raw.githubusercontent.com/valzar-cbp/cbplus/master/resource/jquery-ui.css
// @resource     cbCSS https://raw.githubusercontent.com/valzar-cbp/cbplus/master/resource/cbplus.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// ==/UserScript==

'use strict';
//document.body.style.display = 'none';
//CBPLUS TAMPERMONKEY SCRIPT JULY 23 LATEST UPDATE (aug8)
























var imagescrape = [];
var cokray = []
window.scan = false;
window.idd = 1;
     let id = 'my_video'
     let id2 = 'my_video2'
      let id3 = 'my_video3'
       let id4 = 'my_video4'
       let id5 = 'my_video5'
       let id6 = 'my_video6'
var godray = [];
var pinray = [];
const videoIds = [];
const strms = [];
window.onplay = 1
let isClickable = true;
const debounceTime = 2000;
window.count;
window.atab = false
//2428
//2712 rooms before
window.ctab = false
window.alink = false
window.vanum = 0;
window.pend = 300;
window.tries = 0;
window.tries2 = 0;
window.post = false;
window.nowplaying = null;
window.oldplaying = null;
window.clonex = []
//window.globalScrollPosition = 0;
var clones2 = [];
var saveArr = [];
var clones = [];
var clonesf = [];
//var dynArr = [];
function setCookie(name, value, minutes) {
    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000)); // Convert minutes to milliseconds
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}




      let ttagsArray = ["default","#18","#19","#asian","#bigboobs","#ebony","#mature","#latina","#milf","#hairy","#anal","#new","#squirt","#bbw","#milk","#smalltits","#teen","#skinny","#pantyhose","#feet","#bigass","#fuckmachine","#pregnant","#german","#deepthroat","#young","#mistress","#shy","#redhead","#french","#smoke","#british","#curvy","#bigpussylips","#cc","#indian","#ahegao","#natural","#pinay","#goth","#muscle","#cosplay","#nonude","#lovense","#bdsm","#blonde","#petite","#femdom","#heels","#daddy","#joi","#hairyarmpits","#dirty","#saliva","#latex","#bigclit","#puffynipples","#slave","#bigtits","#mommy","#sph","#lesbian","#submissive","#hairypussy","#stockings","#atm","#cute","#bignipples","#fit","#tattoo","#strapon","#ukraine","#cei","#findom","#chubby","#cuckold","#braces","#daddysgirl","#cum","#bush","#office","#dirtytalk","#italian","#anime","#slut","#humiliation","#flexible","#nasty","#dutch","#sissy","#blowjob","#leggings","#piercing","#footjob","#glasses","#arab","#pawg","#gaming","#tease","#spit","#twerk","#bbc","#dance","#longhair","#aussie","#shorthair","#fitness","#tall","#socks","#fetish","#pussy","#ass","#nonnude","#lush","#pvt","#bigpussy","#schoolgirl","#legs","#gamer","#colombia","#party","#turkish","#roleplay","#balloons","#slim","#russian","#cameltoe","#brunette","#student","#chastity","#hentai","#dildo","#leather","#kinky","#leagueoflegends","#horny","#messy","#goddess","#tomboy","#domi","#nylon","#wifematerial","#panties","#boots","#footfetish","#tiny","#armpits","#korean","#japanese","#valorant","#ssbbw","#creamy","#smoking","#naked","#smallboobs","#erotic","#asmr","#domination","#tattoos","#muscles","#abs","#pegging","#sexy","#shaved","#belly","#redhair","#dp","#bondage","#amputee","#creampie","#boobs","#athletic","#couple","#bigbelly","#longlegs","#piercings","#jeans","#bigcock","#tits","#wet","#sloppy","#bigdildo","#ginger","#porn","#cumshow","#sensual","#private","#ohmibod","#lingerie","#hugeboobs","#oil","#small","#nora","#asshole","#latin","#thick","#chat","#curly","#girlnextdoor","#dominatrix","#orgasm","#yoga","#germany","#femboy","#bigtoys","#interactivetoy","#control","#love","#strip","#smoker","#black","#fat","#bigtoy","#masturbation","#college","#naughty","#dominant","#fuck","#naturaltits","#whore","#longtongue","#biglips","#english","#pornstar","#little","#tights","#naturalboobs","#masturbate","#hush","#master","#nipples","#colombiana","#american","#twink","#lovensecontrol","#toes","#talk","#soles","#edging","#pierced","#france","#canadian","#beauty","#nolush","#fingering","#dildoplay","#assplay","#makemecum","#chill","#tipgoal","#innocent","#mixed","#ink","#sub","#dom","#booty","#girl","#big","#bigboob","#recommended","#sex","#babe","#smile","#trimmed","#toys","#cutie","#seductive","#naturalgirls","#newgirl","#bigbutt","#thin","#bignaturalboobs","#tanlines","#flirt","#twerking","#blond","#nature","#show","#pierce","#beautiful","#pussyplay","#ride","#vacuum","#hot","#fingerass","#ridedildo","#play","#sexmachine","#creamypussy","#cowgirl","#colorhair","#teens","#me","#cream","#sweet","#nude","#splits","#wetpussy","#feets","#roll","#plug","#plug","#sport","#toy","#niceass","#voyeur","#foot","#spank","#talkdirty","#lushcontrol","#blueeyes","#brat","#pinkpussy","#password","#passion","#bj","#doggy","#african","#rust","#longnails","#blue","#wheel","#smiling","##","#creamycum","#sexyboobs","#sexygirl","#cuckolding","#latins","#hugetits","#skirt","#rollthedice","#curve","#newmodel","#hotgirl","#interactive","#privateshow","#sexytits","#nice","#girlfriendmaterial","#amateur","#fucking","#swimmingpool","#goodvibes","#rimworld","#emo","#showboobs","#phatass","#pvtopen","#single","#welcome","#blondegirl","#tickle","#bigsquirt","#snap","#hometogether","#smallbreasts","#sexyass","#showcum","#sneakers","#outside","#pink","#asia","#girls","#poledance","#milkyboobs","#secretary","#bigbooty","#singlemom","#freaky","#analtoys","#balls","#playful","#nomakeup","#gym","#sissification","#topless","#bisexual","#blondie","#cougar","#brackets","#hardnipples","#work","#tittyfuck","#obedient","#dress","#domi","#striptease","#smalltitties","#eyes","#moan","#hair","#rock","#feed","#littletits","#straight","#butt","#foreplay","#septum","#fullbush","#nipplepiercing","#dress","#rock","#wild","#penetration","#happy","#riding","#cougar","#brackets","#fountain","#balls","#sexylatina","#analtoys","#hornywife","#bigbreasts","#domi","#hotbody","#smallass","#dolce","#ready","#lovenselush","#hairyarmpit","#pvtshow","#hotpussy","#pvton","#busty","#funny","#bunny","#nudeinpvt","#hair","#single","#moan","#body","#spanks","#naturalgirl","#slime","#underwear","#blackhair","#fingers","#smart","#candy","#thickthighs","#butt","#spanking","#chatting","#model","#fullbush","#cutesmile","#exotic","#oilshow","#silly","#barbie","#bubblebutt","#shave","#feel","#joy","#bi","#talkative","#breasts","#lushon","#glass","#milfs","#hotmom","#uncut","#fuckass","#hetero","#double","#years","#medium","#vape","#breast","#classy","#gay","#bigdick","#curved","#facial","#bald","#sucktits","#tummy","#latino","#dominate","#sexyeyes","#messydeepthroat","#exercise","#pink","#vibe","#lovenseon","#today","#cfnm","#nakedshow","#finger","#gloves","#pinkhair","#home","#boob","#madure","#curves","#lesbians","#rubclit","#showfeet","#passwordshow","#darkprincess","#latinas","#vibe","#friend","#messydeepthroat","#pink","#lovenseon","#goals","#camcam","#flash","#singer","#feetfetish","#slender","#sweetheart","#fresh","#fatpussy","#crazy","#guitar","#relax","#shake","#teengirl","#fingerpussy","#sucknipples","default"]

if (!localStorage.getItem("tagsArray")) {
let ttagsArrayJSON = JSON.stringify(ttagsArray);

  // Save the JSON string to localStorage
  localStorage.setItem("tagsArray", ttagsArrayJSON);

}





    var linkTagValue = localStorage.getItem('linktag');
//alert(linkTagValue)
    if (linkTagValue === null || linkTagValue === undefined) {
       // alert("no")
  linkTagValue = '';
  localStorage.setItem('linktag', linkTagValue);
    }


var userscrape = []; // Declare the userscrape array globally
//localStorage.setItem('linktag', '');

function runName(value) {
  //var linkTagValue = localStorage.getItem('linktag');
    var linkTagValue = '';
  userscrape.length = 0;

  var apiUrl = "https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=ypOeP&format=json&client_ip=172.70.54.110&gender=f&tag=ebony&tour=41Ea&limit=150&offset="+value;
//alert (apiUrl)
  if (linkTagValue.trim() === '') {
    apiUrl += "&gender=f";
  } else {
    apiUrl += "&tag=" + linkTagValue.slice(1) + "&gender=f";
  }

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(result => {
        userscrape.push(result.username);
      });
    })
    .catch(error => console.error(error));
}





//runName2("ebony")
runName(window.pend)




GM_addStyle (GM_getResourceText("vjCSS"));
GM_addStyle (GM_getResourceText("jqCSS"));
GM_addStyle (GM_getResourceText("cbCSS"));

const globals = {};
var favcams = ["lori_juce", "blackgurlkitty", "nanafey", "monkeylina", "emilyjoneschat", "jennifer_luvv","crown_of_vice01", "lolaryann", "deadbratpack", "sonjashy", "wynterheat", "oftenelle", "fire_in_the_desert", "jane_flowers", "naomixjones1", "victoria_karma"]
//fav1 = "blackgurlkitty",]
var oncams = [];

function status() { for (let i=0; i < favcams.length ; i++){
 window.request = new XMLHttpRequest();
        window.request.open('GET', 'http://192.168.8.114:6969/status/'+favcams[i], false);// `false` makes the request synchronous
    //window.request.open('GET', 'https://webrev7.onrender.com/status/'+favcams[i], false);// `false` makes the request synchronous
        window.request.send(null);
        window.feedback = window.request.responseText;
    if (window.feedback == "True" && !oncams.includes (favcams[i]) ){oncams.push(favcams[i])}{}
}
}
 window.roomArray = []; // Initialize an empty array


function get(){
 var request = new XMLHttpRequest();
//request.open('GET', 'https://webrev7.onrender.com/users', false); // `false` makes the request synchronous
    request.open('GET', 'http://192.168.8.114:6969/users', false); // `false` makes the request synchronous
request.send(null);
 window.geek = request.responseText;}


//favcams = [];
// localStorage.removeItem("myFav");

//localStorage.setItem("myFav", favcams)

var myFav = localStorage.getItem("myFav");

//alert(myFav)

if (myFav === null || myFav === undefined || myFav === favcams) {
   // alert("backup")
 // localStorage.setItem("myFav", favcams);
  //  alert (myFav)

      GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://localhost:3000/getmodels',
    onload: function(response) {
      if (response.status === 200) {
          console.log(response.responseText)
        const modelsArray = JSON.parse(response.responseText);
        console.log('Received models:' + modelsArray);
           localStorage.setItem("myFav", modelsArray);
        // Handle the received models here
      } else {
        console.error('Error:', response.status, response.statusText);
          localStorage.setItem("myFav", favcams)
      }
    },
    onerror: function(error) {
      console.error('Error:', error);
        localStorage.setItem("myFav", favcams)

    }
  });

}

 const serverUrl = 'http://localhost:3000';

// Function to retrieve models from the server



   let favMod = localStorage.getItem("myFav");
var favArr = favMod.split(",");

window.newArray = [];

    'use strict';

function sendsql(){
    let favMod = localStorage.getItem("myFav");
var favArr = favMod.split(",");
    if (favArr.length > 1){
 const textToSend = 'Hello, Server!'; // Replace with the text you want to send

    // Create a data object to send as JSON
    const data = {
        text: favArr
    };

    // Send a POST request to the server
    GM_xmlhttpRequest({
        method: 'POST',
        url: `${serverUrl}/print`,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        onload: function(response) {
            if (response.status === 200) {
                console.log('Response from server:', response.responseText);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        },
        onerror: function(error) {
            console.error('Error:', error);
        }
    });
    }
}

/*
    // Replace with your server URL
    // Replace with your server URL

    */

//window.ledate = setInterval(function(){alert(oncams)},5000)

/*
window.onload = function(){ for (let i=0; i < favcams.length ; i++){
 window.request = new XMLHttpRequest();
        window.request.open('GET', 'http://192.168.8.114:6969/status/'+favcams[i], false);// `false` makes the request synchronous
        window.request.send(null);
        window.feedback = window.request.responseText;
if (window.feedback == "True"){
var w = window.open('','','width=500,height=100,position = absolute, top = 200%, left = 100%, background-color = red')
w.document.write(favcams[i] +" is online")
w.focus()
setTimeout(function() {w.close();}, 5000)} else{}
}
}*/




function generalStuff() {
  globals.http = new XMLHttpRequest()

  let terms = document.querySelector('#close_entrance_terms')
  if (terms) terms.click() // just accept terms

  addTabs()
  cleanPage()

  globals.camsPath = '/cams-cbplus/'
  globals.blackPath = '/cams-blacklist/'
  globals.toursPath = '/tours/3/'
    globals.fakePath = '/watch/'
  globals.path = document.location.pathname

  if (globals.path == globals.camsPath) camsSite()
  else if (globals.path == globals.blackPath) blackSite()
    else if (globals.path == globals.fakePath) fakeSite()
  else if (globals.path == globals.toursPath) toursPage()
}


function fakeSite(){camsSite()}


    function updateRoomArray() {

// window.newArray = window.roomArray;
       //  console.log (window.roomArray);
 localStorage.setItem('roomArray', JSON.stringify(window.roomArray));
        return window.roomArray;


}


function getArrayFromLocalStorage() {
  var storedArray = localStorage.getItem('roomArray');
  if (storedArray) {
    return JSON.parse(storedArray);
  }
  return [];
}



function camsSite() {

   var textField = document.createElement('input');
textField.type = 'text';
textField.style.position = 'fixed';
textField.style.bottom = '20px';
textField.style.left = '20px';
textField.style.zIndex = '9999';
textField.style.width = '1200px';
textField.style.height = '20px';
textField.style.fontSize = '12px';
textField.style.fontFamily = 'monospace';
textField.style.backgroundColor = 'black';
textField.style.color = 'white';
textField.style.border = 'none';
textField.style.outline = 'none';
textField.value = '> ';




var textField2 = document.createElement('input');
textField2.type = 'text';
textField2.value = '';
textField2.style.display = 'block';
textField2.style.margin = '20px';


textField2.style.position = 'fixed';
textField2.style.bottom = '2px';
textField2.style.left = '120px';
textField2.style.zIndex = '9999';
textField2.style.width = '1200px';
textField2.style.height = '20px';
textField2.style.fontSize = '12px';
textField2.style.fontFamily = 'monospace';
textField2.style.backgroundColor = 'transparent';
textField2.style.color = 'white';
textField2.style.border = 'none';
textField2.style.outline = 'none';
textField2.style.display = 'none';
textField2.readOnly = true;



var tagSample = ["#18","#19","#asian","#bigboobs","#ebony","#mature","#latina","#milf","#hairy","#anal","#new","#squirt","#bbw","#milk","#smalltits","#teen","#skinny","#pantyhose","#feet","#bigass","#fuckmachine","#pregnant","#german","#deepthroat","#young","#mistress","#shy","#redhead","#french","#smoke","#british","#curvy","#bigpussylips","#cc","#indian","#ahegao","#natural","#pinay","#goth","#muscle","#cosplay","#nonude","#lovense","#bdsm","#blonde","#petite","#femdom","#heels","#daddy","#joi","#hairyarmpits","#dirty","#saliva","#latex","#bigclit","#puffynipples","#slave","#bigtits","#mommy","#sph","#lesbian","#submissive","#hairypussy","#stockings","#atm","#cute","#bignipples","#fit","#tattoo","#strapon","#ukraine","#cei","#findom","#chubby","#cuckold","#braces","#daddysgirl","#cum","#bush","#office","#dirtytalk","#italian","#anime","#slut","#humiliation","#flexible","#nasty","#dutch","#sissy","#blowjob","#leggings","#piercing","#footjob","#glasses","#arab","#pawg","#gaming","#tease","#spit","#twerk","#bbc","#dance","#longhair","#aussie","#shorthair","#fitness","#tall","#socks","#fetish","#pussy","#ass","#nonnude","#lush","#pvt","#bigpussy","#schoolgirl","#legs","#gamer","#colombia","#party","#turkish","#roleplay","#balloons","#slim","#russian","#cameltoe","#brunette","#student","#chastity","#hentai","#dildo","#leather","#kinky","#leagueoflegends","#horny","#messy","#goddess","#tomboy","#domi","#nylon","#wifematerial","#panties","#boots","#footfetish","#tiny","#armpits","#korean","#japanese","#valorant","#ssbbw","#creamy","#smoking","#naked","#smallboobs","#erotic","#asmr","#domination","#tattoos","#muscles","#abs","#pegging","#sexy","#shaved","#belly","#redhair","#dp","#bondage","#amputee","#creampie","#boobs","#athletic","#couple","#bigbelly","#longlegs","#piercings","#jeans","#bigcock","#tits","#wet","#sloppy","#bigdildo","#ginger","#porn","#cumshow","#sensual","#private","#ohmibod","#lingerie","#hugeboobs","#oil","#small","#nora","#asshole","#latin","#thick","#chat","#curly","#girlnextdoor","#dominatrix","#orgasm","#yoga","#yoga","#germany","#femboy","#bigtoys","#interactivetoy","#control","#love","#strip","#smoker","#black","#fat","#bigtoy","#masturbation","#college","#naughty","#dominant","#fuck","#naturaltits","#whore","#longtongue","#biglips","#english","#pornstar","#little","#tights","#naturalboobs","#masturbate","#hush","#master","#nipples","#colombiana","#american","#twink","#lovensecontrol","#toes","#talk","#soles","#edging","#pierced","#france","#canadian","#beauty","#nolush","#fingering","#dildoplay","#assplay","#makemecum","#chill","#tipgoal","#innocent","#mixed","#ink","#sub","#dom","#booty","#girl","#big","#bigboob","#recommended","#sex","#babe","#smile","#trimmed","#toys","#cutie","#seductive","#naturalgirls","#newgirl","#bigbutt","#thin","#bignaturalboobs","#tanlines","#flirt","#twerking","#blond","#nature","#show","#pierce","#beautiful","#pussyplay","#ride","#vacuum","#hot","#fingerass","#ridedildo","#play","#sexmachine","#creamypussy","#cowgirl","#colorhair","#teens","#me","#cream","#sweet","#nude","#splits","#wetpussy","#feets","#roll","#plug","#plug","#sport","#toy","#niceass","#voyeur","#foot","#spank","#talkdirty","#lushcontrol","#blueeyes","#brat","#pinkpussy","#password","#passion","#bj","#doggy","#african","#rust","#longnails","#blue","#wheel","#smiling","##","#creamycum","#sexyboobs","#sexygirl","#cuckolding","#latins","#hugetits","#skirt","#rollthedice","#curve","#newmodel","#hotgirl","#interactive","#privateshow","#sexytits","#nice","#girlfriendmaterial","#amateur","#fucking","#swimmingpool","#goodvibes","#rimworld","#emo","#showboobs","#phatass","#pvtopen","#single","#welcome","#blondegirl","#tickle","#bigsquirt","#snap","#hometogether","#smallbreasts","#sexyass","#showcum","#sneakers","#outside","#pink","#asia","#girls","#poledance","#milkyboobs","#secretary","#bigbooty","#singlemom","#freaky","#analtoys","#balls","#playful","#nomakeup","#gym","#sissification","#topless","#bisexual","#blondie","#cougar","#brackets","#hardnipples","#work","#tittyfuck","#obedient","#dress","#domi","#striptease","#smalltitties","#eyes","#moan","#hair","#rock","#feed","#littletits","#straight","#butt","#foreplay","#septum","#fullbush","#nipplepiercing","#dress","#rock","#wild","#penetration","#happy","#riding","#cougar","#brackets","#fountain","#balls","#sexylatina","#analtoys","#hornywife","#bigbreasts","#domi","#hotbody","#smallass","#dolce","#ready","#lovenselush","#hairyarmpit","#pvtshow","#hotpussy","#pvton","#busty","#funny","#bunny","#nudeinpvt","#hair","#single","#moan","#body","#spanks","#naturalgirl","#slime","#underwear","#blackhair","#fingers","#smart","#candy","#thickthighs","#butt","#spanking","#chatting","#model","#fullbush","#cutesmile","#exotic","#oilshow","#silly","#barbie","#bubblebutt","#shave","#feel","#joy","#bi","#talkative","#breasts","#lushon","#glass","#milfs","#hotmom","#uncut","#fuckass","#hetero","#double","#years","#medium","#vape","#breast","#classy","#gay","#bigdick","#curved","#facial","#bald","#sucktits","#tummy","#latino","#dominate","#sexyeyes","#messydeepthroat","#exercise","#pink","#vibe","#lovenseon","#today","#cfnm","#nakedshow","#finger","#gloves","#pinkhair","#home","#boob","#madure","#curves","#lesbians","#rubclit","#showfeet","#passwordshow","#darkprincess","#latinas","#vibe","#friend","#messydeepthroat","#pink","#lovenseon","#goals","#camcam","#flash","#singer","#feetfetish","#slender","#sweetheart","#fresh","#fatpussy","#crazy","#guitar","#relax","#shake","#teengirl","#fingerpussy","#sucknipples"]

var tagCommands = ["-page", "-pause", "-play", "-reload", "-show tags", "-default", "-mute", "-unmute", "-vol low", "-vol high", "-vol med"];



var caretPosition = 0; // Track caret position for backspace handling

    textField2.addEventListener('click', function() {
  textField.focus();
});




textField.addEventListener('input', function(event) {
  var enteredText = textField.value.substr(2); // Exclude the "> " characters

  if (event.inputType === 'deleteContentBackward' && caretPosition <= 2) {
    // Backspace was pressed at the beginning, reset suggestions
    console.log("Backspace pressed, do not show suggestions");
    return;
  }

 /* var suggestions = tagSample.concat(tagCommands).filter(function(word) {
    return word.startsWith(enteredText);
  }); */






    var suggestions = tagSample.concat(tagCommands, userscrape).filter(function(word) {
  return word.startsWith(enteredText);
});


var randomUser = userscrape[Math.floor(Math.random() * userscrape.length)];

/*
var suggestions = tagSample.concat(getArrayFromLocalStorage()).filter(function(word) {
  return word.startsWith(enteredText);
}); */


  // Update the autocomplete suggestions
  // Replace this code with your desired functionality

    textField2.style.display = 'block';

//alert (suggestions.length + '   ' + tagSample.length)

      if (suggestions.length > tagSample.length) {
    textField2.style.display = 'none';
  } else {
    textField2.style.display = 'block';
  }
textField2.value = suggestions

   // textField2.value = suggestions.join(' ') + ' ' + randomUser;
  //console.log(suggestions);
});

textField.addEventListener('keydown', function(event) {
  caretPosition = textField.selectionStart;
  var value = textField.value;

  if (
    event.key === 'Backspace' &&
    (caretPosition === 1 || caretPosition === 2)
  ) {
    event.preventDefault();
  }

if (event.key === 'Tab' || event.key === 'ArrowRight') {
  event.preventDefault();
  if (textField2.value) {
    var firstWord = textField2.value.split(',')[0];
    var typedText = textField.value.substr(2); // Exclude the "> " characters
    textField.value = '> ' + firstWord;
      textField2.value = '';
  }
  return;
}



  if (event.key === 'Enter') {

    var enteredCode = value.substr(2);
      textField2.value = "";
    var result;

    switch (enteredCode) {
      case '-pause':
        enteredCode = "videojs('my_video').pause();";
        break;
      case '-play':
        enteredCode = "videojs('my_video').play();";
        break;
      case '-reload':
        enteredCode = "frame.contentWindow.location.reload()";
        break;
      case '-mute':
        enteredCode = "videojs('my_video').muted(true);"
        break;
      case '-unmute':
        enteredCode = "videojs('my_video').muted(false);"
        break;
      case '-vol med':
        enteredCode = "videojs('my_video').volume(0.5);"
        break;
      case '-vol low':
        enteredCode = "videojs('my_video').volume(0.25);"
        break;
      case '-vol high':
        enteredCode = "videojs('my_video').volume(1);"
        break;
      case '-show tags':
        textField.value = (tagSample);
        break;
       case '-page':
var enteredNumber = parseInt(prompt("Enter a number:"));
            if (!isNaN(enteredNumber) && enteredNumber !== 0) {
                if (enteredNumber < 0 ) {
    // Code for when enteredNumber is less than 0
    // Add your desired logic here
  }


                runName(enteredNumber*99-99);
            }
  if (linkTagValue.slice(1) === '') {
    frame.src = 'https://chaturbate.com/tours/3/?p=1&c=200&gender=f&playerID=' + playerID + '&page=' + enteredNumber;
  } else {
    frame.src = 'https://chaturbate.com/tours/3/?p=1&c=200&gender=f&playerID=' + playerID + '&tag=' + linkTagValue.slice(1) + '&page=' + enteredNumber;
  }
         //   alert(frame.src)
            break;

      case '-default':
        linkTagValue = '';
        localStorage.setItem('linktag', linkTagValue);
            runName (0)
       // enteredCode = "location.reload();";
        frame.src = 'https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID='+playerID+'&tag=' + linkTagValue.slice(1)
        break;
      default:


        if (tagSample.includes(enteredCode)) {
          linkTagValue = enteredCode;
          localStorage.setItem('linktag', linkTagValue);
          //  runName(0)
           frame.src = 'https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID='+playerID+'&tag=' + linkTagValue.slice(1)
            textField.value = '> '



        //  enteredCode = "frame.contentWindow.location.reload()";
        }
        else{
           var enteredName = textField.value.substr(2).trim();

          //  alert(`https://chaturbate.com/${enteredName}`)


                globals.http.open('GET', `https://chaturbate.com/${enteredName}`, true)
  globals.http.setRequestHeader("Content-type","application/x-www-form-urlencoded")
  globals.http.onload = function() {


      let resp = globals.http.responseText;
   let pos1 = resp.search('https://edge');
  let pos2 = resp.search('.m3u8')+5;
  let stream = '';
  if (resp.includes('.m3u8')) { stream = resp.substring(pos1, pos2).replace(/\\u002D/g, '-') }
  else { stream = 'no data' }
     //let poster = 'https://cbjpeg.stream.highwebmedia.com/stream?room='+enteredName+'&f='+Math.random()
  const player = videojs('my_video', {});
 //  player.poster('https://cbjpeg.stream.highwebmedia.com/stream?room='+enteredName)
     player.player_.handleTechClick_ = function() {};
      document.getElementById('frm').style.width = "60px"; $('div#mainDiv').hide("slide",{direction:'right'}, 1000); $('div#mainDiv').show("slide",{direction:'left'}, 1000);
    player.ready(function() {
     //    alert(stream)
     player.src({
                src: stream,
                type: 'application/x-mpegURL'

            });
          });

  }


            setTimeout(function() {
  let poster = 'https://cbjpeg.stream.highwebmedia.com/stream?room=' + enteredName + '&f=' + Math.random();
  player.poster(poster);
}, 2000);
        }

globals.http.send()




        break;
    }




    try {
      result = eval(enteredCode);
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error);
    }

    textField.value = '> ';
  }
});




    document.body.style.backgroundColor = "black";
  const playerID = makeid(32)
  console.log("Player ID is " + playerID)
    localStorage.setItem('playerID', playerID);
  globals.chat = new BroadcastChannel(playerID)

  document.title = 'CBPlus Cams'
  let head = document.getElementById("header")

  document.body.innerHTML = "";
  document.body.style.height = '100vh'
  document.body.style.display = 'flex'
  document.body.style.flexDirection = 'column'
  document.body.appendChild(head)

  //  document.body.appendChild(textField);


//document.body.appendChild(textField2);



    window.addEventListener('DOMContentLoaded', function() {
  textField.focus();
});




  const body_main = document.createElement('div')
  body_main.style.display = 'flex'
  body_main.style.flexDirection = 'row'
  body_main.style.flex = '1'

  const main = document.createElement('div')
  main.setAttribute("id", "mainDiv")
  main.style.boxSizing = 'border-box'
  main.style.flex = '1'
  main.style.display = 'grid'
  main.className = 'oneCam'
  main.appendChild(camDiv())

//  main.appenChild(textField)

  let rightMenu = document.createElement("div")
  rightMenu.setAttribute("id", "rightMenu")
  rightMenu.style.top = "0"
  rightMenu.style.bottom = "0"
  rightMenu.style.right = "0"
  rightMenu.style.width = "620px"
    rightMenu.style.color = "black"
  rightMenu.style.display = 'flex'
  rightMenu.style.flexDirection = 'column'
  let frame = document.createElement("iframe")
  frame.style.color = "black"
  frame.id = "frm"

//   let frameDoc = frame.contentDocument || frame.contentWindow.document;

//document.body.style.zoom = "90%";

frame.style.display = "none"; // Hide the iframe initially

frame.onload = function() {
      // alert("kk")

    const navElement = document.getElementById('nav');
const modelsLink = navElement.querySelector('#mdlink'); // Assuming you gave the link element the ID "mdlink"
window.alink = false
// Now you can click the modelsLink element
modelsLink.click();

  // When the iframe content is loaded, show the iframe
  frame.style.display = "block";
};

//initial frame src

// Set frame.src to the string value
//frame.src = String(linkTagValue);
    frame.src = 'https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID='+playerID
   // frame.src = 'https://chaturbate.com/tours/3/?p=1&c=200&gender=f&playerID='+playerID+'&tag=' + linkTagValue.slice(1)
 // frame.src = 'https://chaturbate.com/tours/3/?p=1&c=99&gender=f&tag=ebony&playerID='+playerID
  frame.style.flex = '1'
  frame.style.border = '0'
    frame.style.zIndex = "999";
    //frame.style.width = "2000px"
    frame.style.transform = 'scaleX(0.65)'
  frame.style.width = "620px"
     frame.style.marginLeft = "130px"

  let onCams = document.createElement("li");
  onCams.innerHTML = `<a style="color: pink;">        FAVS</a>`;
  onCams.style.cursor = 'pointer'
  let hideMenu = document.createElement("li");
  hideMenu.innerHTML = `<a style="color: red;">        TOGGLE PLAYER</a>`;
  hideMenu.style.cursor = 'pointer'



     let p = document.createElement('p');
p.textContent = oncams;

      let dialog = document.createElement("div")
  dialog.id = "dialog"
    dialog.appendChild(p)
    body_main.appendChild(dialog)









onCams.onclick = function () { status(); if(oncams.length >= 1){ $( function() {let mycams = oncams.toString().replaceAll(",", ",   "); p.textContent = mycams;dialog.appendChild(p);
    $( "#dialog" ).dialog();
let myString = myArray.toString().replaceAll(",", "<br>");
  } );} else{alert("all fav models are offline")}}
 hideMenu.onclick = function () {



                 var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on' || toggleElement.textContent === 'Paused') {
 toggleElement.textContent = 'Auto off';
         toggleElement.style.color = '#ff0000';
    if (intervalId) {

      clearInterval(intervalId);
     // intervalId = null;
        vidCall2()


    }
    }
  }






 // $('div#mainDiv').toggle(1000); // Hide or show the mainDiv with a sliding animation
  const frame = document.getElementById('frm'); // Get the iframe element

  // Check the current visibility state of the iframe and toggle it accordingly
  if (frame.style.display === 'none') {
      vidCall2()
    frame.style.display = 'block'; // If iframe is hidden, show it
    document.getElementById('mainDiv').style.width = '620px';
      // Enlarge the div to 620px
  } else {
    frame.style.display = 'none';
      vidCall3()
    document.getElementById('mainDiv').style.width = '2000px'; // Shrink the div to 2000px
  }
};

  document.getElementById("nav").appendChild(hideMenu);
   // document.getElementById("nav").appendChild(onCams);
document.getElementById("nav").style.zIndex = "999";
    let headd = document.querySelector("#header  > div.nav-bar")
    $('li.broadcast-yourself').hide(0);
    headd.style.backgroundColor = "black"
    headd.style.borderBottomColor = "black"
    // headd.style.borderTopWidth = "80px"


    document.body.appendChild(body_main)
  rightMenu.appendChild(frame)
  body_main.appendChild(main)
  body_main.appendChild(rightMenu)
    document.body.appendChild(body_main)


      $('div#mainDiv').draggable({
    tolerance: "pointer",
       //   delay: 1000,
           cancel: "div.vjs-control-bar",
         containment: "",
        //  axis: "y",
    revert: true,
          revertDuration: 0,
          start: function( event, ui ) {window.ay = event.clientY; window.ax = event.clientX},
           drag: function( event, ui ) { $('div.vjs-control-bar').hide(0);},
    stop: function (event, ui) {$('div.vjs-control-bar').show(0); window.by = event.clientY;  window.bx = event.clientX; window.cy = window.by-window.ay; window.cx = window.ax-window.bx; if(frame.style.width == "2000px"){document.getElementById('frm').style.width = "620px"; $('div#mainDiv').show(1000); } if(frame.style.width == "620px" && window.cy > 700){ document.getElementById('frm').style.width = "2000px"; $('div#mainDiv').hide(0);} else if(frame.style.width == "620px" && window.cx > 700){ document.getElementById('frm').style.width = "2000px"; $('div#mainDiv').hide(0);}}
  })



  globals.chat.onmessage = readMessage



videoIds.push('my_video');
videoIds.push('my_video2');
videoIds.push('my_video3');
videoIds.push('my_video4');
videoIds.push('my_video5');
videoIds.push('my_video6');

document.querySelector('div#mainDiv').style.background = 'black';
document.querySelector('div#mainDiv').innerHTML = '';

    /*let video = document.createElement("video")
    video.controls = true;
video.muted = false;
video.height = 240; // in px
video.width = 320;
  drags.appendChild(video) */
//$('div#mainDiv').hide()

}

function Dropped(event, ui) {
  let player = ui.item[0].querySelector('video')
  if (player) player.play()
}

function blackSite() {
  document.title = 'CBPlus Blacklist'
  let mainD = document.getElementById("main");
  let body = mainD.getElementsByClassName("content_body")[0];
  let ul = document.createElement("ul");


  let favMod = localStorage.getItem("myFav");
    var favArr = favMod.split(",");
     let len = favArr.length
  let keys = Object.keys(localStorage)
  for (var i=0; i<len; i++) {
    let li = document.createElement("li");
    li.innerHTML = (favArr[i]);
    li.onclick = function() {
      if (confirm('Are you sure you want to delete ' + this.innerHTML.split(",")[0] + ' from Favourites?')) {

var place = favArr.indexOf(this.innerHTML.split(",")[0])
favArr.splice(place, 1)
          localStorage.setItem("myFav", favArr);
          window.location.reload(1)
        //console.log(this.innerHTML + " is not longer on BLACKLIST");
        this.remove();
      } else {
        // Do nothing!
      }
    };
    li.style.cursor = 'pointer';
    li.onmouseover = function() {
      this.style.textDecoration = "line-through";
    };
    li.onmouseout = function() {
      this.style.textDecoration = "none";
    };
    ul.appendChild(li);
  }

  body.innerHTML = "";
  body.appendChild(ul);
}

function toursPage() {



  document.body.style.padding = '0 8px'
  addMiniButtons()
  //setTimeout(function(){ window.location.reload(1); }, 60000000);
  let playerID = document.location.search; playerID = playerID.substring(playerID.indexOf("playerID")).split("&")[0].split("=")[1]
  globals.chat = new BroadcastChannel(playerID)
}


function vidLoad(){

var vidArr = []
var vidArr2 = []
var playArr = []


const player1 = videojs('my_video', {});
const player2 = videojs('my_video2', {});
const player3 = videojs('my_video3', {});
const player4 = videojs('my_video4', {});
const player5 = videojs('my_video5', {});
const player6 = videojs('my_video6', {});

const xElement = player1.tech().el();
const xElement2= player2.tech().el();
const xElement3 = player3.tech().el();
const xElement4 = player4.tech().el();
const xElement5 = player5.tech().el();
const xElement6 = player6.tech().el();




const vidElement = document.getElementById(id);
const vidElement2 = document.getElementById(id2);
const vidElement3 = document.getElementById(id3);
const vidElement4 = document.getElementById(id4);
const vidElement5 = document.getElementById(id5);
const vidElement6 = document.getElementById(id6);

// Initialize the counter variable
let hiddenVideoCount = 0;
let visibleVideoCount = 0;

// Check each video element's style display property
if (vidElement.style.display === "none") {
  hiddenVideoCount++;
     vidElement.dataset.prop = 1;
    vidArr2.push(vidElement);
}
else if (vidElement.style.display === "block") {
    vidElement.dataset.prop = 1;
  vidArr.push(xElement);
    playArr.push(player1);
     visibleVideoCount++;
}

if (vidElement2.style.display === "none") {
  hiddenVideoCount++;
     vidElement2.dataset.prop = 2;
    vidArr2.push(vidElement2);
}
    else if (vidElement2.style.display === "block") {
        vidElement2.dataset.prop = 2;
  vidArr.push(xElement2);
        playArr.push(player2);
         visibleVideoCount++;
}

if (vidElement3.style.display === "none") {
  hiddenVideoCount++;
     vidElement3.dataset.prop = 3;
    vidArr2.push(vidElement3);
}
    else if (vidElement3.style.display === "block") {
        vidElement3.dataset.prop = 3;
  vidArr.push(xElement3);
        playArr.push(player3);
         visibleVideoCount++;
}

if (vidElement4.style.display === "none") {
  hiddenVideoCount++;
     vidElement4.dataset.prop = 4;
    vidArr2.push(vidElement4);
}
else if (vidElement4.style.display === "block") {
    vidElement4.dataset.prop = 4;
  vidArr.push(xElement4);
    playArr.push(player4);
     visibleVideoCount++;
}

if (vidElement5.style.display === "none") {
  hiddenVideoCount++;
     vidElement5.dataset.prop = 5;
    vidArr2.push(vidElement5);
}
else if (vidElement5.style.display === "block") {
    vidElement5.dataset.prop = 5;
  vidArr.push(xElement5);
    playArr.push(player5);
     visibleVideoCount++;
}

if (vidElement6.style.display === "none") {
  hiddenVideoCount++;
     vidElement6.dataset.prop = 6;
    vidArr2.push(vidElement6);
}
else if (vidElement6.style.display === "block") {
    vidElement6.dataset.prop = 6;
  vidArr.push(xElement6);
    playArr.push(player6);
     visibleVideoCount++;
}

return { vidArr, playArr, vidArr2 };


}

function vidCall2(cval2){

const frame = document.getElementById('frm');
 if (frame.style.display === 'none') {

    frame.style.display = 'block';
    document.getElementById('mainDiv').style.width = '620px';
 }

  var vidArr5;
//alert(cval2)





var cval = cval2

//alert(cval)
if (cval == 1){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

// Loop through all elements with the class 'topx' inside the <div> with id 'mainDiv'
for (let i = 0; i < toppElements.length; i++) {
   if( i == 0){ toppElements[i].style.left = '48%'}
    else{
  toppElements[i].style.left = '48%';}
}
}}
if (cval == 2){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

// Loop through all elements with the class 'topx' inside the <div> with id 'mainDiv'
for (let i = 0; i < toppElements.length; i++) {
   if( i == 0){ toppElements[i].style.left = '48%'}
    else{
  toppElements[i].style.left = '40%';}
}
 //   toppp.remove()

   // vidArr5[0].appendChild(topp)
  }
}
if (cval == 3){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

// Loop through all elements with the class 'topx' inside the <div> with id 'mainDiv'
for (let i = 0; i < toppElements.length; i++) {
   if( i == 0){ toppElements[i].style.left = '40%'}
    else{
  toppElements[i].style.left = '40%';}
}
  }
}
if (cval == 4){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

// Loop through all elements with the class 'topx' inside the <div> with id 'mainDiv'
toppElements.forEach((element) => {
  element.style.left = '40%';
});

  }
}

    if (cval == 5){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');


toppElements.forEach((element) => {
    if (element.style.left == '48%'){
    }
    else{
  element.style.left = '35%';
    }
});
  }
}

if (cval == 6){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

toppElements.forEach((element) => {
  element.style.left = '35%';
});
  }
}



var { vidArr: vidArr2, playArr: playArr2, vidArr2: vidArr3 } = vidLoad();
    switch (vidArr3.length) {
    case 5:
         //   alert("case 3 "+vidArr3[0].dataset.prop)
            vidArr2[0].style.height = '100%';
    vidArr2[0].style.width = '80%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'

            playArr2[0].el().style.top = '50%';
           // playArr2[0].el().style.left = '-10%';
           playArr2[0].el().style.width = '80%';

            playArr2[0].controlBar.el().style.display = 'none';



      break;
    case 4:
//alert("case 2 "+vidArr3[0].dataset.prop)
              vidArr2[0].style.height = '50%';
    vidArr2[0].style.width = '80%';
             vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            playArr2[0].el().style.top = '0%';
           playArr2[0].el().style.width = '80%';
            playArr2[0].el().style.left = '0%';


            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '80%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%';
             playArr2[1].el().style.width = '80%';
            playArr2[1].controlBar.el().style.display = 'none';


      break;
    case 3:

     vidArr2[0].style.height = '50%';
    vidArr2[0].style.width = '80%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
             playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '80%';

            playArr2[0].controlBar.el().style.display = 'none';


            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '40%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '40%';
playArr2[1].controlBar.el().style.display = 'none';

            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '40%'
            vidArr2[2].style.top = '50%'
            vidArr2[2].style.left = '40%'
            playArr2[2].el().style.top = '50%';
            playArr2[2].el().style.left = '40%'
            playArr2[2].el().style.width = '40%';
            playArr2[2].controlBar.el().style.display = 'none';





      break;
 case 2:

    vidArr2[0].style.width = '40%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            vidArr2[0].style.width = '40%'
            vidArr2[0].style.height = '50%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '40%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '40%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '40%';
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '40%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '40%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '40%'
            playArr2[2].el().style.width = '40%';
            playArr2[2].controlBar.el().style.display = 'none';


                    vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '40%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '40%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '40%'
            playArr2[3].el().style.width = '40%';
            playArr2[3].controlBar.el().style.display = 'none';




      break;

case 1:

    vidArr2[0].style.width = '40%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            vidArr2[0].style.width = '40%'
            vidArr2[0].style.height = '50%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '40%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '26.6%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '26.6%';
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '40%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '40%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '40%'
            playArr2[2].el().style.width = '40%';
            playArr2[2].controlBar.el().style.display = 'none';


                    vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '26.6%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '26.6%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '26.6%'
            playArr2[3].el().style.width = '26.6%';
            playArr2[3].controlBar.el().style.display = 'none';

                    vidArr2[4].style.height = '50%';
    vidArr2[4].style.width = '26.6%'
            vidArr2[4].style.top = '50%'
            vidArr2[4].style.left = '53.2%'
             playArr2[4].el().style.top = '50%';
            playArr2[4].el().style.left = '53.2%'
            playArr2[4].el().style.width = '26.6%';
            playArr2[4].controlBar.el().style.display = 'none';




      break;





    case 0:
            vidArr2[0].style.width = '26.6%';
            vidArr2[0].style.height = '50%'
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '26.6%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '26.6%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '26.6%';
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '26.6%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '26.6%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '26.6%'
            playArr2[2].el().style.width = '26.6%';
playArr2[2].controlBar.el().style.display = 'none';
                    vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '26.6%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '26.6%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '26.6%'
            playArr2[3].el().style.width = '26.6%';
            playArr2[3].controlBar.el().style.display = 'none';

                    vidArr2[4].style.height = '50%';
    vidArr2[4].style.width = '26.6%'
            vidArr2[4].style.top = '50%'
            vidArr2[4].style.left = '53.2%'
             playArr2[4].el().style.top = '50%';
            playArr2[4].el().style.left = '53.2%'
            playArr2[4].el().style.width = '26.6%';
            playArr2[4].controlBar.el().style.display = 'none';

vidArr2[5].style.height = '50%';
    vidArr2[5].style.width = '26.6%'
            vidArr2[5].style.top = '0%'
            vidArr2[5].style.left = '53.2%'
             playArr2[5].el().style.top = '0%';
            playArr2[5].el().style.left = '53.2%'
            playArr2[5].el().style.width = '26.6%';
            playArr2[5].controlBar.el().style.display = 'none';


      break;
    default:

      break;
  }



}


function vidCall3(){

    const vidElement = document.getElementById(id);
    const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

     vidElement.style.zIndex = '100';
    vidElement2.style.zIndex = '100';
vidElement3.style.zIndex = '100';
vidElement4.style.zIndex = '100';
vidElement5.style.zIndex = '100';
vidElement6.style.zIndex = '100';





    const frame = document.getElementById('frm');
      if (frame.style.display === 'block') {
frame.style.display = 'none';
    document.getElementById('mainDiv').style.width = '2000px';
      }
var { vidArr: vidArr2, playArr: playArr2, vidArr2: vidArr3 } = vidLoad();

  //  vidArr2[1].style.display = "block";

    switch (vidArr3.length) {
    case 5:
         //   alert("case 3 "+vidArr3[0].dataset.prop)
            vidArr2[0].style.height = '100%';
    vidArr2[0].style.width = '100%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'

            playArr2[0].el().style.top = '25%';
           // playArr2[0].el().style.left = '-10%';
           playArr2[0].el().style.width = '80%';

            playArr2[0].controlBar.el().style.display = 'none';



      break;
    case 4:
//alert("case 2 "+vidArr3[0].dataset.prop)
              vidArr2[0].style.height = '50%';
    vidArr2[0].style.width = '100%';
             vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            playArr2[0].el().style.top = '0%';
           playArr2[0].el().style.width = '80%';
            playArr2[0].el().style.left = '0%';


            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '100%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%';
             playArr2[1].el().style.width = '80%';
            playArr2[1].controlBar.el().style.display = 'none';


      break;
    case 3:

     vidArr2[0].style.height = '50%';
    vidArr2[0].style.width = '100%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
             playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '100%';

            playArr2[0].controlBar.el().style.display = 'none';


            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '60%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '50%';
playArr2[1].controlBar.el().style.display = 'none';

            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '60%'
            vidArr2[2].style.top = '50%'
            vidArr2[2].style.left = '50%'
            playArr2[2].el().style.top = '50%';
            playArr2[2].el().style.left = '50%'
            playArr2[2].el().style.width = '50%';
            playArr2[2].controlBar.el().style.display = 'none';





      break;
 case 2:


            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            vidArr2[0].style.width = '60%'
            vidArr2[0].style.height = '50%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '50%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '60%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '50%';
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '60%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '50%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '50%'
            playArr2[2].el().style.width = '50%';
            playArr2[2].controlBar.el().style.display = 'none';


                    vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '60%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '50%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '50%'
            playArr2[3].el().style.width = '50%';
            playArr2[3].controlBar.el().style.display = 'none';




      break;

case 1:


            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            vidArr2[0].style.width = '60%'
            vidArr2[0].style.height = '50%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '50%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '33.3%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '33.3%';
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '60%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '50%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '50%'
            playArr2[2].el().style.width = '50%';
            playArr2[2].controlBar.el().style.display = 'none';


                   vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '33.3%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '33.3%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '33.3%'
            playArr2[3].el().style.width = '33.3%';
            playArr2[3].controlBar.el().style.display = 'none';


                    vidArr2[4].style.height = '50%';
    vidArr2[4].style.width = '33.3%'
            vidArr2[4].style.top = '50%'
            vidArr2[4].style.left = '66.6%'
             playArr2[4].el().style.top = '50%';
            playArr2[4].el().style.left = '66.6%'
            playArr2[4].el().style.width = '33.3%';
            playArr2[4].controlBar.el().style.display = 'none';




      break;





    case 0:
            vidArr2[0].style.width = '33.3%';
            vidArr2[0].style.height = '50%'
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '33.3%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '33.3%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '33.3%'
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '33.3%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '33.3%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '33.3%'
            playArr2[2].el().style.width = '33.3%'
playArr2[2].controlBar.el().style.display = 'none';

                    vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '33.3%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '33.3%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '33.3%'
            playArr2[3].el().style.width = '33.3%'
            playArr2[3].controlBar.el().style.display = 'none';

                    vidArr2[4].style.height = '50%';
    vidArr2[4].style.width = '33.3%'
            vidArr2[4].style.top = '50%'
            vidArr2[4].style.left = '66.6%'
             playArr2[4].el().style.top = '50%';
            playArr2[4].el().style.left = '66.6%'
            playArr2[4].el().style.width = '33.3%';
            playArr2[4].controlBar.el().style.display = 'none';

vidArr2[5].style.height = '50%';
    vidArr2[5].style.width = '33.3%'
            vidArr2[5].style.top = '0%'
            vidArr2[5].style.left = '66.6%'
             playArr2[5].el().style.top = '0%';
            playArr2[5].el().style.left = '66.6%'
            playArr2[5].el().style.width = '33.3%'
            playArr2[5].controlBar.el().style.display = 'none';


      break;
    default:

      break;
  }


}
















function vidCall(cval2){
    const frame = document.getElementById('frm');
 if (frame.style.display === 'none') {

    frame.style.display = 'block';
    document.getElementById('mainDiv').style.width = '620px';
 }
const player1 = videojs('my_video', {});
var redx = player1.controlBar.el()



var vidArr5;
//alert(cval2)





var cval = cval2

if (cval == 1){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

// Loop through all elements with the class 'topx' inside the <div> with id 'mainDiv'
for (let i = 0; i < toppElements.length; i++) {
   if( i == 0){ toppElements[i].style.left = '48%'}
    else{
  toppElements[i].style.left = '48%';}
}
 //   toppp.remove()

   // vidArr5[0].appendChild(topp)
  }
}



if (cval == 2){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

// Loop through all elements with the class 'topx' inside the <div> with id 'mainDiv'
for (let i = 0; i < toppElements.length; i++) {
   if( i == 0){ toppElements[i].style.left = '48%'}
    else{
  toppElements[i].style.left = '48%';}
}
 //   toppp.remove()

   // vidArr5[0].appendChild(topp)
  }
}
if (cval == 3){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

// Loop through all elements with the class 'topx' inside the <div> with id 'mainDiv'
for (let i = 0; i < toppElements.length; i++) {
   if( i == 0){ toppElements[i].style.left = '48%'}
    else{
  toppElements[i].style.left = '40%';}
}
  }
}
if (cval == 4){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

// Loop through all elements with the class 'topx' inside the <div> with id 'mainDiv'
toppElements.forEach((element) => {
  element.style.left = '40%';
});

  }
}

    if (cval == 5){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');


toppElements.forEach((element) => {
    if (element.style.left == '48%'){
    }
    else{
  element.style.left = '35%';
    }
});
  }
}

if (cval == 6){
    const result = vidLoad();
vidArr5 = result.vidArr;
    let toppp = document.querySelectorAll('div#mainDiv div.topx');

if (toppp) {
    const toppElements = document.querySelectorAll('div#mainDiv div.topx');

toppElements.forEach((element) => {
  element.style.left = '35%';
});
  }
}




var { vidArr: vidArr2, playArr: playArr2, vidArr2: vidArr3 } = vidLoad();
    switch (vidArr3.length) {
    case 5:
         //   alert("case 3 "+vidArr3[0].dataset.prop)
            vidArr2[0].style.height = '100%';
    vidArr2[0].style.width = '80%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'

            playArr2[0].el().style.top = '50%';
           // playArr2[0].el().style.left = '-10%';
           playArr2[0].el().style.width = '80%';

            playArr2[0].controlBar.el().style.display = 'none';



      break;
    case 4:
//alert("case 2 "+vidArr3[0].dataset.prop)
              vidArr2[0].style.height = '50%';
    vidArr2[0].style.width = '80%';
             vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            playArr2[0].el().style.top = '0%';
           playArr2[0].el().style.width = '80%';
            playArr2[0].el().style.left = '0%';


            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '80%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%';
             playArr2[1].el().style.width = '80%';
            playArr2[1].controlBar.el().style.display = 'none';


      break;
    case 3:

     vidArr2[0].style.height = '50%';
    vidArr2[0].style.width = '80%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
             playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '80%';

            playArr2[0].controlBar.el().style.display = 'none';


            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '40%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '40%';
playArr2[1].controlBar.el().style.display = 'none';

            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '40%'
            vidArr2[2].style.top = '50%'
            vidArr2[2].style.left = '40%'
            playArr2[2].el().style.top = '50%';
            playArr2[2].el().style.left = '40%'
            playArr2[2].el().style.width = '40%';
            playArr2[2].controlBar.el().style.display = 'none';





      break;
 case 2:

    vidArr2[0].style.width = '40%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            vidArr2[0].style.width = '40%'
            vidArr2[0].style.height = '50%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '40%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '40%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '40%';
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '40%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '40%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '40%'
            playArr2[2].el().style.width = '40%';
            playArr2[2].controlBar.el().style.display = 'none';


                    vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '40%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '40%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '40%'
            playArr2[3].el().style.width = '40%';
            playArr2[3].controlBar.el().style.display = 'none';




      break;

case 1:

    vidArr2[0].style.width = '40%';
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            vidArr2[0].style.width = '40%'
            vidArr2[0].style.height = '50%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '40%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '26.6%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '26.6%';
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '40%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '40%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '40%'
            playArr2[2].el().style.width = '40%';
            playArr2[2].controlBar.el().style.display = 'none';


                    vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '26.6%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '26.6%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '26.6%'
            playArr2[3].el().style.width = '26.6%';
            playArr2[3].controlBar.el().style.display = 'none';

                    vidArr2[4].style.height = '50%';
    vidArr2[4].style.width = '26.6%'
            vidArr2[4].style.top = '50%'
            vidArr2[4].style.left = '53.2%'
             playArr2[4].el().style.top = '50%';
            playArr2[4].el().style.left = '53.2%'
            playArr2[4].el().style.width = '26.6%';
            playArr2[4].controlBar.el().style.display = 'none';




      break;





    case 0:
            vidArr2[0].style.width = '26.6%';
            vidArr2[0].style.height = '50%'
            vidArr2[0].style.top = '0%'
            vidArr2[0].style.left = '0%'
            playArr2[0].el().style.top = '0%';
             playArr2[0].el().style.width = '26.6%';

            playArr2[0].controlBar.el().style.display = 'none';

            vidArr2[1].style.height = '50%';
    vidArr2[1].style.width = '26.6%'
            vidArr2[1].style.top = '50%'
            vidArr2[1].style.left = '0%'
            playArr2[1].el().style.top = '50%';
            playArr2[1].el().style.left = '0%'
            playArr2[1].el().style.width = '26.6%';
            playArr2[1].controlBar.el().style.display = 'none';


            vidArr2[2].style.height = '50%';
    vidArr2[2].style.width = '26.6%'
            vidArr2[2].style.top = '0%'
            vidArr2[2].style.left = '26.6%'
             playArr2[2].el().style.top = '0%';
            playArr2[2].el().style.left = '26.6%'
            playArr2[2].el().style.width = '26.6%';
playArr2[2].controlBar.el().style.display = 'none';
                    vidArr2[3].style.height = '50%';
    vidArr2[3].style.width = '26.6%'
            vidArr2[3].style.top = '50%'
            vidArr2[3].style.left = '26.6%'
             playArr2[3].el().style.top = '50%';
            playArr2[3].el().style.left = '26.6%'
            playArr2[3].el().style.width = '26.6%';
            playArr2[3].controlBar.el().style.display = 'none';

                    vidArr2[4].style.height = '50%';
    vidArr2[4].style.width = '26.6%'
            vidArr2[4].style.top = '50%'
            vidArr2[4].style.left = '53.2%'
             playArr2[4].el().style.top = '50%';
            playArr2[4].el().style.left = '53.2%'
            playArr2[4].el().style.width = '26.6%';
            playArr2[4].controlBar.el().style.display = 'none';

vidArr2[5].style.height = '50%';
    vidArr2[5].style.width = '26.6%'
            vidArr2[5].style.top = '0%'
            vidArr2[5].style.left = '53.2%'
             playArr2[5].el().style.top = '0%';
            playArr2[5].el().style.left = '53.2%'
            playArr2[5].el().style.width = '26.6%';
            playArr2[5].controlBar.el().style.display = 'none';


      break;
    default:

      break;
  }


}


function backsave() {
  // Delete existing "model" cookies
  for (var i = 1; i <= 6; i++) {
    var modelName = "model" + i;
    document.cookie = modelName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  // Get the new values
  var model2 = document.getElementById("oldcase").innerHTML;
  var model1 = document.getElementById("newcase").innerHTML;
  var model4 = document.getElementById("freecase").innerHTML;
  var model5 = document.getElementById("lockcase").innerHTML;
  var model6 = document.getElementById("downcase").innerHTML;
  var model3 = document.getElementById("upcase").innerHTML;

  var models = [];

  if (model1.trim() !== "") {
    models.push(model1);
  }
  if (model2.trim() !== "") {
    models.push(model2);
  }
  if (model3.trim() !== "") {
    models.push(model3);
  }
  if (model4.trim() !== "") {
    models.push(model4);
  }
  if (model5.trim() !== "") {
    models.push(model5);
  }
  if (model6.trim() !== "") {
    models.push(model6);
  }

  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 60000);
  var expires = "expires=" + expirationDate.toUTCString();

  // Add the new values as cookies
  for ( i = 0; i < models.length; i++) {
     modelName = "model" + (i + 1);
    document.cookie = modelName + "=" + encodeURIComponent(models[i]) + ";" + expires + ";path=/";
  }
}




function addCam(resp, div, model) {
    var model1
    var model2
    var model3
    var model4
    var model5
    var model6

var { vidArr: vidArr2, playArr: playArr2, vidArr2: vidArr3 } = vidLoad();
  let pos1 = resp.search('https://edge');
  let pos2 = resp.search('.m3u8')+5;
  window.stream = '';
  if (resp.includes('.m3u8')) { window.stream = resp.substring(pos1, pos2).replace(/\\u002D/g, '-') }
  else { window.stream = 'no data' };

     if (vidArr3.length == 0){

//backsave()
         window.location.reload();
         return
     }

    if (vidArr3.length >= 0){



vidPlay(model, vidArr3, playArr2, vidArr2)
    }

}





















function vidPlay(model, elem, elem2, vidArr2){



var cval;
var vidArrx;
window.fullscreen = false
var player;
var xElement;
var label;
var theme;
var vidArr5 = vidArr2
var vidArr4 = elem
var playArr2 = elem2
//const cval = vidArr4[0].dataset.prop;
//alert(vidArr4[0].dataset.prop)
//alert("two")
if (vidArr4[0] && vidArr4[0].dataset && vidArr4[0].dataset.prop) {
     cval = vidArr4[0].dataset.prop;
    vidArr4[0].dataset.drop = String(model);
}
    else{cval = 1

        }



 const vidElement = document.getElementById(id);
    const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

 var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
vidElement.style.display = "none";
        vidElement2.style.display = "none";
        vidElement3.style.display = "none";
        vidElement4.style.display = "none";
        vidElement5.style.display = "none";
        vidElement6.style.display = "none";
//alert("right")
document.getElementById("oldcase").innerHTML = "";
    document.getElementById("newcase").innerHTML = "";
    document.getElementById("freecase").innerHTML = "";
    document.getElementById("lockcase").innerHTML = "";
   document.getElementById("downcase").innerHTML = "";
        document.getElementById("upcase").innerHTML = "";
    }
  }


const xButton = document.createElement('button');
xButton.innerHTML = ''
if (xButton.innerHTML === '') {
    xButton.innerHTML = '❌';
}
//xButton.innerHTML = '✖';
//xButton.style.transform = 'translate(-50%, -50%) scale(1.5)';
//xButton.style.position = 'absolute';
//xButton.style.top = '50%';
//xButton.style.left = '45%';
xButton.style.display = 'inline-block';
xButton.style.fontSize = '16px';
xButton.style.backgroundColor = 'transparent';
xButton.style.border = 'none';
xButton.style.cursor = 'pointer';
//xButton.style.paddingLeft = '20px';
//xButton.style.paddingBottom = '20px';
//xButton.style.paddingTop = '20px';
//xButton.style.paddingRight = '20px';
xButton.style.zIndex = '9999';
xButton.style.textShadow = '5px 5px 50px rgba(0, 0, 0, 0.5)';
const yButton = xButton.cloneNode(true);
yButton.innerHTML = ''
if (yButton.innerHTML === '') {
   yButton.innerHTML = '🔇';
}
yButton.style.display = 'inline-block';


const hButton = xButton.cloneNode(true);
hButton.innerHTML = ''
if (hButton.innerHTML === '') {
   hButton.innerHTML = '⏮';
}
hButton.style.display = 'inline-block';




const uButton = xButton.cloneNode(true);
uButton.innerHTML = ''
if (uButton.innerHTML === '') {
   uButton.innerHTML = '⏭️';
}
uButton.style.display = 'inline-block';
//yButton.style.left = '52.1%';
//yButton.style.paddingRight = '20px';
//yButton.style.paddingLeft = '4px';
const zButton = yButton.cloneNode(true);
//zButton.style.left = '57%';
zButton.innerHTML = ''
if (zButton.innerHTML === '') {
   zButton.innerHTML = '⭐';
}
zButton.style.display = 'inline-block';
const gButton = zButton.cloneNode(true);
//gButton.style.left = '61.5%';
gButton.innerHTML = ''
if (gButton.innerHTML === '') {
   gButton.innerHTML = '🔄'
}
gButton.style.display = 'inline-block';
const rButton = gButton.cloneNode(true);
//rButton.style.left = '66.5%';
rButton.innerHTML = ''
if (rButton.innerHTML === '') {
   rButton.innerHTML = '⬆️'
}
rButton.style.display = 'inline-block';
const pButton = xButton.cloneNode(true);
pButton.innerHTML = ''
if (pButton.innerHTML === '') {
   pButton.innerHTML = '🟢'
}
pButton.style.display = 'inline-block';
const kButton = rButton.cloneNode(true);
kButton.innerHTML = ''
if (kButton.innerHTML === '') {
   kButton.innerHTML = '📄'
}
kButton.style.display = 'inline-block';




const player1 = videojs('my_video', {});
const player2 = videojs('my_video2', {});
const player3 = videojs('my_video3', {});
const player4 = videojs('my_video4', {});
const player5 = videojs('my_video5', {});
const player6 = videojs('my_video6', {});


const xElement1 = player1.tech().el();
const xElement2= player2.tech().el();
const xElement3 = player3.tech().el();
const xElement4 = player4.tech().el();
const xElement5 = player5.tech().el();
const xElement6 = player6.tech().el();

 switch (cval) {
  case '1':
    player = videojs('my_video', {});
    xElement = player.tech().el();
     player.el().style.left = '-10%';
    label = 'newcase';
    theme = 'yellow';
         player.el().style.left = '0%';
          player.el().style.left = '0%';
        // player1.controlBar.el().appendChild(xButton);

    break;
  case '2':

    player = videojs('my_video2', {});
    xElement = player.tech().el();
    label = 'oldcase';
    theme = 'pink';
       //  player2.controlBar.el().appendChild(xButton);
    break;
  case '3':
    player = videojs('my_video3', {});
    xElement = player.tech().el();
    label = 'upcase';
    theme = '#E6E6FA';
     //    player3.controlBar.el().appendChild(xButton);
    break;
  case '4':
    player = videojs('my_video4', {});
    xElement = player.tech().el();
    label = 'freecase';
    theme = 'red';
    break;
  case '5':
    player = videojs('my_video5', {});
    xElement = player.tech().el();
    label = 'lockcase';
    theme = '#ADD8E6';
    break;
  case '6':
    player = videojs('my_video6', {});
    xElement = player.tech().el();
    label = 'downcase';
    theme = '#90EE90';
    break;
  default:

    break;
}
const originalZIndex = $(vidArr4[0]).css('z-index');
      $(vidArr4[0]).draggable({
    tolerance: "pointer",
       //   delay: 1000,
          // cancel: "div.vjs-control-bar",
         containment: "",
        //  axis: "y",
    revert: true,
          revertDuration: 0,
          start: function( event, ui ) { $(vidArr4[0]).css('z-index', '9999');
    $(xElement).css('z-index', '9999');},
           drag: function( event, ui ) {
           $(xElement).css({
      top: ui.position.top,
      left: ui.position.left
    });
           },
    stop: function (event, ui) {
         $(vidArr4[0]).css('z-index', originalZIndex);
    $(xElement).css('z-index', originalZIndex);
    document.getElementById(label).innerHTML = "";
//vidArr4[0].style.display = "none";
  //  vidCall(cval)
    }
  })


/*
vidArr4[0].onmouseover = function() {
    // Your code to run when the mouse is over the element goes here
  //  vidArr4[0].title = ("Mouse is over the element!");


    var viewCount = '';


var url = "https://chaturbate.com/push_service/room_user_count/"+model+"/?presence_id=d5jdfxmaiue";
        const referer = "https://chaturbate.com/chloewildd/";

fetch(url, {
  method: "GET",
  headers: {
    "Referer": referer,
    "X-Requested-With": "XMLHttpRequest"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
const dataObject = JSON.parse(data);
const countValue = dataObject.count;
    viewCount = countValue; // Here, 'data' contains the response from the URL
  })
  .catch(error => {
   console.log("Fetch error: ", error);
  });
 url = "https://chaturbate.com/api/biocontext/"+model+"/";
 fetch(url)
  .then((response) => {
    // Check if the response status is OK (200)
    if (response.status === 200) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Now you can access the data
    vidArr4[0].title = ("Views: "+ viewCount + "  Age: "+ data.display_age + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
    //console.log("Location: " + data.location);
  //  console.log("Real Name: " + data.real_name);
    // Add more properties as needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });






};
*/


//xElement.style.zoom = '30%'

/*

vidArr4[0].appendChild(xButton);
vidArr4[0].appendChild(yButton);
vidArr4[0].appendChild(zButton);
vidArr4[0].appendChild(gButton);
vidArr4[0].appendChild(rButton);
*/


let timer;
var iframe = document.getElementById("frm");
function setOpacityLow() {
  xElement.style.opacity = '0.1';
    iframe.style.opacity = '0.1';
}

function setOpacityHigh() {
  xElement.style.opacity = '1';
    iframe.style.opacity = '1';
}

function startTimer() {
  timer = setTimeout(setOpacityLow, 1800000);
}

document.addEventListener('mousemove', () => {
  clearTimeout(timer);
  setOpacityHigh();
  startTimer();
});

startTimer();



let topp = document.createElement('div')
let topp2 = document.createElement('div')
topp2.innerHTML = ''



 var viewCount = '';


var url = "https://chaturbate.com/push_service/room_user_count/"+model+"/?presence_id=d5jdfxmaiue";
        const referer = "https://chaturbate.com/chloewildd/";

fetch(url, {
  method: "GET",
  headers: {
    "Referer": referer,
    "X-Requested-With": "XMLHttpRequest"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
const dataObject = JSON.parse(data);
const countValue = dataObject.count;
    viewCount = countValue; // Here, 'data' contains the response from the URL
  })
  .catch(error => {
   console.log("Fetch error: ", error);
  });
 url = "https://chaturbate.com/api/biocontext/"+model+"/";
 fetch(url)
  .then((response) => {
    // Check if the response status is OK (200)
    if (response.status === 200) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Now you can access the data
  //  vidArr4[0].title = ("Views: "+ viewCount + "  Age: "+ data.display_age + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
  //   topp2.innerHTML = ("Views: "+ viewCount + "  Age: "+ data.display_age + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
      topp2.innerHTML = ("NAME: " + model.toUpperCase() + "    VIEWS: "+ viewCount + "    AGE: "+ data.display_age + "    FOLLOWERS: " + data.follower_count + "  LOCATION: " + data.location.toUpperCase().slice(0, 20));
     topp2.title = ("NAME: " + model.toUpperCase() + "    VIEWS: "+ viewCount + "    AGE: "+ data.display_age + "    FOLLOWERS: " + data.follower_count + "  LOCATION: " + data.location.toUpperCase().slice(0, 20));
    //console.log("Location: " + data.location);
  //  console.log("Real Name: " + data.real_name);
    // Add more properties as needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });












topp2.style.width = '100%';
topp2.style.backgroundColor = 'rgba(43, 51, 63, 0.7)';
topp2.style.height = '22px'
    topp2.style.paddingTop = '7px'
topp2.style.textAlign = 'center';
//topp2.style.left = '25%';
    topp2.style.textAlign = 'center';
    topp2.style.position = 'absolute';

    topp2.appendChild(hButton);


topp2.style.top = '95%'
     topp2.style.zIndex = "999";
topp.setAttribute('id', 'topx');
    topp.classList.add('topx');
const oButton = document.createElement('button');
topp.appendChild(hButton);
topp.appendChild(xButton);
topp.appendChild(yButton);
topp.appendChild(zButton);
topp.appendChild(gButton);
topp.appendChild(rButton);
topp.appendChild(pButton);
topp.appendChild(uButton);

//topp.appendChild(kButton);
topp.style.width = '320px';
topp.style.height = '22px'


topp.style.position = 'absolute';
//topp.style.backgroundColor = 'rgba(43, 51, 63, 0.7)';
topp.style.display = 'none';
topp.style.textAlign = 'center';
topp.style.left = '40%';
topp.style.top = '50%';
    topp.style.zIndex = "999";
    vidArr4[0].style.zIndex = "100";
topp.style.opacity = '0.8'

// Set the calculated top and left positions as style properties for the "topp" div

document.getElementById(label).style.marginLeft = "10px"
    document.getElementById(label).style.marginRight = "10px"
  toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
     toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {

    } else {
      vidArr4[0].appendChild(topp)
        vidArr4[0].appendChild(topp2)
    }
  }


function debounce(callback, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

function hideXButton() {
/*  xButton.style.display = 'none';
  yButton.style.display = 'none';
  zButton.style.display = 'none';
  gButton.style.display = 'none';
  rButton.style.display = 'none';*/
        document.getElementById(label).style.fontSize = "12px"
document.getElementById(label).style.marginLeft = "10px"
    document.getElementById(label).style.marginRight = "10px"
//    document.getElementById(label).style.marginBottom = "5px"
    document.getElementById(label).style.marginTop = "5px"
    topp.style.display = 'none';
}


const debouncedHideXButton = debounce(hideXButton, 2500);

vidArr4[0].addEventListener('mousemove', function () {
/*  xButton.style.display = 'block';
  yButton.style.display = 'block';
  zButton.style.display = 'block';
  gButton.style.display = 'block';
  rButton.style.display = 'block';*/
     document.getElementById(label).style.fontSize = "16px"
    document.getElementById(label).style.marginLeft = "20px"
    document.getElementById(label).style.marginRight = "20px"
    // document.getElementById(label).style.marginBottom = "55px"
   // document.getElementById(label).style.marginTop = "10px"
    topp.style.display = 'inline-block';
   // alert(document.getElementById(label).style.fontSize)

  debouncedHideXButton();

/*
    var viewCount = '';


var url = "https://chaturbate.com/push_service/room_user_count/"+model+"/?presence_id=d5jdfxmaiue";
        const referer = "https://chaturbate.com/chloewildd/";

fetch(url, {
  method: "GET",
  headers: {
    "Referer": referer,
    "X-Requested-With": "XMLHttpRequest"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
const dataObject = JSON.parse(data);
const countValue = dataObject.count;
    viewCount = countValue; // Here, 'data' contains the response from the URL
  })
  .catch(error => {
   console.log("Fetch error: ", error);
  });
 url = "https://chaturbate.com/api/biocontext/"+model+"/";
 fetch(url)
  .then((response) => {
    // Check if the response status is OK (200)
    if (response.status === 200) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Now you can access the data
    kButton.title = ("Views: "+ viewCount + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
    //console.log("Location: " + data.location);
  //  console.log("Real Name: " + data.real_name);
    // Add more properties as needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });

*/

});

vidArr4[0].addEventListener('mouseleave', function () {
/*  xButton.style.display = 'none';
  yButton.style.display = 'none';
  zButton.style.display = 'none';
  gButton.style.display = 'none';
  rButton.style.display = 'none';*/
    document.getElementById(label).style.fontSize = "12px"
    document.getElementById(label).style.marginLeft = "10px"
    document.getElementById(label).style.marginRight = "10px"
   //  document.getElementById(label).style.marginBottom = "5px"
    document.getElementById(label).style.marginTop = "5px"

    topp.style.display = 'none';

});

   // player.controlBar.el().appendChild(xButton);
vidArr4[0].style.display = "block";
xElement.style.display = "block";



    kButton.onmouseover = function() {
// Define the URL

var viewCount = '';


var url = "https://chaturbate.com/push_service/room_user_count/"+model+"/?presence_id=d5jdfxmaiue";
        const referer = "https://chaturbate.com/chloewildd/";

fetch(url, {
  method: "GET",
  headers: {
    "Referer": referer,
    "X-Requested-With": "XMLHttpRequest"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
const dataObject = JSON.parse(data);
const countValue = dataObject.count;
    viewCount = countValue; // Here, 'data' contains the response from the URL
  })
  .catch(error => {
   console.log("Fetch error: ", error);
  });
 url = "https://chaturbate.com/api/biocontext/"+model+"/";
 fetch(url)
  .then((response) => {
    // Check if the response status is OK (200)
    if (response.status === 200) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Now you can access the data
    kButton.title = ("Views: "+ viewCount + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
    //console.log("Location: " + data.location);
  //  console.log("Real Name: " + data.real_name);
    // Add more properties as needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });

    }



uButton.onclick = function() {
    topp2.innerHTML = ''
let numv = userscrape.indexOf(String(model).toLowerCase());
  // alert(numv + ' '+String(model).toLowerCase())
if (userscrape[numv]){
numv++
    if (userscrape[numv] !== undefined){
        vidArr4[0].style.display = 'none';
    readMessage(userscrape[numv]);}

}
else{
    const num = Math.floor(Math.random() * userscrape.length);
    // alert(num)
    vidArr4[0].style.display = 'none';
     readMessage(userscrape[num]);
}

}
hButton.onclick = function() {
    topp2.innerHTML = ''
let numv = userscrape.indexOf(String(model).toLowerCase());
  // alert(numv + ' '+String(model).toLowerCase())
if (userscrape[numv]){
numv--
    if (userscrape[numv] !== undefined){
        vidArr4[0].style.display = 'none';
    readMessage(userscrape[numv]);}

}
else{
    const num = Math.floor(Math.random() * userscrape.length);
   // alert(num)
    vidArr4[0].style.display = 'none';
     readMessage(userscrape[num]);
}

}



pButton.onclick = function() {
  //  backsave()
   // alert(pButton.innerHTML)
    const index = pinray.indexOf(model);

    if (pButton.innerHTML == '🔴') {
        pinray.splice(index, 1);
        pButton.innerHTML = ''
       // pButton.innerHTML = '📌'

pButton.innerHTML = '🟢';
     //   alert(pButton.innerHTML + '  1')
        return
       // pButton.left = '0px'
    }
   if (pButton.innerHTML == '🟢') {
        pinray.push(model);
        pButton.innerHTML = ''
        //pButton.innerHTML = '✨';
        pButton.innerHTML = '🔴'
       // alert(pButton.innerHTML+ '  2')

        //pButton.left = '5px'
    }
};

xButton.onclick = function() {
    const result = vidLoad();
    var vidArrx;
vidArrx = result.vidArr;

if (vidArrx.length == 1) {return}
  var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
return
  }}
document.getElementById(label).innerHTML = "";



   topp.remove();
        vidArr4[0].style.display = "none";
player.muted(true);
  vidCall2(vidArrx.length -1)


//backsave()



     const frame = document.getElementById('frm'); // Get the iframe element

  // Check the current visibility state of the iframe and toggle it accordingly
  if (frame.style.display === 'none') {
      vidCall2()
    frame.style.display = 'block'; // If iframe is hidden, show it
    document.getElementById('mainDiv').style.width = '620px';
      // Enlarge the div to 62px
  }

}

const observer = new MutationObserver((mutationsList) => {
      var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === 'style') {
      const displayValue = vidArr4[0].style.display;
      if (displayValue === 'none') {
topp.remove()
        player.muted(true); // Mute the player when the display is "none"
      } else {
        player.muted(true); // Unmute the player when the display is not "none"
      }
    }
  }
    }
  }
});
observer.observe(vidArr4[0], { attributes: true });






yButton.onclick = function () {
    if (String(model).toUpperCase() !== document.getElementById(label).innerText){return}
      var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
return
  }}
  if (player.muted()) {
    player.muted(false);
       yButton.innerHTML = '';
     yButton.innerHTML = '🔊';
  } else {
    player.muted(true);
      yButton.innerHTML = '';
    yButton.innerHTML = '🔇';
  }
};
      zButton.setAttribute('attr', window.stream);
   const geta = zButton.getAttribute('attr');
 $(vidArr4[0]).css('z-index', '100');
    $(xElement).css('z-index', '100');









rButton.onclick = function() {

  if (String(model).toUpperCase() !== document.getElementById(label).innerText){return}

    var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
return
  }}
    document.getElementById("oldcase").style.display = "none";
    document.getElementById("newcase").style.display = "none";
    document.getElementById("freecase").style.display = "none";
    document.getElementById("lockcase").style.display = "none";
    document.getElementById("downcase").style.display = "none";
    document.getElementById(label).style.display = "none";


        const frame = document.getElementById('frm');
 if (frame.style.display === 'none') {

    frame.style.display = 'block';
    document.getElementById('mainDiv').style.width = '620px';
 }

if (player.tech().el().style.height !== '100%'){
   // alert(player.tech().el().style.height)
player.tech().el().style.height = '100%';
player.tech().el().style.width = '80%';
player.tech().el().style.top = '2.5%'
player.tech().el().style.left = '0%';
player.controlBar.el().style.display = 'none';


            player.el().style.top = '25%';
            player.el().style.left = '-10%';
           player.el().style.width = '100%';

            player.controlBar.el().style.display = 'none';





    $(vidArr4[0]).css('z-index', '999');
    $(xElement).css('z-index', '999');
}
    else{
         document.getElementById(label).style.display = "block";

/*
        document.getElementById("oldcase").style.display = "block";
    document.getElementById("newcase").style.display = "block";
    document.getElementById("freecase").style.display = "block";
    document.getElementById("lockcase").style.display = "block";
    document.getElementById("downcase").style.display = "block";
*/
  switch (cval) {
    case '1':
          player.el().style.left = '0%';
          player.el().style.left = '0%';
           $(vidArr4[0]).css('z-index', '100');
    $(xElement).css('z-index', '100');
          vidCall(cval)
      break;
    case '2':
          $(vidArr4[0]).css('z-index', '100');
    $(xElement).css('z-index', '100');
           vidCall(cval)
      break;
    case '3':
          $(vidArr4[0]).css('z-index', '100');
    $(xElement).css('z-index', '100');
           vidCall(cval)
      break;
   case '4':
           $(vidArr4[0]).css('z-index', '100');
    $(xElement).css('z-index', '100');
           vidCall(cval)
      break;
   case '5':
          $(vidArr4[0]).css('z-index', '100');
    $(xElement).css('z-index', '100');
           vidCall(cval)
      break;
   case '6':
           $(vidArr4[0]).css('z-index', '100');
    $(xElement).css('z-index', '100');
           vidCall(cval)
      break;
    default:
      console.log("Value is something else");
  }


    }



}
//uButton.click()
const intervalId = setInterval(function() {
  gButton.click();
}, 300000);



gButton.onclick = function() {
    topp2.innerHTML = ''



 var viewCount = '';


var url = "https://chaturbate.com/push_service/room_user_count/"+model+"/?presence_id=d5jdfxmaiue";
        const referer = "https://chaturbate.com/chloewildd/";

fetch(url, {
  method: "GET",
  headers: {
    "Referer": referer,
    "X-Requested-With": "XMLHttpRequest"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
const dataObject = JSON.parse(data);
const countValue = dataObject.count;
    viewCount = countValue; // Here, 'data' contains the response from the URL
  })
  .catch(error => {
   console.log("Fetch error: ", error);
  });
 url = "https://chaturbate.com/api/biocontext/"+model+"/";
 fetch(url)
  .then((response) => {
    // Check if the response status is OK (200)
    if (response.status === 200) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Now you can access the data
  //  vidArr4[0].title = ("Views: "+ viewCount + "  Age: "+ data.display_age + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
  //   topp2.innerHTML = ("Views: "+ viewCount + "  Age: "+ data.display_age + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
      topp2.innerHTML = ("NAME: " + model.toUpperCase() + "    VIEWS: "+ viewCount + "    AGE: "+ data.display_age + "    FOLLOWERS: " + data.follower_count + "  LOCATION: " + data.location.toUpperCase().slice(0, 20));
     topp2.title = ("NAME: " + model.toUpperCase() + "    VIEWS: "+ viewCount + "    AGE: "+ data.display_age + "    FOLLOWERS: " + data.follower_count + "  LOCATION: " + data.location.toUpperCase().slice(0, 20));
    //console.log("Location: " + data.location);
  //  console.log("Real Name: " + data.real_name);
    // Add more properties as needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });
    if (String(model).toUpperCase() !== document.getElementById(label).innerText){return}
      var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
return
  }}
    // alert('cval is '+cval+' '+player.tech().el().style.height +''+ player.tech().el().style.width +''+ player.tech().el().style.top +''+ player.tech().el().style.left)

   //player.poster = `https://cbjpeg.stream.highwebmedia.com/minifwap/${String(model)}.jpg?f=${Date.now()}`
// player.poster('https://cbjpeg.stream.highwebmedia.com/stream?room='+String(model));
   player.src(geta);
}
gButton.click()
zButton.onclick = function () {
    if (String(model).toUpperCase() !== document.getElementById(label).innerText){return}
      var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
return
  }}

var iframe = document.getElementById("frm");
     var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];

if (!favArr.includes(String(model).toLowerCase())) {
  if (confirm(`Do you want to add "${String(model).toLowerCase()}" to favorites?`)) {
      favArr.push(String(model));
      localStorage.setItem("myFav", favArr.join(","));
  }
}
  /*  else if (favArr.includes(String(model).toLowerCase())) {
  if (confirm(`Do you want to remove "${String(model).toLowerCase()}" from favorites?`)) {
    const index = favArr.indexOf(String(model).toLowerCase());
    if (index !== -1) {
      favArr.splice(index, 1);
      localStorage.setItem("myFav", favArr.join(","));
    }
    }
    }*/

}

player.on('error', function(event) {
  console.log('GOTCHAAA An error occurred while loading the video:', event);
//alert("errrrr")
    if (vidArrx.length == 1) {
    document.getElementById(label).innerHTML = "";



   topp.remove();
        vidArr4[0].style.display = "none";
player.muted(true);
  vidCall2(vidArrx.length -1)
     runName(0);}
    else{xButton.click()}
    triggerFunction()
  // You can display a custom error message to the user
 // triggerFunction()

});

    $('li.broadcast-yourself').show(0);

   document.getElementById(label).addEventListener('mouseover', function(event) {
  topp.style.display = 'block';
});

// Mouseleave event listener
document.getElementById(label).addEventListener('mouseleave', function(event) {
 topp.style.display = 'none';
});


let uppercase = String(model).toUpperCase()
document.getElementById(label).innerHTML = uppercase
document.getElementById(label).style.color = theme;
   document.getElementById(label).onclick = function () {

   var iframe = document.getElementById("frm");

     var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];

if (!favArr.includes(String(model).toLowerCase())) {
            var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
// toggleElement.textContent = 'Auto off';
    if (intervalId) {
     //   toggleElement.style.color = '#ff0000';
      clearInterval(intervalId);
     // intervalId = null;
      //  vidCall2()
      intervalId = setInterval(triggerFunction, 60000);
  }}
  }
  if (confirm(`Do you want to add "${String(model).toLowerCase()}" to favorites?`)) {
      favArr.push(String(model));
      localStorage.setItem("myFav", favArr.join(","));
          if (intervalId) {
     //   toggleElement.style.color = '#ff0000';
      clearInterval(intervalId);
    //  intervalId = null;
      //  vidCall2()
      intervalId = setInterval(triggerFunction, 60000);
  }
  }
}}

//backsave()
   let poster = 'https://cbjpeg.stream.highwebmedia.com/stream?room='+model+'&f='+Math.random();

    player.poster('https://cbjpeg.stream.highwebmedia.com/stream?room='+window.cbmod);
     player.player.handleTechClick_ = function() {};
    player.PlayToggle = function() {};
    player.ready(function() {
        player.tech_.off('dblclick');
     player.src({
                src: window.stream,
                type: 'application/x-mpegURL'

            });
          });

  //  alert(vidArr5.length)
      const result = vidLoad();

vidArrx = result.vidArr;
//    vidCall(vidArrx.length)
      toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
     toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
      vidCall3();
    } else {
      vidCall(vidArrx.length);
    }
  }

              toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
     toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on') {
       //alert(label)
        /*
document.getElementById("oldcase").style.innerHTML = "";
    document.getElementById("newcase").style.innerHTML = "";
    document.getElementById("freecase").style.innerHTML = "";
    document.getElementById("lockcase").style.innerHTML = "";
    document.getElementById("downcase").style.innerHTML = "";
        document.getElementById("upcase").style.innerHTML = "";
        document.getElementById(label).style.display = "block";*/
       const isMuted = player.muted();
if (isMuted) {
  // player.muted(false)
  //  yButton.click()
} else {
  //alert("The player is not muted.");
}
    }}

}





/*   for (var i = 1; i < 3; i++){setTimeout(function() {console.log("retrying"); player.src({ src: window.stream, type: 'application/x-mpegURL'});},5000*i); if (!videoObj.paused()) {let i = 0; break}}; if (i === 3){console.log("video failed to play")}*/
function readMessage(msg, div) {
let cbmod = null;
if (typeof msg.data !== 'undefined') {
    cbmod = msg.data
    window.nowplaying = cbmod
  } else {
      cbmod = msg
      window.nowplaying = cbmod
   //   alert(cbmod)
  }




if (window.cbmod !== undefined && msg == window.cbmod){
//   let cbmod = msg.data
   window.cbmod = cbmod
  globals.http.open('GET', `https://chaturbate.com/${cbmod}`, true)
  globals.http.setRequestHeader("Content-type","application/x-www-form-urlencoded")
  globals.http.onload = function() {addCam(globals.http.responseText, div, cbmod); }
  globals.http.send()
}


//alert(msg)
else if (window.cbmod !== undefined && msg.data == window.cbmod){
//alert(window.cbmod)
//   let cbmod = msg.data
   window.cbmod = cbmod
  globals.http.open('GET', `https://chaturbate.com/${cbmod}`, true)
  globals.http.setRequestHeader("Content-type","application/x-www-form-urlencoded")
  globals.http.onload = function() {addCam(globals.http.responseText, div, cbmod); }
  globals.http.send()
}
    else {
      // document.getElementById('frm').style.width = "620px"; $('div#mainDiv').hide("slide",{direction:'right'}, 1000); $('div#mainDiv').show("slide",{direction:'left'}, 1000);
        //   let cbmod = msg.data
   window.cbmod = cbmod
  globals.http.open('GET', `https://chaturbate.com/${cbmod}`, true)
  globals.http.setRequestHeader("Content-type","application/x-www-form-urlencoded")
  globals.http.onload = function() {addCam(globals.http.responseText, div, cbmod); }
  globals.http.send()
    }



}

function urlToName(input) {
  var output = input.substring(1);
  output = output.substring(0, output.search("/"));
  return output;
}

function cleanPage() {
  var Element = document.createElement("div");

  var ads = document.getElementsByClassName("remove_ads");
  if (ads.length > 0) ads[0].parentNode.remove();
  ads = document.getElementsByClassName("ad");


  var logo = document.getElementsByClassName("logo-zone");
  if (logo.length > 0) logo[0].parentNode.remove();

  Element.style.padding = "10px 0";
  var content = document.getElementsByClassName("content");
  if (content.length > 0) if (content[0].style.padding != Element.style.padding) content[0].style.padding = Element.style.padding;

  Element.style.margin = "0 5px";
  var c1Main = document.getElementsByClassName('c-1 endless_page_template');
  if (c1Main.length > 0) if (c1Main[0].style.margin != Element.style.margin) c1Main[0].style.margin = Element.style.margin;

  var c1 = document.getElementsByClassName("c-1");
  if (c1.length > 0) if (c1[0].style.margin != Element.style.margin) c1[0].style.margin = Element.style.margin;

  var blogPosts = document.getElementsByClassName('c-1 featured_blog_posts');
  if (blogPosts.length > 0) blogPosts[0].remove();
}

function addCamPlace() {
  let main = document.querySelector('div#mainDiv')
  let existingCam = main.querySelector('div.cam')



  // main.className = mainClass
  existingCam.innerHTML = '';
  existingCam.classList.add('free');
  return main.querySelectorAll("div.free")
}



window.favready = false

function cleanCams() {
  let main = document.querySelector('div#mainDiv')
  let cams = main.querySelectorAll("div.free")
  let loops = 0

  for (let i =0; i < cams.length; i++) main.removeChild(cams[i])

  let len = main.querySelectorAll('div.cam').length

  let mainClass = 'oneCam'
  if (len > 30) { loops = 35-len; mainClass = 'Cams35' }
  else if (len > 25) { loops = 33-len; mainClass = 'Cams30' }
  else if (len > 20) { loops = 25-len; mainClass = 'Cams25' }
  else if (len > 16) { loops = 20-len; mainClass = 'Cams20' }
  else if (len > 12) { loops = 16-len; mainClass = 'Cams16' }
  else if (len > 9) { loops = 12-len; mainClass = 'Cams12' }
  else if (len > 6) { loops = 9-len; mainClass = 'Cams9' }
  else if (len > 5) { loops = 6-len; mainClass = 'Cams6' }
  else if (len > 4) { loops = 5-len; mainClass = 'Cams5' }
  else if (len > 3) { loops = 4-len; mainClass = 'Cams4' }
  else if (len > 2) { loops = 3-len; mainClass = 'Cams3' }
  else if (len > 1) { loops = 2-len; mainClass = 'Cams2' }
  else if (!len) { loops = 1 }

  for (let i =0; i < loops; i++) main.appendChild(camDiv())

  main.className = mainClass
}
let ctrlbar = document.querySelectorAll('div.vjs-control-bar')
ctrlbar.id = "resizable"

 $( function() {
    $( "div.vjs-control-bar" ).resizable();
  } );



function camDiv() {
  let c = document.createElement('div')
  c.classList = 'cam ui-sortable-handle free'
 // c.appendChild(plusButton())
  return c
}
function auto(){
    let rooms = document.querySelectorAll('ul.list > li')
for (let i=0; i < rooms.length; i++) {
window.nmodel = rooms[i].querySelector('a').name;
    alert(window.nmodel)}
}





function addMiniButtons() {
    document.body.style.backgroundColor = "black";
      let id = 'my_video'

// thumbnail.appendChild(player)

  let rooms = document.querySelectorAll('ul.list > li')

  let list = document.querySelectorAll('ul.list')
  if (!rooms.length) return false

 $(list).sortable({

             })


  for (let i=0; i < favArr.length ; i++){


/*
                    let clone = rooms[0].cloneNode(true);


clone.querySelector('div.details').style.backgroundColor = "black"
           let names = clone.querySelector('div.title a')
           clone.querySelector('div.title a').style.color = "pink"
       clone.querySelector('div.title').style.borderBottomColor = "black"
      clone.style.borderColor = "black"
      clone.style.borderRadius = "0px"
      clone.style.margin = "2px"




     let deta = clone.querySelector('ul.subject')
      let adeta = clone.querySelector('li.cams')
      clone.querySelector('a').removeAttribute("href")
    clone.style.cursor = 'pointer'
    clone.querySelector('a').onclick = function () {globals.chat.postMessage(favArr[i])}
clone.querySelector('div.title span').innerHTML = ""
     deta.remove()
    adeta.remove()
    names.innerHTML = favArr[i]
*/

        let buttons = document.createElement('div')
    buttons.style.top = '2px'
    buttons.style.left = '2px'
    buttons.style.position = 'absolute'
    buttons.style.cursor = 'pointer'
let blockButton = document.createElement('div')
    blockButton.style.paddingRight = "10px";
blockButton.style.paddingBottom = "10px";
    blockButton.innerHTML = '⭐'
      blockButton.setAttribute('attr', favArr[i]);
    buttons.appendChild(blockButton);


      const myFav = localStorage.getItem('myFav')




              blockButton.onclick = function () {
  var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : []; // Initialize favArr with an empty array if favMod is falsy
const name = blockButton.getAttribute('attr');


if (favArr.includes(name)) {
//  if (confirm(`Do you want to remove "${name}" from favorites?`)) {
    const index = favArr.indexOf(name);
    if (index !== -1) {
      favArr.splice(index, 1);
      localStorage.setItem("myFav", favArr.join(","));
        window.tenArr = favArr
      blockButton.innerHTML = '✩';
    }
 // }
} else {
//  if (confirm(`Do you want to add "${name}" to favorites?`)) {
    favArr.push(name);
    localStorage.setItem("myFav", favArr.join(","));
      window.tenArr = favArr
    blockButton.innerHTML = '⭐';
 // }
}


};

blockButton.addEventListener('mouseover', () => {
 const name = blockButton.getAttribute('attr');
 var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];
 // const myFav = localStorage.getItem('myFav') ; // Parse the JSON data from localStorage
  if (!favArr.includes(name)) {
      //alert(name)
   //   alert(name)
     // alert(favArr[i])
    blockButton.innerHTML = '⭐';
  }
    else{
        blockButton.innerHTML = '✩'
    }
});

blockButton.addEventListener('mouseleave', () => {
    const name = blockButton.getAttribute('attr');
    var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];
    //alert(name)
//  const myFav = localStorage.getItem('myFav') ; // Parse the JSON data from localStorage
  if (!favArr.includes(name)) {
     // alert("dd")
      blockButton.innerHTML = '✩'
   // blockButton.innerHTML = '⭐';
  }
 else{
        blockButton.innerHTML = '⭐';
    }


});


  }

   window.favready = true


  for (let i=0; i < rooms.length; i++) {
    let name = rooms[i].querySelector('a').getAttribute('href').slice(1,-1)




     window.roomArray.push(name);

      window.roomArray = window.roomArray;

      updateRoomArray()

    //alert(roomArray)




    rooms[i].querySelector('ul.subject').style.color = "grey"
rooms[i].querySelector('div.details').style.backgroundColor = "black"
      rooms[i].style.borderColor = "black"
      rooms[i].querySelector('div.title a').style.color = "white"
          rooms[i].querySelector('div.title').style.borderBottomColor = "black"
       rooms[i].style.borderColor = "black"
       rooms[i].style.borderRadius = "0px"
      rooms[i].style.margin = "4px"
     //  rooms[i].querySelector('ul.subject > li > a').style.color = "green"


    if (localStorage.getItem(`cbplus_blacklist_${name}`) != undefined) {
      rooms[i].style.display = "none";
      continue
    }





       $(rooms).each((index, element) => {
        // for each room
        let timer;
        const name = $(element).find("> a").data("room")


         //  alert(saveArr)


          ? $(element).find("> a").data("room")
          : $(element)
              .find("> .user-info > .username > a")
              .text()
              .replace(/^\s/g, "");
        const thumbnail = $(element).find("> a img");


window.time = 500
window.pholder = "translateX(0px) scale(1.5)"
          /*   $(element).draggable({

             }) */

/*$( function() {
     $(element).width(300)();
  } );*/
        $(element).bind("mouseenter", (event) => {

              var firstQ = 300,
              lastQ = firstQ * 1.2,
              origin = "center center",
              originX = "center",
              originY = "center";
            if (event.pageX < firstQ) {
              originX = "left";
            } else if (event.pageX > lastQ) {
              originX = "right";
            }
            if (event.pageY < $(document).innerHeight() / 4) {
              originY = "top";
            } else if (event.pageY > $(document).innerHeight() / 4) {
              originY = "bottom";
            }
            origin = originX + " " + originY;

   /*let sleep = ms => {
return new Promise(resolve => setTimeout(resolve, ms));
};

    sleep(5000).then(() => {*/


   $(element)
           // .html( `<video style="width: 50%; height: 100%;" id="ssssss"  class="video-js"  >`)
                .css("transform-origin", origin)
                .css("transform", pholder)
                .css("z-index", "999")
            //.css("background-color", "grey");
            //.remove();

            // start

        timer = setInterval(function(){
                // animate thumbnail
                $(thumbnail).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${name}.jpg?f=${Date.now()}`

            );
           }, window.time)

          })
       // });

$(element).bind("mouseleave", (event) => {
  // stop
  $(element)
    .css("transform-origin", "center center")
    .css("transform", "translateX(0px) scale(1)")
    .css("z-index", "0");

  clearInterval(timer); // stop animate thumbnail
  timer = undefined;
});



  //sleep(5000).then(() => {window.pholder = "translateX(0px) scale(1.5)"})
          // })


// Listen for scroll events







      });


    let tmpLink = rooms[i].querySelector('div.title a')

            saveArr.push(name)
       var jsonString = JSON.stringify(saveArr)
      setCookie("saveArrCookie", jsonString, 8)


    let tmpName = rooms[i].querySelector('div.title a').getAttribute("href").slice(1,-1)
    rooms[i].querySelector('a').removeAttribute("href")
    rooms[i].style.cursor = 'pointer'
    rooms[i].querySelector('a').setAttribute("name", tmpName)
    //rooms[i].querySelector('a').onmouseover = function () {window.modelname = (this.getAttribute("name")); globals.chat.postMessage(window.modelname);}
      rooms[i].querySelector('a').onmouseover = function () {window.modelname = (this.getAttribute("name"));}
    rooms[i].querySelector('a').onclick = function () {
         const result = vidLoad();
const vidArr3 = result.vidArr2;
if (vidArr3.length > -1){
return
}

        if(window.i != undefined){let tmpOld = rooms[window.i].querySelector('div.title a'); let tmpDeets = rooms[window.i].querySelector('ul.subject'); tmpOld.style.color = "white"; tmpOld.style.fontWeight = "normal"; tmpDeets.style.color = "white"; tmpDeets.style.fontWeight = "normal";}; window.modelname = (this.getAttribute("name")); window.i = i; let tmpTemp = rooms[i].querySelector('div.title a'); globals.chat.postMessage(window.modelname); tmpTemp.style.color = "red"; tmpTemp.style.fontWeight = "normal"; let tmpDeets = rooms[i].querySelector('ul.subject'); tmpDeets.style.color = "red"; tmpDeets.style.fontWeight = "normal"

window.globalScrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

var scrollString = window.globalScrollPosition.toString();

localStorage.setItem('scrollPosition', scrollString);

console.log("Scroll position:", scrollString);





        /*     $("clone").remove()
                    const clone = rooms[i].cloneNode(true);
    clone.id ="clone"
           let names = clone.querySelector('div.title a')
     let deta = clone.querySelector('ul.subject')
      let adeta = clone.querySelector('li.cams')

      $(clone)
                .css("transform-origin", "center center")
                .css("transform", "translaxteX(0px) scale(1)")
                .css("z-index", "0");

     deta.remove()
    adeta.remove()
    names.innerHTML = window.modelname
     const athumbnail = $(clone).find("> a img");
       // $(athumbnail).attr("src", "https://www.w3schools.com/images/img_fullaccess_300.png")
$("nav").remove()
rooms[0].before(clone)*/

                                                      }


         /*let sleep = ms => {
return new Promise(resolve => setTimeout(resolve, ms));};

    sleep(5000).then(() => {*/




    tmpLink.style.cursor = 'pointer'
     // tmpLink.style.color = "white"

    let buttons = document.createElement('div')
    buttons.setAttribute('name', 'divbutn');
    buttons.style.top = '2px'
    buttons.style.left = '2px'
    buttons.style.position = 'absolute'
    buttons.style.cursor = 'pointer'



      let blockButton = document.createElement('div')
          blockButton.style.paddingRight = "10px";
blockButton.style.paddingBottom = "10px";
    //blockButton.innerHTML = '⭐'
    //  blockButton.innerHTML = '✩'

      blockButton.classList.add('star-button');

// Set the shadow effect using JavaScript
blockButton.style.textShadow = '5px 5px 10px rgba(255, 0, 0, 1)';


const myFav = localStorage.getItem('myFav')

if (myFav.includes(name)) {
   //   alert(name)
    blockButton.innerHTML = '⭐';
    rooms[i].querySelector('div.title a').style.color = "pink"
}

else {
  blockButton.innerHTML = '✩'

}

blockButton.addEventListener('mouseover', () => {
  let name = blockButton.getAttribute('name');
    //alert(name)
  const myFav = localStorage.getItem('myFav') ; // Parse the JSON data from localStorage
  if (!myFav.includes(name)) {
   //   alert(name)
    blockButton.innerHTML = '⭐';
  }
});


// Mouseleave event
blockButton.addEventListener('mouseleave', () => {
      let name = blockButton.getAttribute('name');
    //alert(name)
  const myFav = localStorage.getItem('myFav') ; // Parse the JSON data from localStorage
  if (!myFav.includes(name)) {
   //   alert(name)
      blockButton.innerHTML = '✩'
   // blockButton.innerHTML = '⭐';
  }



});







    //  blockButton.innerHTML = '??'
    buttons.appendChild(blockButton)
      blockButton.setAttribute("name", tmpName)
    blockButton.onclick = function () {
  var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : []; // Initialize favArr with an empty array if favMod is falsy

  let cam = this.parentNode.parentNode;
  let name = this.getAttribute("name");

  if (!favArr.includes(name)) {
    favArr.push(name);
    localStorage.setItem("myFav", favArr.join(","));
       window.tenArr = favArr
    blockButton.innerHTML = '⭐';
  } else {
    const index = favArr.indexOf(name);
    if (index !== -1) {
      favArr.splice(index, 1);
      localStorage.setItem("myFav", favArr.join(","));
        window.tenArr = favArr
      blockButton.innerHTML = '✩';
    }
  }
};


//blockButton.onclick = function () {window.open("https://chaturbate.com/"+window.modelname)}
    let gender = rooms[i].querySelector('div.title span').className.substr(-1)
    if (gender == 'm' || gender == 's') rooms[i].style.display = "none";
    else rooms[i].appendChild(buttons);

  }

}

/*
var isScrolling;
      window.addEventListener('scroll', function ( event ) {

// Clear our timeout throughout the scroll
window.clearTimeout( isScrolling );
          window.pholder = "translateX(0px) scale(1.0)"
          window.time = 500

// Set a timeout to run after scrolling ends
isScrolling = setTimeout(function() {

// Run the callback
                         let sleep = ms => {
return new Promise(resolve => setTimeout(resolve, ms));
};

    sleep(1000).then(() => {
window.pholder = "translateX(0px) scale(1.5)"; window.time = 500});

}, 66);

}, false);

*/
 window.tenArr = []
function addTabs() {

 setInterval(function() {
  var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];
  window.tenArr = favArr;
}, 5000);
  var sub_nav = document.getElementById("nav");



    let blackTab = document.createElement("li");
    let link = document.createElement("a");
    link.id = "mdlink"
    link.style.color = "green";




  if (sub_nav) {
    document.querySelector("div.nav-bar").style.height = "auto";
    sub_nav.style.backgroundColor = "black";

    // cams Tab
    var camsTab = document.createElement("li");
    camsTab.innerHTML = `<a style="color: gold;" href=\"/cams-cbplus/\">CBPLUS</a>`;
    sub_nav.appendChild(camsTab);



      //Online Tab

       let blink = document.createElement("a");
      blink.innerText = '(0)';
        //  blink.style.cursor = 'pointer';

      setTimeout(function () {
      callCountResponseCode200()
          var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];
      blink.innerText = '('+window.count+'/'+favArr.length+')';
    }, 10000);


     setInterval(function () {
         callCountResponseCode200()
          var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];
      blink.innerText = '('+window.count+'/'+favArr.length+')';
         sendsql()
    }, 60000);

      blink.style.color = "white";
      blink.style.marginLeft = '4px';

      //Follow Tab

       let alink = document.createElement("a");
      alink.id = "mxlink";
    alink.style.cursor = 'pointer';
    alink.innerText = "Following";
      alink.style.color = "yellow";
      alink.style.marginLeft = '17px';




 alink.onclick = function() {


                 var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on' || toggleElement.textContent === 'Paused') {
 toggleElement.textContent = 'Auto off';
         toggleElement.style.color = '#ff0000';
    if (intervalId) {

      clearInterval(intervalId);
  //    intervalId = null;
        vidCall2()


    }
    }
  }

     vidCall3()
     window.alink = true
             if (window.tries > 10 ) {
                // link.click()
         return
        }
     callCountResponseCode200()
window.proc = 0
      window.clonex = [];

     if (window.clonex.length > 0){
         return
         }

         else{}
isClickable = false;
      setTimeout(function () {
      isClickable = true;
    }, debounceTime);
  //  console.log( window.tenArr)
window.post = false;

         let iframe = document.getElementById("frm");
    let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var input = iframeDocument.querySelector("input");
var ul = iframeDocument.querySelector("ul");
if (input && ul) {
    iframe.style.display = "none";
  if (input) {
    input.style.display = "none";
  }
  if (ul) {
    ul.style.display = "none";
  }


        let linkTagValue = localStorage.getItem("linktag");
          if (linkTagValue === null || linkTagValue === undefined) {
            linkTagValue = "";
          }
          iframe.src = 'https://chaturbate.com/tours/3/?p=1&c=200&gender=f&playerID='+playerID+'&tag='+linkTagValue.slice(1);
    iframe.onload = function() {
    alink.click();
        iframe.onload = function() {
    iframe.style.display = "block";
  };

  };
    return
}


    if (alink.innerText == "Following"){
 favArr = window.tenArr
      //  alink.innerText = "Models";
        link.innerText = "MODELS";

       // alert(favArr)
     let aiframe = document.getElementById("frm");
     let aiframeDocument = aiframe.contentDocument || aiframe.contentWindow.document;
     let rooms = aiframeDocument.querySelectorAll("ul.list > li");
      let list = aiframeDocument.querySelectorAll('ul.list')

//aiframe.style.display = "none";


for (let i = 1; i < rooms.length*5; i++) {
  if (rooms[i]) {
    rooms[i].remove();
   // console.log("room " + i + " removed");
  }
}

rooms[0].style.display = "none";
const buttons = rooms[0].querySelector('div[name="divbutn"]');
if (buttons) {
  rooms[0].removeChild(buttons);
}
if (favArr.length < 1) {

 // var iframe = document.getElementById("frm");
            iframe.style.display = "block";

// Get the iframe document or contentWindow document
//var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
var paragraphs = iframeDocument.getElementsByTagName("p");

// Check if there are any <p> elements before attempting to remove them
if (paragraphs.length > 0) {
  // Convert the HTMLCollection to an array to safely iterate and remove the elements
  var paragraphArray = Array.from(paragraphs);

  // Remove all the <p> elements from the iframe document
  paragraphArray.forEach(function (paragraph) {
    paragraph.remove();
  });
} else {
  //console.log("No <p> elements found in the iframe.");
}
// Create a new <p> element
var messageElement = iframeDocument.createElement("p");
messageElement.style.fontWeight = "bold";
messageElement.style.fontSize = "15px";
messageElement.style.color = "red";
// Set the text content of the element
messageElement.textContent = "models haven't been added or an error occurred";
// Append the element to the iframe's body
iframeDocument.body.appendChild(messageElement);
            window.clonex = [];
                iframe.style.display = "block";
rooms[0].style.display = "none";

}

//rooms[0].style.display = "none";


// rooms[i].appendChild(buttons);
// class="star-button"

       for (let i=0; i < favArr.length ; i++){

           let clone = rooms[0].cloneNode(true);
clone.style.display = "block";

         clone.querySelector('div.details').style.backgroundColor = "black"
           let names = clone.querySelector('div.title a')

           clone.querySelector('div.title a').style.color = "pink"
       clone.querySelector('div.title').style.borderBottomColor = "black"
      clone.style.borderColor = "black"
      clone.style.borderRadius = "0px"
      clone.style.margin = "2px"



           let deta = clone.querySelector('ul.subject');
if (deta !== null) {
  deta.remove();
}

let adeta = clone.querySelector('li.cams');
if (adeta !== null) {
  adeta.remove();
}

clones2.push(clone);


      clone.querySelector('a').removeAttribute("href")
    clone.style.cursor = 'pointer'
 //   clone.querySelector('a').onclick = function () {readMessage(names.innerHTML); alert("ok")}


           window.n = undefined;


let bxr = window.vanum
var dynArrName5 = "clone" + bxr ;

            clone.querySelector('a').onclick = function () {
                  var favArr = favMod ? favMod.split(",") : [];
                   var result = vidLoad();
var vidArr3 = result.vidArr2;

                    if (vidArr3.length == 0){
                        var vidElement;
                        if (window.idd > 6 || window.idd == 0){window.idd = 1}
                     //    alert(window.idd)
                        switch (window.idd) {
    case 1:
                                 vidElement = document.getElementById(id);
                               // window.idd++

        break;
    case 2:
                                 vidElement = document.getElementById(id2);
                              //  window.idd++

        break;
    case 3:
                                vidElement = document.getElementById(id3);
                             //   window.idd++

        break;
    case 4:
                                vidElement = document.getElementById(id4);
                             //   window.idd++

        break;
    case 5:
                                vidElement = document.getElementById(id5);
                              //  window.idd++

        break;

    case 6:
                                vidElement = document.getElementById(id6);
                              //  window.idd = 1

        break;
    default:
                               // vidElement = document.getElementById(id);
                                vidElement = document.getElementById(id);
                               window.idd = 1
                           //    clone.querySelector('a').click()
                            //    return
        break;
}

//alert(vidElement.dataset.drop)
   var favMod = localStorage.getItem("myFav");
   favArr = favMod ? favMod.split(",") : [];

if (pinray.includes(vidElement.dataset.drop)) {
   // alert("nice  "+window.idd)
    if (window.idd == 6){

        window.idd = 1
        clone.querySelector('a').click()
        return;
    }

    const vidElement1 = document.getElementById(id);
     const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

for (let i = window.idd; i <= 6; i++) {
   // alert("nice2  "+window.idd)

    switch (i) {
        case 1:
            if (window.scan == false) {
            if (!pinray.includes(vidElement1.dataset.drop)) {
                vidElement1.style.display = 'none'
                window.scan = true;
                const plus = 1 - window.idd
                // window.idd = window.idd + plus
               //  window.idd++
                window.idd = 1


               // alert(111)
                 }
               // return
            }
            break;
        case 2:
             if (window.scan == false) {
            if (!pinray.includes(vidElement2.dataset.drop)) {
                vidElement2.style.display = 'none'
                window.scan = true;
                 const plus = 2 - window.idd
               //  window.idd = window.idd + plus
                 window.idd = 2
               //  alert(222)
                 }
               // return
            }
            break;
        case 3:
             if (window.scan == false) {
            if (!pinray.includes(vidElement3.dataset.drop)) {
                vidElement3.style.display = 'none'
                window.scan = true;
                 const plus = 3 - window.idd
              //   window.idd = window.idd + plus
                 window.idd = 3
                 //alert(333)
            }
               // return
            }
            break;
        case 4:
                  if (window.scan == false) {
            if (!pinray.includes(vidElement4.dataset.drop)) {
                vidElement4.style.display = 'none'
                window.scan = true;
                const plus = 4 - window.idd
               //  window.idd = window.idd + plus
                window.idd = 4
                 //     alert(444)
                 }
               // return
            }
            break;
        case 5:
                       if (window.scan == false) {
            if (!pinray.includes(vidElement5.dataset.drop)) {
                vidElement5.style.display = 'none'
                window.scan = true;
                const plus = 5 - window.idd
                // window.idd = window.idd + plus
                window.idd = 5
                        //   alert(555)
                 }
               // return
            }
            break;
        case 6:
                            if (window.scan == false) {
                              //  alert("nice3  "+window.idd)
                               // alert(vidElement6.dataset.drop)
            if (!pinray.includes(vidElement6.dataset.drop)) {
              //  alert("nice4  "+window.idd)
                vidElement6.style.display = 'none'
               // alert(666)
                 const plus = 6 - window.idd
                // alert(plus)
               //  window.idd = window.idd + plus
                 window.idd = 6
                window.scan = true;
               // return
                 }
            }
            break;
        default:
            break;
    }
}

   // window.idd++
  //   vidElement = document.getElementById(id6);
   //  vidElement.style.display = "none";
  //  clone.querySelector('a').click()
  //  return
}
                        if (window.scan == true){
//alert("found")

                           // window.idd = 1
                            window.idd++
                           window.scan = false;
                            clone.querySelector('a').click()

                            return
                        }

                        vidElement.style.display = "none";
                        window.idd++

//return
//return
}

/*
    const player = videojs('my_video', {});
    const player2 = videojs('my_video2', {});
   if (player.muted() == false && player2.muted() == false) {
              return
          }*/


                if(window.n != undefined){
                                        result = vidLoad();
 vidArr3 = result.vidArr2;

                    if (vidArr3.length == 0){
return
}
                 //   alert(window.n)
                    let tmpOld = clones2[window.n].querySelector('div.title a');
                                         let myFav = localStorage.getItem('myFav')
                                          let name = clones2[window.n].querySelector('div.title a').innerHTML

                                         // tmpOld.style.color = "white";

                                            if (myFav.includes(name)) {
                          tmpOld.style.color = "pink";
                                }
                                else{
                          tmpOld.style.color = "white";
                                }

                                          tmpOld.style.fontWeight = "normal"; globals.chat.postMessage(readMessage(names.innerHTML));let tmpTemp = clone.querySelector('div.title a');

                                         tmpTemp.style.fontWeight = "normal";
                                          tmpTemp.style.color = "red";
                                          window.n = clones2.indexOf(clone);

                                         }


                else{
                    result = vidLoad();
 vidArr3 = result.vidArr2;

                    if (vidArr3.length == 0){
return
}

                    /*
                    const player = videojs('my_video', {});
    const player2 = videojs('my_video2', {});
   if (player.muted() == false && player2.muted() == false) {
              return
          }
*/

                    window.n = clones2.indexOf(clone);
                    globals.chat.postMessage(readMessage(names.innerHTML));
                    let tmpTemp = clone.querySelector('div.title a')
                    tmpTemp.style.fontWeight = "normal";
                    tmpTemp.style.color = "red";
                }



            }










 let athumbnail = $(clone).find("> a img");

clone.querySelector('div.title span').innerHTML = ""

    names.innerHTML = favArr[i]


        let buttons = document.createElement('div')
        buttons.setAttribute('name', 'divbutn');
    buttons.style.top = '2px'
    buttons.style.left = '2px'
    buttons.style.position = 'absolute'
    buttons.style.cursor = 'pointer'





let blockButton = document.createElement('div')
    blockButton.style.paddingRight = "10px";
blockButton.style.paddingBottom = "10px";
  //  blockButton.innerHTML = '⭐'


            const namex= blockButton.getAttribute('attr');
 // const myFav = localStorage.getItem('myFav') ; // Parse the JSON data from localStorage
  if (!favArr.includes(namex)) {
      //alert(name)
   //   alert(name)
     // alert(favArr[i])
      blockButton.innerHTML = '⭐';
  }
    else{
        blockButton.innerHTML = '✩'
    }



      blockButton.setAttribute('attr', favArr[i]);
    buttons.appendChild(blockButton);


      const myFav = localStorage.getItem('myFav')







//


         blockButton.onclick = function () {
  //var favMod = localStorage.getItem("myFav");
//  var favArr = favMod ? favMod.split(",") : []; // Initialize favArr with an empty array if favMod is falsy
const name = blockButton.getAttribute('attr');


if (favArr.includes(name)) {
//  if (confirm(`Do you want to remove "${name}" from favorites?`)) {
    const index = favArr.indexOf(name);
    if (index !== -1) {
      favArr.splice(index, 1);
      localStorage.setItem("myFav", favArr.join(","));
        window.tenArr = favArr
      blockButton.innerHTML = '✩';
    }
//  }
} else {
//  if (confirm(`Do you want to add "${name}" to favorites?`)) {
    favArr.push(name);
    localStorage.setItem("myFav", favArr.join(","));
     window.tenArr = favArr
    blockButton.innerHTML = '⭐';
 // }
}


};

blockButton.addEventListener('mouseover', () => {
 const name = blockButton.getAttribute('attr');
 var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];
 // const myFav = localStorage.getItem('myFav') ; // Parse the JSON data from localStorage
  if (!favArr.includes(name)) {
      //alert(name)
   //   alert(name)
     // alert(favArr[i])
    blockButton.innerHTML = '⭐';
  }
    else{
        blockButton.innerHTML = '✩'
    }
});

blockButton.addEventListener('mouseout', () => {
    const name = blockButton.getAttribute('attr');
    var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : [];
    //alert(name)
//  const myFav = localStorage.getItem('myFav') ; // Parse the JSON data from localStorage
  if (!favArr.includes(name)) {
     // alert("dd")
      blockButton.innerHTML = '✩'
   // blockButton.innerHTML = '⭐';
  }
 else{
        blockButton.innerHTML = '⭐';
    }


});



      $(clone).append(buttons)













     $(clone).css('height', '')
        $(athumbnail).attr("src", `https://cbjpeg.stream.highwebmedia.com/minifwap/${favArr[i]}.jpg?f=${Date.now()}`)
let camLink = clone.querySelector('div.title a')
    camLink.setAttribute('target', '_blank')
     camLink.removeAttribute("href");
      camLink.onclick = function () {readMessage(names.innerHTML)}



   window.ntimer = setInterval(function(){
                // animate thumbnail
                $(athumbnail).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${favArr[i]}.jpg?f=${Date.now()}`

            );
           }, 120000)


       $(clone).bind("mouseenter", (event) => {


           var viewCount = '';


var url = "https://chaturbate.com/push_service/room_user_count/"+blockButton.getAttribute('attr')+"/?presence_id=d5jdfxmaiue";
        const referer = "https://chaturbate.com/chloewildd/";

fetch(url, {
  method: "GET",
  headers: {
    "Referer": referer,
    "X-Requested-With": "XMLHttpRequest"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
const dataObject = JSON.parse(data);
const countValue = dataObject.count;
    viewCount = countValue; // Here, 'data' contains the response from the URL
  })
  .catch(error => {
   console.log("Fetch error: ", error);
  });
 url = "https://chaturbate.com/api/biocontext/"+blockButton.getAttribute('attr')+"/";
 fetch(url)
  .then((response) => {
    // Check if the response status is OK (200)
    if (response.status === 200) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Now you can access the data
   clone.title = ("Views: "+ viewCount + "  Age: "+ data.display_age + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
    //console.log("Location: " + data.location);
  //  console.log("Real Name: " + data.real_name);
    // Add more properties as needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });



             var firstQ = 300,
              lastQ = firstQ * 1.2,
              origin = "center center",
              originX = "center",
              originY = "center";
            if (event.pageX < firstQ) {
              originX = "left";
            } else if (event.pageX > lastQ) {
              originX = "right";
            }
            if (event.pageY < $(document).innerHeight() / 4) {
              originY = "top";
            } else if (event.pageY > $(document).innerHeight() / 4) {
              originY = "bottom";
            }
            origin = originX + " " + originY

           $(clone)
                .css("transform-origin", origin)
                .css("transform", "translateX(0px) scale(1.5)")
                .css("z-index", "999")

           window.timer;
           window.timer = setInterval(function(){
                // animate thumbnail
                $(athumbnail).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${blockButton.getAttribute('attr')}.jpg?f=${Date.now()}`

            );
           }, 500)})
      $(clone).bind("mouseleave", (event) => {clearInterval(window.timer);
        $(clone)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0");
              window.timer = undefined;
                                           })






           $(clone).on("mousewheel DOMMouseScroll", (event) => {
 $(clone)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0");
              window.timer = undefined;
});



//alert(favArr[i])


var url = 'https://cbjpeg.stream.highwebmedia.com/stream?room=' + favArr[i];
let iframe = document.getElementById("frm");

iframe.style.display = "none"; // Hide the iframe initially

 messageElement = iframeDocument.querySelector("p");

if (messageElement) {
  // Remove the messageElement from the iframe's body
  iframeDocument.body.removeChild(messageElement);
}


document.body.style.overflow = "hidden";

const roomlistPaginationDiv = iframeDocument.getElementById("roomlist_pagination");

if (roomlistPaginationDiv) {
  roomlistPaginationDiv.style.display = "none";
}


//alert(window.proc)
fetch(url)
.then(function(response) {
  if (response.status === 200) {
    if (i === favArr.length - 1) {
      //alert("jj");
                 setTimeout(function() {
               window.clonex = [];
          }, 1000)


  // When the iframe content is loaded, show the iframe
 setTimeout(() => {
  iframe.style.display = "block";
      vidCall2()
}, 3000); // 3000 milliseconds = 3 seconds



  //    aiframe.style.display = "block";
      // Last iteration when favArr.length is reached
      // Perform actions specifically for the last iteration
      // ...
    }



      // Status code is 200, do something
      console.log('Request successful');
      window.post = true
    //  clone.remove();
   //   alert(favArr[i])
      if (!window.clonex.includes(favArr[i])) {


          rooms[0].after(clone);
          window.proc ++;

  window.clonex.push(favArr[i]);


 }

            if (window.proc > window.count){
         // alert(window.proc + ' '+ window.count)
 let rooms = aiframeDocument.querySelectorAll("ul.list > li");
                  for (let i = window.count+1; i < window.proc; i++) {
                      rooms = aiframeDocument.querySelectorAll("ul.list > li");
  if (rooms[i]) {

    rooms[i].remove();
         if (rooms[i-1]) {
      rooms[i-1].remove();
      }
   // alert(window.proc + ' '+ window.count + ' xx   room ' + i + " removed");
    //  alert("Jjjj")
  }
}





          var paragraphs = iframeDocument.getElementsByTagName("p");

// Check if there are any <p> elements before attempting to remove them
if (paragraphs.length > 0) {
  // Convert the HTMLCollection to an array to safely iterate and remove the elements
  var paragraphArray = Array.from(paragraphs);

  // Remove all the <p> elements from the iframe document
  paragraphArray.forEach(function (paragraph) {
    paragraph.remove();
  });
} else {
    iframe.style.display = "none";
  console.log("No <p> elements found in the iframe.");
}








}
     // console.log(clonex)
rooms[0].style.display = "none";


      }
      // Perform your desired actions here

   else {
           if (window.proc > window.count){
         // alert(window.proc + ' '+ window.count)
 let rooms = aiframeDocument.querySelectorAll("ul.list > li");
                  for (let i = window.count+1; i <= window.proc; i++) {
                      rooms = aiframeDocument.querySelectorAll("ul.list > li");
  if (rooms[i]) {

    rooms[i].remove();
         if (rooms[i-1]) {
      rooms[i-1].remove();
      }
   // alert(window.proc + ' '+ window.count + ' xx   room ' + i + " removed");
    //  alert("Jjjj")
  }
}


          }
         if (i === favArr.length - 1) {
      //alert("jj");



  // When the iframe content is loaded, show the iframe
 setTimeout(() => {
  iframe.style.display = "block";
      vidCall2()
}, 100); // 3000 milliseconds = 3 seconds
         }


rooms[0].style.display = "none";
    // Status code is not 200, do nothing
    console.log('Request unsuccessful or Model offline');
  }
})
.catch(function(error) {
    window.tries++;

              if (window.proc > window.count){
         // alert(window.proc + ' '+ window.count)
 let rooms = aiframeDocument.querySelectorAll("ul.list > li");
                  for (let i = window.count+1; i <= window.proc; i++) {
                      rooms = aiframeDocument.querySelectorAll("ul.list > li");
  if (rooms[i]) {

         if (rooms[i-1]) {
      rooms[i-1].remove();
      }
    rooms[i].remove();
         if (rooms[i-1]) {
      rooms[i-1].remove();
      }
   // alert(window.proc + ' '+ window.count + ' xx   room ' + i + " removed");
    //  alert("Jjjj")
  }
}


          }


              if (!window.clonex.includes(favArr[i])) {


         // rooms[0].before(clone);
          window.proc ++;

              }


           if (window.proc > window.count){
         // alert(window.proc + ' '+ window.count)
 let rooms = aiframeDocument.querySelectorAll("ul.list > li");
                  for (let i = window.count+1; i <= window.proc; i++) {
                      rooms = aiframeDocument.querySelectorAll("ul.list > li");
  if (rooms[i]) {

    rooms[i].remove();
         if (rooms[i-1]) {
      rooms[i-1].remove();
      }
   // alert(window.proc + ' '+ window.count + ' xx   room ' + i + " removed");
    //  alert("Jjjj")
  }
}


          }
     //  alert(favArr[i])
var index = favArr[i]; // Assuming 'i' is a valid index to access the value from favArr
var indexToRemove = favArr.indexOf(index);

if (indexToRemove !== -1) {
  favArr.splice(indexToRemove, 1);
    window.tenArr = favArr
    favArr = window.tenArr
  //  localStorage.setItem("myFav", favArr.join(","));
}

  // Error occurred, handle it accordingly
  console.error('Error:', error);
rooms[0].style.display = "none";
   // alink.click()

 /*   if (window.proc > window.count){
        console.log ("proc  :"+ window.proc+ "  count:"+window.count)
        alink.click()
        return

    } */
    if (window.proc != 0 && window.proc > window.count){
        //window.proc = 0;
        window.tries ++;
       // alink.click()
        return

    }
     vidCall2()
    iframe.style.display = "block";const roomlistPaginationDiv = document.getElementById("roomlist_pagination");

if (roomlistPaginationDiv) {
  roomlistPaginationDiv.style.display = "none";
}
})
.finally(function () {


     setTimeout(() => {
document.body.style.overflow = "auto";
}, 3000); // 3000 milliseconds = 3 seconds

          if (window.proc > window.count){
         // alert(window.proc + ' '+ window.count)
 let rooms = aiframeDocument.querySelectorAll("ul.list > li");
                  for (let i = window.count+1; i <= window.proc; i++) {
                      rooms = aiframeDocument.querySelectorAll("ul.list > li");
  if (rooms[i]) {

    rooms[i].remove();
         if (rooms[i-1]) {
      rooms[i-1].remove();
      }
   // alert(window.proc + ' '+ window.count + ' xx   room ' + i + " removed");
    //  alert("Jjjj")
  }
}







      //  alink.click()
        return

    }
    iframe.style.display = "block";
     vidCall2()
    console.log("elements added: "+ window.proc + "  actual online users:  " + window.count)


    rooms[0].style.display = "none";
      // Continue to the next URL
    if (i === favArr.length - 1) {

console.log(window.clonex)
if (window.proc = 0){
 //alert("kk")
}


var xnum = window.count


       // if (window.post === false){
        if (window.clonex.length < 1) {

var iframe = document.getElementById("frm");
            iframe.style.display = "block";

// Get the iframe document or contentWindow document
var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

// Create a new <p> element
var messageElement = iframeDocument.createElement("p");
messageElement.style.fontWeight = "bold";
messageElement.style.fontSize = "15px";
messageElement.style.color = "red";
// Set the text content of the element
messageElement.textContent = "all models offline or an error occurred";

// Append the element to the iframe's body
iframeDocument.body.appendChild(messageElement);

 vidCall2()
                iframe.style.display = "block";
rooms[0].style.display = "none";

        }






    }



    return




    });




/*

                      setTimeout(function() {
               window.clonex = [];
          }, 1000)

*/







//rooms.forEach(room => room.remove());



 }


    }


else{
alink.innerText = "Following";
  var playerID = localStorage.getItem('playerID');
           let iframe = document.getElementById("frm");
            let linkTagValue = localStorage.getItem("linktag");
          link.innerText = "MODELS";
          if (linkTagValue === null || linkTagValue === undefined) {
            linkTagValue = "";
          }

          iframe.src = 'https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID='+playerID+'&tag='+linkTagValue.slice(1);


iframe.style.display = "none"; // Hide the iframe initially

iframe.onload = function() {
  // When the iframe content is loaded, show the iframe
  iframe.style.display = "block";
};

}


 }






    // Favorites Tab



    link.style.cursor = 'pointer';
    link.innerText = "MODELS";
    link.onclick = function() {



                 var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on' || toggleElement.textContent === 'Paused') {
 toggleElement.textContent = 'Auto off';
         toggleElement.style.color = '#ff0000';
    if (intervalId) {

      clearInterval(intervalId);
     // intervalId = null;
        vidCall2()


    }
    }
  }





        if (window.ctab == true){
        window.atab = true;}
        else{window.atab = false}
        window.alink = false;
           setTimeout(function() {
window.tries = 0
               window.tries2 = 0
}, 2000);
if (window.tries2 > 0){
                // link.click()
    //alert("j")
         return
        }
        window.tries2++;

      if (link.innerText === "FAVORITES") {
          alink.style.display = "none";
        let iframe = document.getElementById("frm");
        link.innerText = "MODELS";
        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        let ul = iframeDocument.createElement("ul");

        let favMod = localStorage.getItem("myFav");
        var favArr = favMod.split(",");
        let len = favArr.length;

        for (var i = 0; i < len; i++) {
          let li = iframeDocument.createElement("li");
          li.innerHTML = favArr[i];
          li.style.color = 'white';

          li.onclick = function() {
            if (confirm('Are you sure you want to delete ' + this.innerHTML.split(",")[0] + ' from Favourites?')) {
              var place = favArr.indexOf(this.innerHTML.split(",")[0]);
              favArr.splice(place, 1);
              localStorage.setItem("myFav", favArr);
              this.remove();
            } else {
              // Do nothing!
            }
          };

          li.style.cursor = 'pointer';
          li.onmouseover = function() {
            this.style.textDecoration = "line-through";
          };
          li.onmouseout = function() {
            this.style.textDecoration = "none";
          };

          ul.appendChild(li);
        }

    //    var playerID = localStorage.getItem('playerID');

        let button = document.createElement("button");
        button.innerText = "back";
        button.onclick = function() {
          let linkTagValue = localStorage.getItem("linktag");
          if (linkTagValue === null || linkTagValue === undefined) {
            linkTagValue = "";
          }
          iframe.src = 'https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID='+playerID+'&tag='+linkTagValue.slice(1);
        };

        iframeDocument.body.innerHTML = "";
        iframeDocument.body.appendChild(ul);
   //     iframeDocument.body.appendChild(button);

        return false; // Prevent default link navigation
      }

else if (document.cookie.indexOf("saveArrCookie") > -1) {
    window.n = undefined;
    let iframe = document.getElementById("frm");
    let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var input = iframeDocument.querySelector("input");
var ul = iframeDocument.querySelector("ul");
if (input && ul) {
  if (input) {
    input.style.display = "none";
  }
  if (ul) {
      iframe.style.display = "none";
    ul.style.display = "none";
  }
        let linkTagValue = localStorage.getItem("linktag");
          if (linkTagValue === null || linkTagValue === undefined) {
            linkTagValue = "";
          }
    let playerID = localStorage.getItem("playerID");
          iframe.src = 'https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID='+playerID+'&tag='+linkTagValue.slice(1);
     iframe.onload = function() {
         window.alink = false
         link.click()
    iframe.style.display = "block";
   // alink.click();
  };

        return
}






  // The "saveArrCookie" exists, retrieve its value and alert it
  var saveArrCookieValue = getCookie("saveArrCookie");
 // console.log("The 'saveArrCookie' exists! Data: " + saveArrCookieValue);
 //   let iframe = document.getElementById("frm");

       // alert(favArr)
     let aiframe = document.getElementById("frm");
     let aiframeDocument = aiframe.contentDocument || aiframe.contentWindow.document;
     let rooms = aiframeDocument.querySelectorAll("ul.list > li");
      let list = aiframeDocument.querySelectorAll('ul.list')

//aiframe.style.display = "none";


      for (let i = 1; i < rooms.length; i++) {
  rooms[i].remove();
      }

    var cookieData = getCookie("saveArrCookie");
var saveArr = cookieData ? JSON.parse(cookieData) : [];


    ////////////



    const buttons = rooms[0].querySelector('div[name="divbutn"]');
if (buttons) {
  rooms[0].removeChild(buttons);
}


//rooms[0].style.display = "none";

// rooms[i].appendChild(buttons);
// class="star-button"
clones = [];
       for (let i = 0; i < saveArr.length; i++) {

           let clone = rooms[0].cloneNode(true);


clone.style.display = "block";

         clone.querySelector('div.details').style.backgroundColor = "black"
           let names = clone.querySelector('div.title a')

           clone.querySelector('div.title a').style.color = "pink"
       clone.querySelector('div.title').style.borderBottomColor = "black"
      clone.style.borderColor = "black"
      clone.style.borderRadius = "0px"
      clone.style.margin = "2px"



           let deta = clone.querySelector('ul.subject');
if (deta !== null) {
  deta.remove();
}

let adeta = clone.querySelector('li.cams');
if (adeta !== null) {
  adeta.remove();
}
clones.push(clone);
window.n = undefined;


let bxr = window.vanum
var dynArrName5 = "clone" + bxr ;

      clone.querySelector('a').removeAttribute("href")

    clone.style.cursor = 'pointer'
           /*

rooms[i].querySelector('a').onclick = function () {if(window.i != undefined){let tmpOld = rooms[window.i].querySelector('div.title a'); let tmpDeets = rooms[window.i].querySelector('ul.subject'); tmpOld.style.color = "white"; tmpOld.style.fontWeight = "normal"; tmpDeets.style.color = "white"; tmpDeets.style.fontWeight = "normal";}; window.modelname = (this.getAttribute("name")); window.i = i; let tmpTemp = rooms[i].querySelector('div.title a'); globals.chat.postMessage(window.modelname); tmpTemp.style.color = "red"; tmpTemp.style.fontWeight = "normal"; let tmpDeets = rooms[i].querySelector('ul.subject'); tmpDeets.style.color = "red"; tmpDeets.style.fontWeight = "normal"

           */

   // clone.querySelector('a').onclick = function () {readMessage(saveArr[i])}

            clone.querySelector('a').onclick = function () {
                // main page
                 var favArr = favMod ? favMod.split(",") : [];
                   var result = vidLoad();
var vidArr3 = result.vidArr2;

                    if (vidArr3.length == 0){
                        var vidElement;
                        if (window.idd > 6 || window.idd == 0){window.idd = 1}
                     //    alert(window.idd)
                        switch (window.idd) {
    case 1:
                                 vidElement = document.getElementById(id);
                               // window.idd++

        break;
    case 2:
                                 vidElement = document.getElementById(id2);
                              //  window.idd++

        break;
    case 3:
                                vidElement = document.getElementById(id3);
                             //   window.idd++

        break;
    case 4:
                                vidElement = document.getElementById(id4);
                             //   window.idd++

        break;
    case 5:
                                vidElement = document.getElementById(id5);
                              //  window.idd++

        break;

    case 6:
                                vidElement = document.getElementById(id6);
                              //  window.idd = 1

        break;
    default:
                               // vidElement = document.getElementById(id);
                                vidElement = document.getElementById(id);
                               window.idd = 1
                           //    clone.querySelector('a').click()
                            //    return
        break;
}

//alert(vidElement.dataset.drop)
   var favMod = localStorage.getItem("myFav");
   favArr = favMod ? favMod.split(",") : [];

if (pinray.includes(vidElement.dataset.drop)) {
   // alert("nice  "+window.idd)
    if (window.idd == 6){

        window.idd = 1
        clone.querySelector('a').click()
        return;
    }

    const vidElement1 = document.getElementById(id);
     const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

for (let i = window.idd; i <= 6; i++) {
   // alert("nice2  "+window.idd)

    switch (i) {
        case 1:
            if (window.scan == false) {
            if (!pinray.includes(vidElement1.dataset.drop)) {
                vidElement1.style.display = 'none'
                window.scan = true;
                const plus = 1 - window.idd
                // window.idd = window.idd + plus
               //  window.idd++
                window.idd = 1


               // alert(111)
                 }
               // return
            }
            break;
        case 2:
             if (window.scan == false) {
            if (!pinray.includes(vidElement2.dataset.drop)) {
                vidElement2.style.display = 'none'
                window.scan = true;
                 const plus = 2 - window.idd
               //  window.idd = window.idd + plus
                 window.idd = 2
               //  alert(222)
                 }
               // return
            }
            break;
        case 3:
             if (window.scan == false) {
            if (!pinray.includes(vidElement3.dataset.drop)) {
                vidElement3.style.display = 'none'
                window.scan = true;
                 const plus = 3 - window.idd
              //   window.idd = window.idd + plus
                 window.idd = 3
                 //alert(333)
            }
               // return
            }
            break;
        case 4:
                  if (window.scan == false) {
            if (!pinray.includes(vidElement4.dataset.drop)) {
                vidElement4.style.display = 'none'
                window.scan = true;
                const plus = 4 - window.idd
               //  window.idd = window.idd + plus
                window.idd = 4
                 //     alert(444)
                 }
               // return
            }
            break;
        case 5:
                       if (window.scan == false) {
            if (!pinray.includes(vidElement5.dataset.drop)) {
                vidElement5.style.display = 'none'
                window.scan = true;
                const plus = 5 - window.idd
                // window.idd = window.idd + plus
                window.idd = 5
                        //   alert(555)
                 }
               // return
            }
            break;
        case 6:
                            if (window.scan == false) {
                              //  alert("nice3  "+window.idd)
                               // alert(vidElement6.dataset.drop)
            if (!pinray.includes(vidElement6.dataset.drop)) {
              //  alert("nice4  "+window.idd)
                vidElement6.style.display = 'none'
               // alert(666)
                 const plus = 6 - window.idd
                // alert(plus)
               //  window.idd = window.idd + plus
                 window.idd = 6
                window.scan = true;
               // return
                 }
            }
            break;
        default:
            break;
    }
}

   // window.idd++
  //   vidElement = document.getElementById(id6);
   //  vidElement.style.display = "none";
  //  clone.querySelector('a').click()
  //  return
}
                        if (window.scan == true){
//alert("found")

                           // window.idd = 1
                            window.idd++
                           window.scan = false;
                            clone.querySelector('a').click()

                            return
                        }

                        vidElement.style.display = "none";
                        window.idd++

//return
}
           /*     const player = videojs('my_video', {});
    const player2 = videojs('my_video2', {});
   if (player.muted() == false && player2.muted() == false) {
              return
          }*/


                window.ctab = true
                handleIframeScroll2()
               if (window[dynArrName5]) {
//alert("hi")
                     let myFav = localStorage.getItem('myFav')
                     if(window[dynArrName5][window.n]){
                     let name = window[dynArrName5][window.n].querySelector('div.title a').innerHTML


                   let tmpOld9 = window[dynArrName5][window.n].querySelector('div.title a')
                  // tmpOld9.style.color = "white";
                        if (myFav.includes(name)) {
                          tmpOld9.style.color = "pink";
                                }
                                else{
                          tmpOld9.style.color = "white";
                                }
                   }

}
                if(window.n != undefined){
                     result = vidLoad();
 vidArr3 = result.vidArr2;

if (vidArr3.length == 0){
                        var vidElement;
                        if (window.idd > 6 || window.idd == 0){window.idd = 1}
                     //    alert(window.idd)
                        switch (window.idd) {
    case 1:
                                 vidElement = document.getElementById(id);
                               // window.idd++

        break;
    case 2:
                                 vidElement = document.getElementById(id2);
                              //  window.idd++

        break;
    case 3:
                                vidElement = document.getElementById(id3);
                             //   window.idd++

        break;
    case 4:
                                vidElement = document.getElementById(id4);
                             //   window.idd++

        break;
    case 5:
                                vidElement = document.getElementById(id5);
                              //  window.idd++

        break;

    case 6:
                                vidElement = document.getElementById(id6);
                              //  window.idd = 1

        break;
    default:
                               // vidElement = document.getElementById(id);
                                vidElement = document.getElementById(id);
                               window.idd = 1
                           //    clone.querySelector('a').click()
                            //    return
        break;
}

//alert(vidElement.dataset.drop)
   var favMod = localStorage.getItem("myFav");
   favArr = favMod ? favMod.split(",") : [];

if (pinray.includes(vidElement.dataset.drop)) {
   // alert("nice  "+window.idd)
    if (window.idd == 6){

        window.idd = 1
        clone.querySelector('a').click()
        return;
    }

    const vidElement1 = document.getElementById(id);
     const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

for (let i = window.idd; i <= 6; i++) {
   // alert("nice2  "+window.idd)

    switch (i) {
        case 1:
            if (window.scan == false) {
            if (!pinray.includes(vidElement1.dataset.drop)) {
                vidElement1.style.display = 'none'
                window.scan = true;
                const plus = 1 - window.idd
                 window.idd = window.idd + plus
               //  window.idd++


               // alert(111)
                 }
               // return
            }
            break;
        case 2:
             if (window.scan == false) {
            if (!pinray.includes(vidElement2.dataset.drop)) {
                vidElement2.style.display = 'none'
                window.scan = true;
                 const plus = 2 - window.idd
                 window.idd = window.idd + plus
               //  alert(222)
                 }
               // return
            }
            break;
        case 3:
             if (window.scan == false) {
            if (!pinray.includes(vidElement3.dataset.drop)) {
                vidElement3.style.display = 'none'
                window.scan = true;
                 const plus = 3 - window.idd
                 window.idd = window.idd + plus
                 //alert(333)
            }
               // return
            }
            break;
        case 4:
                  if (window.scan == false) {
            if (!pinray.includes(vidElement4.dataset.drop)) {
                vidElement4.style.display = 'none'
                window.scan = true;
                const plus = 4 - window.idd
                 window.idd = window.idd + plus
                 //     alert(444)
                 }
               // return
            }
            break;
        case 5:
                       if (window.scan == false) {
            if (!pinray.includes(vidElement5.dataset.drop)) {
                vidElement5.style.display = 'none'
                window.scan = true;
                const plus = 5 - window.idd
                 window.idd = window.idd + plus
                        //   alert(555)
                 }
               // return
            }
            break;
        case 6:
                            if (window.scan == false) {
                              //  alert("nice3  "+window.idd)
                               // alert(vidElement6.dataset.drop)
            if (!pinray.includes(vidElement6.dataset.drop)) {
              //  alert("nice4  "+window.idd)
                vidElement6.style.display = 'none'
               // alert(666)
                 const plus = 6 - window.idd
                // alert(plus)
                 window.idd = window.idd + plus
                window.scan = true;
               // return
                 }
            }
            break;
        default:
            break;
    }
}

   // window.idd++
  //   vidElement = document.getElementById(id6);
   //  vidElement.style.display = "none";
  //  clone.querySelector('a').click()
  //  return
}
                        if (window.scan == true){
//alert("found")

                           // window.idd = 1
                            window.idd++
                           window.scan = false;
                            clone.querySelector('a').click()

                            return
                        }

                        vidElement.style.display = "none";
                        window.idd++

//return
}
                    let tmpOld = clones[window.n].querySelector('div.title a');
                                         let myFav = localStorage.getItem('myFav')
                                          let name = clones[window.n].querySelector('div.title a').innerHTML

                                         // tmpOld.style.color = "white";

                                            if (myFav.includes(name)) {
                          tmpOld.style.color = "pink";
                                }
                                else{
                          tmpOld.style.color = "white";
                                }

                                          tmpOld.style.fontWeight = "normal"; globals.chat.postMessage(readMessage(saveArr[i]));let tmpTemp = clone.querySelector('div.title a');

                                         tmpTemp.style.fontWeight = "normal";
                                          tmpTemp.style.color = "red";
                                          window.n = i;

                                         }


                else{
                    result = vidLoad();
 vidArr3 = result.vidArr2;

if (vidArr3.length == 0){
                        var vidElement;
                        if (window.idd > 6 || window.idd == 0){window.idd = 1}
                     //    alert(window.idd)
                        switch (window.idd) {
    case 1:
                                 vidElement = document.getElementById(id);
                               // window.idd++

        break;
    case 2:
                                 vidElement = document.getElementById(id2);
                              //  window.idd++

        break;
    case 3:
                                vidElement = document.getElementById(id3);
                             //   window.idd++

        break;
    case 4:
                                vidElement = document.getElementById(id4);
                             //   window.idd++

        break;
    case 5:
                                vidElement = document.getElementById(id5);
                              //  window.idd++

        break;

    case 6:
                                vidElement = document.getElementById(id6);
                              //  window.idd = 1

        break;
    default:
                               // vidElement = document.getElementById(id);
                                vidElement = document.getElementById(id);
                               window.idd = 1
                           //    clone.querySelector('a').click()
                            //    return
        break;
}

//alert(vidElement.dataset.drop)
   var favMod = localStorage.getItem("myFav");
   favArr = favMod ? favMod.split(",") : [];

if (pinray.includes(vidElement.dataset.drop)) {
   // alert("nice  "+window.idd)
    if (window.idd == 6){

        window.idd = 1
        clone.querySelector('a').click()
        return;
    }

    const vidElement1 = document.getElementById(id);
     const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

for (let i = window.idd; i <= 6; i++) {
   // alert("nice2  "+window.idd)

    switch (i) {
        case 1:
            if (window.scan == false) {
            if (!pinray.includes(vidElement1.dataset.drop)) {
                vidElement1.style.display = 'none'
                window.scan = true;
                const plus = 1 - window.idd
                 window.idd = window.idd + plus
               //  window.idd++


               // alert(111)
                 }
               // return
            }
            break;
        case 2:
             if (window.scan == false) {
            if (!pinray.includes(vidElement2.dataset.drop)) {
                vidElement2.style.display = 'none'
                window.scan = true;
                 const plus = 2 - window.idd
                 window.idd = window.idd + plus
               //  alert(222)
                 }
               // return
            }
            break;
        case 3:
             if (window.scan == false) {
            if (!pinray.includes(vidElement3.dataset.drop)) {
                vidElement3.style.display = 'none'
                window.scan = true;
                 const plus = 3 - window.idd
                 window.idd = window.idd + plus
                 //alert(333)
            }
               // return
            }
            break;
        case 4:
                  if (window.scan == false) {
            if (!pinray.includes(vidElement4.dataset.drop)) {
                vidElement4.style.display = 'none'
                window.scan = true;
                const plus = 4 - window.idd
                 window.idd = window.idd + plus
                 //     alert(444)
                 }
               // return
            }
            break;
        case 5:
                       if (window.scan == false) {
            if (!pinray.includes(vidElement5.dataset.drop)) {
                vidElement5.style.display = 'none'
                window.scan = true;
                const plus = 5 - window.idd
                 window.idd = window.idd + plus
                        //   alert(555)
                 }
               // return
            }
            break;
        case 6:
                            if (window.scan == false) {
                              //  alert("nice3  "+window.idd)
                               // alert(vidElement6.dataset.drop)
            if (!pinray.includes(vidElement6.dataset.drop)) {
              //  alert("nice4  "+window.idd)
                vidElement6.style.display = 'none'
               // alert(666)
                 const plus = 6 - window.idd
                // alert(plus)
                 window.idd = window.idd + plus
                window.scan = true;
               // return
                 }
            }
            break;
        default:
            break;
    }
}

   // window.idd++
  //   vidElement = document.getElementById(id6);
   //  vidElement.style.display = "none";
  //  clone.querySelector('a').click()
  //  return
}
                        if (window.scan == true){
//alert("found")

                           // window.idd = 1
                            window.idd++
                           window.scan = false;
                            clone.querySelector('a').click()

                            return
                        }

                        vidElement.style.display = "none";
                        window.idd++

//return
}

/*
                    const player = videojs('my_video', {});
    const player2 = videojs('my_video2', {});
   if (player.muted() == false && player2.muted() == false) {
              return
          }*/

                    window.n = i;
                    globals.chat.postMessage(readMessage(saveArr[i]));
                    let tmpTemp = clone.querySelector('div.title a')
                    tmpTemp.style.fontWeight = "normal";
                    tmpTemp.style.color = "red";
                }



            }


 let athumbnail = $(clone).find("> a img");

clone.querySelector('div.title span').innerHTML = ""

    names.innerHTML = saveArr[i]



   let buttons = document.createElement('div')
    buttons.setAttribute('name', 'divbutn');
    buttons.style.top = '2px'
    buttons.style.left = '2px'
    buttons.style.position = 'absolute'
    buttons.style.cursor = 'pointer'



    let blockButton = document.createElement('div')
    blockButton.style.paddingRight = "10px";
blockButton.style.paddingBottom = "10px";
    blockButton.classList.add('star-button');
           blockButton.setAttribute("name", saveArr[i])


const myFav = localStorage.getItem('myFav')


if (myFav.includes(saveArr[i])) {
    blockButton.innerHTML = '⭐';
    names.style.color = "pink"

    if(window.nowplaying === saveArr[i])
    {
        names.style.color = "purple"
    }
    else{}


}
else {
  blockButton.innerHTML = '✩'
names.style.color = "white"
         if(window.nowplaying === saveArr[i])
    {
        names.style.color = "purple"
    }
    else{}
}

blockButton.addEventListener('mouseover', () => {
    const myFav = localStorage.getItem('myFav')
  if (!myFav.includes(saveArr[i])) {
    blockButton.innerHTML = '⭐';
  }
});

 blockButton.addEventListener('mouseleave', () => {
     const myFav = localStorage.getItem('myFav')
  if (!myFav.includes(saveArr[i])) {
      blockButton.innerHTML = '✩'
  }



});



  blockButton.onclick = function () {
  var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : []; // Initialize favArr with an empty array if favMod is falsy

  if (!favArr.includes(saveArr[i])) {
    favArr.push(saveArr[i]);
    localStorage.setItem("myFav", favArr.join(","));
      window.tenArr = favArr
    blockButton.innerHTML = '⭐';


  } else {
    const index = favArr.indexOf(saveArr[i]);
    if (index !== -1) {
      favArr.splice(index, 1);
      localStorage.setItem("myFav", favArr.join(","));
        window.tenArr = favArr
      blockButton.innerHTML = '✩';

    }
  }
};



buttons.appendChild(blockButton)

clone.appendChild(buttons);



























     $(clone).css('height', '')
        $(athumbnail).attr("src", `https://cbjpeg.stream.highwebmedia.com/minifwap/${saveArr[i]}.jpg?f=${Date.now()}`)
let camLink = clone.querySelector('div.title a')
    camLink.setAttribute('target', '_blank')
     camLink.removeAttribute("href");
      camLink.onclick = function () {readMessage(favArr[i])}



   window.ntimer = setInterval(function(){
                // animate thumbnail
                $(athumbnail).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${saveArr[i]}.jpg?f=${Date.now()}`

            );
           }, 120000)

           $(clone).bind("mouseover", (event) => {
  // Show your tooltip here
});


       $(clone).bind("mouseenter", (event) => {

// Define the URL

var viewCount = '';


var url = "https://chaturbate.com/push_service/room_user_count/"+saveArr[i]+"/?presence_id=d5jdfxmaiue";
        const referer = "https://chaturbate.com/chloewildd/";

fetch(url, {
  method: "GET",
  headers: {
    "Referer": referer,
    "X-Requested-With": "XMLHttpRequest"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
const dataObject = JSON.parse(data);
const countValue = dataObject.count;
    viewCount = countValue; // Here, 'data' contains the response from the URL
  })
  .catch(error => {
   console.log("Fetch error: ", error);
  });
 url = "https://chaturbate.com/api/biocontext/"+saveArr[i]+"/";
 fetch(url)
  .then((response) => {
    // Check if the response status is OK (200)
    if (response.status === 200) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Now you can access the data
    clone.title = ("Views: "+ viewCount + "  Age: "+ data.display_age + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
    //console.log("Location: " + data.location);
  //  console.log("Real Name: " + data.real_name);
    // Add more properties as needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });




             var firstQ = 300,
              lastQ = firstQ * 1.2,
              origin = "center center",
              originX = "center",
              originY = "center";
            if (event.pageX < firstQ) {
              originX = "left";
            } else if (event.pageX > lastQ) {
              originX = "right";
            }
            if (event.pageY < $(document).innerHeight() / 4) {
              originY = "top";
            } else if (event.pageY > $(document).innerHeight() / 4) {
              originY = "bottom";
            }
            origin = originX + " " + originY

           $(clone)
                .css("transform-origin", origin)
                .css("transform", "translateX(0px) scale(1.5)")
                .css("z-index", "999")

           window.timer;
           window.timer = setInterval(function(){
                // animate thumbnail
                $(athumbnail).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${saveArr[i]}.jpg?f=${Date.now()}`

            );
           }, 500)})
      $(clone).bind("mouseleave", (event) => {clearInterval(window.timer);
        $(clone)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0");
              window.timer = undefined;
                                           })












          $(clone).on("mousewheel DOMMouseScroll", (event) => {

 $(clone)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0");
              window.timer = undefined;

});


//alert(favArr[i])
iframe.style.display = "none";
rooms[0].before(clone);


 if (i === saveArr.length - 1) {
rooms[0].style.display = "none";
rooms[0].remove()
    // alert('js')
     handleIframeScroll()

    // This condition checks if it's the last iteration
    setTimeout(() => {
      iframe.style.display = "block";
       // rooms[0].style.display = "none";

    }, 200);

  }

       }










    //////////
























}




        else {
       // alert("Ok");
          alink.style.display = "inline";
            var playerID = localStorage.getItem('playerID');
           let iframe = document.getElementById("frm");
            let linkTagValue = localStorage.getItem("linktag");
         // link.innerText = "FAVORITES"; OUTDATED
             link.innerText = "MODELS";
          if (linkTagValue === null || linkTagValue === undefined) {
            linkTagValue = "";
          }
          iframe.src = 'https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID='+playerID+'&tag='+linkTagValue.slice(1);


iframe.style.display = "none"; // Hide the iframe initially

iframe.onload = function() {
  //  alert("jj")
        const navElement = document.getElementById('nav');
const modelsLink = navElement.querySelector('#mdlink'); // Assuming you gave the link element the ID "mdlink"
window.alink = false
// Now you can click the modelsLink element
modelsLink.click();
  // When the iframe content is loaded, show the iframe
  iframe.style.display = "block";
};





      }

    };






        // Tags Tab






// Append the input element to the document body



      if (!localStorage.getItem("tagsArray")) {

let tagsArray = ["default","#18","#19","#asian","#bigboobs","#ebony","#mature","#latina","#milf","#hairy","#anal","#new","#squirt","#bbw","#milk","#smalltits","#teen","#skinny","#pantyhose","#feet","#bigass","#fuckmachine","#pregnant","#german","#deepthroat","#young","#mistress","#shy","#redhead","#french","#smoke","#british","#curvy","#bigpussylips","#cc","#indian","#ahegao","#natural","#pinay","#goth","#muscle","#cosplay","#nonude","#lovense","#bdsm","#blonde","#petite","#femdom","#heels","#daddy","#joi","#hairyarmpits","#dirty","#saliva","#latex","#bigclit","#puffynipples","#slave","#bigtits","#mommy","#sph","#lesbian","#submissive","#hairypussy","#stockings","#atm","#cute","#bignipples","#fit","#tattoo","#strapon","#ukraine","#cei","#findom","#chubby","#cuckold","#braces","#daddysgirl","#cum","#bush","#office","#dirtytalk","#italian","#anime","#slut","#humiliation","#flexible","#nasty","#dutch","#sissy","#blowjob","#leggings","#piercing","#footjob","#glasses","#arab","#pawg","#gaming","#tease","#spit","#twerk","#bbc","#dance","#longhair","#aussie","#shorthair","#fitness","#tall","#socks","#fetish","#pussy","#ass","#nonnude","#lush","#pvt","#bigpussy","#schoolgirl","#legs","#gamer","#colombia","#party","#turkish","#roleplay","#balloons","#slim","#russian","#cameltoe","#brunette","#student","#chastity","#hentai","#dildo","#leather","#kinky","#leagueoflegends","#horny","#messy","#goddess","#tomboy","#domi","#nylon","#wifematerial","#panties","#boots","#footfetish","#tiny","#armpits","#korean","#japanese","#valorant","#ssbbw","#creamy","#smoking","#naked","#smallboobs","#erotic","#asmr","#domination","#tattoos","#muscles","#abs","#pegging","#sexy","#shaved","#belly","#redhair","#dp","#bondage","#amputee","#creampie","#boobs","#athletic","#couple","#bigbelly","#longlegs","#piercings","#jeans","#bigcock","#tits","#wet","#sloppy","#bigdildo","#ginger","#porn","#cumshow","#sensual","#private","#ohmibod","#lingerie","#hugeboobs","#oil","#small","#nora","#asshole","#latin","#thick","#chat","#curly","#girlnextdoor","#dominatrix","#orgasm","#yoga","#yoga","#germany","#femboy","#bigtoys","#interactivetoy","#control","#love","#strip","#smoker","#black","#fat","#bigtoy","#masturbation","#college","#naughty","#dominant","#fuck","#naturaltits","#whore","#longtongue","#biglips","#english","#pornstar","#little","#tights","#naturalboobs","#masturbate","#hush","#master","#nipples","#colombiana","#american","#twink","#lovensecontrol","#toes","#talk","#soles","#edging","#pierced","#france","#canadian","#beauty","#nolush","#fingering","#dildoplay","#assplay","#makemecum","#chill","#tipgoal","#innocent","#mixed","#ink","#sub","#dom","#booty","#girl","#big","#bigboob","#recommended","#sex","#babe","#smile","#trimmed","#toys","#cutie","#seductive","#naturalgirls","#newgirl","#bigbutt","#thin","#bignaturalboobs","#tanlines","#flirt","#twerking","#blond","#nature","#show","#pierce","#beautiful","#pussyplay","#ride","#vacuum","#hot","#fingerass","#ridedildo","#play","#sexmachine","#creamypussy","#cowgirl","#colorhair","#teens","#me","#cream","#sweet","#nude","#splits","#wetpussy","#feets","#roll","#plug","#plug","#sport","#toy","#niceass","#voyeur","#foot","#spank","#talkdirty","#lushcontrol","#blueeyes","#brat","#pinkpussy","#password","#passion","#bj","#doggy","#african","#rust","#longnails","#blue","#wheel","#smiling","##","#creamycum","#sexyboobs","#sexygirl","#cuckolding","#latins","#hugetits","#skirt","#rollthedice","#curve","#newmodel","#hotgirl","#interactive","#privateshow","#sexytits","#nice","#girlfriendmaterial","#amateur","#fucking","#swimmingpool","#goodvibes","#rimworld","#emo","#showboobs","#phatass","#pvtopen","#single","#welcome","#blondegirl","#tickle","#bigsquirt","#snap","#hometogether","#smallbreasts","#sexyass","#showcum","#sneakers","#outside","#pink","#asia","#girls","#poledance","#milkyboobs","#secretary","#bigbooty","#singlemom","#freaky","#analtoys","#balls","#playful","#nomakeup","#gym","#sissification","#topless","#bisexual","#blondie","#cougar","#brackets","#hardnipples","#work","#tittyfuck","#obedient","#dress","#domi","#striptease","#smalltitties","#eyes","#moan","#hair","#rock","#feed","#littletits","#straight","#butt","#foreplay","#septum","#fullbush","#nipplepiercing","#dress","#rock","#wild","#penetration","#happy","#riding","#cougar","#brackets","#fountain","#balls","#sexylatina","#analtoys","#hornywife","#bigbreasts","#domi","#hotbody","#smallass","#dolce","#ready","#lovenselush","#hairyarmpit","#pvtshow","#hotpussy","#pvton","#busty","#funny","#bunny","#nudeinpvt","#hair","#single","#moan","#body","#spanks","#naturalgirl","#slime","#underwear","#blackhair","#fingers","#smart","#candy","#thickthighs","#butt","#spanking","#chatting","#model","#fullbush","#cutesmile","#exotic","#oilshow","#silly","#barbie","#bubblebutt","#shave","#feel","#joy","#bi","#talkative","#breasts","#lushon","#glass","#milfs","#hotmom","#uncut","#fuckass","#hetero","#double","#years","#medium","#vape","#breast","#classy","#gay","#bigdick","#curved","#facial","#bald","#sucktits","#tummy","#latino","#dominate","#sexyeyes","#messydeepthroat","#exercise","#pink","#vibe","#lovenseon","#today","#cfnm","#nakedshow","#finger","#gloves","#pinkhair","#home","#boob","#madure","#curves","#lesbians","#rubclit","#showfeet","#passwordshow","#darkprincess","#latinas","#vibe","#friend","#messydeepthroat","#pink","#lovenseon","#goals","#camcam","#flash","#singer","#feetfetish","#slender","#sweetheart","#fresh","#fatpussy","#crazy","#guitar","#relax","#shake","#teengirl","#fingerpussy","#sucknipples"]


let tagsArrayJSON = JSON.stringify(tagsArray);

  // Save the JSON string to localStorage
  localStorage.setItem("tagsArray", tagsArrayJSON);


}
      else{

          // Retrieve the JSON string from localStorage
var tagsArrayJSON = localStorage.getItem("tagsArray");

// Convert the JSON string back to an array
var tagsArray = JSON.parse(tagsArrayJSON);

         // alert(tagsArray)

      }


var tagsTab = document.createElement("li");
tagsTab.innerHTML = `<a style="color: pink; text-transform: capitalize; cursor: pointer;">TAGS</a>`;
tagsTab.onclick = function() {



                 var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];
    if (toggleElement.textContent === 'Auto on' || toggleElement.textContent === 'Paused') {
 toggleElement.textContent = 'Auto off';
         toggleElement.style.color = '#ff0000';
    if (intervalId) {

      clearInterval(intervalId);
    //  intervalId = null;
        vidCall2()


    }
    }
  }



    window.n = undefined
window.atab = true;
let rt = window.vanum - 1;

for (let i = rt; i >= 0; i--) {
  var dynArrEx2 = "clone" + i;

  // Check if the array exists and if the index is within bounds
  if (window[dynArrEx2] && i < window[dynArrEx2].length) {
      console.log("jkj")
    let objDel = window[dynArrEx2][i];
    window[dynArrEx2].splice(i, 1);
  }
}

   // link.style.display = "none";
   // alink.style.display = "none";

    // alink.innerText = "Following";
          const input = document.createElement('input');
    //input.style.position = 'fixed';
input.type = 'text';

    link.innerText = "MODELS";
  let iframe = document.getElementById("frm");
  let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  let ul = iframeDocument.createElement("ul");


input.addEventListener('input', function() {
  const searchTerm = input.value.toLowerCase();

  // Loop through the li elements and show/hide them based on the search term
  const liElements = ul.getElementsByTagName('li');
  for (let i = 0; i < liElements.length; i++) {
    const liText = liElements[i].textContent.toLowerCase();
    if (liText.includes(searchTerm)) {
      liElements[i].style.display = 'block';
    } else {
      liElements[i].style.display = 'none';
    }
  }
});

  tagsArray.forEach((tag) => {
    let li = iframeDocument.createElement("li");
    li.innerHTML = tag;
    li.style.color = "white";
    li.style.cursor = "pointer";


     var jordan = setInterval(function(){


const xgeta = li.getAttribute('attr');
if (xgeta == ''){




if(tag !== "default"){
   apiUrl = "https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=ypOeP&format=json&client_ip=172.70.54.110&tour=41Ea&limit=7&gender=f&tag="+tag.slice(1);}
      else{
            apiUrl = "https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=ypOeP&format=json&client_ip=172.70.54.110&tour=41Ea&limit=7&gender=f";
      }
//alert (apiUrl)

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(result => {
      // Push the data to imagescrape
      imagescrape.push(result.username);


        var imageUrls = [
'https://cbjpeg.stream.highwebmedia.com/stream?room='+result.username]

// Loop through the image URLs and create <img> elements
for (var i = 0; i < imageUrls.length; i++) {
  var img = document.createElement("img");

  // Set the source (URL) of the image
  img.src = imageUrls[i];
    img.style.marginRight = "15px";
    img.style.marginLeft = "15px";

  // Set the width and height of the image (e.g., 100px x 100px)
  img.width = 20; // Replace with your desired width
  img.height = 20; // Replace with your desired height

 img.onclick = function () {
      // alert(result.username)
           event.stopPropagation();

//readMessage(result.username)








       var favArr = favMod ? favMod.split(",") : [];
                   var result2 = vidLoad();
 var vidArr3 = result2.vidArr2;

                    if (vidArr3.length == 0){
                  //      alert("found")
//return

                        var vidElement;
                        if (window.idd > 6 || window.idd == 0){window.idd = 1}
                     //    alert(window.idd)
                        switch (window.idd) {
    case 1:
                                 vidElement = document.getElementById(id);
                               // window.idd++

        break;
    case 2:
                                 vidElement = document.getElementById(id2);
                              //  window.idd++

        break;
    case 3:
                                vidElement = document.getElementById(id3);
                             //   window.idd++

        break;
    case 4:
                                vidElement = document.getElementById(id4);
                             //   window.idd++

        break;
    case 5:
                                vidElement = document.getElementById(id5);
                              //  window.idd++

        break;

    case 6:
                                vidElement = document.getElementById(id6);
                              //  window.idd = 1

        break;
    default:
                               // vidElement = document.getElementById(id);
                                vidElement = document.getElementById(id);
                               window.idd = 1
                           //    clone.querySelector('a').click()
                            //    return
        break;
}

//alert(vidElement.dataset.drop)
   var favMod = localStorage.getItem("myFav");
   favArr = favMod ? favMod.split(",") : [];

if (pinray.includes(vidElement.dataset.drop)) {
   // alert("nice  "+window.idd)
    if (window.idd == 6){

        window.idd = 1
        img.click()
        return;
    }

    const vidElement1 = document.getElementById(id);
     const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

for (let i = window.idd; i <= 6; i++) {
   // alert("nice2  "+window.idd)

    switch (i) {
        case 1:
            if (window.scan == false) {
            if (!pinray.includes(vidElement1.dataset.drop)) {
                vidElement1.style.display = 'none'
                window.scan = true;
                const plus = 1 - window.idd
                // window.idd = window.idd + plus
               //  window.idd++
                window.idd = 1


               // alert(111)
                 }
               // return
            }
            break;
        case 2:
             if (window.scan == false) {
            if (!pinray.includes(vidElement2.dataset.drop)) {
                vidElement2.style.display = 'none'
                window.scan = true;
                 const plus = 2 - window.idd
               //  window.idd = window.idd + plus
                 window.idd = 2
               //  alert(222)
                 }
               // return
            }
            break;
        case 3:
             if (window.scan == false) {
            if (!pinray.includes(vidElement3.dataset.drop)) {
                vidElement3.style.display = 'none'
                window.scan = true;
                 const plus = 3 - window.idd
              //   window.idd = window.idd + plus
                 window.idd = 3
                 //alert(333)
            }
               // return
            }
            break;
        case 4:
                  if (window.scan == false) {
            if (!pinray.includes(vidElement4.dataset.drop)) {
                vidElement4.style.display = 'none'
                window.scan = true;
                const plus = 4 - window.idd
               //  window.idd = window.idd + plus
                window.idd = 4
                 //     alert(444)
                 }
               // return
            }
            break;
        case 5:
                       if (window.scan == false) {
            if (!pinray.includes(vidElement5.dataset.drop)) {
                vidElement5.style.display = 'none'
                window.scan = true;
                const plus = 5 - window.idd
                // window.idd = window.idd + plus
                window.idd = 5
                        //   alert(555)
                 }
               // return
            }
            break;
        case 6:
                            if (window.scan == false) {
                              //  alert("nice3  "+window.idd)
                               // alert(vidElement6.dataset.drop)
            if (!pinray.includes(vidElement6.dataset.drop)) {
              //  alert("nice4  "+window.idd)
                vidElement6.style.display = 'none'
               // alert(666)
                 const plus = 6 - window.idd
                // alert(plus)
               //  window.idd = window.idd + plus
                 window.idd = 6
                window.scan = true;
               // return
                 }
            }
            break;
        default:
            break;
    }
}

   // window.idd++
  //   vidElement = document.getElementById(id6);
   //  vidElement.style.display = "none";
  //  clone.querySelector('a').click()
  //  return
}
                        if (window.scan == true){
//alert("found")

                           // window.idd = 1
                            window.idd++
                           window.scan = false;
                            img.click()

                            return
                        }

                        vidElement.style.display = "none";
                        window.idd++

//return





                }


readMessage(result.username)


      }
       $(img).bind("mouseenter", (event) => {
             var firstQ = 300,
              lastQ = firstQ * 1.2,
              origin = "center center",
              originX = "center",
              originY = "center";
            if (event.pageX < firstQ) {
              originX = "left";
            } else if (event.pageX > lastQ) {
              originX = "right";
            }
            if (event.pageY < $(document).innerHeight() / 4) {
              originY = "top";
            } else if (event.pageY > $(document).innerHeight() / 4) {
              originY = "bottom";
            }
            origin = originX + " " + originY

           $(img)
                .css("transform-origin", origin)
                .css("transform", "translateX(0px) scale(5.5)")
                .css("z-index", "999")

           window.timer;
           window.timer = setInterval(function(){
                // animate thumbnail
                $(img).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${result.username}.jpg?f=${Date.now()}`

            );
           }, 500)})

      $(img).bind("mouseleave", (event) => {clearInterval(window.timer);
        $(img)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0");
              window.timer = undefined;
                                           })


  li.setAttribute('attr', result.username);

  // Append the <img> element to the <div>
  div.appendChild(img);
    img.onmouseover = function() {
        img.title = result.username

    }


}



    });
 li.appendChild(div);

       li.style.display = "flex";
      div.style.flex = "1";




})
     .catch(error => {
    li.setAttribute('attr', '');

    console.error(error);
     li.style.display = "none";
  })
  .finally(() => {
    // This code will execute regardless of success or failure of the fetch request
  //  alert(imagescrape);
  });








}




     },30000)

    li.onmouseover = function() {
      this.style.textDecoration = "underline";


const xgeta = li.getAttribute('attr');
if (xgeta == ''){




if(tag !== "default"){
   apiUrl = "https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=ypOeP&format=json&client_ip=172.70.54.110&tour=41Ea&limit=7&gender=f&tag="+tag.slice(1);}
      else{
            apiUrl = "https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=ypOeP&format=json&client_ip=172.70.54.110&tour=41Ea&limit=7&gender=f";
      }
//alert (apiUrl)

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(result => {
      // Push the data to imagescrape
      imagescrape.push(result.username);


        var imageUrls = [
'https://cbjpeg.stream.highwebmedia.com/stream?room='+result.username]

// Loop through the image URLs and create <img> elements
for (var i = 0; i < imageUrls.length; i++) {
  var img = document.createElement("img");

  // Set the source (URL) of the image
  img.src = imageUrls[i];
    img.style.marginRight = "15px";
    img.style.marginLeft = "15px";

  // Set the width and height of the image (e.g., 100px x 100px)
  img.width = 20; // Replace with your desired width
  img.height = 20; // Replace with your desired height

  img.onclick = function () {
      // alert(result.username)
           event.stopPropagation();

//readMessage(result.username)








       var favArr = favMod ? favMod.split(",") : [];
                   var result2 = vidLoad();
 var vidArr3 = result2.vidArr2;

                    if (vidArr3.length == 0){
                  //      alert("found")
//return

                        var vidElement;
                        if (window.idd > 6 || window.idd == 0){window.idd = 1}
                     //    alert(window.idd)
                        switch (window.idd) {
    case 1:
                                 vidElement = document.getElementById(id);
                               // window.idd++

        break;
    case 2:
                                 vidElement = document.getElementById(id2);
                              //  window.idd++

        break;
    case 3:
                                vidElement = document.getElementById(id3);
                             //   window.idd++

        break;
    case 4:
                                vidElement = document.getElementById(id4);
                             //   window.idd++

        break;
    case 5:
                                vidElement = document.getElementById(id5);
                              //  window.idd++

        break;

    case 6:
                                vidElement = document.getElementById(id6);
                              //  window.idd = 1

        break;
    default:
                               // vidElement = document.getElementById(id);
                                vidElement = document.getElementById(id);
                               window.idd = 1
                           //    clone.querySelector('a').click()
                            //    return
        break;
}

//alert(vidElement.dataset.drop)
   var favMod = localStorage.getItem("myFav");
   favArr = favMod ? favMod.split(",") : [];

if (pinray.includes(vidElement.dataset.drop)) {
   // alert("nice  "+window.idd)
    if (window.idd == 6){

        window.idd = 1
        img.click()
        return;
    }

    const vidElement1 = document.getElementById(id);
     const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

for (let i = window.idd; i <= 6; i++) {
   // alert("nice2  "+window.idd)

    switch (i) {
        case 1:
            if (window.scan == false) {
            if (!pinray.includes(vidElement1.dataset.drop)) {
                vidElement1.style.display = 'none'
                window.scan = true;
                const plus = 1 - window.idd
                // window.idd = window.idd + plus
               //  window.idd++
                window.idd = 1


               // alert(111)
                 }
               // return
            }
            break;
        case 2:
             if (window.scan == false) {
            if (!pinray.includes(vidElement2.dataset.drop)) {
                vidElement2.style.display = 'none'
                window.scan = true;
                 const plus = 2 - window.idd
               //  window.idd = window.idd + plus
                 window.idd = 2
               //  alert(222)
                 }
               // return
            }
            break;
        case 3:
             if (window.scan == false) {
            if (!pinray.includes(vidElement3.dataset.drop)) {
                vidElement3.style.display = 'none'
                window.scan = true;
                 const plus = 3 - window.idd
              //   window.idd = window.idd + plus
                 window.idd = 3
                 //alert(333)
            }
               // return
            }
            break;
        case 4:
                  if (window.scan == false) {
            if (!pinray.includes(vidElement4.dataset.drop)) {
                vidElement4.style.display = 'none'
                window.scan = true;
                const plus = 4 - window.idd
               //  window.idd = window.idd + plus
                window.idd = 4
                 //     alert(444)
                 }
               // return
            }
            break;
        case 5:
                       if (window.scan == false) {
            if (!pinray.includes(vidElement5.dataset.drop)) {
                vidElement5.style.display = 'none'
                window.scan = true;
                const plus = 5 - window.idd
                // window.idd = window.idd + plus
                window.idd = 5
                        //   alert(555)
                 }
               // return
            }
            break;
        case 6:
                            if (window.scan == false) {
                              //  alert("nice3  "+window.idd)
                               // alert(vidElement6.dataset.drop)
            if (!pinray.includes(vidElement6.dataset.drop)) {
              //  alert("nice4  "+window.idd)
                vidElement6.style.display = 'none'
               // alert(666)
                 const plus = 6 - window.idd
                // alert(plus)
               //  window.idd = window.idd + plus
                 window.idd = 6
                window.scan = true;
               // return
                 }
            }
            break;
        default:
            break;
    }
}

   // window.idd++
  //   vidElement = document.getElementById(id6);
   //  vidElement.style.display = "none";
  //  clone.querySelector('a').click()
  //  return
}
                        if (window.scan == true){
//alert("found")

                           // window.idd = 1
                            window.idd++
                           window.scan = false;
                            img.click()

                            return
                        }

                        vidElement.style.display = "none";
                        window.idd++

//return





                }


readMessage(result.username)


      }

       $(img).bind("mouseenter", (event) => {
             var firstQ = 300,
              lastQ = firstQ * 1.2,
              origin = "center center",
              originX = "center",
              originY = "center";
            if (event.pageX < firstQ) {
              originX = "left";
            } else if (event.pageX > lastQ) {
              originX = "right";
            }
            if (event.pageY < $(document).innerHeight() / 4) {
              originY = "top";
            } else if (event.pageY > $(document).innerHeight() / 4) {
              originY = "bottom";
            }
            origin = originX + " " + originY

           $(img)
                .css("transform-origin", origin)
                .css("transform", "translateX(0px) scale(5.5)")
                .css("z-index", "999")

           window.timer;
           window.timer = setInterval(function(){
                // animate thumbnail
                $(img).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${result.username}.jpg?f=${Date.now()}`

            );
           }, 500)

       })

      $(img).bind("mouseleave", (event) => {clearInterval(window.timer);
        $(img)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0");
              window.timer = undefined;
                                           })


  li.setAttribute('attr', result.username);

  // Append the <img> element to the <div>
  div.appendChild(img);
    img.onmouseover = function() {
        img.title = result.username

    }


}



    });




})
     .catch(error => {
    li.setAttribute('attr', '');

    console.error(error);
  })
  .finally(() => {
    // This code will execute regardless of success or failure of the fetch request
  //  alert(imagescrape);
  });

      li.appendChild(div);

       li.style.display = "flex";
      div.style.flex = "1";







}
        else {
         //   alert ("have")
var img = li.querySelectorAll("img");

            var randomIndex = Math.floor(Math.random() * img.length);

// Access the random image using the random index
 img = img[1];


             var firstQ = 300,
              lastQ = firstQ * 1.2,
              origin = "center center",
              originX = "center",
              originY = "center";
            if (event.pageX < firstQ) {
              originX = "left";
            } else if (event.pageX > lastQ) {
              originX = "right";
            }
            if (event.pageY < $(document).innerHeight() / 4) {
              originY = "top";
            } else if (event.pageY > $(document).innerHeight() / 4) {
              originY = "bottom";
            }
            origin = originX + " " + originY

           $(img)
                .css("transform-origin", origin)
                .css("transform", "translateX(0px) scale(5.5)")
                .css("z-index", "999")
            .css("margin-right", "50px");

           window.timer;
           window.timer = setInterval(function(){
                // animate thumbnail
                $(img).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${result.username}.jpg?f=${Date.now()}`

            );
           }, 500)








        }




    };
    li.onmouseout = function() {
      this.style.textDecoration = "none";
      var img = li.querySelectorAll("img");


        $(img)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0")
        .css("margin-right", "15px");
              window.timer = undefined;




    };
    li.onclick = function() {
        event.stopPropagation();
        link.innerText = "MODELS";
      let playerID = localStorage.getItem("playerID");
      if (tag === "default") {
input.value = '';
          window.ctab == false
          iframe.style.display = "none"; // Hide the iframe initially

iframe.onload = function() {
    window.alink = false
    window.ctab == false
link.click()
  // When the iframe content is loaded, show the iframe
  iframe.style.display = "block";
};
        iframe.src = `https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID=${playerID}`;
          input.value = '';
      } else {
input.value = '';
 const index2 = tagsArray.indexOf("default");
 const index = tagsArray.indexOf(tag);
    if (index !== -1) {
      tagsArray.splice(index, 1);
        tagsArray.splice(index2, 1);
      tagsArray.unshift(tag);
        tagsArray.unshift("default");


    // Convert the reordered tagsArray to a JSON string
    const tagsArrayJSON = JSON.stringify(tagsArray);

    // Save the reordered tagsArray back to localStorage
    localStorage.setItem("tagsArray", tagsArrayJSON);




    }





          iframe.style.display = "none"; // Hide the iframe initially

iframe.onload = function() {
    alink.style.display = "inline";
    link.click()
  // When the iframe content is loaded, show the iframe
  iframe.style.display = "block";
};

input.value = '';
          window.alink = false

        iframe.src = `https://chaturbate.com/tours/3/?p=1&c=150&gender=f&playerID=${playerID}&tag=${tag.slice(1)}`;
      }
    };
       //runName2(tag.slice(1))

    /*   var apiUrl = "https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=ypOeP&format=json&client_ip=172.70.54.110&tour=41Ea&limit=3&tag="+tag.slice(1);
      console.log(apiUrl)
//alert (apiUrl)

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(result => {
        //  alert(result.username)
        imagescrape.push(result.username);
          console.log("imaggeeeeeeeee  :  "+imagescrape)
      });
    })
    .catch(error => console.log("wtfff"));

*/
       var apiUrl
        imagescrape.length = 0;
if(tag !== "default"){
   apiUrl = "https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=ypOeP&format=json&client_ip=172.70.54.110&tour=41Ea&limit=7&gender=f&tag="+tag.slice(1);}
      else{
            apiUrl = "https://chaturbate.com/api/public/affiliates/onlinerooms/?wm=ypOeP&format=json&client_ip=172.70.54.110&tour=41Ea&limit=7&gender=f";
      }
//alert (apiUrl)

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(result => {
      // Push the data to imagescrape
      imagescrape.push(result.username);


        var imageUrls = [
'https://cbjpeg.stream.highwebmedia.com/stream?room='+result.username]

// Loop through the image URLs and create <img> elements
for (var i = 0; i < imageUrls.length; i++) {
  var img = document.createElement("img");

  // Set the source (URL) of the image
  img.src = imageUrls[i];
    img.style.marginRight = "15px";
    img.style.marginLeft = "15px";

  // Set the width and height of the image (e.g., 100px x 100px)
  img.width = 20; // Replace with your desired width
  img.height = 20; // Replace with your desired height

   img.onclick = function () {
      // alert(result.username)
           event.stopPropagation();

//readMessage(result.username)








       var favArr = favMod ? favMod.split(",") : [];
                   var result2 = vidLoad();
 var vidArr3 = result2.vidArr2;

                    if (vidArr3.length == 0){
                  //      alert("found")
//return

                        var vidElement;
                        if (window.idd > 6 || window.idd == 0){window.idd = 1}
                     //    alert(window.idd)
                        switch (window.idd) {
    case 1:
                                 vidElement = document.getElementById(id);
                               // window.idd++

        break;
    case 2:
                                 vidElement = document.getElementById(id2);
                              //  window.idd++

        break;
    case 3:
                                vidElement = document.getElementById(id3);
                             //   window.idd++

        break;
    case 4:
                                vidElement = document.getElementById(id4);
                             //   window.idd++

        break;
    case 5:
                                vidElement = document.getElementById(id5);
                              //  window.idd++

        break;

    case 6:
                                vidElement = document.getElementById(id6);
                              //  window.idd = 1

        break;
    default:
                               // vidElement = document.getElementById(id);
                                vidElement = document.getElementById(id);
                               window.idd = 1
                           //    clone.querySelector('a').click()
                            //    return
        break;
}

//alert(vidElement.dataset.drop)
   var favMod = localStorage.getItem("myFav");
   favArr = favMod ? favMod.split(",") : [];

if (pinray.includes(vidElement.dataset.drop)) {
   // alert("nice  "+window.idd)
    if (window.idd == 6){

        window.idd = 1
        img.click()
        return;
    }

    const vidElement1 = document.getElementById(id);
     const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

for (let i = window.idd; i <= 6; i++) {
   // alert("nice2  "+window.idd)

    switch (i) {
        case 1:
            if (window.scan == false) {
            if (!pinray.includes(vidElement1.dataset.drop)) {
                vidElement1.style.display = 'none'
                window.scan = true;
                const plus = 1 - window.idd
                // window.idd = window.idd + plus
               //  window.idd++
                window.idd = 1


               // alert(111)
                 }
               // return
            }
            break;
        case 2:
             if (window.scan == false) {
            if (!pinray.includes(vidElement2.dataset.drop)) {
                vidElement2.style.display = 'none'
                window.scan = true;
                 const plus = 2 - window.idd
               //  window.idd = window.idd + plus
                 window.idd = 2
               //  alert(222)
                 }
               // return
            }
            break;
        case 3:
             if (window.scan == false) {
            if (!pinray.includes(vidElement3.dataset.drop)) {
                vidElement3.style.display = 'none'
                window.scan = true;
                 const plus = 3 - window.idd
              //   window.idd = window.idd + plus
                 window.idd = 3
                 //alert(333)
            }
               // return
            }
            break;
        case 4:
                  if (window.scan == false) {
            if (!pinray.includes(vidElement4.dataset.drop)) {
                vidElement4.style.display = 'none'
                window.scan = true;
                const plus = 4 - window.idd
               //  window.idd = window.idd + plus
                window.idd = 4
                 //     alert(444)
                 }
               // return
            }
            break;
        case 5:
                       if (window.scan == false) {
            if (!pinray.includes(vidElement5.dataset.drop)) {
                vidElement5.style.display = 'none'
                window.scan = true;
                const plus = 5 - window.idd
                // window.idd = window.idd + plus
                window.idd = 5
                        //   alert(555)
                 }
               // return
            }
            break;
        case 6:
                            if (window.scan == false) {
                              //  alert("nice3  "+window.idd)
                               // alert(vidElement6.dataset.drop)
            if (!pinray.includes(vidElement6.dataset.drop)) {
              //  alert("nice4  "+window.idd)
                vidElement6.style.display = 'none'
               // alert(666)
                 const plus = 6 - window.idd
                // alert(plus)
               //  window.idd = window.idd + plus
                 window.idd = 6
                window.scan = true;
               // return
                 }
            }
            break;
        default:
            break;
    }
}

   // window.idd++
  //   vidElement = document.getElementById(id6);
   //  vidElement.style.display = "none";
  //  clone.querySelector('a').click()
  //  return
}
                        if (window.scan == true){
//alert("found")

                           // window.idd = 1
                            window.idd++
                           window.scan = false;
                            img.click()

                            return
                        }

                        vidElement.style.display = "none";
                        window.idd++

//return





                }


readMessage(result.username)


      }


     $(img).bind("mouseenter", (event) => {
             var firstQ = 300,
              lastQ = firstQ * 1.2,
              origin = "center center",
              originX = "center",
              originY = "center";
            if (event.pageX < firstQ) {
              originX = "left";
            } else if (event.pageX > lastQ) {
              originX = "right";
            }
            if (event.pageY < $(document).innerHeight() / 4) {
              originY = "top";
            } else if (event.pageY > $(document).innerHeight() / 4) {
              originY = "bottom";
            }
            origin = originX + " " + originY

           $(img)
                .css("transform-origin", origin)
                .css("transform", "translateX(0px) scale(5.5)")
                .css("z-index", "999")

           window.timer;
           window.timer = setInterval(function(){
                // animate thumbnail
                $(img).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${result.username}.jpg?f=${Date.now()}`

            );
           }, 500)})

      $(img).bind("mouseleave", (event) => {clearInterval(window.timer);
        $(img)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0");
              window.timer = undefined;
                                           })




  li.setAttribute('attr', result.username);

  // Append the <img> element to the <div>
  div.appendChild(img);
    img.onmouseover = function() {
        img.title = result.username

    }



}



    });

    li.appendChild(div);

       li.style.display = "flex";
      div.style.flex = "1";

  })
  .catch(error => {
    li.setAttribute('attr', '');

    console.error(error);
     li.style.display = "none";
  })
  .finally(() => {
    // This code will execute regardless of success or failure of the fetch request
  //  alert(imagescrape);
  });




    ul.appendChild(li);
      var div = document.createElement("div");


      
  });



  iframeDocument.body.innerHTML = "";
   // input.style.position = "absolute";
   // ul.style.position = "absolute";
     iframeDocument.body.appendChild(input);
  iframeDocument.body.appendChild(ul);
input.focus();

  // Show the iframe
  iframe.style.display = "block";

  // Hide the button (if it exists) - only relevant for 'Favorites' mode
  let button = iframeDocument.querySelector("button");
  if (button) {
    button.style.display = "none";
  }

  // Prevent default link navigation
  return false;
};




var toggleElement = document.createElement('div');
toggleElement.textContent = 'Auto off';
toggleElement.className = 'toggle-text';
toggleElement.style.display = "inline-block";
toggleElement.style.marginLeft = "12px";
toggleElement.style.right = "4px";
toggleElement.style.cursor = 'pointer';
toggleElement.style.color = '#ff0000';



toggleElement.addEventListener('click', function () {
    if (intervalId) {
      clearInterval(intervalId);}
  if (toggleElement.textContent === 'Auto off') {
      triggerFunction();
    toggleElement.textContent = 'Auto on';
       toggleElement.style.color = '#00ff00';
      vidCall3()
    intervalId = setInterval(triggerFunction, 60000);
  } else {
    toggleElement.textContent = 'Auto off';
    if (intervalId) {

      clearInterval(intervalId);}
        toggleElement.style.color = '#ff0000';
    //  intervalId = null;
        vidCall2()
    }

});






sub_nav.appendChild(tagsTab);
      window.alink = false
 link.click()
    blackTab.appendChild(link);
      blackTab.appendChild(alink);
      blackTab.appendChild(blink);
      blackTab.appendChild(toggleElement);
    sub_nav.appendChild(blackTab);

   // sub_nav.appendChild(plusButton());
  }

}


function makeid(length) {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}



function refreshCam(div) {
  div.innerHTML = ''
  div.classList.add('free')
  console.dir(div)
  let model_name = div.getAttribute("name")
  div.removeAttribute("name")
  globals.http.open('GET', `https://chaturbate.com/${model_name}`, true)
  globals.http.setRequestHeader("Content-type","application/x-www-form-urlencoded")
  globals.http.onload = function() { addCam(globals.http.responseText, div, model_name) }
  globals.http.send()
}

function removeCam(div) {
  div.innerHTML = ''
  div.classList.add('free')
  div.removeAttribute("name")
  div.appendChild(plusButton())
  cleanCams()
}

function plusButton() {
  let b = document.createElement('button')
  b.innerHTML = 'ADD'
    b.style.marginTop = "5px"
  b.classList.add('plusButton')
  b.addEventListener('click', e => {
      e.preventDefault()
      status(); get(); if(oncams.length >= 1){ $( function() {let mycams = oncams.toString().replaceAll(",", ",   ");})}
      let user_data = prompt(`Enter cb model name:`, window.geek +'    '+ oncams)
      if (user_data !== null) {
        user_data = user_data.trim()
        if (user_data.includes('/') || user_data.includes('chaturbate.com')) {
          user_data = user_data.split('/').filter(Boolean).pop()
        }
            globals.http.open('GET', `https://chaturbate.com/${user_data}`, true)
  globals.http.setRequestHeader("Content-type","application/x-www-form-urlencoded")
  globals.http.onload = function() {


      let resp = globals.http.responseText;
   let pos1 = resp.search('https://edge');
  let pos2 = resp.search('.m3u8')+5;
  let stream = '';
  if (resp.includes('.m3u8')) { stream = resp.substring(pos1, pos2).replace(/\\u002D/g, '-') }
  else { stream = 'no data' }
     let poster = 'https://cbjpeg.stream.highwebmedia.com/stream?room='+user_data+'&f='+Math.random()
  const player = videojs('my_video', {});
    player.poster('https://cbjpeg.stream.highwebmedia.com/stream?room='+window.cbmod)
     player.player_.handleTechClick_ = function() {};
      document.getElementById('frm').style.width = "620px"; $('div#mainDiv').hide("slide",{direction:'right'}, 1000); $('div#mainDiv').show("slide",{direction:'left'}, 1000);
    player.ready(function() {
     player.src({
                src: stream,
                type: 'application/x-mpegURL'

            });
          });
    let uppercase = String(user_data).toUpperCase()

document.querySelector('li.broadcast-yourself').innerHTML = uppercase
document.querySelector('li.broadcast-yourself').style.color ="white";
document.querySelector('li.broadcast-yourself').onclick = function () {

    //window.open("https://chaturbate.com/"+user_data, 'newwindow',
                //         'width=1200,height=600');




   /* var ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", "https://google.com");
            ifrm.style.width = "1620px";
            ifrm.style.height = "880px";
            document.body.appendChild(ifrm);*/

//window.scrollTo(0, globalScrollPosition);

                                                   }
document.querySelector('li.broadcast-yourself').style.cursor = "pointer"
  }
  globals.http.send()
      }
    })
  return b
}













function topButtons(name) {
  let top = document.createElement('div')
  top.classList.add('topFrame')
  let r = document.createElement('button')
  r.innerHTML = name+' ??'
  r.classList.add('topButton')
  let x = document.createElement('button')
  x.innerHTML = '?'
  x.classList.add('topButton')
  top.appendChild(r)
  r.addEventListener('click', e => {
    e.preventDefault()
    refreshCam(e.path[2])
  })
  top.appendChild(x)
  x.addEventListener('click', e => {
    e.preventDefault()
    removeCam(e.path[2])
  })
  return top
}

function hasDuplicate(arr, element) {
  const count = arr.filter(item => item === element).length;
  return count > 1;
}

function removeDuplicates(arr, element) {
  const index = arr.indexOf(element);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

async function countResponseCode200(favArr) {
    window.count;
  favMod = localStorage.getItem("myFav");
  favArr = favMod ? favMod.split(",") : [];
  const validCount = await Promise.all(
    favArr.map(async (value) => {
      const url = 'https://cbjpeg.stream.highwebmedia.com/stream?room=' + value;

      try {
        const response = await fetch(url);
        if (response.status === 200) {
          return 1;
            godray.push(value)
        } else {
          return 0;
        }
      } catch (error) {
        // Handle any error that may occur during the fetch (e.g., network issues)
        console.error('Error fetching URL:', url, error);
        return 0;
      }
    })
  );

  return validCount.reduce((total, count) => total + count, 0);
}

async function callCountResponseCode200() {
  try {
    const result = await countResponseCode200(favArr);
      window.count;
window.count = result
    console.log('Number of values with response code 200:', result);
    return result; // Optional: If you want to return the result to the caller
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optional: If you want to re-throw the error to the caller
  }
}

callCountResponseCode200()






function processUserscrape(userscrape, dynArr, dynArr2) {
    if (window.alink == true)
   {
      console.log("not allowed")
       return
   }

     let iframe = document.getElementById("frm");
  let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
         let rooms = iframeDocument.querySelectorAll("ul.list > li");
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const iframeContentHeight = iframeDoc.body.scrollHeight;
  const scrollPosition = iframe.contentWindow.pageYOffset || iframeDoc.documentElement.scrollTop;
let myFav = localStorage.getItem('myFav');
    // End has been reached
    rooms[0].style.display = "block";
const buttons = rooms[0].querySelector('div[name="divbutn"]');
if (buttons) {
  rooms[0].removeChild(buttons);
}

    let clone;
    let cloneVal
  //  let clone = rooms[0].cloneNode(true);
    for (let i = 0; i < rooms.length; i++) {
    let cloName = clones[i].querySelector('div.title a').innerHTML;
     let myFav = localStorage.getItem('myFav')
if (!myFav.includes(cloName)) {
    clone = rooms[i].cloneNode(true);
    cloneVal = i
   // alert(cloneVal + '  '+ clones[cloneVal].querySelector('div.title a').innerHTML)

    break;
}
        else {
            continue;
        }
}




    setTimeout(function() {
      // alert(userscrape)
    }, 5000);

    for (let i = 0; i < userscrape.length; i++) {
      let clone = rooms[cloneVal].cloneNode(true);
      let names = clone.querySelector('div.title a')
      names.innerHTML = userscrape[i]
      let athumbnail = $(clone).find("> a img");
      $(athumbnail).attr("src", `https://cbjpeg.stream.highwebmedia.com/minifwap/${userscrape[i]}.jpg?f=${Date.now()}`)

        $(athumbnail).on("click", function() {
readMessage(names.innerHTML)
});

      let camLink = clone.querySelector('div.title a')
      camLink.setAttribute('target', '_blank')
      camLink.removeAttribute("href");
   /*
      camLink.onclick = function () {
        readMessage(names.innerHTML)
      }
*/

//alert(dynArr)
        dynArr.push(clone);

let xr = window.vanum
var dynArrName3 = "clone" + xr ;

const index = dynArr.indexOf(clone);

const resultx = index + 1;
         clone.querySelector('a').onclick = function () {
 var favArr = favMod ? favMod.split(",") : [];
                   var result = vidLoad();
 var vidArr3 = result.vidArr2;

                    if (vidArr3.length == 0){
                  //      alert("found")
//return

                        var vidElement;
                        if (window.idd > 6 || window.idd == 0){window.idd = 1}
                     //    alert(window.idd)
                        switch (window.idd) {
    case 1:
                                 vidElement = document.getElementById(id);
                               // window.idd++

        break;
    case 2:
                                 vidElement = document.getElementById(id2);
                              //  window.idd++

        break;
    case 3:
                                vidElement = document.getElementById(id3);
                             //   window.idd++

        break;
    case 4:
                                vidElement = document.getElementById(id4);
                             //   window.idd++

        break;
    case 5:
                                vidElement = document.getElementById(id5);
                              //  window.idd++

        break;

    case 6:
                                vidElement = document.getElementById(id6);
                              //  window.idd = 1

        break;
    default:
                               // vidElement = document.getElementById(id);
                                vidElement = document.getElementById(id);
                               window.idd = 1
                           //    clone.querySelector('a').click()
                            //    return
        break;
}

//alert(vidElement.dataset.drop)
   var favMod = localStorage.getItem("myFav");
   favArr = favMod ? favMod.split(",") : [];

if (pinray.includes(vidElement.dataset.drop)) {
   // alert("nice  "+window.idd)
    if (window.idd == 6){

        window.idd = 1
        clone.querySelector('a').click()
        return;
    }

    const vidElement1 = document.getElementById(id);
     const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);

for (let i = window.idd; i <= 6; i++) {
   // alert("nice2  "+window.idd)

    switch (i) {
        case 1:
            if (window.scan == false) {
            if (!pinray.includes(vidElement1.dataset.drop)) {
                vidElement1.style.display = 'none'
                window.scan = true;
                const plus = 1 - window.idd
                // window.idd = window.idd + plus
               //  window.idd++
                window.idd = 1


               // alert(111)
                 }
               // return
            }
            break;
        case 2:
             if (window.scan == false) {
            if (!pinray.includes(vidElement2.dataset.drop)) {
                vidElement2.style.display = 'none'
                window.scan = true;
                 const plus = 2 - window.idd
               //  window.idd = window.idd + plus
                 window.idd = 2
               //  alert(222)
                 }
               // return
            }
            break;
        case 3:
             if (window.scan == false) {
            if (!pinray.includes(vidElement3.dataset.drop)) {
                vidElement3.style.display = 'none'
                window.scan = true;
                 const plus = 3 - window.idd
              //   window.idd = window.idd + plus
                 window.idd = 3
                 //alert(333)
            }
               // return
            }
            break;
        case 4:
                  if (window.scan == false) {
            if (!pinray.includes(vidElement4.dataset.drop)) {
                vidElement4.style.display = 'none'
                window.scan = true;
                const plus = 4 - window.idd
               //  window.idd = window.idd + plus
                window.idd = 4
                 //     alert(444)
                 }
               // return
            }
            break;
        case 5:
                       if (window.scan == false) {
            if (!pinray.includes(vidElement5.dataset.drop)) {
                vidElement5.style.display = 'none'
                window.scan = true;
                const plus = 5 - window.idd
                // window.idd = window.idd + plus
                window.idd = 5
                        //   alert(555)
                 }
               // return
            }
            break;
        case 6:
                            if (window.scan == false) {
                              //  alert("nice3  "+window.idd)
                               // alert(vidElement6.dataset.drop)
            if (!pinray.includes(vidElement6.dataset.drop)) {
              //  alert("nice4  "+window.idd)
                vidElement6.style.display = 'none'
               // alert(666)
                 const plus = 6 - window.idd
                // alert(plus)
               //  window.idd = window.idd + plus
                 window.idd = 6
                window.scan = true;
               // return
                 }
            }
            break;
        default:
            break;
    }
}

   // window.idd++
  //   vidElement = document.getElementById(id6);
   //  vidElement.style.display = "none";
  //  clone.querySelector('a').click()
  //  return
}
                        if (window.scan == true){
//alert("found")

                           // window.idd = 1
                            window.idd++
                           window.scan = false;
                            clone.querySelector('a').click()

                            return
                        }

                        vidElement.style.display = "none";
                        window.idd++

//return

}
handleIframeScroll2()

                if(window.n != undefined){ //alert(dynArr.length)

//alert(window.n)



                                  if (window[dynArrName3]) {
  let myFav = localStorage.getItem('myFav')
  let name = window[dynArrName3][window.n].querySelector('div.title a').innerHTML
let tmpOld4 = window[dynArrName3][window.n].querySelector('div.title a')
//tmpOld4.style.color = "white";

                                      if (myFav.includes(name)) {
                          tmpOld4.style.color = "pink";
                                }
                                else{
                          tmpOld4.style.color = "white";
                                }
}

                    //alert(window.n + '  ' + dynArr[window.n].querySelector('div.title a').innerHTML)
                    /*alert(i+'   '+clonesf[window.n].querySelector('div.title a'))*/globals.chat.postMessage(readMessage(names.innerHTML));let tmpTemp = clone.querySelector('div.title a');
//dynArr[window.n].querySelector('div.title a').style.color = "blue";

                   if(dynArr2[window.n]){


 let myFav = localStorage.getItem('myFav')
 let name = dynArr2[window.n].querySelector('div.title a').innerHTML
                       let tmpOld2 = dynArr2[window.n].querySelector('div.title a'); //tmpOld2.style.color = "white";
                       if (myFav.includes(name)) {
                          tmpOld2.style.color = "pink";
                                }
                                else{
                          tmpOld2.style.color = "white";
                                }
                     //  let tmpOld3 = alert(dynArr[i].querySelector('div.title a').innerHTML); //tmpOld3.style.color = "white";

                    }

if(dynArr[window.n]){
     let myFav = localStorage.getItem('myFav')
       let name = dynArr[window.n].querySelector('div.title a').innerHTML
                                        let tmpOld = dynArr[window.n].querySelector('div.title a'); //tmpOld.style.color = "white";
                                          tmpOld.style.fontWeight = "normal";
     if (myFav.includes(name)) {
                          tmpOld.style.color = "pink";
                                }
                                else{
                          tmpOld.style.color = "white";
                                }
}
else{
    //alert('k')
for (let i = 0; i < dynArr.length; i++) {
     let myFav = localStorage.getItem('myFav')
  let name = dynArr[i].querySelector('div.title a').innerHTML
  let tmpOld = dynArr[i].querySelector('div.title a');
 // tmpOld.style.color = "white";
    if (myFav.includes(name)) {
                          tmpOld.style.color = "pink";
                                }
                                else{
                          tmpOld.style.color = "white";
                                }
}
  //  let tmpOld = alert(rooms[window.n].querySelector('div.title a').innerHTML); //tmpOld.style.color = "white";
                                         // tmpOld.style.fontWeight = "normal";
}


                                         tmpTemp.style.fontWeight = "normal";
                                          tmpTemp.style.color = "red";
                                          window.n = i;





                                         }


                else{


                 //   alert(dynArr.length +'  '+ i)
                    window.n = i;
                    globals.chat.postMessage(readMessage(names.innerHTML));
                    let tmpTemp = clone.querySelector('div.title a')
                    tmpTemp.style.fontWeight = "normal";
                    tmpTemp.style.color = "red";



                }



            }
















      let deta = clone.querySelector('ul.subject');
      if (deta !== null) {
        deta.remove();
      }

      let adeta = clone.querySelector('li.cams');
      if (adeta !== null) {
        adeta.remove();
      }




         $(clone).bind("mouseenter", (event) => {



                var viewCount = '';


var url = "https://chaturbate.com/push_service/room_user_count/"+names.innerHTML+"/?presence_id=d5jdfxmaiue";
        const referer = "https://chaturbate.com/chloewildd/";

fetch(url, {
  method: "GET",
  headers: {
    "Referer": referer,
    "X-Requested-With": "XMLHttpRequest"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
const dataObject = JSON.parse(data);
const countValue = dataObject.count;
    viewCount = countValue; // Here, 'data' contains the response from the URL
  })
  .catch(error => {
   console.log("Fetch error: ", error);
  });
 url = "https://chaturbate.com/api/biocontext/"+names.innerHTML+"/";
 fetch(url)
  .then((response) => {
    // Check if the response status is OK (200)
    if (response.status === 200) {
      // Parse the JSON response
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Now you can access the data
    clone.title = ("Views: "+ viewCount + "  Age: "+ data.display_age + "  Followers: " + data.follower_count + "  Location: " + data.location +"  Real Name: " + data.real_name );
    //console.log("Location: " + data.location);
  //  console.log("Real Name: " + data.real_name);
    // Add more properties as needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });




             var firstQ = 300,
              lastQ = firstQ * 1.2,
              origin = "center center",
              originX = "center",
              originY = "center";
            if (event.pageX < firstQ) {
              originX = "left";
            } else if (event.pageX > lastQ) {
              originX = "right";
            }
            if (event.pageY < $(document).innerHeight() / 4) {
              originY = "top";
            } else if (event.pageY > $(document).innerHeight() / 4) {
              originY = "bottom";
            }
            origin = originX + " " + originY

           $(clone)
                .css("transform-origin", origin)
                .css("transform", "translateX(0px) scale(1.5)")
                .css("z-index", "999")

           window.timer;
           window.timer = setInterval(function(){
                // animate thumbnail
                $(athumbnail).attr(
                  "src",
                  `https://cbjpeg.stream.highwebmedia.com/minifwap/${names.innerHTML}.jpg?f=${Date.now()}`

            );
           }, 500)})
      $(clone).bind("mouseleave", (event) => {clearInterval(window.timer);
        $(clone)
                .css("transform-origin", "center center")
                .css("transform", "translateX(0px) scale(1)")
                .css("z-index", "0");
              window.timer = undefined;
                                           })















   let buttons = document.createElement('div')
    buttons.setAttribute('name', 'divbutn');
    buttons.style.top = '2px'
    buttons.style.left = '2px'
    buttons.style.position = 'absolute'
    buttons.style.cursor = 'pointer'



    let blockButton = document.createElement('div')
        blockButton.style.paddingRight = "10px";
blockButton.style.paddingBottom = "10px";
    blockButton.classList.add('star-button');
           blockButton.setAttribute("name", names.innerHTML)


let myFav = localStorage.getItem('myFav')


if (myFav.includes(names.innerHTML)) {
    blockButton.innerHTML = '⭐';
    names.style.color = "pink"

    if(window.nowplaying === saveArr[i])
    {
        names.style.color = "purple"
    }
    else{}


}
else {
  blockButton.innerHTML = '✩'
names.style.color = "white"
         if(window.nowplaying === names.innerHTML)
    {
        names.style.color = "purple"
    }
    else{}
}

blockButton.addEventListener('mouseover', () => {
    const myFav = localStorage.getItem('myFav')
  if (!myFav.includes(names.innerHTML)) {
    blockButton.innerHTML = '⭐';
  }
});

 blockButton.addEventListener('mouseleave', () => {
     const myFav = localStorage.getItem('myFav')
  if (!myFav.includes(names.innerHTML)) {
      blockButton.innerHTML = '✩'
  }



});



  blockButton.onclick = function () {
  var favMod = localStorage.getItem("myFav");
  var favArr = favMod ? favMod.split(",") : []; // Initialize favArr with an empty array if favMod is falsy

  if (!favArr.includes(names.innerHTML)) {
    favArr.push(names.innerHTML);
    localStorage.setItem("myFav", favArr.join(","));
      window.tenArr = favArr
    blockButton.innerHTML = '⭐';


  } else {
    const index = favArr.indexOf(names.innerHTML);
    if (index !== -1) {
      favArr.splice(index, 1);
      localStorage.setItem("myFav", favArr.join(","));
        window.tenArr = favArr
      blockButton.innerHTML = '✩';

    }
  }
};



buttons.appendChild(blockButton)

clone.appendChild(buttons);























    //  $(clone).on("mousewheel DOMMouseScroll", handleMousewheel);
//rooms[rooms.length - 1].remove();
       //  alert(cloneVal + '  '+ rooms[rooms.length - 1].querySelector('div.title a').innerHTML)
      rooms[rooms.length - 1].after(clone);
        clones[cloneVal].remove


      if (i === userscrape.length - 1) {
        window.pend += 150;
          // rooms[0].style.display = "none";
        // alert(window.pend)
        runName(window.pend);
         // handleIframeScroll
          //iframe.removeEventListener("scroll", handleIframeScroll);
          //iframe.addEventListener("scroll", handleIframeScroll());
         // rooms[0].style.display = "none";
        //  rooms[0].style.display = "none";
      }
    }
}


function handleIframeScroll() {
    if (window.alink == true && window.atab == true)
   {
       console.log("not allowed2")
       return
   }

    let iframe = document.getElementById("frm");
    if (iframe) {
         let iframeWindow = iframe.contentWindow;
        iframeWindow.addEventListener("scroll", function () {

    if (window.alink == true)
   {
       console.log("not allowed here")
       return
   }

     let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    let myFav = localStorage.getItem('myFav');

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const iframeContentHeight = iframeDoc.body.scrollHeight;
  const scrollPosition = iframe.contentWindow.pageYOffset || iframeDoc.documentElement.scrollTop;

               if (scrollPosition + iframe.clientHeight >= iframeContentHeight) {

  // dynArr
 let rooms = iframeDocument.querySelectorAll("ul.list > li");
var dynArrName = "clone" + window.vanum;
let roomsz = Array.from(iframeDocument.querySelectorAll("ul.list > li"));
let rr = window.vanum -1
var dynArrName2 = "clone" + rr ;
window[dynArrName] = [];
                   window.vanum++;
                   if (window[dynArrName2]) {
                      // alert(dynArrName2)
                        processUserscrape(userscrape, window[dynArrName], window[dynArrName2])
                        for (let i = 0; i <= rr; i++) {
                            //alert("dd")
                           var dynArrEx = "clone" + i ;
                            let myFav = localStorage.getItem('myFav')

                            for (let i = 0; i < window[dynArrEx].length; i++) {
                                let name = window[dynArrEx][i].querySelector('div.title a').innerHTML
                                let myFav = localStorage.getItem('myFav')
let tmpOldx = window[dynArrEx][i].querySelector('div.title a');
                              if (myFav.includes(name)) {
                          tmpOldx.style.color = "pink";
                                }
                                else{
                          tmpOldx.style.color = "white";
                                }

                                let tmpOldxx = rooms[i].querySelector('div.title a');
                                 name = rooms[i].querySelector('div.title a').innerHTML
                                 myFav = localStorage.getItem('myFav')
                                if (myFav.includes(name)) {
                          tmpOldxx.style.color = "pink";
                                }
                                if (name == window.nowplaying) {
                          tmpOldxx.style.color = "red";
                                }
                                else{
                          tmpOldxx.style.color = "white";
                                }
                            }

}
                   }
                   else {
                   //  alert(rooms.length)
  processUserscrape(userscrape, window[dynArrName], roomsz)
                   }
  }

 });
}

}






function handleIframeScroll2() {
const navElement2 = document.getElementById('nav');
const modelsLink2 = navElement2.querySelector('#mxlink');
  if (1+1 == 2)
   {
       console.log("not allowed3")
       return
   }



    let iframe = document.getElementById("frm");
    if (iframe) {
         let iframeWindow = iframe.contentWindow;


     let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    let myFav = localStorage.getItem('myFav');

   // const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  // const iframeContentHeight = iframeDoc.body.scrollHeight;
//  const scrollPosition = iframe.contentWindow.pageYOffset || iframeDoc.documentElement.scrollTop;


  // dynArr
 let rooms = iframeDocument.querySelectorAll("ul.list > li");
//var dynArrName = "clone" + window.vanum;
//let roomsz = Array.from(iframeDocument.querySelectorAll("ul.list > li"));
let rr = window.vanum -1
var dynArrName2 = "clone" + rr ;
var dynArrName8 = "clone" + window.vanum ;
//window[dynArrName] = [];
                 //  window.vanum++;

        if (window.n != undefined && window[dynArrName2] && window[dynArrName2][window.n]) {
          //  alert(window[dynArrName2][window.n].querySelector('div.title a').innerHTML + '   '+window.nowplaying)
             let myFav = localStorage.getItem('myFav')
               let name = window[dynArrName2][window.n].querySelector('div.title a').innerHTML
             let tmpOldxn = window[dynArrName2][window.n].querySelector('div.title a');
if (myFav.includes(name) || name === window.nowplaying) {
  if (myFav.includes(name)) {
    tmpOldxn.style.color = "pink";
  }
  if (name === window.nowplaying) {
      window.oldplaying = name
    tmpOldxn.style.color = "white";
  }
} else {
  tmpOldxn.style.color = "white";
}
        }
                   if (window[dynArrName2]) {
                      // alert(dynArrName2)
                       // processUserscrape(userscrape, window[dynArrName], window[dynArrName2])
                        for (let i = 0; i <= rr; i++) {
                            //alert("dd")
                           var dynArrEx = "clone" + i ;
                            let myFav = localStorage.getItem('myFav')

                            for (let i = 0; i < window[dynArrEx].length; i++) {
                                let name = window[dynArrEx][i].querySelector('div.title a').innerHTML
                                let myFav = localStorage.getItem('myFav')
let tmpOldx = window[dynArrEx][i].querySelector('div.title a');
                         if (myFav.includes(name) || name === window.nowplaying) {
  if (myFav.includes(name)) {
    tmpOldx.style.color = "pink";
  }
  if (name === window.nowplaying && name !== window.oldplaying) {
     // alert(name)
    tmpOldx.style.color = "red";
  }
} else {
  tmpOldx.style.color = "white";
}


                                let tmpOldxx = rooms[i].querySelector('div.title a');
                                 name = rooms[i].querySelector('div.title a').innerHTML
                                 myFav = localStorage.getItem('myFav')
            if (myFav.includes(name) || name === window.nowplaying) {
  if (myFav.includes(name)) {
    tmpOldxx.style.color = "pink";
  }
  if (name === window.nowplaying) {
    tmpOldxx.style.color = "red";
  }
} else {
  tmpOldxx.style.color = "white";
}

                            }

}
                   }
                   else {
                   //  alert(rooms.length)
 // processUserscrape(userscrape, window[dynArrName], roomsz)
                   }
  }


}



window.onload = function() {
 document.querySelector('div#mainDiv').innerHTML = `
  <video style="width: 40%; height: 50%; top: 0; left: 0; object-fit: fill; position: fixed;" id="${id}" class="video-js" playsinline controls></video>
  <video style="width: 40%; height: 50%; top: 50%; left: 0; object-fit: fill; position: fixed;" id="${id2}" class="video-js" playsinline controls></video>
  <video style="width: 40%; height: 50%; top: 0; left: 40%; object-fit: fill; position: fixed;" id="${id3}" class="video-js" playsinline controls></video>
  <video style="width: 40%; height: 50%; top: 50%; left: 40%; object-fit: fill; position: fixed;" id="${id4}" class="video-js" playsinline controls></video>
    <video style="width: 40%; height: 50%; top: 0; left: 0; object-fit: fill; position: fixed;" id="${id5}" class="video-js" playsinline controls></video>
  <video style="width: 40%; height: 50%; top: 50%; left: 0; object-fit: fill; position: fixed;" id="${id6}" class="video-js" playsinline controls></video>
`;


  //   document.querySelector('div#mainDiv').innerHTML = `<video style="width: 80%; height: 50%; top: 0; left: 0; position: fixed;" id="${id}"  class="video-js"  > <video style="width: 80%; height: 50%; top: 0; left: 0; position: fixed;" id="${id}"  class="video-js"  >`
      const player = videojs(id, { controlBar: {volumePanel: { inline: false}, fullscreenToggle: false}, controls: true, autoplay: true, top: 499,})
       player.player.handleTechClick_ = function() {};
    player.PlayToggle = function() {};
player.muted(true)


    const player1 = videojs(id, { controlBar: {volumePanel: { inline: false}, fullscreenToggle: false}, controls: true, autoplay: true, top: 499,})
       player.player.handleTechClick_ = function() {};
    player.PlayToggle = function() {};
player.muted(true)



    const player2 = videojs(id2, { controlBar: {volumePanel: { inline: false}, fullscreenToggle: false}, controls: true, autoplay: true, top: 499,})
       player2.player.handleTechClick_ = function() {};
    player2.PlayToggle = function() {};
player2.muted(true)


        const player3 = videojs(id3, { controlBar: {volumePanel: { inline: false}, fullscreenToggle: false}, controls: true, autoplay: true, top: 499,})
       player3.player.handleTechClick_ = function() {};
    player3.PlayToggle = function() {};
player3.muted(true)


        const player4 = videojs(id4, { controlBar: {volumePanel: { inline: false}, fullscreenToggle: false}, controls: true, autoplay: true, top: 499,})
       player4.player.handleTechClick_ = function() {};
    player4.PlayToggle = function() {};
player4.muted(true)


         const player5 = videojs(id5, { controlBar: {volumePanel: { inline: false}, fullscreenToggle: false}, controls: true, autoplay: true, top: 499,})
       player5.player.handleTechClick_ = function() {};
    player5.PlayToggle = function() {};
player5.muted(true)


         const player6 = videojs(id6, { controlBar: {volumePanel: { inline: false}, fullscreenToggle: false}, controls: true, autoplay: true, top: 499,})
       player6.player.handleTechClick_ = function() {};
    player6.PlayToggle = function() {};
player6.muted(true)

hideAllVideosExcept()
mainscroll()
    document.querySelector('li.broadcast-yourself').id = 'downcase';
const originalElement = document.querySelector('li.broadcast-yourself');
    ( document.querySelector('li.broadcast-yourself').innerHTML = "")
    document.querySelector('li.broadcast-yourself').style.cursor = "pointer"
const cloneElement = originalElement.cloneNode(true);
    const cloneElement2 = originalElement.cloneNode(true);
    const cloneElement3 = originalElement.cloneNode(true);
     const cloneElement4 = originalElement.cloneNode(true);
     const cloneElement5 = originalElement.cloneNode(true);
const parentElement = originalElement.parentNode;

cloneElement.id = 'upcase';
    cloneElement2.id = 'oldcase';
    cloneElement3.id = 'newcase';

     cloneElement4.id = 'freecase';
    cloneElement5.id = 'lockcase';
   // cloneElement.innerHTML = "x";
   // document.getElementById('upcase').style.cursor = "pointer"
   parentElement.appendChild(cloneElement5);
         parentElement.appendChild(cloneElement4);
parentElement.appendChild(cloneElement);
    parentElement.appendChild(cloneElement2);
    parentElement.appendChild(cloneElement3);

 //   parentElement.appendChild(cloneElement2);












 const vidElement = document.getElementById(id);
    const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);
/*
var countix;
countix = 1;

document.addEventListener('keydown', function(event) {
   const result = vidLoad();
const vidArrs = result.vidArr;
        if (vidArrs.length < 6) {return};
    if (event.keyCode === 38 || event.key === 'ArrowUp') {
//alert(vidArrs.length +'     array,  countix = '+countix)
    console.log (countix)
    if (countix > vidArrs.length){
        countix = 1;
    }
    window.fullscreen = true;

         // alert(countix)
           //vidCall(cval)
        vidCall3()

vidElement2.style.zIndex = '100';
vidElement3.style.zIndex = '100';
vidElement4.style.zIndex = '100';
vidElement5.style.zIndex = '100';
vidElement6.style.zIndex = '100';
                   player1.tech().el().style.height = '100%';
player1.tech().el().style.width = '100%';
player1.tech().el().style.top = '0%'
player1.tech().el().style.left = '0%';
player1.controlBar.el().style.display = 'none';

        vidElement.style.top = '0%'

           vidElement.style.width = '125%'
           vidElement.style.height = '100%'

           player1.el().style.top = '90%';
           player1.el().style.left = '0%';
           player1.el().style.width = '120%';

            player1.controlBar.el().style.display = 'none';

           countix = 1

  }
     if (event.keyCode === 40 || event.key === 'ArrowDown') {
    window.fullscreen = false;
    countix++;
         vidElement.style.zIndex = '100';
vidElement2.style.zIndex = '100';
vidElement3.style.zIndex = '100';
vidElement4.style.zIndex = '100';
vidElement5.style.zIndex = '100';
vidElement6.style.zIndex = '100';


         vidElement.style.width = '33.3%'
           vidElement.style.height = '50%'
         vidElement2.style.width = '33.3%'
           vidElement2.style.height = '50%'
         vidElement3.style.width = '33.3%'
           vidElement3.style.height = '50%'
         vidElement4.style.width = '33.3%'
           vidElement4.style.height = '50%'
         vidElement5.style.width = '33.3%'
           vidElement5.style.height = '50%'
         vidElement6.style.width = '33.3%'
           vidElement6.style.height = '50%'

      const result = vidLoad();
    var vidArrx;
vidArrx = result.vidArr;
      vidCall3()
  }

if ((event.keyCode === 39 || event.key === 'ArrowRight') && window.fullscreen === true) {
     const result = vidLoad();
const vidArrs = result.vidArr;
//alert(vidArrs.length +'     array,  countix = '+countix)
    console.log (countix)
    if (countix > vidArrs.length){
      //  alert ('end')
        window.fullscreen = false;
    countix = 1;
         vidElement.style.zIndex = '100';
vidElement2.style.zIndex = '100';
vidElement3.style.zIndex = '101';
vidElement4.style.zIndex = '102';
vidElement5.style.zIndex = '103';
vidElement6.style.zIndex = '104';
        //vidCall(vidArrx.length)

        vidElement.style.width = '33.3%'
           vidElement.style.height = '50%'
         vidElement2.style.width = '33.3%'
           vidElement2.style.height = '50%'
         vidElement3.style.width = '33.3%'
           vidElement3.style.height = '50%'
         vidElement4.style.width = '33.3%'
           vidElement4.style.height = '50%'
         vidElement5.style.width = '33.3%'
           vidElement5.style.height = '50%'
         vidElement6.style.width = '33.3%'
           vidElement6.style.height = '50%'
        vidCall3()
        return

    }
var widthString;
    var heightString;
   switch (countix) {
  case 1:
vidCall3()
         rbutton.click()



    break;
  case 2:

          // alert(countix)
           vidCall3()

 rbutton.click()

    break;
  case 3:

                    vidCall3()

 rbutton.click()

    break;
  case 4:
           vidCall3()


 rbutton.click()

    break;
  case 5:
vidCall3()

 rbutton.click()


    break;
  case 6:
vidCall3()

            rbutton.click()
    break;
  default:

    break;

}
 countix++

  }
});


*/
























triggerFunction()
//invisible()
var uniqueCokray = cokray.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

cokray.length = 0;
cokray.push(...uniqueCokray);

let sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
if (cokray.length > 0){
for (var i = 0; i < cokray.length; i++) {
  (function(index) {
    sleep(1500 * index).then(() => {
      readMessage(cokray[index]);
    });
  })(i);
/*if (i == cokray.length-1){
   setTimeout(function(){ visible()}, 10000)

}*/

}
}




}









var intervalId;


function invisible(){
    const player1 = videojs('my_video', {});
const player2 = videojs('my_video2', {});
const player3 = videojs('my_video3', {});
const player4 = videojs('my_video4', {});
const player5 = videojs('my_video5', {});
const player6 = videojs('my_video6', {});


const xElement1 = player1.tech().el();
const xElement2= player2.tech().el();
const xElement3 = player3.tech().el();
const xElement4 = player4.tech().el();
const xElement5 = player5.tech().el();
const xElement6 = player6.tech().el();



    xElement1.style.opacity = '0'
    xElement2.style.opacity = '0'
    xElement3.style.opacity = '0'
    xElement4.style.opacity = '0'
    xElement5.style.opacity = '0'
    xElement6.style.opacity = '0'
}


function visible(){
    const player1 = videojs('my_video', {});
const player2 = videojs('my_video2', {});
const player3 = videojs('my_video3', {});
const player4 = videojs('my_video4', {});
const player5 = videojs('my_video5', {});
const player6 = videojs('my_video6', {});


const xElement1 = player1.tech().el();
const xElement2= player2.tech().el();
const xElement3 = player3.tech().el();
const xElement4 = player4.tech().el();
const xElement5 = player5.tech().el();
const xElement6 = player6.tech().el();



    xElement1.style.opacity = '1'
    xElement2.style.opacity = '1'
    xElement3.style.opacity = '1'
    xElement4.style.opacity = '1'
    xElement5.style.opacity = '1'
    xElement6.style.opacity = '1'
}




function triggerFunction(numx) {
   //  alert("ok")
      const vidElement1 = document.getElementById(id);
    const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);


    var recentMod = null
    var cookiesArray = document.cookie.split(";");

for (var i = 1; i <= 6; i++) {
    var modelName = "model" + i + "=";
    for (var j = 0; j < cookiesArray.length; j++) {
        var cookie = cookiesArray[j].trim();
        if (cookie.indexOf(modelName) === 0) {
            var cookieValue = decodeURIComponent(cookie.substring(modelName.length));
            if (cookieValue !== null) {
              //  alert(vidElement1.style.display)
                //alert(vidElement2.style.display)
              //  vidElement1.style.display = 'block';
              //  vidElement2.style.display = 'block';
              //  vidElement3.style.display = 'block';
               // vidElement4.style.display = 'block';
               // vidElement5.style.display = 'block';
               // vidElement6.style.display = 'block';
               //  alert(vidElement1.style.display)
              //  alert(vidElement2.style.display)
               // vidCall2()
                cokray.push(cookieValue)

               //



            }
            break;
        }
    }
}


                 recentMod = true


  //  alert(cokray)

    var vidElement;
    var { vidArr: vidArr2, playArr: playArr2, vidArr2: vidArr3 } = vidLoad();
    if (numx !== undefined){
          if (userscrape && userscrape.length > 0) {
  //  const num = ++numx;
 // console.log(numx + '   kk')
  //  const vidElement = document.getElementById(id);
         vidElement = vidArr3[vidArr3.length-2]

    vidElement.style.display = 'none'
              if (userscrape[numx] !== undefined){
    readMessage(userscrape[numx]);}
              else {
                   const num = Math.floor(Math.random() * userscrape.length);
                   readMessage(userscrape[num]);
                  runName(0);

              }
     // runName(0);

          }}
    else{
       // alert("bruh")
  if (userscrape && userscrape.length > 0) {
    const num = Math.floor(Math.random() * userscrape.length);
   // const vidElement = document.getElementById(id);
      //alert(vidArr3.length)
       vidElement = vidArr3[vidArr3.length-2]
      if (vidArr3.length == 1){vidElement = vidArr3[vidArr3.length-2] }
    vidElement.style.display = 'none'
      if (recentMod !== null) {
         // alert("ok")
        //  $('div#mainDiv').hide
          for (i = 0; i <= 6; i++) {
           //readMessage(recentmod);
          const num = Math.floor(Math.random() * userscrape.length);
        //  alert(userscrape[num])
              if (cokray.length < 6){
              cokray.push(userscrape[num]) }
                //   readMessage(userscrape[num]);
          }
          runName(0);
      }
      else{
          const num = Math.floor(Math.random() * userscrape.length);
                  // readMessage(userscrape[num]);
        //  alert("ok")
    readMessage(userscrape[num]);
      runName(0);
  }
  }
     // vidCall3()
  }
}

function mainscroll (){



  window.addEventListener('wheel', function(e) {


          if (window.alink == true && window.atab == true)
   {
       console.log("not allowed2")
       return
   }

    if (window.alink == true)
   {
       console.log("not allowed here")
       return
   }

          const iframe = document.getElementById("frm");
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const iframeHeight = iframe.clientHeight;

    const deltaY = e.deltaY;
    const iframeContentHeight = iframeDoc.body.scrollHeight;
    const iframeMaxScroll = iframeContentHeight - iframeHeight;
    const newIframeScrollTop = Math.max(0, Math.min(iframe.contentWindow.pageYOffset + deltaY, iframeMaxScroll));
    iframe.contentWindow.scrollTo(0, newIframeScrollTop);

       let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const roomlistPaginationDiv = iframeDocument.getElementById("roomlist_pagination");

if (roomlistPaginationDiv) {
  roomlistPaginationDiv.style.display = "none";
}


          const scrollPosition = iframe.contentWindow.pageYOffset || iframeDoc.documentElement.scrollTop;

    if (scrollPosition + iframe.clientHeight >= iframeContentHeight - 1) {

 //  if (iframe.contentWindow.pageYOffset >= iframeMaxScroll) {
//alert("ok")
  // dynArr
          iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
 let rooms = iframeDocument.querySelectorAll("ul.list > li");
var dynArrName = "clone" + window.vanum;
let roomsz = Array.from(iframeDocument.querySelectorAll("ul.list > li"));
let rr = window.vanum -1
var dynArrName2 = "clone" + rr ;
window[dynArrName] = [];
                   window.vanum++;
                   if (window[dynArrName2]) {
                      // alert(dynArrName2)
                        processUserscrape(userscrape, window[dynArrName], window[dynArrName2])
                        for (let i = 0; i <= rr; i++) {
                            //alert("dd")
                           var dynArrEx = "clone" + i ;
                            let myFav = localStorage.getItem('myFav')

                            for (let i = 0; i < window[dynArrEx].length; i++) {
                                let name = window[dynArrEx][i].querySelector('div.title a').innerHTML
                                let myFav = localStorage.getItem('myFav')
let tmpOldx = window[dynArrEx][i].querySelector('div.title a');
                              if (myFav.includes(name)) {
                          tmpOldx.style.color = "pink";
                                }
                                else{
                          tmpOldx.style.color = "white";
                                }

                                let tmpOldxx = rooms[i].querySelector('div.title a');
                                 name = rooms[i].querySelector('div.title a').innerHTML
                                 myFav = localStorage.getItem('myFav')
                                if (myFav.includes(name)) {
                          tmpOldxx.style.color = "pink";
                                }
                                if (name == window.nowplaying) {
                          tmpOldxx.style.color = "red";
                                }
                                else{
                          tmpOldxx.style.color = "white";
                                }
                            }

}
                   }
                   else {
                   //  alert(rooms.length)
  processUserscrape(userscrape, window[dynArrName], roomsz)
                   }
  }

  //  e.preventDefault();
  });



















}

function hideAllVideosExcept(...idsToKeepVisible) {
    const vidElement = document.getElementById(id);
    const vidElement2 = document.getElementById(id2);
    const vidElement3 = document.getElementById(id3);
    const vidElement4 = document.getElementById(id4);
    const vidElement5 = document.getElementById(id5);
    const vidElement6 = document.getElementById(id6);


 if (vidElement.style.display === "block" && vidElement2.style.display === "block" && vidElement3.style.display === "block" && vidElement4.style.display === "block") {
  return;
}



  videoIds.forEach((videoId) => {
    const videoElement = document.getElementById(videoId);
    if (videoElement) {
      if (idsToKeepVisible.includes(videoId)) {
        // If the ID is in the list of IDs to keep visible, show the video
        videoElement.style.display = 'block';
      } else {
        // Otherwise, hide the video
        videoElement.style.display = 'none';
      }
    }
  });
}

 document.addEventListener('keydown', function(event) {
           var numx;
           var toggleElements = document.getElementsByClassName('toggle-text');
  if (toggleElements.length > 0) {
    var toggleElement = toggleElements[0];




 if (event.keyCode === 32 || event.key === ' ') {
    if (intervalId) {
      clearInterval(intervalId);
     // intervalId = null;
    }
   //  alert(toggleElement.textContent)

    if (toggleElement.textContent == 'Paused') {
         toggleElement.textContent = 'Auto on';
      toggleElement.style.color = '#00ff00';
      intervalId = setInterval(triggerFunction, 60000);

    } else if (toggleElement.textContent == 'Auto on') {
     toggleElement.style.color = 'yellow';
      toggleElement.textContent = 'Paused';
    }
  }

 if (toggleElement.textContent === 'Auto on') {



  if (event.keyCode === 39 || event.key === 'ArrowRight') {
   //   intervalId = setInterval(triggerFunction, 60000);
            if (intervalId) {
      clearInterval(intervalId);}
              //  intervalId = null;
numx = userscrape.indexOf(window.nowplaying);
                   if (userscrape.indexOf(window.nowplaying)){
                  numx++
              //   alert(numx)
        triggerFunction(numx)
                         toggleElement.textContent = 'Auto on';
       toggleElement.style.color = '#00ff00';
      intervalId = setInterval(triggerFunction, 60000);
                   }
                  else{
                      const num = Math.floor(Math.random() * userscrape.length);
                      triggerFunction(num)
                      intervalId = setInterval(triggerFunction, 60000);
                  }

  }


        if (event.keyCode === 37 || event.key === 'ArrowLeft') {
//intervalId = setInterval(triggerFunction, 60000);
              if (intervalId) {
      clearInterval(intervalId);}
                //  intervalId = null;
numx = userscrape.indexOf(window.nowplaying);
                   if (userscrape.indexOf(window.nowplaying && numx > 0)){
                  numx--
              //   alert(numx)
        triggerFunction(numx)
                         toggleElement.textContent = 'Auto on';
       toggleElement.style.color = '#00ff00';
      intervalId = setInterval(triggerFunction, 60000);
                   }
                  else{
                      const num = Math.floor(Math.random() * userscrape.length);
                      triggerFunction(num)
                      intervalId = setInterval(triggerFunction, 60000);
                  }


        }




       /*     toggleElement.textContent = 'Auto off';
    if (intervalId) {
        toggleElement.style.color = '#ff0000';
      clearInterval(intervalId);
      intervalId = null;
        vidCall2()
    } */

    }
  }

      })






//window.addEventListener("scroll", handleIframeScroll);
generalStuff()
