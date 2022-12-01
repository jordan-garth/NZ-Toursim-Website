// Hide the sections
$(".pickUp-DropOff").hide();
$("#card1").hide();
$("#card2").hide();
$("#card3").hide();
$("#card4").hide();
$("#card5").hide();
$("#card6").hide();
$("#card7").hide();
$(".motorbike-Booking-Details").hide();
$(".motorbike-Payment-Details").hide();
$(".motorbike-Booking-Confirmation").hide();

$(".small-Booking-Details").hide();
$(".small-Payment-Details").hide();
$(".small-Booking-Confirmation").hide();

$(".large-Booking-Details").hide();
$(".large-Payment-Details").hide();
$(".large-Booking-Confirmation").hide();

$(".home-Booking-Details").hide();
$(".home-Payment-Details").hide();
$(".home-Booking-Confirmation").hide();

// start button
function startNavigate() {
  $('#welcome').hide(300);
  $('.pickUp-DropOff').show (300);
} 

// back buttons
function goBackLocationForm () {
  $('.pickUp-DropOff').show(300);
  $('#card1').hide(300);
  $('#card2').hide(300);
  $('#card3').hide(300);
  $('#card4').hide(300);
  $('#card5').hide(300);
  $('#card6').hide(300);
  $('#card7').hide(300);
}
// motor back
function motorbikeGoBackToSearch () {
  $(".motorbike-Booking-Details").hide();
  $('.pickUp-DropOff').show(300);
}
function motorbikeGoBackToPersonal () {
  $(".motorbike-Payment-Details").hide();
  $(".motorbike-Booking-Details").show();
}
function motorbikeGoBackToPayment() {
  $(".motorbike-Booking-Confirmation").hide();
  $(".motorbike-Payment-Details").show();
}
// small back
function smallGoBackToSearch() {
  $(".small-Booking-Details").hide();
  $('.pickUp-DropOff').show(300);
}
function smallGoBackToPersonal () {
  $(".small-Payment-Details").hide();
  $(".small-Booking-Details").show();
}
function smallGoBackToPayment () {
  $(".small-Booking-Confirmation").hide();
  $(".small-Payment-Details").show()
}

// large back
function largeGoBackToSearch () {
  $(".large-Booking-Details").hide();
  $('.pickUp-DropOff').show(300);
}
function largeGoBackToPersonal () {
  $(".large-Payment-Details").hide();
  $(".large-Booking-Details").show();
}
function largeGoBackToPayment () {
  $(".large-Booking-Confirmation").hide();
  $(".large-Payment-Details").show();
}

// home back
function homeGoBackToSearch () {
  $(".home-Booking-Details").hide();
  $('.pickUp-DropOff').show(300);
}
function homeGoBackToPersonal () {
  $(".home-Payment-Details").hide();
  $(".home-Booking-Details").show();
}
function homeGoBackToPayment () {
  $(".home-Booking-Confirmation").hide();
  $(".home-Payment-Details").show();
}

function goBackToWelcome () {
  $('#welcome').show (300);
  $(".home-Booking-Confirmation").hide();
  $(".large-Booking-Confirmation").hide();
  $(".small-Booking-Confirmation").hide();
  $(".motorbike-Booking-Confirmation").hide();
}
function goBackPersonal () {
  $('.bookingDetails').show(300);
  $('.paymentDetails').hide(300);
}

function homeGoBackPayment () {
  $(".home-Payment-Details").hide();
  $(".home-Booking-Details").show();
}

// Vehicle Data
var data = {
  // Datas order - minTravellers, maxTravellers, pricePerNight, minDays, maxDays, Per100KM, VehicleType
  motorBike: [1, 1, 109, 1, 5, 0.037, "Motorbike"],
  smallCar: [1, 2, 129, 1, 10, 0.085, "Small Car"],
  largeCar: [1, 5, 144, 3, 10, 0.0917, "Large Car"],
  motorHome: [1, 6, 200, 2, 17, 0.17, "Motor Home"]
};

// Travel distance Data
var distanceData = {
  chchToAuck: 1073,
  chchToWgn: 435,
  chchToQtn: 482,
  chchToDun: 360,

  auckToWgn: 645,
  auckToQtn: 1551,
  auckToDun: 1428,

  WgnToQtn: 912,
  WgnToDun: 790,

  QtnToDun: 280
};


// User input Data
var user = {
  pickUpLocation : document.getElementById ('pickUp').value,
  // pickUpDate : document.getElementById ('pickUp-Date-Selection').value,
  dropOffLocation : document.getElementById ('dropOff').value,
  // dropOffDate : document.getElementById ('dropOff-Date-Selection').value,
  travellers : document.getElementById ('travellers').value,
  days : document.getElementById ('days').value
};

