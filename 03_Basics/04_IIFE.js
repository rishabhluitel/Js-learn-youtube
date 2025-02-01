//IIFE immediately invoked function expression  

(function chai(){    //named iife
    console.log(`DB Connected`);
})();

//global scope le pollute garxa..teslai hatauna iife use garne

(() => {            //simple iife
    console.log(`DB Connected Two`)
})();


((name) => {     //simple iife with parameter
    console.log(`DB Connected Two ${name}`)
})('Pumori');