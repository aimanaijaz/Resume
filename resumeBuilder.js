var bio = 
{ "name" : "Aiman Aijaz", 
  "role" : "Web Developer" , 
  "contacts" : {
  "mobile" : "845-616-5630",
  "email"  : "aimanaijaz02@gmail.com",
  "github" : "aimanaijaz",
  "twitter" : "Aiman Aijaz",
  "location" : "New York"
  },
  "welcomeMessage" : "My Resume",
  "skills" : [ 
  "Programming" , "Teaching" , "HTML" , "CSS"
  ],
  "bioPic" : "images/Aiman.jpg"
}


bio.display = function() {

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedPic);
$("#header").append(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

if(bio.skills.length > 0){
$("#header").append(HTMLskillsStart);

/*for(skill in bio.skills){
var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
$("#skills").append(formattedSkill);
} */

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill); 
}
}
bio.display();

var work = {
  "jobs" : [ {
  "employer" : " SWCET",
  "title" : " Asst Professor",
  "location": " Hyderabad",
  "dates": " June 2012 to June 2013",
  "description"  : "Conducted programming sessions for CS Engineering students in Web development and Computer Networks. Guided final year engineering students on their project work [ Complex web applications] "
  },
  {
  "employer" : " Ayaan",
  "title" : " Asst Professor",
  "location": " Hyderabad",
  "dates": " July 2010 to June 2010",
  "description" : "Taught Data Structures through C++ to 2nd year engineering students. - Worked with 3rd year engineering students to help them understand the basics of operating systems."
  } ]

}

work.display = function() {

  for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
}

work.display();

var projects = {
  "projects" : [ {
  "title" : " Neighborhood Map",
  "dates" : " March 2015",
  "description": "Single page, responsive application built with Knockout.js framework and hosted on GitHub pages. Developed a full page map that loads all the popular malls in Long Island. Users can view information about a mall by clicking on it. (Retrieved by AJAX requests to Wikipedia API).",
  "images": ["images/neighborhoodmap.png"] 
  },
  {
  "title" : " Web Performance Optimization",
  "dates" : " January 2015",
  "description": " Optimized critical rendering path of an existing website to achieve Page Speed Insights score above 90. Eliminated inefficiencies in the website’s scroll animation.",
  "images":  ["images/weboptimization.png"] 
  },
  {
  "title" : " Multiuser Blog",
  "dates" : " June 2016",
  "description": " Developed a multiuser blog using jinja2 where users can create posts as well as comment and like other posts. Deployed the application on appspot using Google App Engine.",
  "images": ["images/multiuserblog.png"] 
  } ]

}

projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length>0) {
      for(image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);

      }
    }
  }
}
projects.display();


var education = {
  "schools" : [
    {
  "name" : " Full Stack Web Developer",
  "location" : " California",
  "degree" : "Full Stack Web developer Nanodegree",
  "majors": ["Python", "Flask", "Jinja2"], 
  "dates": " 2016-2016",
  "url" : "http://www.udacity.com" 
  },
  {
  "name" : " Front End Web Developer",
  "location" : " California",
  "degree" : "Front End Web Developer",
  "majors": ["HTML", "CSS", "Javascript"], 
  "dates": " 2014-2015",
  "url" : "http://www.udacity.com" 
  },
  {
  "name" : " Indian School Salalah",
  "location" : " Salalah",
  "degree": " AISSE",
  "majors" : ["Maths", "Science"], 
  "dates": " 1992 - 2004",
  "url" : "http://www.indianschoolsalalah.com" 
  },
  {
  "name" : " St. Ann's Junior College",
  "location" : " Hyderabad",
  "degree" : "BIE",
  "majors": ["Maths", "Physcis", "Chemistry"], 
  "dates": " 2004-2006",
  "url" : "http://www.stannscollegehyd.com" 
  },
  {
  "name" : " SWCET",
  "location" : " Hyderabad",
  "degree": " B.Tech",
  "majors" : ["IT"], 
  "dates": " 2006-2010",
  "url" : "http://www.swcet.in" 
  },
  {
  "name" : " SWCET",
  "location" : " Hyderabad",
  "degree": " M.Tech",
  "majors": ["CS"], 
  "dates": " 2010 - 2012",
  "url" : " http://www.swcet.in " 
  } ],

  "onlinecourses" : [ {
    "title" : "Intro to HTML and CSS",
    "school" : "Udacity",
    "dates" : "Sep 2014",
    "url" : "http://www.udacity.com"
  },
  {
    "title" : "Javascript Basics",
    "school" : "Udacity",
    "dates" : "Oct 2014",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Object oriented Javascript",
    "school" : "Udacity",
    "dates" : "Nov 2014",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Web Performance Optimization",
    "school" : "Udacity",
    "dates" : "Dec 2014",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Javascript Design Patterns",
    "school" : "Udacity",
    "dates" : "Jan 2015",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Javascript Testing",
    "school" : "Udacity",
    "dates" : "Feb 2015",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Programming Foundations in Python",
    "school" : "Udacity",
    "dates" : "Jul 2015",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Intro to relational databases",
    "school" : "Udacity",
    "dates" : "Aug 2015",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Full Stack foundations",
    "school" : "Udacity",
    "dates" : "Sep 2015",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Authentication and Authorization",
    "school" : "Udacity",
    "dates" : "Oct 2015",
    "url" : "http://www.udacity.com"

  },
  {
    "title" : "Configuring Linux web servers",
    "school" : "Udacity",
    "dates" : "May 2016",
    "url" : "http://www.udacity.com"

  }
  ]

}

education.display = function() {
  for(school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

     if(education.schools[school].majors.length>0) {
      for(major in education.schools[school].majors) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedMajor);

      }
    }
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for(online in education.onlinecourses) {

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[online].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[online].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlinecourses[online].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlinecourses[online].url);
    $(".education-entry:last").append(formattedURL); 
  }
}
education.display();


$("#mapDiv").append(googleMap);














