
function selectOpeninglayers(){
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

  let batsmanArray = [];
  let cStricker = document.getElementById("cStricker");
  
  let batsmanOne = {
    name: cStricker.value,
    run: 0,
    bowl: 0,
    four: 0,
    six: 0,
    strikeRate: 0
  }

  let nonStriker = document.getElementById("nonStriker");
  let batsmanTw0 = {
    name: nonStriker.value,
    run: 0,
    bowl:0,
    four: 0,
    six: 0,
    strikeRate: 0
  }

  let oBowler = document.getElementById("oBowler");
  let bowlerOne = {
    name: oBowler.value,
    over: 0,
    maiden: 0,
    run: 0,
    wicket: 0,
    economyRate: 0
  }
  

  //Store value
  localStorage.setItem("batsmanOne",JSON.stringify(batsmanOne));
  localStorage.setItem("batsmanTwo",JSON.stringify(batsmanTw0));
  localStorage.setItem("bowlerOne",JSON.stringify(bowlerOne));

  if(cStricker.value!="" && nonStriker.value!="" && oBowler.value!=""){
    location.href = 'batvsbowl.html';
  }
}