// Get search results from user input
document.getElementById ('searchBtnLight01').addEventListener ('click', displayVehicles);

function displayVehicles () {
  // INPUT 1
  if(document.getElementById ('travellers').value <= 1 && document.getElementById ('days').value >= 1 && document.getElementById ('days').value <= 2) {
    $(".pickUp-DropOff").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").hide();
    $("#card1").show();            
  } else if (document.getElementById ('travellers').value <= 1 && document.getElementById ('days').value >= 3 && document.getElementById ('days').value <= 5) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide ();
    $("#card3").hide ();
    $("#card4").hide ();
    $("#card5").hide ();
    $("#card6").hide ();
    $("#card7").hide ();
    $("#card2").show ();
   } else if (document.getElementById ('travellers').value <= 1 && document.getElementById ('days').value >= 6 && document.getElementById ('days').value <= 10) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").hide();
    $("#card3").show();
  } else if (document.getElementById ('travellers').value <= 2  && document.getElementById ('travellers').value > 1 && document.getElementById ('days').value <= 2 && document.getElementById ('days').value >= 1) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").hide();
    $("#card4").show();            
  } else if (document.getElementById ('travellers').value <= 2 && document.getElementById ('travellers').value > 1 && document.getElementById ('days').value >= 3 && document.getElementById ('days').value <= 10) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card6").hide();
    $("#card7").hide();
    $("#card5").show();
  } else if (document.getElementById ('travellers').value <= 2 && document.getElementById ('travellers').value > 1 && document.getElementById ('days').value >= 11 && document.getElementById ('days').value <= 17) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").show();
  } else if (document.getElementById ('travellers').value <= 3 && document.getElementById ('travellers').value > 2 && document.getElementById ('days').value <= 2 && document.getElementById ('days').value > 1) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").show();            
  } else if (document.getElementById ('travellers').value <= 3 && document.getElementById ('travellers').value > 2 && document.getElementById ('days').value >= 3 && document.getElementById ('days').value <= 10) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").show();
    }else if (document.getElementById ('travellers').value <= 3 && document.getElementById ('travellers').value > 2 && document.getElementById ('days').value >= 11 && document.getElementById ('days').value <= 17) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").show();
  } else if (document.getElementById ('travellers').value <= 4 && document.getElementById ('travellers').value > 3 && document.getElementById ('days').value <= 2 && document.getElementById ('days').value > 1) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").show();            
  } else if (document.getElementById ('travellers').value <= 4 && document.getElementById ('travellers').value > 3 && document.getElementById ('days').value >= 3 && document.getElementById ('days').value <= 10) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").show();
  } else if (document.getElementById ('travellers').value <= 4 && document.getElementById ('travellers').value > 3 && document.getElementById ('days').value >= 11 && document.getElementById ('days').value <= 17) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").show();
  } else if (document.getElementById ('travellers').value <= 5 && document.getElementById ('travellers').value > 4 && document.getElementById ('days').value <= 2 && document.getElementById ('days').value > 1) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").show();            
  } else if (document.getElementById ('travellers').value <= 5 && document.getElementById ('travellers').value > 4 && document.getElementById ('days').value >= 3 && document.getElementById ('days').value <= 10) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").show();
  } else if (document.getElementById ('travellers').value <= 5 && document.getElementById ('travellers').value > 4 && document.getElementById ('days').value >= 11 && document.getElementById ('days').value <= 17) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").show();
  } else if (document.getElementById ('travellers').value <= 6 && document.getElementById ('travellers').value > 5 && document.getElementById ('days').value >= 2 && document.getElementById ('days').value <= 17) {
    $(".pickUp-DropOff").hide();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").show();
  } else {
    toastr.error ('No Vehicles Available within your range, Please try again!');
  }


