


var bio = {
	"name": "Jalaj Maheshwari",
	"role": "Student",
	"contacts": {
		"mobile": "+91 7738638518",
		"email": "jalaj.1702@gmail.com",
		"github": "jalajmaheshwari",
		"facebook":"jalaj.maheshwari.1",
		"twitter":"@jalaj",
		"location": "Mumbai"
	},
	"welcomeMessage": "WELCOME TO MY WEB-RESUME!!",
	"skills": [ "Analyst", "Web Development", "App Development", "Awesomeness", "Creativity" ],
	"bioPic": " images/picp.jpg "
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#header").prepend(formattedLocation);
		
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		//$("#topContacts").append(formattedMobile);
//		$("#footerContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		//$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		//$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
       // $("#footerContacts").append(fbicon); 
		var formattedfacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
		//$("#topContacts").append(formattedfacebook);
		$("#footerContacts").append(formattedfacebook);

  		var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		//$("#topContacts").append(formattedtwitter);
		$("#footerContacts").append(formattedtwitter);


  		//$("#footerContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
		var formattedWeclome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWeclome);
if(bio.skills.length>0)
{

    $("#header").append(HTMLskillsStart);  
	for(ch in bio.skills)
	{

			var formattedskills=HTMLskills.replace("%data%",bio.skills[ch]);
	$("#skills").append(formattedskills);
	}

		
		


var education={
	"schools": [{
		"name": "Veermata Jijabai Technological Institute",
		"location": "Matunga,Mumbai",
		"degree": "Bachelor of Technology",
		"majors": "Computer Engineering",
		"Years_Attended": "2015-present",
		"url":"http://www.vjti.ac.in"
	}, {
		"name": "Thakur Polytechnic",
		"location": "Kandivali,Mumbai",
		"degree": "Diploma in Computer Engineering",
		"majors": "Computer Engineering",
		"Years_Attended": "2012-2015",
		"url":"http://www.tpolymumbai.in"
	}
	],             // school will not have any online courses
       
       display: function() {
		for (edu in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("%url%", education.schools[edu].url);

             var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
              


              var formattedNameAndDegree=formattedName + formattedDegree;
              		$(".education-entry:last").append(formattedNameAndDegree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].Years_Attended );
			$(".education-entry:last").append(formattedDate);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			$(".education-entry:last").append(formattedLocation);
			if (education.schools[edu].majors.length > 0) {
				//for (major in education.schools[edu].majors) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
					
				//}
			}
            $(".education-entry:last").append(formattedMajor);        
 		}}
		


}


var work={
	"jobs":[
	{
		"location":"Lucknow"
	},
	{
		"location":"Mysore"
	}]
}
var projects={
	"projects":[{
	"title":"Homzapp-An Android Application",
    "dates": "June 2014-November 2014",
    "description": "Developed an android application which aids to compute the monthly wages of the Domestic Workers belonging to any Domain"+ "\n" +
                   "<br>Front End: Java" +"\n"+"<br>Back End: SQLite"+"\n" +
                    "<br>Project was made under the Guidance of L& T Infotech, Mumbai.",
    "images":["images/pic1.png","images/pic2.png"],                
                },
                {
    "title": "ATM Machine Simulation",
    "dates": "December 2015",
    "description": "Developed a Java based Application which simulates the working of ATM Machine"+"\n"+
                   "<br>Front End: Java"+"\n"+
                   "<br>Back End: Ms-Access."+"\n"+"<br>Project was made as a part of Program Development and Object Oriented Paradigm curriculum and also saw the use of Java Swing Functionality",
    "images":["images/atm1.png","images/atm2.png"],
                 }           
               ],
     display: function () 
     {
     for(project in projects.projects)
     {
     $("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
					if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
	            }}

	}	
          
     }
    }   

var achievements={
	"achievements": [
		"1.Secured 2nd Merit Rank in Maharashtra State in Diploma Summer 2015 Exam",
		"2.Bagged Overall Achievement Award for year 2014-2015 at Thakur Polytechnic",
		"3.Secured 1st position in State level Technical Paper Presentation and State level Technical Quiz Competition held at Dr.D.Y.Patil College",
		"4.Best Speaker title and 1st place in Inter Departmental Debate Competition for 2 Consecutive Years",
		"5.Secured 2nd position in S.S.C examination at intra school level",
		"6.Crowned as Franciscan Prince for the Academic year 2011-2012",
		"7.Crowned as Xaviers Prince for the Academic year 2011-2012 at Inter School Level Personality Pageant Competition",
		"8.Bagged a place with a percentile of 97.93 amongst top 120 students in Mumbai region at The Arc Engineering Talent Hunt organized by Times NIE in 2011."
	],

	display: function () {
		for(achieve in achievements.achievements)
			{ $("#Achievements").append(HTMLachieveStart);
				var formattedachievements=HTMLachievements.replace("%data%",achievements.achievements[achieve]);
                $(".achieve-entry:last").append(formattedachievements);
		     }
	}

}
}
/*formattedskills=HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedskills);
 formattedskills=HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedskills);
 formattedskills=HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedskills);
 formattedskills=HTMLskills.replace("%data%",bio.skills[4]);
$("#skills").append(formattedskills);
*/
education.display();
projects.display();
achievements.display();
$("#mapDiv").append(googleMap);

var count=2;
 $( "#button" ).click(function() {
 $( "#text"+count ).show();
 count++;
        });

 $(function() {
  var navPosition = $('#nav-bar').offset().top -10;
  var navBar = document.getElementById('nav-bar');
  var header = document.getElementById('header');

  function navControl() {
    var currentScroll = $(document).scrollTop();
    if (currentScroll >= navPosition) {
      navBar.classList.add('fixed-nav');
      header.classList.add('expand-header');
    } else {
      navBar.classList.remove('fixed-nav');
      header.classList.remove('expand-header');
    }  
  }

  $(window).scroll(navControl);
});

 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false
    });

    $( "#connection" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
  });
 $( "#connection" ).button().on( "click", function() {
 	  prompt("hi");
      dialog.dialog( "open" );
    });

