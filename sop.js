
function selectopeningplayers(){
  function player1(){
    let cStricker = document.getElementById("cStricker").value;
    if (cStricker ==""){
      document.getElementById("required3").innerHTML= "batsman's name is required";
      document.getElementById("required3").style.color = "red";
    }
    else {
      document.getElementById("required3").innerHTML= "";
    }
  }
  function player2(){
      let nonStriker = document.getElementById("nonStriker").value;
      if (nonStriker ==""){
        document.getElementById("required4").innerHTML= "batsman's name is required";
        document.getElementById("required4").style.color = "red";
      }
      else {
        document.getElementById("required4").innerHTML= "";
      }
  }
  function player3(){
      let oBowler = document.getElementById("oBowler").value;
      if (oBowler ==""){
        document.getElementById("required5").innerHTML= "Bowler's name is required";
        document.getElementById("required5").style.color = "red";
      }
      else {
        document.getElementById("required5").innerHTML= "";
      }
  }
  player1();
  player2();
  player3();
  let cStricker = document.getElementById("cStricker");
  let nonStriker = document.getElementById("nonStriker");
  let oBowler = document.getElementById("oBowler");

  //Store value
  localStorage.setItem("cStricker",cStricker.value);
  localStorage.setItem("nonStriker",nonStriker.value);
  localStorage.setItem("oBowler",oBowler.value);
  if(cStricker.value!="" && nonStriker.value!="" && oBowler.value!=""){
    location.href = 'batvsbowl.html';
  }
}
