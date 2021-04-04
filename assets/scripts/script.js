var project1 = document.getElementById("project-examp-one");
var project2 = document.getElementById("project-examp-two");
var project3 = document.getElementById("project-examp-three");

// open to project 1 github repo
$(project1).on("click", function(){
    window.open("https://github.com/d606n6k/weather-dashboard");
});

// open to project 2 github repo
$(project2).on("click", function(){
    window.open("https://github.com/d606n6k/recipe-shuffle");
});

// open to project 3 github repo
$(project3).on("click", function(){
    window.open("https://github.com/d606n6k/work-day-scheduler");
});