// Travel distanceData
  // christchurch travel
  if (document.getElementById ('pickUp').value === "ChristchurchAirport" && document.getElementById ('dropOff').value === "AucklandAirport") {
    fuel = distanceData.chchToAuck;
  } else if (document.getElementById ('pickUp').value === "ChristchurchAirport" && document.getElementById ('dropOff').value === "WellingtonAirport") {
    fuel = distanceData.chchToWgn;
  } else if (document.getElementById ('pickUp').value === "ChristchurchAirport" && document.getElementById ('dropOff').value === "QueenstownAirport") {
    fuel = distanceData.chchToQtn;
  } else if (document.getElementById ('pickUp').value === "ChristchurchAirport" && document.getElementById ('dropOff').value === "DunedinAirport") {
    fuel = distanceData.chchToDun;
  } else if (document.getElementById ('pickUp').value === "AucklandAirport" && document.getElementById ('dropOff').value === "ChristchurchAirport") {
    fuel = distanceData.chchToAuck;
  } else if (document.getElementById ('pickUp').value === "WellingtonAirport" && document.getElementById ('dropOff').value === "ChristchurchAirport") {
    fuel = distanceData.chchToWgn;
  } else if (document.getElementById ('pickUp').value === "QueenstownAirport" && document.getElementById ('dropOff').value === "ChristchurchAirport") {
    fuel = distanceData.chchToQtn;
  } else if (document.getElementById ('pickUp').value === "DunedinAirport" && document.getElementById ('dropOff').value === "ChristchurchAirport") {
    fuel = distanceData.chchToDun;
  } else if (document.getElementById ('pickUp').value === "AucklandAirport" && document.getElementById ('dropOff').value === "WellingtonAirport") {
    fuel = distanceData.auckToWgn;
  } else if (document.getElementById ('pickUp').value === "AucklandAirport" && document.getElementById ('dropOff').value === "QueenstownAirport") {
    fuel = distanceData.auckToQtn;
  } else if (document.getElementById ('pickUp').value === "AucklandAirport" && document.getElementById ('dropOff').value === "DunedinAirport") {
    fuel = distanceData.auckToDun;
  } else if (document.getElementById ('pickUp').value === "WellingtonAirport" && document.getElementById ('dropOff').value === "AucklandAirport") {
    fuel = distanceData.auckToWgn;
  } else if (document.getElementById ('pickUp').value === "QueenstownAirport" && document.getElementById ('dropOff').value === "AucklandAirport") {
    fuel = distanceData.auckToQtn;
  } else if (document.getElementById ('pickUp').value === "DunedinAirport" && document.getElementById ('dropOff').value === "AucklandAirport") {
    fuel = distanceData.auckToDun;
  } else if (document.getElementById ('pickUp').value === "WellingtonAirport" && document.getElementById ('dropOff').value === "QueenstownAirport") {
    fuel = distanceData.WgnToQtn;
  } else if (document.getElementById ('pickUp').value === "WellingtonAirport" && document.getElementById ('dropOff').value === "DunedinAirport") {
    fuel = distanceData.WgnToDun;
  } else if (document.getElementById ('pickUp').value === "QueenstownAirport" && document.getElementById ('dropOff').value === "WellingtonAirport") {
    fuel = distanceData.WgnToQtn;
  } else if (document.getElementById ('pickUp').value === "DunedinAirport" && document.getElementById ('dropOff').value === "WellingtonAirport") {
    fuel = distanceData.WgnToDun;
  }  else if (document.getElementById ('pickUp').value === "QueenstownAirport" && document.getElementById ('dropOff').value === "DunedinAirport") {
    fuel = distanceData.QtnToDun;
  } else if (document.getElementById ('pickUp').value === "DunedinAirport" && document.getElementById ('dropOff').value === "QueenstownAirport") {
    fuel = distanceData.QtnToDun;
  } else {
    toastr.error('No Vehicles Available within your range, Please try again!');
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card7").hide();
    $("#card6").hide();
    $(".pickUp-DropOff").show();
  }
}
// Motorbike booking pages
// Motorbike personal details page
$(document).ready (function() {
  $(".motorbike-Btn").on("click", function(e) {
    e.preventDefault();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").hide();
    $(".motorbike-Booking-Details").show();

    var input = $("#days").val();
    $(".motorbike-Days-Summary").html(input);

    $(".motorbike-Fuel-Summary").html(fuel * data.motorBike[5] + "L");

    var input = $("#days").val() * data.motorBike[2];
    $(".motorbike-Bottom-Grand-Total").html("$" + input);
  });
});

// Motorbike Next button
function motorbikeGoToPayment(event) {
  bikeIsError = false;
  bikeCheckFirstName();
  bikeCheckLastName();
  bikeCheckEmail();
  bikeCheckPhoneNumber();
  if (bikeIsError) {
    toastr.error('Please fill out the form');
  } else {
    $('.motorbike-Payment-Details').show(300);
  $('.motorbike-Booking-Details').hide(300);
  }
  
}

