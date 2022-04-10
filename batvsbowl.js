// Header
let hostName = localStorage.getItem("HostName");
let VisitorName = localStorage.getItem("VisitorName");
let hostNameVsVisitorName = hostName.concat(" vs ", VisitorName);
let title = document.getElementById("headerTeamvsTeam");
title.innerText = hostNameVsVisitorName;
title.style.color = "Green";

let batsmanOne = JSON.parse(localStorage.getItem("batsmanOne"));
let stricker = document.getElementById("stricker1");
stricker.innerText = batsmanOne.name;

let batsmanTw0 = JSON.parse(localStorage.getItem("batsmanTwo"));
let stricker2 = document.getElementById("stricker2");
stricker2.innerText = batsmanTw0.name;

let oBowler = JSON.parse(localStorage.getItem("bowlerOne"));
let bowlerOne = document.getElementById("tableCurrentBowler");
tableCurrentBowler.innerText = oBowler.name;

// let stricker1OneRun= JSON.parse(localStorage.getItem("stricker1Run"));
// let

// Strike Rate = (Runs Scored / Balls faced) * 100
// Economy Rate = Runs Conceded ÷ Overs Bowled

// Zero Run
function zeroRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);

  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }

  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }

  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// One Run
function oneRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);

  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    batsmanOne.run = batsmanOne.run + 1;
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    batsmanTw0.run = batsmanTw0.run + 1;
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  bowlerOne.run = bowlerOne.run + 1;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }

  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// Two Run
function twoRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);

  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }

  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// Three Run
function threeRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);

  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }

  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }
  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// Four Run
function fourRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);

  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }

  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// Five Run
function fiveRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);

  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }
  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// Six Run
function sixRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);

  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }

  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}
function dotDot() {
  console.log("clicked");
}

function updateInformation(batsmanOne, batsmanTw0, bowlerOne) {
  let batBallTeamCheck = JSON.parse(localStorage.getItem("batBallTeamCheck"));

  teams = JSON.parse(localStorage.getItem("teams"));
  if (batBallTeamCheck.battingTeam == localStorage.getItem("HostName")) {
    teams.forEach((team) => {
      if (team.name == localStorage.getItem("HostName")) {
        console.log(batsmanOne.name);
        console.log(batsmanTw0.name);
        team.batsmanArray.forEach((batsMan, i) => {
          if (batsMan.name == batsmanOne.name) {
            team.batsmanArray[i] = batsmanOne;
          } else if (batsMan.name == batsmanTw0.name) {
            team.batsmanArray[i] = batsmanTw0;
          }
        });
      } else if (team.name == localStorage.getItem("VisitorTeam")) {
        team.bowlerArray.forEach((bowler, i) => {
          if (bowler.name == bowlerOne.name) {
            team.bowlerArray[i] = bowlerOne;
          }
        });
      }
    });
  } else if (
    batBallTeamCheck.battingTeam == localStorage.getItem("VisitorName")
  ) {
    teams.forEach((team) => {
      if (team.name == localStorage.getItem("VisitorName")) {
        team.batsmanArray.forEach((batsMan, i) => {
          if (batsMan.name == batsmanOne.name) {
            team.batsmanArray[i] = batsmanOne;
          } else if (batsMan.name == batsmanTw0.name) {
            team.batsmanArray[i] = batsmanTw0;
          }
        });
      } else if (team.name == localStorage.getItem("HostName")) {
        team.bowlerArray.forEach((bowler, i) => {
          if (bowler.name == bowlerOne.name) {
            team.bowlerArray[i] = bowlerOne;
          }
        });
      }
    });
  }
  localStorage.setItem("teams", JSON.stringify(teams));
}
