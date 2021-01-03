// TYPING EFFECT ON HOMEPAGE


var typed = new Typed('#typed', {
    strings: ['Sun',
    		  'Mercury',
    		  'Venus',
    		  'Earth',
    		  'Moon',
    		  'Mars',
    		  'Jupiter',
    		  'Saturn',
    		  'Uranus',
    		  'Neptune',
    		  'Pluto',
    		  ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });


// ACTUAL LOGIC
let answer = document.querySelector("#value");
let btn = document.getElementById("btn");
btn.addEventListener("click", calculateWeight)


// FUCNTION THAT WILL RUN WHEN USER CLICK "Calculate Weight" BUTTON
function calculateWeight() {
// VALIDATION
let massInKG = Number(document.getElementById("massInKG").value);

// Checking if user press Calculate Weight button without entering any value
if (massInKG == ""){
	alert("Please Enter your Mass.");
	return false;
}

// Checking if data entered by user is number
if (isNaN(Number(massInKG)) == true) {
	alert("Please Enter Valid Number");
	return false;
}

// Checking if user selected the planet
if (document.getElementById("None").selected){
	alert("Please Select The Planet");
	return false;
}


// Changing the DISPLAY of Answer div from none to block
let answerDiv = document.getElementById("answer")
answerDiv.style.display = 'block'

// Taking Input from the user
massInKG = Number(document.getElementById("massInKG").value);

// Calculating weight of the object on different planets
let weightOnEarth = massInKG * 9.8;
let weightOnSun = weightOnEarth * 27.01;
let weightOnMercury = weightOnEarth * 0.38;
let weightOnVenus = weightOnEarth * 0.91;
let weightOnMoon = weightOnEarth * 0.166;
let weightOnMars = weightOnEarth * 0.38;
let weightOnJupiter = weightOnEarth * 2.34;
let weightOnSaturn = weightOnEarth * 1.06;
let weightOnUranus = weightOnEarth * 0.92;
let weightOnNeptune = weightOnEarth * 1.19;
let weightOnPluto = weightOnEarth * 0.06;

// Accessing Picture Element for showing planet pictures
let planetPicture = document.getElementById("planetPicture");



let showedValue = document.getElementById("value")

// Checking which planet is selected and showing result
if(document.getElementById('Sun').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/sun.png" alt="">`
	returnAnswer = weightOnSun.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}

else if(document.getElementById('Mercury').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/mercury.png" alt="">`
	returnAnswer = weightOnMercury.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
	
}

else if(document.getElementById('Venus').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/venus.png" alt="">`
	returnAnswer = weightOnVenus.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
	
}

else if(document.getElementById('Earth').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/earth.png" alt="">`
	returnAnswer = weightOnEarth.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}

else if(document.getElementById('Moon').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/moon.png" alt="">`
	returnAnswer = weightOnMoon.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}

else if(document.getElementById('Mars').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/mars.png" alt="">`
	returnAnswer = weightOnMars.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}

else if(document.getElementById('Jupiter').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/jupitor.png" alt="">`
	returnAnswer = weightOnJupiter.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}

else if(document.getElementById('Saturn').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/saturn.png" alt="">`
	returnAnswer = weightOnSaturn.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}

else if(document.getElementById('Uranus').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/uranus.png" alt="">`
	returnAnswer = weightOnUranus.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}

else if(document.getElementById('Neptune').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/Neptune.png" alt="">`
	returnAnswer = weightOnNeptune.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}

else if(document.getElementById('Pluto').selected){
	planetPicture.innerHTML = `<img id="planetImage" src="img/pluto.webp" alt="">`
	returnAnswer = weightOnPluto.toFixed(2) + " Newton"
	showedValue.innerHTML = `<h4>${returnAnswer}</h4>`
}
}



