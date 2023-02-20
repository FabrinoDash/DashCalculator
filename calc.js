window.addEventListener('DOMContentLoaded',()=>{
    const buttons = Array.from(document.querySelectorAll('button'));
    var data1 = document.getElementById('top');
    var inputScreen = document.getElementById('below');
    const operator = document.getElementById('operator');
    var op;
    var d1;
    var d2;

    for(let i=0;i<buttons.length;i++){
        buttons[i].style.cursor = "pointer";
        buttons[i].onclick = ()=>{
            if(buttons[i].value =="+" || buttons[i].value =="-" || buttons[i].value =="x" || buttons[i].value =="/" || buttons[i].value =="=" || buttons[i].value =="clear"){
                if(buttons[i].value =="+"){
                    operator.style.display = "flex";
                    op = operator.innerHTML = buttons[i].value;

                    d1 = data1.value = inputScreen.value;

                    inputScreen.value = buttons[i].value;

                    if(buttons[i].value !="+" || buttons[i].value !="-" || buttons[i].value !="x" || buttons[i].value !="/" || buttons[i].value !="=" || buttons[i].value !="clear"){
                        inputScreen.value = "";
                    }
                    else{
                        inputScreen.value = buttons[i].value;
                    }
                    
                }
                if(buttons[i].value =="-"){
                    operator.style.display = "flex";
                    op = operator.innerHTML = buttons[i].value;

                    d1 = data1.value = inputScreen.value;

                    inputScreen.value = "";
                    inputScreen.value = buttons[i].value;
                    if(buttons[i].value !="+" || buttons[i].value !="-" || buttons[i].value !="x" || buttons[i].value !="/" || buttons[i].value !="=" || buttons[i].value !="clear"){
                        inputScreen.value = "";
                    }
                    else{
                        inputScreen.value = buttons[i].value;
                    }
                }
                if(buttons[i].value =="x"){
                    operator.style.display = "flex";
                    op = operator.innerHTML = buttons[i].value;

                    d1 = data1.value = inputScreen.value;

                    inputScreen.value = "";
                    inputScreen.value = buttons[i].value;
                    if(buttons[i].value !="+" || buttons[i].value !="-" || buttons[i].value !="x" || buttons[i].value !="/" || buttons[i].value !="=" || buttons[i].value !="clear"){
                        inputScreen.value = "";
                    }
                    else{
                        inputScreen.value = buttons[i].value;
                    }
                }
                if(buttons[i].value =="/"){
                    operator.style.display = "flex";
                    op = operator.innerHTML = buttons[i].value;

                    d1 = data1.value = inputScreen.value;

                    inputScreen.value = "";
                    if(buttons[i].value !="+" || buttons[i].value !="-" || buttons[i].value !="x" || buttons[i].value !="/" || buttons[i].value !="=" || buttons[i].value !="clear"){
                        inputScreen.value = "";
                    }
                    else{
                        inputScreen.value = buttons[i].value;
                    }
                }
                if(buttons[i].value == "="){
                    d2 = inputScreen.value;
                    if(op == "+"){
                        inputScreen.value = parseInt(d1) + parseInt(d2);  
                        if(inputScreen.value == "NaN"){
                            inputScreen.value = 0;
                        }
                    }
                    if(op == "-"){
                        inputScreen.value = parseInt(d1) - parseInt(d2);  
                        if(inputScreen.value == "NaN"){
                            inputScreen.value = 0;
                        }
                    }
                    if(op == "x"){
                        inputScreen.value = parseInt(d1) * parseInt(d2);  
                        if(inputScreen.value == "NaN"){
                            inputScreen.value = 0;
                        }
                    }
                    if(op == "/"){
                        inputScreen.value = (parseInt(d1) / parseInt(d2));  
                        if(inputScreen.value == "NaN"){
                            inputScreen.value = 0;
                        }
                    }
                }
                
                if(buttons[i].value =="clear"){
                    inputScreen.value = "";
                    d1 = data1.value = "";
                    operator.style.display="none";
                }
            }
            else{
                inputScreen.value += buttons[i].value;
            }
        }
    }
});