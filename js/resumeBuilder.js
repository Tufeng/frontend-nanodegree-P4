/*
This is empty on purpose! Your code to build the resume will go here.
 */
//以下是初始化对象,顺序为bio,work,projects,education
var bio = {
    "name": "Oliver qi",
    "role": "Web Developer",
    "contacts": {
        "mobile": "18318039330",
        "email": "yanping_qi@163.com",
        "github": "tufeng",
        "twitter": "kiwen",
        "location": "深圳市"
    },
    "welcomeMessage": "感谢您的关注，以我虔诚之心，换您停驻！",
    "skills": ["html", "css", "javaScript"],
    "biopic": "images/fry.jpg"
};

var work = {
    "jobs": [{
            "employer": "mogu",
            "title": "marketer",
            "location": "上海市",
            "dates": "2014-2015",
            "description": "It is a great experience!"
        },
        {
            "employer": "Foxconn",
            "title": "manager",
            "location": "深圳市",
            "dates": "2015-present",
            "description": "So many methods  i can learn!"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "The first project",
            "dates": "2017",
            "description": "This is my first project,hopping you  can like it!",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        },
        {
            "title": "The second project",
            "dates": "2017",
            "description": "This is my second project,hopping you  can like it!",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        }
    ]
};

var education = {
    "schools": [{
            "name": "JiLin Amation Institute",
            "location": "长春市",
            "degree": "Bachelor",
            "majors": ["Marketing"],
            "dates": "2010-2014",
            "url": "#"
        },
        {
            "name": "YiyangYigao",
            "location": "洛阳市",
            "degree": "HightSchool",
            "majors": ["Marketing"],
            "dates": "2006-2010",
            "url": "#"
        }
    ],
    "onlineCourses": {
        "title": "前端纳米学位",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com"
    }
};
//以下封装函数,顺序为bio,work,education,project,inname
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedCotacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").append(formattedCotacts);
    var formattedCotacts = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedCotacts);
    var formattedCotacts = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedCotacts);
    var formattedCotacts = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts,#footerContacts").append(formattedCotacts);
    var formattedCotacts = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedCotacts);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedMeg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMeg);
    if (bio.skills.length > 0) {
      for (var skill=0; skill<bio.skills.length; skill++){
          $("#header").append(HTMLskillsStart);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedSkill);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedSkill);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedSkill);
      }
    };
}

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
        $(".work-entry:last").append(formattedDescription);
    };
}

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        for (var major = 0; major < education.schools[school].majors.length; major++) {
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
        }
    };
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
    var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
    $(".education-entry:last").append(HTMLonlineClasses,formattedOnlineTitle,formattedOnlineSchool,formattedOnlineDate,formattedOnlineURL);
}

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
//姓大小写转换
function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
    return newName;
}

//以下为调用函数
bio.display();
work.display();
projects.display();
education.display();
//姓大小写转换按钮
$("#main").append(internationalizeButton);
//地图
$("#mapDiv").append(googleMap);
