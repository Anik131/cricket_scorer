// Header 
let hostName= localStorage.getItem("HostName");
let VisitorName =localStorage.getItem("VisitorName");
let hostNameVsVisitorName = hostName.concat(" vs ",VisitorName);
let title= document.getElementById("headerTeamvsTeam");
title.innerText = hostNameVsVisitorName;
title.style.color = "Green";

let batsmanOne = JSON.parse(localStorage.getItem("batsmanOne"));
let stricker = document.getElementById("stricker1");
stricker.innerText= batsmanOne.name;

let batsmanTw0 = JSON.parse(localStorage.getItem("batsmanTwo"));
let stricker2 = document.getElementById("stricker2");
stricker2.innerText= batsmanTw0.name;

let oBowler = JSON.parse(localStorage.getItem("bowlerOne"));
let bowlerOne = document.getElementById("tableCurrentBowler");
tableCurrentBowler.innerText = oBowler.name;

// Strike Rate = (Runs Scored / Balls faced) * 100
// Economy Rate = Runs Conceded ÷ Overs Bowled
function zeroRun(){
    let zero = 0;

}
function oneRun(){
    let one = 1;
}
function twoRun(){
    let two =2
}
function threeRun(){
    let three = 3
}
function fourRun(){
    let four = 4
}
function fiveRun(){
    let five = 5
}
function sixRun(){
    let six = 6
}
function dotDot(){
    console.log("clicked");
}
