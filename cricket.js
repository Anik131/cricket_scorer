// Toss won by-Name change
function TeamNameFucntion() {
  let tName = document.getElementById("HostName").value;
  if (tName == "") {
  } else {
    document.getElementById("hostTeamName").innerHTML = tName;
    document.getElementById("THostTeam").value = tName;
  }
  let vName = document.getElementById("VisitorName").value;
  if (vName == "") {
  } else {
    document.getElementById("visitorTeamName").innerHTML = vName;
    document.getElementById("TVisitorTeam").value = vName;
  }
}
// Submit button - Start match
function StartMatchFunction() {
  let HostName = document.getElementById("HostName").value;
  if (HostName == "") {
    document.getElementById("required1").innerHTML = "Team name is required";
    document.getElementById("required1").style.color = "red";
  } else {
    document.getElementById("required1").innerHTML = "";
  }
  let VisitorName = document.getElementById("VisitorName").value;
  if (VisitorName == "") {
    document.getElementById("required2").innerHTML = "Team name is required";
    document.getElementById("required2").style.color = "red";
  }

  let toss = document.querySelector('input[name="Toss"]:checked').value;
  console.log(toss);
  let OptedCheck = document.querySelector('input[name="Opted"]:checked').value;
  let Overs = document.getElementById("Overs").value;
  if (Overs == "") {
    Overs = 16;
  }

  // Saving HostName, Visitor Team name, Overs, OptedCheck, Toss won by

  if (localStorage.getItem("teams") == null) {
    var teams = [];
  } else {
    teams = JSON.parse(localStorage.getItem("teams"));
  }

  let hostTeam = { name: HostName };
  teams.push(hostTeam);
  localStorage.setItem("HostName", HostName);

  let visitorTeam = { name: VisitorName };
  teams.push(visitorTeam);
  localStorage.setItem("VisitorName", VisitorName);
  localStorage.setItem("teams", JSON.stringify(teams));

  // localStorage.setItem("Overs",Overs);
  localStorage.setItem("OptedCheck", OptedCheck);
  localStorage.setItem("Overs", Overs);
  localStorage.setItem("toss", toss);
  if (HostName != "" && VisitorName != "") {
    location.href = "sop.html";
  }
}
//Advnce Setting function
function advanceSettingFunction() {
  window.location = "advanceSetting.html";
}
