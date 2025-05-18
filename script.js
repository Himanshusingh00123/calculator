const display=document.querySelector(".display");
function appendvalue(val){
    display.value += val;
}
function cleardisplay(){
    display.value="";
}
function deletevalue(){
  display.value=display.value.slice(0,-1);
}
function calculatevalue(){
     display.value=eval(display.value);
}