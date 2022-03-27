function noBall(){
  console.log("hello1");
  let noBall = document.getElementById("noBall");
    if (noBall.checked == false){
      console.log("hello2");
      noBall.setAttribute("disabled", false);
  }
}

localStorage.setItem()
