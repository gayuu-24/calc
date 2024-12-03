const display=document.getElementById("display");

function todisplay(input){
    display.value += input;
}

function toclear(){
    display.value= " ";
}

function todelete(){
    display.value=display.value.slice(0,-1)
}

function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
          display.value="Error";
    }
    
}