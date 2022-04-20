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

function updateBatsmanUi(batsmanUi) {
  let batsMan = batsmanUi;
  if (batsMan.id == "strickerOne") {
    let batsmanOneRun = document.getElementById("stricker1Run");
    batsmanOneRun.innerText = batsMan.run;
    let batsmanOnebowl = document.getElementById("stricker1Bowl");
    batsmanOnebowl.innerText = batsMan.bowl;
    let batsmanOnefour = document.getElementById("stricker1Four");
    batsmanOnefour.innerText = batsMan.four;
    let batsmanOneSix = document.getElementById("stricker1Six");
    batsmanOneSix.innerText = batsMan.six;
    let batsmanOnestrikeRate = document.getElementById("stricker1StrickRate");
    batsmanOnestrikeRate.innerText = batsMan.strikeRate;
  } else {
    let batsmanTwoRun = document.getElementById("stricker2Run");
    batsmanTwoRun.innerText = batsMan.run;
    let batsmanTwobowl = document.getElementById("stricker2Bowl");
    batsmanTwobowl.innerText = batsMan.bowl;
    let batsmaTwofour = document.getElementById("stricker2Four");
    batsmaTwofour.innerText = batsMan.four;
    let batsmanTwoSix = document.getElementById("stricker2Six");
    batsmanTwoSix.innerText = batsMan.six;
    let batsmanTwoStrikeRate = document.getElementById("stricker2StrickRate");
    batsmanTwoStrikeRate.innerText = batsMan.strikeRate;
  }
}
function updateBowlerUi(bowlerUi) {
  let bowler = bowlerUi;
  if (bowler.id == "currentbowler") {
    let bowlerOver = document.getElementById("tableCurrentBowlerOver");
    bowlerOver.innerText = bowler.over;
    let bowlerMaiden = document.getElementById("tableCurrentBowlerMaiden");
    bowlerMaiden.innerText = bowler.maiden;
    let bowlerRun = document.getElementById("tableCurrentBowlerRun");
    bowlerRun.innerText = bowler.run;
    let bowlerWicket = document.getElementById("tableCurrentBowlerWicket");
    bowlerWicket.innerText = bowler.wicket;
    let bowlerER = document.getElementById("tableCurrentBowlerEr");
    bowlerER.innerText = bowler.economyRate;
  }
}
// Zero Run
function zeroRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);
  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    batsmanOne = strikeRateCalculator(batsmanOne);
    updateBatsmanUi(batsmanOne);
    partnership();
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    batsmanTw0 = strikeRateCalculator(batsmanTw0);
    updateBatsmanUi(batsmanTw0);
    partnership();
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
  // bowler extra run
  // let bowlerExtra = hasextra(0);
  bowlerOne.run = bowlerOne.run + bowlerExtra;
  bowlerOne = economyRateCalculator(bowlerOne);
  updateBowlerUi(bowlerOne);
  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// One Run
function oneRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);
  var row = document.getElementById("stricker1").parentNode,
    sibling = row.previousElementSibling,
    parent = row.parentNode;
  parent.insertBefore(row, sibling);

  if (checkExtra()) {
    if (document.getElementById("wideExtra").checked == true) {
      let extraRun = localStorage.getItem("extraRun");
      extraRun = JSON.parse(extraRun);
      extraRun.total = extraRun.total + 2;
      extraRun.wide = extraRun.wide + 1;
      let teams = JSON.parse(localStorage.getItem("teams"));
      let batBallTeamCheck = JSON.parse(
        localStorage.getItem("batBallTeamCheck")
      );
      teams[batBallTeamCheck.batingTeamIndex].totalRun =
        teams[batBallTeamCheck.batingTeamIndex].totalRun + 2;
      localStorage.setItem("extraRun", JSON.stringify(extraRun));
      localStorage.setItem("teams", JSON.stringify(teams));
      // bowler
      var bowlerOne = localStorage.getItem("bowlerOne");
      bowlerOne = JSON.parse(bowlerOne);
      bowlerOne.run = bowlerOne.run + 2;
      bowlerOne = economyRateCalculator(bowlerOne);
      updateBowlerUi(bowlerOne);
      localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
      updateInformation(batsmanOne, batsmanTw0, bowlerOne);
    } else {
      if (
        (document.getElementById("noExtra").checked == true &&
          document.getElementById("byeExtra").checked == true) ||
        (document.getElementById("noExtra").checked == true &&
          document.getElementById("legByeExtra").checked == true)
      ) {
        let extraRun = localStorage.getItem("extraRun");
        extraRun = JSON.parse(extraRun);
        extraRun.total = extraRun.total + 2;
        extraRun.noBall = extraRun.noBall + 2;
        let teams = JSON.parse(localStorage.getItem("teams"));
        let batBallTeamCheck = JSON.parse(
          localStorage.getItem("batBallTeamCheck")
        );
        teams[batBallTeamCheck.batingTeamIndex].totalRun =
          teams[batBallTeamCheck.batingTeamIndex].totalRun + 2;
        localStorage.setItem("extraRun", JSON.stringify(extraRun));
        localStorage.setItem("teams", JSON.stringify(teams));

        // bowler
        var bowlerOne = localStorage.getItem("bowlerOne");
        bowlerOne = JSON.parse(bowlerOne);
        bowlerOne.run = bowlerOne.run + 2;
        bowlerOne = economyRateCalculator(bowlerOne);
        updateBowlerUi(bowlerOne);
        localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
        updateInformation(batsmanOne, batsmanTw0, bowlerOne);
      } else if (document.getElementById("noExtra").checked == true) {
        // noball
        console.log("Only no ball");
      } else if (document.getElementById("byeExtra").checked == true) {
        console.log("Only Bye Extra");
      } else if (document.getElementById("legByeExtra").checked == true) {
        console.log("Only leg bye Extra");
      }
    }
  } else {
    if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
      batsmanOne.bowl = batsmanOne.bowl + 1;
      batsmanOne.run = batsmanOne.run + 1;
      let teams = JSON.parse(localStorage.getItem("teams"));
      let batBallTeamCheck = JSON.parse(
        localStorage.getItem("batBallTeamCheck")
      );
      teams[batBallTeamCheck.batingTeamIndex].totalRun =
        teams[batBallTeamCheck.batingTeamIndex].totalRun + 2;
      batsmanOne = strikeRateCalculator(batsmanOne);
      updateBatsmanUi(batsmanOne);
      partnership();
      localStorage.setItem("currentBatsman", batsmanTw0.name);
      localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
      localStorage.setItem("teams", JSON.stringify(teams));
    } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
      batsmanTw0.bowl = batsmanTw0.bowl + 1;
      batsmanTw0.run = batsmanTw0.run + 1;
      let teams = JSON.parse(localStorage.getItem("teams"));
      let batBallTeamCheck = JSON.parse(
        localStorage.getItem("batBallTeamCheck")
      );
      teams[batBallTeamCheck.batingTeamIndex].totalRun =
        teams[batBallTeamCheck.batingTeamIndex].totalRun + 1;
      batsmanTw0 = strikeRateCalculator(batsmanTw0);
      updateBatsmanUi(batsmanTw0);
      partnership();
      localStorage.setItem("currentBatsman", batsmanOne.name);
      localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
      localStorage.setItem("teams", JSON.stringify(teams));
    }
    var bowlerOne = localStorage.getItem("bowlerOne");
    bowlerOne = JSON.parse(bowlerOne);
    let bowl = parseFloat(bowlerOne.over) + 0.1;
    bowl = parseFloat(bowl).toFixed(1);
    bowlerOne.over = bowl;
    bowlerOne.run = bowlerOne.run + 1;
    if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
      bowlerOne.over = Math.ceil(bowlerOne.over);
    }
    // bowler extra run
    // let bowlerExtra = hasextra(1);
    // bowlerOne.run = bowlerOne.run + bowlerExtra;
    bowlerOne = economyRateCalculator(bowlerOne);
    updateBowlerUi(bowlerOne);
    localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
    updateInformation(batsmanOne, batsmanTw0, bowlerOne);
  }
}

// Two Run
function twoRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);

  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    batsmanOne.run = batsmanOne.run + 2;
    batsmanOne = strikeRateCalculator(batsmanOne);
    updateBatsmanUi(batsmanOne);
    partnership();
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    batsmanTw0.run = batsmanTw0.run + 2;
    batsmanTw0 = strikeRateCalculator(batsmanTw0);
    updateBatsmanUi(batsmanTw0);
    partnership();
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  bowlerOne.run = bowlerOne.run + 2;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }
  // bowler extra run
  // let bowlerExtra = hasextra(2);
  bowlerOne.run = bowlerOne.run + bowlerExtra;
  bowlerOne = economyRateCalculator(bowlerOne);
  updateBowlerUi(bowlerOne);
  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// Three Run
function threeRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);
  var row = document.getElementById("stricker1").parentNode,
    sibling = row.previousElementSibling,
    parent = row.parentNode;
  parent.insertBefore(row, sibling);
  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    batsmanOne.run = batsmanOne.run + 3;
    batsmanOne = strikeRateCalculator(batsmanOne);
    updateBatsmanUi(batsmanOne);
    partnership();
    localStorage.setItem("currentBatsman", batsmanTw0.name);
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    batsmanTw0.run = batsmanTw0.run + 3;
    batsmanTw0 = strikeRateCalculator(batsmanTw0);
    updateBatsmanUi(batsmanTw0);
    partnership();
    localStorage.setItem("currentBatsman", batsmanOne.name);
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }

  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  bowlerOne.run = bowlerOne.run + 3;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }
  // bowler extra run
  // let bowlerExtra = hasextra(3);
  bowlerOne.run = bowlerOne.run + bowlerExtra;
  bowlerOne = economyRateCalculator(bowlerOne);
  updateBowlerUi(bowlerOne);
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
    batsmanOne.run = batsmanOne.run + 4;
    batsmanOne.four = batsmanOne.four + 1;
    updateBatsmanUi(batsmanOne);
    partnership();
    batsmanOne = strikeRateCalculator(batsmanOne);
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    batsmanTw0.run = batsmanTw0.run + 4;
    batsmanTw0.four = batsmanTw0.four + 1;
    batsmanTw0 = strikeRateCalculator(batsmanTw0);
    updateBatsmanUi(batsmanTw0);
    partnership();
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  bowlerOne.run = bowlerOne.run + 4;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }
  // bowler extra run
  // let bowlerExtra = hasextra(4);
  bowlerOne.run = bowlerOne.run + bowlerExtra;

  bowlerOne = economyRateCalculator(bowlerOne);
  updateBowlerUi(bowlerOne);
  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  updateInformation(batsmanOne, batsmanTw0, bowlerOne);
}

