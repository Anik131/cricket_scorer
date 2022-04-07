function selectOpeninglayers() {
  function player1() {
    let cStricker = document.getElementById("cStricker").value;
    if (cStricker == "") {
      document.getElementById("required3").innerHTML =
        "batsman's name is required";
      document.getElementById("required3").style.color = "red";
    } else {
      document.getElementById("required3").innerHTML = "";
    }
  }
  function player2() {
    let nonStriker = document.getElementById("nonStriker").value;
    if (nonStriker == "") {
      document.getElementById("required4").innerHTML =
        "batsman's name is required";
      document.getElementById("required4").style.color = "red";
    } else {
      document.getElementById("required4").innerHTML = "";
    }
  }
  function player3() {
    let oBowler = document.getElementById("oBowler").value;
    if (oBowler == "") {
      document.getElementById("required5").innerHTML =
        "Bowler's name is required";
      document.getElementById("required5").style.color = "red";
    } else {
      document.getElementById("required5").innerHTML = "";
    }
  }
  player1();
  player2();
  player3();

  let tossOwn = localStorage.getItem("toss");
  let opted = localStorage.getItem("OptedCheck");

  let batsmanArray = [];
  let bowlerArray = [];
  let cStricker = document.getElementById("cStricker");

  let batsmanOne = {
    name: cStricker.value,
    run: 0,
    bowl: 0,
    four: 0,
    six: 0,
    strikeRate: 0,
  };
  batsmanArray.push(batsmanOne);

  let nonStriker = document.getElementById("nonStriker");
  let batsmanTw0 = {
    name: nonStriker.value,
    run: 0,
    bowl: 0,
    four: 0,
    six: 0,
    strikeRate: 0,
  };
  batsmanArray.push(batsmanTw0);

  let oBowler = document.getElementById("oBowler");
  let bowlerOne = {
    name: oBowler.value,
    over: 0,
    maiden: 0,
    run: 0,
    wicket: 0,
    economyRate: 0,
  };
  bowlerArray.push(bowlerOne);

  let batBallTeamCheck = {};

  if (tossOwn == localStorage.getItem("HostName")) {
    if (opted == "Bat") {
      teams = JSON.parse(localStorage.getItem("teams"));
      teams.forEach((team) => {
        if (team.name == tossOwn) {
          team.batsmanArray = batsmanArray;
        } else if (team.name == localStorage.getItem("VisitorName")) {
          team.bowlerArray = bowlerArray;
        }
      });
      batBallTeamCheck = {
        battingTeam: tossOwn,
        bowlingTeam: localStorage.getItem("VisitorName"),
      };
      localStorage.setItem(
        "batBallTeamCheck",
        JSON.stringify(batBallTeamCheck)
      );
      localStorage.setItem("teams", JSON.stringify(teams));
    } else {
      teams = JSON.parse(localStorage.getItem("teams"));
      teams.forEach((team) => {
        if (team.name == tossOwn) {
          team.bowlerArray = bowlerArray;
        } else if (team.name == localStorage.getItem("VisitorName")) {
          team.batsmanArray = batsmanArray;
        }
      });
      batBallTeamCheck = {
        battingTeam: localStorage.getItem("VisitorName"),
        bowlingTeam: tossOwn,
      };
      localStorage.setItem(
        "batBallTeamCheck",
        JSON.stringify(batBallTeamCheck)
      );

      localStorage.setItem("teams", JSON.stringify(teams));
    }
  } else if (tossOwn == localStorage.getItem("VisitorName")) {
    if (opted == "Bat") {
      teams = JSON.parse(localStorage.getItem("teams"));
      teams.forEach((team) => {
        if (team.name == tossOwn) {
          team.batsmanArray = batsmanArray;
        } else if (team.name == localStorage.getItem("HostName")) {
          team.bowlerArray = bowlerArray;
        }
      });
      batBallTeamCheck = {
        battingTeam: tossOwn,
        bowlingTeam: localStorage.getItem("HostName"),
      };
      localStorage.setItem(
        "batBallTeamCheck",
        JSON.stringify(batBallTeamCheck)
      );

      localStorage.setItem("teams", JSON.stringify(teams));
    } else {
      teams = JSON.parse(localStorage.getItem("teams"));
      teams.forEach((team) => {
        if (team.name == tossOwn) {
          team.bowlerArray = bowlerArray;
        } else if (team.name == localStorage.getItem("HostName")) {
          team.batsmanArray = batsmanArray;
        }
      });
      batBallTeamCheck = {
        battingTeam: localStorage.getItem("HostName"),
        bowlingTeam: tossOwn,
      };
      localStorage.setItem(
        "batBallTeamCheck",
        JSON.stringify(batBallTeamCheck)
      );
      localStorage.setItem("teams", JSON.stringify(teams));
    }
  }

  //Store value
  localStorage.setItem("batsmanOne", JSON.stringify(batsmanOne));
  localStorage.setItem("batsmanTwo", JSON.stringify(batsmanTw0));
  localStorage.setItem("bowlerOne", JSON.stringify(bowlerOne));
  localStorage.setItem("currentBatsman", batsmanOne.name);

  if (cStricker.value != "" && nonStriker.value != "" && oBowler.value != "") {
    location.href = "batvsbowl.html";
  }
}
