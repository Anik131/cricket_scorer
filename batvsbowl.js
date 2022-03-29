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
localStorage.setItem(cStricker,parseInt(0));

let tableCurrentBowler =document.getElementById("tableCurrentBowler");
tableCurrentBowler.innerText = oBowler;

function addRun(run,currentStricker){
    console.log(run);
    console.log(currentStricker);
    let currentRun = localStorage.getItem(currentStricker);
    currentRun = parseInt(currentRun);
    console.log(typeof(currentRun));
    currentRun = currentRun+run;
    localStorage.setItem(currentStricker,currentRun);
}
// Runs
// function runZero(){
//     let zero = 0;
// }
// function runOne(){
//     let one = 1;
// }
// function runTwo(){
//     let two = 2;
// }
// function runtThree(){
//     let three = 3;
// }
// function runFour(){
//     let four = 4;
// }
// function runFive(){
//     let five = 5;
//     console.log(five);
// }
// function runSix(){
//     let six = 6;
// }
function dotDot(){
    console.log("clicked");
}
