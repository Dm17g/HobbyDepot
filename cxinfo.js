"use strict";
var $ = function(id) { return document.getElementById(id); };


var saveReservation = function() {
    var name = $("name").value;
    var lname = $("lname").value;
    var email = $("email").value;
    var phone = $("phone").value;
    var address = $("address").value;
    var zip = $("zip").value;
    var cardname = $("cardname").value;
    var cardnumber = $("cardnumber").value;
    var cvv = $("cvv").value;
    var state = document.getElementById("state");
    var selstate = state.options[state.selectedIndex].value;


    var isValid = true;
    
    if (name === "") { 
        $("name_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else { $("name_error").firstChild.nodeValue = ""; } 

    if (lname === "") { 
        $("lname_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else { $("lname_error").firstChild.nodeValue = ""; } 

    if (email === "") { 
        $("email_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else { $("email_error").firstChild.nodeValue = ""; } 

    if (!(phone.toString().length == 10)) {
        $("phone_error").firstChild.nodeValue = "Phone number must be 10 digits";
        isValid = false;
    } else  { $("phone_error").firstChild.nodeValue = ""; }

    if (address === "") { 
        $("address_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else { $("address_error").firstChild.nodeValue = ""; } 

    if (!(zip.toString().length == 5)) { 
        $("zip_error").firstChild.nodeValue = "Zip code must be 5 digits";
        isValid = false;
    } else { $("zip_error").firstChild.nodeValue = ""; } 

    if (cardname === "") { 
        $("cardname_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else { $("cardname_error").firstChild.nodeValue = ""; } 

    if (!(cardnumber.toString().length == 16)) {
        $("cardnumber_error").firstChild.nodeValue = "Credit Card Number must be 16 digits.";
        isValid = false;
    } else  { $("cardnumber_error").firstChild.nodeValue = ""; }

    if (!(cvv.toString().length == 3)) {
        $("cvv_error").firstChild.nodeValue = "CVV must be 3 digits.";
        isValid = false;
    } else  { $("cvv_error").firstChild.nodeValue = ""; }

        if (isValid) {
        $("reservation_form").submit(); 
    }

    sessionStorage.name = $("name").value;
    sessionStorage.lname = $("lname").value;
    sessionStorage.phone = $("phone").value;
    sessionStorage.email = $("email").value;
    sessionStorage.address = $("address").value;
    sessionStorage.state = selstate;
    sessionStorage.zip = $("zip").value;
     // these verify that that the information provided is stored via sessionStorage 

    // submit form
    //$("reservation_form").submit();
};



window.onload = function() {
    $("submit_request").onclick = saveReservation; 

};