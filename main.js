function filter(){
  let text = document.getElementById("picture-filter").value;
  let obj = document.querySelectorAll(".picture-box .keyword");

  for(let i = 0; i < obj.length; i++){
    if(obj[i].textContent.indexOf(text) === -1){
      if(obj[i].className.indexOf("none") === -1)document.querySelectorAll(".picture-box")[i].classList.add("none");
    }
    else document.querySelectorAll(".picture-box")[i].classList.remove("none");
  }
}