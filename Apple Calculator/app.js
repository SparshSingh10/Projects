let inputE=document.querySelector('input');
let btns=document.querySelectorAll('button')

for(let button of btns){
    button.addEventListener('click',function(e){
        let btnText=e.target.innerText;
        if(btnText=='AC')
            inputE.value="";
        else if(btnText==='='){
            try{

                inputE.value=eval(inputE.value);
            }
            catch(err){
                inputE.value='invalid';
            }}
        else
        inputE.value=inputE.value+btnText;
    })
}

// for(let button of btns){
//     button.addEventListener('click',function(e){
//         let btnText=e.target.innerText;
//         if(btnText=='AC')
//             inputE.value="";
//         else if(btnText==='='){
//             try{

//                 inputE.value=eval(inputE.value);
//             }
//             catch(err){
//                 inputE.value='invalid';
//             }}
//         else
//         inputE.value=inputE.value+btnText;
//     })
// }


