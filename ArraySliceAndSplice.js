var numbers = [];

function start(){
        for(var i = 0; i < 101; i++){
            numbers.push(Math.round(Math.random() * 100)); 
        }
    var num = prompt("Enter a number 1 through 100");
    ArrElements(num);
}

function ArrElements(num){
    console.log(numbers.slice().splice(0, num));
}