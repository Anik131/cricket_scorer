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
let batsmanDetail= localStorage.getItem('batsmanOne');
batsmanDetail= JSON.parse(batsmanDetail);
batsmanDetail["run"] = batsmanDetail["run"]

let batsmanOne = {
    name: batsmanDetail["name"],
    run: batsmanDetail["run"],
    bowl: batsmanDetail["bowl"]+1,
    four: 0,
    six: 0,
    strikeRate: 0,
}
let bowlerDetail= localStorage.getItem('bowlerOne');
bowlerDetail= JSON.parse(bowlerDetail);
let bowlerOne = {
    name: batsmanDetail["name"],
    over: 0,
    maiden: 0,
    run: batsmanDetail["run"],
    wicket: 0,
    economyRate: 0,
};
localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
}
function oneRun(){
    let one = 1;
let batsmanDetail= localStorage.getItem('batsmanOne');
batsmanDetail= JSON.parse(batsmanDetail);
batsmanDetail["run"] = batsmanDetail["run"]

let batsmanOne = {
    name: batsmanDetail["name"],
    run: batsmanDetail["run"]+1,
    bowl: batsmanDetail["bowl"]+1,
    four: 0,
    six: 0,
    strikeRate: 0,
};
let bowlerDetail= localStorage.getItem('bowlerOne');
bowlerDetail= JSON.parse(bowlerDetail);
let bowlerOne = {
    name: bowlerDetail["name"],
    over: 0,
    maiden: 0,
    run: bowlerDetail["run"]+1,
    wicket: 0,
    economyRate: 0,
};
localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
}
function twoRun(){
let batsmanDetail= localStorage.getItem('batsmanOne');
batsmanDetail= JSON.parse(batsmanDetail);
batsmanDetail["run"] = batsmanDetail["run"]
    let two =2
    let batsmanOne = {
        name: batsmanDetail["name"],
        run: batsmanDetail["run"]+2,
        bowl: batsmanDetail["bowl"]+1,
        four: 0,
        six: 0,
        strikeRate: 0,
    };
let bowlerDetail = localStorage.getItem('bowlerOne');
    bowlerDetail = JSON.parse(bowlerDetail);
    let bowlerOne = {
        name: bowlerDetail["name"],
        over: 0,
        maiden: 0,
        run: bowlerDetail["run"]+2,
        wicket: 0,
        economyRate: 0,
    };
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
    localStorage.setItem("bowlerOne",JSON.stringify(bowlerOne));
}
function threeRun(){
let batsmanDetail= localStorage.getItem('batsmanOne');
batsmanDetail= JSON.parse(batsmanDetail);
batsmanDetail["run"] = batsmanDetail["run"]
    let three = 3
    let batsmanOne = {
        name: batsmanDetail["name"],
        run: batsmanDetail["run"]+3,
        bowl: batsmanDetail["bowl"]+1,
        four: 0,
        six: 0,
        strikeRate: 0,
    };
    let bowlerDetail = localStorage.getItem('bowlerOne');
    bowlerDetail = JSON.parse(bowlerDetail);
    let bowlerOne = {
        name: bowlerDetail["name"],
        over: 0,
        maiden: 0,
        run: bowlerDetail["run"]+3,
        wicket: 0,
        economyRate: 0,
    };
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
    localStorage.setItem("bowlerOne",JSON.stringify(bowlerOne));
}
function fourRun(){
let batsmanDetail= localStorage.getItem('batsmanOne');
batsmanDetail= JSON.parse(batsmanDetail);
batsmanDetail["run"] = batsmanDetail["run"]
    let four = 4
    let batsmanOne = {
        name: batsmanDetail["name"],
        run: batsmanDetail["run"]+4,
        bowl: batsmanDetail["bowl"]+1,
        four: batsmanDetail["four"]+1,
        six: 0,
        strikeRate: 0,
    };
    let bowlerDetail = localStorage.getItem('bowlerOne');
    bowlerDetail = JSON.parse(bowlerDetail);
    let bowlerOne = {
        name: bowlerDetail["name"],
        over: 0,
        maiden: 0,
        run: bowlerDetail["run"]+4,
        wicket: 0,
        economyRate: 0,
    };
        localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
        localStorage.setItem("bowlerOne",JSON.stringify(bowlerOne));
}
function fiveRun(){
let batsmanDetail= localStorage.getItem('batsmanOne');
batsmanDetail= JSON.parse(batsmanDetail);
batsmanDetail["run"] = batsmanDetail["run"]
    let five = 5
    let batsmanOne = {
        name: batsmanDetail["name"],
        run: batsmanDetail["run"]+5,
        bowl: batsmanDetail["bowl"]+1,
        four: 0,
        six: 0,
        strikeRate: 0,
};
let bowlerDetail = localStorage.getItem('bowlerOne');
bowlerDetail = JSON.parse(bowlerDetail);
let bowlerOne = {
    name: bowlerDetail["name"],
    over: 0,
    maiden: 0,
    run: bowlerDetail["run"]+5,
    wicket: 0,
    economyRate: 0,
};
localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
localStorage.setItem("bowlerOne",JSON.stringify(bowlerOne));
}
function sixRun(){
    let batsmanDetail= localStorage.getItem('batsmanOne');
batsmanDetail= JSON.parse(batsmanDetail);
batsmanDetail["run"] = batsmanDetail["run"]
    let six = 6
    let batsmanOne = {
        name: batsmanDetail["name"],
        run: batsmanDetail["run"]+3,
        bowl: batsmanDetail["bowl"]+1,
        four: 0,
        six: batsmanDetail["six"]+1,
        strikeRate: 0,
};
let bowlerDetail = localStorage.getItem('bowlerOne');
bowlerDetail = JSON.parse(bowlerDetail);
let bowlerOne = {
    name: bowlerDetail["name"],
    over: 0,
    maiden: 0,
    run: bowlerDetail["run"]+6,
    wicket: 0,
    economyRate: 0,
};
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
    localStorage.setItem("bowlerOne",JSON.stringify(bowlerOne));
}
function dotDot(){
    console.log("clicked");
}