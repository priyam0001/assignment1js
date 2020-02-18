// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");
var b4 = document.querySelector(".b4");
var b5 = document.querySelector(".b5");
var b6 = document.querySelector(".b6");
var b7 = document.querySelector(".b7");

var nouns1     = ["The Turkey", "Mom","Dad","The dog","My teacher","The elephant","The cat"];
var verbs      = ["sat on","ate","danced with","saw","doesn't like","kissed"];
var adjectives = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var nouns2      = ["goat","monkey","fish","cow","frog","bug","worm"];
var places     = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

function randomValueFromArray(array) {
	return array[Math.floor(Math.random()*array.length)];
}

b1.onclick = function() {
	var p1 = randomValueFromArray(nouns1);
	speakNow(p1);
	}
	
	// function for 2 to speak a word
	b2.onclick = function() {
		var p2 = randomValueFromArray(verbs);
	speakNow(p2);
	}
	
	// function for 3 to speak a word
	b3.onclick = function() {
		var p3 = randomValueFromArray(adjectives);
		speakNow(p3);
	}
	
	// function for 4 to speak a word
	b4.onclick = function() {
		var p4 = randomValueFromArray(nouns2);
	speakNow(p4);
	}
	
	// function for 5 to speak a word
	b5.onclick = function() {
		var p5 = randomValueFromArray(places);
		speakNow(p5);
	}
	
	// function for 6th to speak a word
	b6.onclick = function() {
	function Result() {
		 string = 
		randomValueFromArray(nouns1) + " " 
		+ randomValueFromArray(verbs) + " " 
		+ randomValueFromArray(adjectives) + " " 
		+ randomValueFromArray(nouns2) + " " 
		+ randomValueFromArray(places); 
		speakNow(string);
	}
	Result();
	}