// Motorbike Payment details Page
$(document).ready(function() {
  $("#motorbike-Payment-Details-Btn").on("click", function(e) {
    e.preventDefault();
    bikeHasError = false;
    bikeCheckCardNumber();
    bikeCheckCardName();
    bikeCheckExpiry();
    bikeCheckCVV();
        
    if (bikeHasError) {
      toastr.error('Please enter your payment details');
    } else {
      $('.motorbike-Booking-Confirmation').show(300);
      $('.motorbike-Payment-Details').hide(300);
    }
    
    var input = $("#motorbike-First-Name-Input").val();
    $("#motorbike-person-Name").html(input);

    var input = $("#motorbike-Email-Input").val();
    $("#motorbike-Email-Results").html(input);

    var input = $("#motorbike-Phone-Input").val();
    $("#motorbike-Phone-Number").html(input);

    var input = $("#travellers").val();
    $("#motorbike-Booking-Quantity").html(input);

    var input = $("#days").val() * data.motorBike[2];
    $("#motorbike-Price").html("$" + input);

    var input = $("#days").val();
    $("#motorbike-Hire-Days").html(input);

    
    $("#motorbike-Fuel").html(fuel * data.motorBike[5] + "L");

  });
});

// Small Car booking pages
// Small Car personal details page
$(document).ready (function() {
  $(".smallCar-Btn").on("click", function(e) {
    e.preventDefault();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").hide();
    $(".small-Booking-Details").show();

    var input = $("#days").val();
    $(".small-Days-Summary").html(input);

    $(".small-Fuel-Summary").html(fuel * data.smallCar[5] + "L");

    var input = $("#days").val() * data.smallCar[2];
    $(".small-Bottom-Grand-Total").html("$" + input);
  });
});
// Next button
function smallGoToPayment() {
  smallIsError = false;
  smallCheckFirstName();
  smallCheckLastName();
  smallCheckEmail();
  smallCheckPhoneNumber();
  if (smallIsError) {
    toastr.error('Please fill out the form');
  } else {
    $('.small-Payment-Details').show(300);
    $('.small-Booking-Details').hide(300);
  }
}
//Small Car Payment details Page
$(document).ready(function() {
  $("#small-Payment-Details-Btn").on("click", function(e) {
    e.preventDefault();
    smallHasError = false;
    smallCheckCardNumber();
    smallCheckCardName();
    smallCheckExpiry();
    smallCheckCVV();
        
    if (smallHasError) {
      toastr.error('Please enter your payment details');
    } else {
      $('.small-Booking-Confirmation').show(300);
      $('.small-Payment-Details').hide(300);
    }
    
    var input = $("#small-First-Name-Input").val();
    $("#small-person-Name").html(input);

    var input = $("#small-Email-Input").val();
    $("#small-Email-Results").html(input);

    var input = $("#small-Phone-Input").val();
    $("#small-Phone-Number").html(input);

    var input = $("#travellers").val();
    $("#small-Booking-Quantity").html(input);

    var input = $("#days").val() * data.smallCar[2];
    $("#small-Price").html("$" + input);

    var input = $("#days").val();
    $("#small-Hire-Days").html(input);

    
    $("#small-Fuel").html(fuel * data.smallCar[5] + "L");
  });
});

// Large Car booking pages
// Large Car personal details page
$(document).ready (function() {
  $(".largeCar-Btn").on("click", function(e) {
    e.preventDefault();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").hide();
    $(".large-Booking-Details").show();

    var input = $("#days").val();
    $(".large-Days-Summary").html(input);

    $(".large-Fuel-Summary").html(fuel * data.largeCar[5] + "L");

    var input = $("#days").val() * data.largeCar[2];
    $(".large-Bottom-Grand-Total").html("$" + input);
  });
});
// Next button
function largeGoToPayment() {
  largeIsError = false;
  largeCheckFirstName();
  largeCheckLastName();
  largeCheckEmail();
  largeCheckPhoneNumber();
  if (largeIsError) {
    toastr.error('Please fill out the form');
  } else {
    $('.large-Payment-Details').show(300);
    $('.large-Booking-Details').hide(300);
  }
}
//Large  Car Payment details Page
$(document).ready(function() {
  $("#large-Payment-Details-Btn").on("click", function(e) {
    e.preventDefault();
    largeHasError = false;
    largeCheckCardNumber();
    largeCheckCardName();
    largeCheckExpiry();
    largeCheckCVV();
        
    if (largeHasError) {
      toastr.error('Please enter your payment details');
    } else {
      $('.large-Booking-Confirmation').show(300);
    $('.large-Payment-Details').hide(300);
    }
    
    var input = $("#large-First-Name-Input").val();
    $("#large-person-Name").html(input);

    var input = $("#large-Email-Input").val();
    $("#large-Email-Results").html(input);

    var input = $("#large-Phone-Input").val();
    $("#large-Phone-Number").html(input);

    var input = $("#travellers").val();
    $("#large-Booking-Quantity").html(input);

    var input = $("#days").val() * data.largeCar[2];
    $("#large-Price").html("$" + input);

    var input = $("#days").val();
    $("#large-Hire-Days").html(input);

    
    $("#large-Fuel").html(fuel * data.largeCar[5] + "L");
  });
});

