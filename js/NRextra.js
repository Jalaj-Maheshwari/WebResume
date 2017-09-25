extra.js
/*
//$("#main").append("Jalaj Maheshwari");
/*var awesomeThoughts="i m Jalaj and i m awesome";
console.log(awesomeThoughts);
var funThoughts=awesomeThoughts.replace("awesome","fun");
console.log(funThoughts);
$("#main").append(funThoughts);*/
var name="Jalaj Maheshwari"
var role="Student"

var formattedName=HTMLheaderName.replace("%data%",name);
var formattedRole=HTMLheaderRole.replace("%data%",role);

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);

$("#main").prepend("\n"+bio.skills);
$("#main").prepend("\n"+bio.welcomeMessage);
$("#main").prepend("\n"+bio.bioPic);
$("#main").prepend("\n"+bio.contacts.mobile);
$("#main").prepend("\n"+bio.contacts.email);
$("#main").prepend("\n"+bio.contacts.github);
$("#main").prepend("\n"+bio.contacts.location);
$("#main").prepend("\n"+bio.role);
$("#main").prepend("\n"+bio.name);


