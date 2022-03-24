
// Toss won by-Name change
function TeamNameFucntion(){
  let TName = document.getElementById("HostName").value;
  if (TName==""){}
  else {
      document.getElementById("hostTeamName").innerHTML = TName;
  }
  let VName = document.getElementById("VisitorName").value;
  if (VName == ""){}
  else {
        document.getElementById("visitorTeamName").innerHTML = VName;
  }
}
// Submit button - Start match
function StartMatchFunction(){
  let HostName = document.getElementById("HostName").value;
  if (HostName ==""){
    document.getElementById("required1").innerHTML= "Team name is required";
    document.getElementById("required1").style.color = "red";
  }
  else {
    document.getElementById("required1").innerHTML= "";
  }
  let VisitorName = document.getElementById("VisitorName").value;
  if (VisitorName ==""){
    document.getElementById("required2").innerHTML= "Team name is required";
    document.getElementById("required2").style.color = "red";
  }
  console.log(VisitorName);
  let TossCheck= document.querySelector('input[name="Toss"]:checked').value;
  console.log(TossCheck);
  let OptedCheck= document.querySelector('input[name="Opted"]:checked').value;
  console.log(OptedCheck);
  let Overs = document.getElementById("Overs").value;
  if(Overs ==""){
    Overs = 16;
  }
  console.log(Overs);
  localStorage.setItem("HostName",HostName);
  localStorage.setItem("VisitorName",VisitorName);
  localStorage.setItem("Overs",Overs);
  localStorage.setItem("OptedCheck",OptedCheck);
  localStorage.setItem("Overs",Overs);
  if(HostName!="" && VisitorName!=""){
  location.href = 'sop.html';
  }
}
//Advnce Setting function
  function advanceSettingFunction(){
  window.location = "advanceSetting.html";
  }
