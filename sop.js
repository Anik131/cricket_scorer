
function selectopeningplayers(){
  function player1(){
    let cStricker = document.getElementById("cStricker").value;
    console.log(cStricker);
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
      console.log(nonStriker);
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
      console.log(oBowler);
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

  if(cStricker.value!="" && nonStriker.value!="" && oBowler.value!=""){
  // window.location = "batvsbowl.html";
  // console.log(window.location);
  // console.log("abc");
  }

  let url = window.location.toString();
   // console.log(url);
   let url2 = url.replace('sop', 'batvbowl');
   // console.log(url2);
   let url3 = url2+'&'+'cStricker='+ cStricker.value +'&'+'nonStriker='+nonStriker.value+'&'+'oBowler='+oBowler.value;
   console.log(url3);

}

 // const queryString = window.location.search;
 // // console.log(queryString);
 // const urlParams = new URLSearchParams(queryString);
 // console.log(urlParams);
 // const hostname = urlParams.get('hostname')
 //  console.log(hostname);
 //  const visitorteam = urlParams.get('visitorteam')
 //  console.log(visitorteam);

// let cStricker = document.getElementById("cStricker");
// let nonStriker = document.getElementById("nonStriker");
// let oBowler = document.getElementById("oBowler");
// let url = window.location.toString();
//  // console.log(url);
//  let url2 = url.replace('sop', 'batvbowl');
//  // console.log(url2);
//  let url3 = url2+'&'+'cStricker='+ cStricker.value +'&'+'nonStriker='+nonStriker.value+'&'+'oBowler='+oBowler.value;
//  console.log(url3);
//   location.href = url3;

 // console.log(url2);
  // window.location = url.replace()