// Motor Home booking pages
// Motor Home personal details page
$(document).ready (function() {
  $(".motorHome-Btn").on("click", function(e) {
    e.preventDefault();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
    $("#card7").hide();
    $(".home-Booking-Details").show();

    var input = $("#days").val();
    $(".home-Days-Summary").html(input);

    $(".home-Fuel-Summary").html(fuel * data.motorHome[5]);

    var input = $("#days").val() * data.motorHome[2] + "L";
    $(".home-Bottom-Grand-Total").html("$" + input);
  });
});
// Next button
function homeGoToPayment() {
  homeIsError = false;
  homeCheckFirstName();
  homeCheckLastName();
  homeCheckEmail();
  homeCheckPhoneNumber();
  if (homeIsError) {
    toastr.error('Please fill out the form');
  } else {
    $('.home-Payment-Details').show(300);
    $('.home-Booking-Details').hide(300);
  }
}
//Motor Home Payment details Page
$(document).ready(function() {
  $("#home-Payment-Details-Btn").on("click", function(e) {
    e.preventDefault();
    homeHasError = false;
    homeCheckCardNumber();
    homeCheckCardName();
    homeCheckExpiry();
    homeCheckCVV();
        
    if (homeHasError) {
      toastr.error('Please enter your payment details');
    } else {
      $('.home-Booking-Confirmation').show(300);
      $('.home-Payment-Details').hide(300);
    }
    
    var input = $("#home-First-Name-Input").val();
    $("#home-person-Name").html(input);

    var input = $("#home-Email-Input").val();
    $("#home-Email-Results").html(input);

    var input = $("#home-Phone-Input").val();
    $("#home-Phone-Number").html(input);

    var input = $("#travellers").val();
    $("#home-Booking-Quantity").html(input);

    var input = $("#days").val() * data.motorHome[2];
    $("#home-Price").html("$" + input);

    var input = $("#days").val();
    $("#home-Hire-Days").html(input);

    
    $("#home-Fuel").html(fuel * data.motorHome[5] + "L");
  });
});

// MOTORBIKE FORM VALIDATION
let bikeFirstNameInput = document.querySelector('#motorbike-First-Name-Input');
let bikeLastNameInput = document.querySelector('#motorbike-Last-Name-Input');
let bikeEmailInput = document.querySelector('#motorbike-Email-Input');
let bikePhoneInput = document.querySelector('#motorbike-Phone-Input');

let bikeIsError;

function bikeCheckFirstName() {
  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!nameRegex.test(bikeFirstNameInput.value)) {
      toastr.error('Please enter a valid first name');
      bikeFirstNameInput.style.background = 'red';
      bikeIsError = true;
  } else {
    bikeFirstNameInput.style.background = 'white';
  }
}

function bikeCheckLastName() {
  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!nameRegex.test(bikeLastNameInput.value)) {
      toastr.error('Please enter a valid last name');
      bikeLastNameInput.style.background = 'red';
      bikeIsError = true;
  } else {
    bikeLastNameInput.style.background = 'white';
  }
}

function bikeCheckEmail() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(bikeEmailInput.value)) {
    toastr.error('Please enter a valid email address');
    bikeEmailInput.style.background = 'red';
    bikeIsError = true;
  } else {
    bikeEmailInput.style.background = 'white';
  }
}

function bikeCheckPhoneNumber() {
  const phoneRegex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
  if (!phoneRegex.test(bikePhoneInput.value)) {
    toastr.error('Please enter a valid phone Number');
    bikePhoneInput.style.background = 'red';
    bikeIsError = true;
  } else {
    bikePhoneInput.style.background = 'white';
  }
}

bikeFirstNameInput.addEventListener('blur', bikeCheckFirstName);
bikeLastNameInput.addEventListener('blur', bikeCheckLastName);
bikeEmailInput.addEventListener('blur', bikeCheckEmail);
bikePhoneInput.addEventListener('blur', bikeCheckPhoneNumber);

