// Form validator
(function() {
	"use strict";
	window.addEventListener(
		"load",
		function() {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			// var email = $('#emailInput').val();
			// var test = validEmail(email);
			var forms = document.getElementsByClassName("needs-validation");
			// var a = document.querySelector('#email')
			// if (test === true){
			//   $('#invalid-email').hide();
			//   $('#valid-email').show();
			// }else{
			//   $('#valid-email').hide();
			//   $('#invalid-email').show();
			// }
			// console.log(a);
			// Loop over them and prevent submission
			Array.prototype.filter.call(forms, function(form) {
				form.addEventListener(
					"submit",
					function(event) {
						var email = $("#emailInput").val();
						var test = validEmail(email);
						if (form.checkValidity() === false || test === false) {
							event.preventDefault();
							event.stopPropagation();
						}
						console.log(test);
						// if (test === true){
						//   form.classList.add('was-validated');
						// }else {
						//   event.preventDefault();
						//   event.stopPropagation();
						// }
						form.classList.add("was-validated");
					},
					false
				);
			});
		},
		false
	);
})();

// Email validator
function validEmail(email) {
	var check = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return check.test(email);
}

// $('#contact-container').on('submit',function(){
//   event.preventDefault();
// 	$('.contact-form').fadeOut();
// })

// Navbar button animation
$(document).on("click", ".navbar-toggler", function() {
	$(this).attr("id", "rotate");
});

$(document).on("click", "#rotate", function() {
	$(this).attr("id", "rotate-back");
});

// // Image loading gif
// $('.port-img').ready(function(){
//   $('.load-gif').fadeOut('slow');
//   setInterval(img,500);
//   function img(){
//     $('.port-img').fadeIn('slow');
//   }
// })
