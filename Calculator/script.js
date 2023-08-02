let string=""; // is k andar input jai ga 
let buttons = document.querySelectorAll('.button');//jin jin ki class button hai us ko select kr lega query selector
Array.from(buttons).forEach((button)=>{             //in buttons se ik array banao or us pr lagao for each
    button.addEventListener('click', (e)=>{         // jese he koi click kare button pr event listener k through wo catch ho jai input or console me chala jai
 // = ko dabane k bad jo function perform hoga wo ye wala if karraha hai 
 // string me value le kar input box me print karraha hai 
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string; 
        }
// ye clear krne ka kam karraha hai string khali hai matlb jab c dabain gai to input screen q k wo equal hai string k to wo khali ho jai gi
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
 //hum ne html ki screen me jo e element hai us ko target kiya hai or phit button se input display karwaya hai input me
        else{
            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        
    })
});