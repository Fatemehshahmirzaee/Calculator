const inputNumber = document.querySelectorAll(".number");
const input = document.querySelector("input");
const clear = document.querySelector("#ac");
const minusPlus = document.querySelector("#minusplus");
const percentage = document.querySelector("#percentage");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const equal = document.querySelector("#equal");
const divide = document.querySelector("#divide");
const output = document.querySelector(".output");



/*event listeners*/

inputNumber.forEach((i) => {
    i.addEventListener('click', () => {
        input.value += i.textContent;
    })
});


clear.addEventListener('click', () => {
    input.value = '';
    output.textContent = '';
});

minusPlus.addEventListener('click', () => {
    if (input.value[0]!=='-'){
        input.value = "-"+ input.value;
    } else if (input.value[0]==='-') {
        input.value = input.value.slice(1);
    } else {
    }

});

percentage.addEventListener('click', ()=> {
    input.value += "%";
});

plus.addEventListener('click', () => {
    input.value += "+";
})

minus.addEventListener('click', () => {
    input.value += '-';
});

multiply.addEventListener('click', () => {
    input.value += "*";
});

divide.addEventListener('click' , () => {
    input.value += "/";
});

equal.addEventListener('click', ()=> {

    let numbers = input.value.split(/[+*/-]/);
    let operators = input.value.split(/[0123456789.]/).join("").split("");
    let inputArray = [];

    for (let i=0; i<operators.length; i++) {
        inputArray.push(numbers[i]);
        inputArray.push(operators[i]);
    } 
    inputArray.push(numbers[numbers.length-1]);
    if (inputArray[0]==='-') {
        
    }

    let result = sum(calDivide(calMultiply(inputArray)));
    output.textContent = `${result}`;

})



/* operator functions */

function calMultiply(arr) {
    let len = arr.length;
    for (let i=1; i<len; i++){
        if (arr[i]==="*") {
           let newE= Number(arr[i-1])*Number(arr[i+1]);
            for (let x = 1; x<=2;x++){
                arr.splice(i,1);
            }
    
            arr[i-1]=newE;
            i -= 2;
            len -=2;
    
        };
    };
    return arr;
};

function calMinus(arr) {
    
    let len = arr.length;
    for (let i=1; i<len; i++){

        if (arr[0]==='-') {
            arr[1]='-'+arr[1];
            arr.shift(arr[0]);
            len -= 1;
        };
        if (arr[i]==="-") {
           let newE= Number(arr[i-1])-Number(arr[i+1]);
            for (let x = 1; x<=2;x++){
                arr.splice(i,1);
            }
    
            arr[i-1]=newE;
            i -= 2;
            len -=2;
    
        };
    };
    return arr;
} 

function calDivide(arr) {
    let len = arr.length;
    for (let i=1; i<len; i++){
        if (arr[i]==="/") {
           let newE= Number(arr[i-1])/Number(arr[i+1]);
            for (let x = 1; x<=2;x++){
                arr.splice(i,1);
            }
    
            arr[i-1]=newE;
            i -= 2;
            len -=2;
    
        };
    };
    return arr;
} ;


function sum(arr) {
    let len = arr.length-1;
    let sum = 0;

    if (arr[0]==='-') {
        arr[1] = '-'+arr[1];
        arr.shift(); 
        len -= 1;
    };
    let i = len;
    while (i>=0){
        if ( arr[i-1]==='-') {
            sum -= Number(arr[i]);
        } else {
            sum += Number(arr[i]);
        }
        i -= 2;
    };
    return sum;
}






