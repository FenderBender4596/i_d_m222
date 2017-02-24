//
//
// 

//
// Declare global variables outside of functions here
var firstName;
var birthDayObj;
//
var WeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//

function calZodiac() {
  //
  // Name and date error checking not needed when using Chrome browser

  firstName = document.getElementById('fname').value;
  birthDayObj = new Date(document.getElementById('bday').value);

  //
  // DATE CHECKER FOR SAFARI! This check will NOT catch Feb 30
  console.log('birthDayObj parsed is ' + Date.parse(birthDayObj));
  if (isNaN(Date.parse(birthDayObj))) {
    alert('Invalid date. Please retry');
    // Exit/Jump out of this function
    return false;
  }

  var whichDayNdx = birthDayObj.getUTCDay();
  console.log('whichDayNdx is ' + whichDayNdx);

  //
  // Calculate zodic sign

  var whichMonth = birthDayObj.getUTCMonth();
  console.log('whichMonth is ' + whichMonth);

  var whichDayOfMonth = birthDayObj.getUTCDate();
  console.log('whichDayOfMonth is ' + whichDayOfMonth);

  //
  // Add 1 for readabilty
  whichMonth++;
  whichDayOfMonth++;

  var astroSign;

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    astroSign = 'Azorious Senate'
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    astroSign = 'Cult Of Rakdos';
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    astroSign = 'House Dimir';
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    astroSign = 'Selesnya Conclave';
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    astroSign = 'Orzhov Syndicate';
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    astroSign = 'Golgari Swarm';
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    astroSign = 'Simic Combine';
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    astroSign = 'Gruul clans';
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    astroSign = 'Boros Legion';
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    astroSign = 'Izzet League. You are quick witted and cunning';
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    astroSign = 'Transguild';
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    astroSign = 'Bystander';
  }

  //
  // Figure out user age, call a function, pass parameters, return result
  var currAge = calculate_age(birthDayObj.getUTCMonth(), birthDayObj.getUTCDate(), birthDayObj.getUTCFullYear());

  var outputArea = document.getElementById('displayMsg');
  var msg = '';
  msg += '<p>Hello ' + firstName + '.</p>';
  msg += '<p>Your zodiac sign is ' + astroSign + '.</p>';
  msg += '<p>You are <strong>' + currAge + '</strong> years old.</p>';

  //
  // Add candles
  msg += '<p>CANDLES: ';
  for (lp = 0; lp < currAge; lp++) {
    msg += 'i ';
  }
  msg += '</p>';
  outputArea.innerHTML = msg;

  //
  //  return false to prevent form from resetting
  return false;
}


function calculate_age(bMonth, bDay, bYear) {
  var today_date = new Date();
  var today_year = today_date.getUTCFullYear();
  var today_month = today_date.getUTCMonth();
  var today_day = today_date.getUTCDate();

  console.log('bMonth is ' + bMonth);
  console.log('today_month is ' + today_month);

  console.log('bDay is ' + bDay);
  console.log('today_day is ' + today_day);

  console.log('bYear is ' + bYear);
  console.log('today_year is ' + today_year);

  var age = today_year - bYear;

  console.log('age is ' + age);

  if (today_month < bMonth) {
    age--;
  }
  if ((today_month == bMonth) && (today_day < bDay)) {
    age--;
  }

  console.log('adjusted age is ' + age);

  return age;
} // Close calculate_age

function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("blackScreen");
}

var transObj=document.getElementById('trans');
var borObj=document.getElementById('bor');
var dimObj=document.getElementById('dim');
var simObj=document.getElementById('sim');
var selObj=document.getElementById('sel');
var azoObj=document.getElementById('azo');
var bysObj=document.getElementById('bys');
var izzObj=document.getElementById('izz');
var orzObj=document.getElementById('orz');
var rakObj=document.getElementById('rak');
var golObj=document.getElementById('gol');
var gruObj=document.getElementById('gru');

//now you have bonded image objects to a variable that can be used in js
//var displayObj=document.getElementById('display');
//have all three objects call the same function
var allPicsObj=document.getElementById('allPics');

transObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'trans');
},false);

borObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'bor');
},false);

dimObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'dim');
},false);

simObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'sim');
},false);

selObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'sel');
},false);

azoObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'azo');
},false);

bysObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'bys');
},false);

izzObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'izz');
},false);

orzObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'orz');
},false);

rakObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'rak');
},false);

golObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'gol');
},false);

gruObj.addEventListener('click', function(evt){	
	displayZodiacSign(evt, 'gru');
},false);
//this is an anonymous function, within which you may call as many functions as necessary
//event listener stipulates that when the 'XXX' element is clicked, on the event 'displayZodiacSign' will run using 'xxxObj' parameter.
//ALWAYS save HTML, CSS, and JS files before tests.

function displayZodiacSign(evt, whichOne){
	console.log('displayZodiacSign called'+ whichOne); //theoretically, clicking on button will display (name of Obj) called
	// use a switch satement to figure out which image to change it to; is faster for '=' statements

	var imgArray=allPicsObj.children; //DOM command finds all images within that id, and puts information inside array.
	console.log('imgArray is '+imgArray);
	console.log('imgArray length is '+imgArray.length);
	console.log('imgArray 2 is '+imgArray[2].tagName);

	for(lp=0; lp<imgArray.length; lp++){
		imgArray[lp].classList.remove('display');
	}
	//this will remove 'display' class from all items in loop.
	switch(whichOne){
		
		case 'trans':
		imgArray[1].classList.add('display');
		
		break;
		
		case 'bor': 
		imgArray[2].classList.add('display');
		//displayObj.src='img/ful_scorpio.png';
		break;
		
		case 'dim':
		imgArray[4].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'sim':
		imgArray[5].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'sel':
		imgArray[3].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'azo':
		imgArray[6].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'bys':
		imgArray[7].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'izz':
		imgArray[8].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'orz':
		imgArray[9].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'rak':
		imgArray[10].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'gol':
		imgArray[11].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'gru':
		imgArray[12].classList.add('display');
		//displayObj.src='img/ful_aquarius.png';
		break;



		
		default:
		imgArray[0].classList.add('display');
		//displayObj.src='img/ful_blank.png';
		break;
	} //you may add animations or fade-in transitions to your images



}
