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

// let stricker1OneRun= JSON.parse(localStorage.getItem("stricker1Run"));
// let 

// Strike Rate = (Runs Scored / Balls faced) * 100
// Economy Rate = Runs Conceded ÷ Overs Bowled


// Zero Run
function zeroRun(){

if (localStorage.getItem("currentBatsman")=="batsmanOne"){
    let batsmanOne = localStorage.getItem("batsmanOne");
    batsmanOne = JSON.parse(batsmanOne);
    batsmanOne.bowl = batsmanOne.bowl +1;
}
else{
    if (localStorage.getItem("currentBatsman")=="batsmanTw0"){
        let batsmanTw0 = localStorage.getItem("batsmanTw0");
        batsmanTw0 = JSON.parse(batsmanTw0);
        batsmanTw0.bowl = batsmanTw0.bowl +1;
    }
}
let bowlerOne= localStorage.getItem('bowlerOne');
bowlerOne= JSON.parse(bowlerOne);
let bowl = parseFloat(bowlerOne.over) + 0.1;
bowl = parseFloat(bowl).toFixed(1);
bowlerOne.over = bowl;
if((bowlerOne.over % 1).toFixed(1)== 0.6){
    bowlerOne.over = Math.ceil(bowlerOne.over);

}
}
// One Run

function oneRun(){

}

// Two Run

function twoRun(){


}

// Three Run

function threeRun(){

}

// Four Run

function fourRun(){

}

// Five Run

function fiveRun(){

}
// Six Run

function sixRun(){

}
function dotDot(){
    console.log("clicked");
}