// PAYMENT
let bikeCardNumberInput = document.querySelector('#motorbike-Card-Number-Input');
let bikeCardNameInput = document.querySelector('#motorbike-Card-Name-Input');
let bikeCardExpiryInput = document.querySelector('#motorbike-Expiry-Date-Input');
let bikeCardCVVInput = document.querySelector('#motorbike-CVV-Input');

// test card number using "4111111111111111"
function bikeCheckCardNumber() {
  const cardNumberRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (!cardNumberRegex.test(bikeCardNumberInput.value)) { 
    toastr.error('Please enter a valid card number');
    bikeCardNumberInput.style.background = 'red'; 
    bikeHasError = true; 
  } else {
    bikeCardNumberInput.style.background = 'white';
  }
}
function bikeCheckCardName() {
  const cardNameRegex = /^[a-z ,.'-]+$/i;
  if (!cardNameRegex.test(bikeCardNameInput.value)) { 
    toastr.error('Please enter a valid card number');
    bikeCardNameInput.style.background = 'red'; 
    bikeHasError = true; 
  } else {
    bikeCardNameInput.style.background = 'white';
  }
}
function bikeCheckExpiry() {
  const expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  if (!expRegex.test(bikeCardExpiryInput.value)) {
    toastr.error('Please enter a valid Expiry Date');
    bikeCardExpiryInput.style.background = 'red';
    bikeHasError = true;
  } else {
    bikeCardExpiryInput.style.background = 'white';
  }
}
function bikeCheckCVV() {
  const CVVRegex = /^[0-9]{3,4}$/;
  if (!CVVRegex.test(bikeCardCVVInput.value)) {
    toastr.error('Please enter a valid CVV');
    bikeCardCVVInput.style.background = 'red';
    bikeHasError = true;
  } else {
    bikeCardCVVInput.style.background = 'white';
  }
}

bikeCardNumberInput.addEventListener('blur', bikeCheckCardNumber);
bikeCardNameInput.addEventListener('blur', bikeCheckCardName);
bikeCardExpiryInput.addEventListener('blur', bikeCheckExpiry);
bikeCardCVVInput.addEventListener('blur', bikeCheckCVV);

// SMALL CAR FORM VALIDATION
let smallFirstNameInput = document.querySelector('#small-First-Name-Input');
let smallLastNameInput = document.querySelector('#small-Last-Name-Input');
let smallEmailInput = document.querySelector('#small-Email-Input');
let smallPhoneInput = document.querySelector('#small-Phone-Input');

let smallIsError;

function smallCheckFirstName() {
  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!nameRegex.test(smallFirstNameInput.value)) {
      toastr.error('Please enter a valid first name');
      smallFirstNameInput.style.background = 'red';
      smallIsError = true;
  } else {
    smallFirstNameInput.style.background = 'white';
  }
}

function smallCheckLastName() {
  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!nameRegex.test(smallLastNameInput.value)) {
      toastr.error('Please enter a valid last name');
      smallLastNameInput.style.background = 'red';
      smallIsError = true;
  } else {
    smallLastNameInput.style.background = 'white';
  }
}

function smallCheckEmail() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(smallEmailInput.value)) {
    toastr.error('Please enter a valid email address');
    smallEmailInput.style.background = 'red';
    smallIsError = true;
  } else {
    smallEmailInput.style.background = 'white';
  }
}

function smallCheckPhoneNumber() {
  const phoneRegex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
  if (!phoneRegex.test(smallPhoneInput.value)) {
    toastr.error('Please enter a valid phone Number');
    smallPhoneInput.style.background = 'red';
    smallIsError = true;
  } else {
    smallPhoneInput.style.background = 'white';
  }
}

smallFirstNameInput.addEventListener('blur', smallCheckFirstName);
smallLastNameInput.addEventListener('blur', smallCheckLastName);
smallEmailInput.addEventListener('blur', smallCheckEmail);
smallPhoneInput.addEventListener('blur', smallCheckPhoneNumber);

let smallHasError;

// PAYMENT
let smallCardNumberInput = document.querySelector('#small-Card-Number-Input');
let smallCardNameInput = document.querySelector('#small-Card-Name-Input');
let smallCardExpiryInput = document.querySelector('#small-Expiry-Date-Input');
let smallCardCVVInput = document.querySelector('#small-CVV-Input');

