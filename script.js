let display = document.getElementById("display");

let buttons = document.querySelectorAll(".button");


Array.from(buttons).forEach(button =>{
  button.addEventListener("click",function(event){
    let value = event.target.innerText.trim();

     if(event.target.innerText ==="=" ){
      display.value=eval(display.value);
    }
    else{

    if(value==="C"){
      display.value="";
      return;
    }
    if(value=== "☒") {
      display.value=display.value.slice(0,-1);
      return;
    }
    if(value=== "×") value="*";
    if(value=== "÷") value="/";
    display.value+= value;

  }
   
    console.log("clciked", value);
  });
});



