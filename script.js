const display = document.querySelector("input");
const dotBtn = document.querySelector(".dot");
let currentInput = "";
let sendValues = "";
let flag = false;

function addValue(value){
    currentInput += value;
   
    if((currentInput[currentInput.length - 2] === "+" || currentInput[currentInput.length - 2] === "-" || currentInput[currentInput.length - 2] === "*" || currentInput[currentInput.length - 2] === "/" || currentInput[currentInput.length - 2] === "."   ) && (currentInput[currentInput.length - 1] === "+" || currentInput[currentInput.length - 1] === "-" || currentInput[currentInput.length - 1] === "*" || currentInput[currentInput.length - 1] === "/" || currentInput[currentInput.length - 1] === "."  )){

        currentInput = currentInput.slice(0,-2) + currentInput.slice(-1);
    
    }
    if((currentInput[currentInput.length - 2] === "+" || currentInput[currentInput.length - 2] === "-" || currentInput[currentInput.length - 2] === "/" || currentInput[currentInput.length - 2] === "*") ){
        // Flaga sprawia że po dowolnym, drugim od końca operatorze arytmetycznym flaga się przełącza na true i pozwala dodać "0." lub "." w zależności czy po operatorach arytmetycznych jest jakaś liczba, czy nie.
        flag = !flag;
        // console.log(flag)
    }
    
    display.value = currentInput;
}
 
dotBtn.addEventListener("click", (e)=>{
    
    // dotBtn.disabled = true;
    // if( currentInput[currentInput.length - 1] !== "." && currentInput[currentInput.length - 1] !== "0." ){
    
     
    if(currentInput === "" || currentInput[currentInput.length - 1] === "+" || currentInput[currentInput.length - 1] === "-" || currentInput[currentInput.length - 1] === "*" || currentInput[currentInput.length - 1] === "/" ){
         
        dotBtn.value = "0.";
        
    }else if(!(currentInput.includes('.'))){
        //sprawdza czy NIE jest zawarta kropka. Jeżeli nie posiada kropki to dodaje ją. Jeżeli kropka już isntieje, to warunek się nie wykona.
                dotBtn.value = ".";   
                // console.log(currentInput.includes('.'));       
    }
   
    if(flag){
        dotBtn.value = ".";
        flag = false;
    }
   
    currentInput += dotBtn.value;
    display.value = currentInput;
    dotBtn.value ="";
}
// }
)


function clearAll(){
    currentInput = "";
    display.value = currentInput;
    dotBtn.value ="";
    flag = false;
    
  
}
function calculate(){
    try{
        if(currentInput[currentInput.length - 1] == "+" || currentInput[currentInput.length - 1] == "-" || currentInput[currentInput.length -1] == "*" || currentInput[currentInput.length - 1] == "/"){
            //Jeżeli ostatni element to operator, od razu jest on usuwany, żeby nie wyskakiwał error przez to. 
           currentInput = currentInput.slice(0 , -1);
           
        }
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    }catch(error){
        display.value = "ERROR";
    }
    dotBtn.value ="";
    flag = false;
}