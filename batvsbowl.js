
let hostName= localStorage.getItem("HostName");
let VisitorName =localStorage.getItem("VisitorName");
let hostNameVsVisitorName = hostName.concat(" vs ",VisitorName);
let title= document.getElementById("headerTeamvsTeam");
title.innerText = hostNameVsVisitorName;
title.style.color = "Green";

let cStricker = localStorage.getItem("cStricker");
let stricker = document.getElementById("stricker1");
stricker.innerText= cStricker;

let nonStriker = localStorage.getItem("nonStriker");
let stricker2 = document.getElementById("stricker2");
stricker2.innerText= nonStriker;
let oBowler = localStorage.getItem("oBowler");
console.log(oBowler);
let tableCurrentBowler =document.getElementById("tableCurrentBowler");
tableCurrentBowler.innerText = oBowler;


// Runs
function zero(){
    let zero = 0;
}
function one(){
    let one = 1;
}
function two(){
    let two = 2;
}
function three(){
    let three = 3;
}
function four(){
    let four = 4;
}
function five(){
    let five = 5;
    console.log(five);
}
function six(){
    let six = 6;
}
function dotdot(){
    console.log("clicked");
}

