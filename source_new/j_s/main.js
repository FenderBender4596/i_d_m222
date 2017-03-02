//
//
// 

//
// Declare global variables outside of functions here
var firstName;
var lastName; 
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
    astroSign = 'Azorious Senate! The logical, elitist governers of Ravnica, who believe beuracracy and regulation are the true keys to ending chaos. You truly believe in order and balance, which can be considered a curse or a blessing';
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    astroSign = 'Cult Of Rakdos! Individuals who join this guild usually have a focus on pleasure, even if it causes pain and suffering amongst others. You seize the day, and live life to the fullest, even if it may cost your own life';
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    astroSign = 'House Dimir! The rogues of Ravnica; Individuals who join this guild are secretive, stay in the shadows, and prefer to work underground, and behind the scenes. No one is aware of your guild or its existence, which is what makes you so dangerous';
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    astroSign = 'Selesnya Conclave! Selfless, Nurturing, and Spiritual, often involved with the maintenance of life in Ravnica. You believe in spreading these values of peace and love to the point others may find it off putting';
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    astroSign = 'Orzhov Syndicate! The Ravnican guild of business, focused on community, tradition, and dealing with the dead souls of Ravnica. You deal in only absolute values, and only believe in people for their net worth';
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    astroSign = 'Golgari Swarm! The embodiement of life and death, growth, and inevitably, power, lie ahead as you stick with this guild! Be careful, as golgari members tend to look a bit more dead than when they first started';
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    astroSign = 'Simic Combine! Follows the path of medicine and biomancy. Follows the teachings of Mormir Vig to improve the life forms of Ravnica! You have an educated feeling towards nature, and believe growth comes from scientific progress';
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    astroSign = 'Gruul clans! The Caretakers Of Old: Once a noble and respected tribe, the gruul clans were the caretakers of Ravnica. You have a wild, untamed passion for nature, and feel that the progress of civilization will be its downfall';
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    astroSign = 'Azorius Senate! Stubborn, aggressive, and logical, The boros legion is the militant police force of Ravnica! You prefer structure, discipline, and value honor above all other things';
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    astroSign = 'Izzet League! The Utility servants of Ravnica; You are an obsessive, keen, and creative individual, with a short attention span. You "play with fire," and often let your huberis get the best of you.';
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    astroSign = 'Transguild! The undecided magic users of Ravnica. You use your magic for your own gain, as a bounty hunter, switching between guilds. You have various skills, are a jack of all trades, and work twice as hard as everyone else';
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    astroSign = 'Bystander! The common folk of Ravnica, unaware of what goes on around them. They live here knowing of the various guilds, but never participating. They are usually lost, or unsure of what lies ahead';
  }

  //
  // Figure out user age, call a function, pass parameters, return result
  var currAge = calculate_age(birthDayObj.getUTCMonth(), birthDayObj.getUTCDate(), birthDayObj.getUTCFullYear());

  var outputArea = document.getElementById('displayMsg');
  var msg = '';
  msg += '<p>Citizen ' + firstName + '!</p>';
  msg += '<p>You have been recruited  for ' + astroSign + '.</p>';
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
	console.log('imgArray 2 is '+imgArray[1].tagName);

	for(lp=0; lp<imgArray.length; lp++){
		imgArray[lp].classList.remove('display');
	}
	//this will remove 'display' class from all items in loop.
	switch(whichOne){
		
		case 'trans':
		imgArray[1].classList.add('display');
		astroSign = 'Transguild! The undecided magic users of Ravnica. You use your magic for your own gain, as a bounty hunter, switching between guilds. You have various skills, are a jack of all trades, and work twice as hard as everyone else';
		break;
		
		case 'bor': 
		imgArray[2].classList.add('display');
		//displayObj.src='img/ful_scorpio.png';
		break;
		
		case 'dim':
		imgArray[3].classList.add('display');
		astroSign = 'House Dimir! The rogues of Ravnica; Individuals who join this guild are secretive, stay in the shadows, and prefer to work underground, and behind the scenes. No one is aware of your guild or its existence, which is what makes you so dangerous';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'sim':
		imgArray[4].classList.add('display');
		astroSign = 'Simic Combine! Follows the path of medicine and biomancy. Follows the teachings of Mormir Vig to improve the life forms of Ravnica! You have an educated feeling towards nature, and believe growth comes from scientific progress';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'sel':
		imgArray[5].classList.add('display');
		astroSign = 'Selesnya Conclave! Selfless, Nurturing, and Spiritual, often involved with the maintenance of life in Ravnica. You believe in spreading these values of peace and love to the point others may find it off putting';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'azo':
		imgArray[6].classList.add('display');
		astroSign = 'Azorious Senate! The logical, elitist governers of Ravnica, who believe beuracracy and regulation are the true keys to ending chaos. You truly believe in order and balance, which can be considered a curse or a blessing';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'bys':
		imgArray[7].classList.add('display');
		astroSign = 'Bystander! The common folk of Ravnica, unaware of what goes on around them. They live here knowing of the various guilds, but never participating. They are usually lost, or unsure of what lies ahead';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'izz':
		imgArray[8].classList.add('display');
		astroSign = 'Izzet League! The Utility servants of Ravnica; You are an obsessive, keen, and creative individual, with a short attention span. You "play with fire," and often let your huberis get the best of you.';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'orz':
		imgArray[9].classList.add('display');
		astroSign = 'Orzhov Syndicate! The Ravnican guild of business, focused on community, tradition, and dealing with the dead souls of Ravnica. You deal in only absolute values, and only believe in people for their net worth';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'rak':
		imgArray[10].classList.add('display');
		astroSign = 'Cult Of Rakdos! Individuals who join this guild usually have a focus on pleasure, even if it causes pain and suffering amongst others. You seize the day, and live life to the fullest, even if it may cost your own life';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'gol':
		imgArray[11].classList.add('display');
		astroSign = 'Golgari Swarm! The embodiement of life and death, growth, and inevitably, power, lie ahead as you stick with this guild! Be careful, as golgari members tend to look a bit more dead than when they first started';
		//displayObj.src='img/ful_aquarius.png';
		break;

		case 'gru':
		imgArray[12].classList.add('display');
		astroSign = 'Gruul clans! The Caretakers Of Old: Once a noble and respected tribe, the gruul clans were the caretakers of Ravnica. You have a wild, untamed passion for nature, and feel that the progress of civilization will be its downfall';
		//displayObj.src='img/ful_aquarius.png';
		break;



		
		default:
		imgArray[0].classList.add('display');
		//displayObj.src='img/ful_blank.png';
		break;
	} //you may add animations or fade-in transitions to your images



}