// Five Run
function fiveRun() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);

  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);
  var row = document.getElementById("stricker1").parentNode,
    sibling = row.previousElementSibling,
    parent = row.parentNode;
  parent.insertBefore(row, sibling);
  if (localStorage.getItem("currentBatsman") == batsmanOne.name) {
    batsmanOne.bowl = batsmanOne.bowl + 1;
    batsmanOne.run = batsmanOne.run + 5;
    batsmanOne = strikeRateCalculator(batsmanOne);
    updateBatsmanUi(batsmanOne);
    partnership();
    localStorage.setItem("currentBatsman", batsmanTw0.name);
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    batsmanTw0.run = batsmanTw0.run + 5;
    batsmanTw0 = strikeRateCalculator(batsmanTw0);
    updateBatsmanUi(batsmanTw0);
    partnership();
    localStorage.setItem("currentBatsman", batsmanOne.name);
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  bowlerOne.run = bowlerOne.run + 5;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }
  // bowler extra run
  // let bowlerExtra = hasextra(5);
  bowlerOne.run = bowlerOne.run + bowlerExtra;

  bowlerOne = economyRateCalculator(bowlerOne);
  updateBowlerUi(bowlerOne);
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
    batsmanOne.run = batsmanOne.run + 6;
    batsmanOne.six = batsmanOne.six + 1;
    batsmanOne = strikeRateCalculator(batsmanOne);
    updateBatsmanUi(batsmanOne);
    partnership();
    localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  } else if (localStorage.getItem("currentBatsman") == batsmanTw0.name) {
    batsmanTw0.bowl = batsmanTw0.bowl + 1;
    batsmanTw0.run = batsmanTw0.run + 6;
    batsmanTw0.six = batsmanTw0.six + 1;
    batsmanTw0 = strikeRateCalculator(batsmanTw0);
    updateBatsmanUi(batsmanTw0);
    partnership();
    localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  }
  let bowlerOne = localStorage.getItem("bowlerOne");
  bowlerOne = JSON.parse(bowlerOne);
  let bowl = parseFloat(bowlerOne.over) + 0.1;
  bowl = parseFloat(bowl).toFixed(1);
  bowlerOne.over = bowl;
  bowlerOne.run = bowlerOne.run + 6;
  if ((bowlerOne.over % 1).toFixed(1) == 0.6) {
    bowlerOne.over = Math.ceil(bowlerOne.over);
  }
  // bowler extra run
  // let bowlerExtra = hasextra(6);
  bowlerOne.run = bowlerOne.run + bowlerExtra;

  bowlerOne = economyRateCalculator(bowlerOne);
  updateBowlerUi(bowlerOne);
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
        team.batsmanArray.forEach((batsMan, i) => {
          if (batsMan.name == batsmanOne.name) {
            team.batsmanArray[i] = batsmanOne;
          } else if (batsMan.name == batsmanTw0.name) {
            team.batsmanArray[i] = batsmanTw0;
          }
        });
      } else if (team.name == localStorage.getItem("VisitorName")) {
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

function strikeRateCalculator(batsman) {
  let strikeRate = ((batsman.run / batsman.bowl) * 100).toFixed(2);
  batsman.strikeRate = strikeRate;
  return batsman;
}

function economyRateCalculator(bowler) {
  let economyRate = (bowler.run / bowler.over).toFixed(2);
  bowler.economyRate = economyRate;
  if (bowler.over == 0) {
    bowler.economyRate = 0;
  }
  return bowler;
}
function swapBatsman() {
  var row = document.getElementById("stricker1").parentNode,
    sibling = row.previousElementSibling,
    parent = row.parentNode;
  parent.insertBefore(row, sibling);
}

function extra(checkbox) {
  let wideballExtra = document.getElementById("wideExtra");
  let noballExtra = document.getElementById("noExtra");
  let byeExtra = document.getElementById("byeExtra");
  let legByeExtra = document.getElementById("legByeExtra");

  if (checkbox === wideballExtra) {
    noballExtra.checked = false;
    byeExtra.checked = false;
    legByeExtra.checked = false;
  } else if (checkbox === noballExtra) {
    wideballExtra.checked = false;
  } else if (checkbox === byeExtra) {
    wideballExtra.checked = false;
    legByeExtra.checked = false;
  } else if (checkbox === legByeExtra) {
    wideballExtra.checked = false;
    byeExtra.checked = false;
  }
}

function retire() {}

function wicket() {
  let wicket = document.getElementById("wicket");
  if (wicket.checked) {
    window.location = "wicket.html";
  }
}

// function hasextra(run) {
//   let hasExtraRun = localStorage.getItem("extraRun");
//   hasExtraRun = JSON.parse(hasExtraRun);
//   let bonus = 0;
//   var checkboxes = document.getElementsByName("extraWideNoLegByesByes");
//   checkboxes.forEach((item) => {
//     if (item.checked == true) {
//       bonus = 1;
//       if (document.getElementById("wideExtra") === item) {
//         hasExtraRun.wide = hasExtraRun.wide + 1 + run;
//       }
//       if (document.getElementById("noExtra") === item) {
//         hasExtraRun.noBall = hasExtraRun.noBall + 1;
//       }
//       if (document.getElementById("byeExtra") === item) {
//         hasExtraRun.byes = hasExtraRun.byes + run;
//       }
//       if (document.getElementById("legByeExtra") === item) {
//         hasExtraRun.legByes = hasExtraRun.legByes + run;
//       }
//     }
//   });
//   // localStorage.setItem("extraRun", JSON.stringify(hasExtraRun));
//   return bonus;
// }

// partnership

function partnership() {
  let batsmanOne = localStorage.getItem("batsmanOne");
  batsmanOne = JSON.parse(batsmanOne);
  let batsmanTw0 = localStorage.getItem("batsmanTwo");
  batsmanTw0 = JSON.parse(batsmanTw0);
  let pertnership = batsmanOne.run + batsmanTw0.run;
  localStorage.setItem("Partnership", JSON.stringify(pertnership));
}

function checkExtra() {
  let wideballExtra = document.getElementById("wideExtra");
  let noballExtra = document.getElementById("noExtra");
  let byeExtra = document.getElementById("byeExtra");
  let legByeExtra = document.getElementById("legByeExtra");

  if (
    wideballExtra.checked == true ||
    noballExtra.checked == true ||
    byeExtra.checked == true ||
    legByeExtra.checked == true
  ) {
    return true;
  } else {
    return false;
  }
}