// test card number using "4111111111111111"
function smallCheckCardNumber() {
  const cardNumberRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (!cardNumberRegex.test(smallCardNumberInput.value)) { 
    toastr.error('Please enter a valid card number');
    smallCardNumberInput.style.background = 'red'; 
    smallHasError = true; 
  } else {
    smallCardNumberInput.style.background = 'white';
  }
}
function smallCheckCardName() {
  const cardNameRegex = /^[a-z ,.'-]+$/i;
  if (!cardNameRegex.test(smallCardNameInput.value)) { 
    toastr.error('Please enter a valid card number');
    smallCardNameInput.style.background = 'red'; 
    smallHasError = true; 
  } else {
    smallCardNameInput.style.background = 'white';
  }
}
function smallCheckExpiry() {
  const expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  if (!expRegex.test(smallCardExpiryInput.value)) {
    toastr.error('Please enter a valid Expiry Date');
    smallCardExpiryInput.style.background = 'red';
    smallHasError = true;
  } else {
    smallCardExpiryInput.style.background = 'white';
  }
}
function smallCheckCVV() {
  const CVVRegex = /^[0-9]{3,4}$/;
  if (!CVVRegex.test(smallCardCVVInput.value)) {
    toastr.error('Please enter a valid CVV');
    smallCardCVVInput.style.background = 'red';
    smallHasError = true;
  } else {
    smallCardCVVInput.style.background = 'white';
  }
}

smallCardNumberInput.addEventListener('blur', smallCheckCardNumber);
smallCardNameInput.addEventListener('blur', smallCheckCardName);
smallCardExpiryInput.addEventListener('blur', smallCheckExpiry);
smallCardCVVInput.addEventListener('blur', smallCheckCVV);

// LARGE CAR FORM VALIDATION
let largeFirstNameInput = document.querySelector('#large-First-Name-Input');
let largeLastNameInput = document.querySelector('#large-Last-Name-Input');
let largeEmailInput = document.querySelector('#large-Email-Input');
let largePhoneInput = document.querySelector('#large-Phone-Input');

let largeIsError;

function largeCheckFirstName() {
  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!nameRegex.test(largeFirstNameInput.value)) {
      toastr.error('Please enter a valid first name');
      largeFirstNameInput.style.background = 'red';
      largeIsError = true;
  } else {
    largeFirstNameInput.style.background = 'white';
  }
}

function largeCheckLastName() {
  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!nameRegex.test(largeLastNameInput.value)) {
      toastr.error('Please enter a valid last name');
      largeLastNameInput.style.background = 'red';
      largeIsError = true;
  } else {
    largeLastNameInput.style.background = 'white';
  }
}

function largeCheckEmail() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(largeEmailInput.value)) {
    toastr.error('Please enter a valid email address');
    largeEmailInput.style.background = 'red';
    largeIsError = true;
  } else {
    largeEmailInput.style.background = 'white';
  }
}

function largeCheckPhoneNumber() {
  const phoneRegex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
  if (!phoneRegex.test(largePhoneInput.value)) {
    toastr.error('Please enter a valid phone Number');
    largePhoneInput.style.background = 'red';
    largeIsError = true;
  } else {
    largePhoneInput.style.background = 'white';
  }
}

largeFirstNameInput.addEventListener('blur', largeCheckFirstName);
largeLastNameInput.addEventListener('blur', largeCheckLastName);
largeEmailInput.addEventListener('blur', largeCheckEmail);
largePhoneInput.addEventListener('blur', largeCheckPhoneNumber);

let largeHasError;

// PAYMENT
let largeCardNumberInput = document.querySelector('#large-Card-Number-Input');
let largeCardNameInput = document.querySelector('#large-Card-Name-Input');
let largeCardExpiryInput = document.querySelector('#large-Expiry-Date-Input');
let largeCardCVVInput = document.querySelector('#large-CVV-Input');

