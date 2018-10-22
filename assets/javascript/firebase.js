// Initialize Firebase
const config = {
	apiKey: "AIzaSyBygsK8dtJ2CbfixGvsmXIa9CXkxGOssfA",
	authDomain: "portfolio-1534702042975.firebaseapp.com",
	databaseURL: "https://portfolio-1534702042975.firebaseio.com",
	projectId: "portfolio-1534702042975",
	storageBucket: "portfolio-1534702042975.appspot.com",
	messagingSenderId: "353229936520"
};
firebase.initializeApp(config);
const dataRef = firebase.database();

$("#contact-container").on("submit", function() {
	event.preventDefault();
	var name = $("#nameInput")
		.val()
		.trim();
	var email = $("#emailInput")
		.val()
		.trim();
	var message = $("#messageInput")
		.val()
		.trim();
	var uts = $.now();
	// var time = uts*86400;

	// console.log(name,email,message,uts);

	dataRef.ref().push({
		name: name,
		email: email,
		message: message,
		uts: uts
	});

	$("#contact-container").hide();
	// setInterval(show,600);
	// function show(){
	$("#submit-container").fadeIn("slow");
	// }
});