// test card number using "4111111111111111"
function largeCheckCardNumber() {
  const cardNumberRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (!cardNumberRegex.test(largeCardNumberInput.value)) { 
    toastr.error('Please enter a valid card number');
    largeCardNumberInput.style.background = 'red'; 
    largeHasError = true; 
  } else {
    largeCardNumberInput.style.background = 'white';
  }
}
function largeCheckCardName() {
  const cardNameRegex = /^[a-z ,.'-]+$/i;
  if (!cardNameRegex.test(largeCardNameInput.value)) { 
    toastr.error('Please enter a valid card number');
    largeCardNameInput.style.background = 'red'; 
    largeHasError = true; 
  } else {
    largeCardNameInput.style.background = 'white';
  }
}
function largeCheckExpiry() {
  const expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  if (!expRegex.test(largeCardExpiryInput.value)) {
    toastr.error('Please enter a valid Expiry Date');
    largeCardExpiryInput.style.background = 'red';
    largeHasError = true;
  } else {
    largeCardExpiryInput.style.background = 'white';
  }
}
function largeCheckCVV() {
  const CVVRegex = /^[0-9]{3,4}$/;
  if (!CVVRegex.test(largeCardCVVInput.value)) {
    toastr.error('Please enter a valid CVV');
    largeCardCVVInput.style.background = 'red';
    largeHasError = true;
  } else {
    largeCardCVVInput.style.background = 'white';
  }
}

largeCardNumberInput.addEventListener('blur', largeCheckCardNumber);
largeCardNameInput.addEventListener('blur', largeCheckCardName);
largeCardExpiryInput.addEventListener('blur', largeCheckExpiry);
largeCardCVVInput.addEventListener('blur', largeCheckCVV);

// MOTOR HOME FORM VALIDATION
let homeFirstNameInput = document.querySelector('#home-First-Name-Input');
let homeLastNameInput = document.querySelector('#home-Last-Name-Input');
let homeEmailInput = document.querySelector('#home-Email-Input');
let homePhoneInput = document.querySelector('#home-Phone-Input');

let homeIsError;

function homeCheckFirstName() {
  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!nameRegex.test(homeFirstNameInput.value)) {
      toastr.error('Please enter a valid first name');
      homeFirstNameInput.style.background = 'red';
      homeIsError = true;
  } else {
    homeFirstNameInput.style.background = 'white';
  }
}

function homeCheckLastName() {
  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!nameRegex.test(homeLastNameInput.value)) {
      toastr.error('Please enter a valid last name');
      homeLastNameInput.style.background = 'red';
      homeIsError = true;
  } else {
    homeLastNameInput.style.background = 'white';
  }
}

function homeCheckEmail() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(homeEmailInput.value)) {
    toastr.error('Please enter a valid email address');
    homeEmailInput.style.background = 'red';
    homeIsError = true;
  } else {
    homeEmailInput.style.background = 'white';
  }
}

function homeCheckPhoneNumber() {
  const phoneRegex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
  if (!phoneRegex.test(homePhoneInput.value)) {
    toastr.error('Please enter a valid phone Number');
    homePhoneInput.style.background = 'red';
    homeIsError = true;
  } else {
    homePhoneInput.style.background = 'white';
  }
}

homeFirstNameInput.addEventListener('blur', homeCheckFirstName);
homeLastNameInput.addEventListener('blur', homeCheckLastName);
homeEmailInput.addEventListener('blur', homeCheckEmail);
homePhoneInput.addEventListener('blur', homeCheckPhoneNumber);

let homeHasError;

// PAYMENT
let homeCardNumberInput = document.querySelector('#home-Card-Number-Input');
let homeCardNameInput = document.querySelector('#home-Card-Name-Input');
let homeCardExpiryInput = document.querySelector('#home-Expiry-Date-Input');
let homeCardCVVInput = document.querySelector('#home-CVV-Input');

// test card number using "4111111111111111"
function homeCheckCardNumber() {
  const cardNumberRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (!cardNumberRegex.test(homeCardNumberInput.value)) { 
    toastr.error('Please enter a valid card number');
    homeCardNumberInput.style.background = 'red'; 
    homeHasError = true; 
  } else {
    homeCardNumberInput.style.background = 'white';
  }
}
function homeCheckCardName() {
  const cardNameRegex = /^[a-z ,.'-]+$/i;
  if (!cardNameRegex.test(homeCardNameInput.value)) { 
    toastr.error('Please enter a valid card number');
    homeCardNameInput.style.background = 'red'; 
    homeHasError = true; 
  } else {
    homeCardNameInput.style.background = 'white';
  }
}
function homeCheckExpiry() {
  const expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  if (!expRegex.test(homeCardExpiryInput.value)) {
    toastr.error('Please enter a valid Expiry Date');
    homeCardExpiryInput.style.background = 'red';
    homeHasError = true;
  } else {
    homeCardExpiryInput.style.background = 'white';
  }
}
function homeCheckCVV() {
  const CVVRegex = /^[0-9]{3,4}$/;
  if (!CVVRegex.test(homeCardCVVInput.value)) {
    toastr.error('Please enter a valid CVV');
    homeCardCVVInput.style.background = 'red';
    homeHasError = true;
  } else {
    homeCardCVVInput.style.background = 'white';
  }
}

homeCardNumberInput.addEventListener('blur', homeCheckCardNumber);
homeCardNameInput.addEventListener('blur', homeCheckCardName);
homeCardExpiryInput.addEventListener('blur', homeCheckExpiry);
homeCardCVVInput.addEventListener('blur', homeCheckCVV);