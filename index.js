alert("hi")
let a = Math.random()*100;
a = Number.parseInt(a)
let inp;
let score = 100
while (inp != a) {
    score = score - 1;
    inp = prompt("enter a num");
    if(inp == a){
        console.log("congratulations you have a actual number")
        console.log(`you have got in ${100 - score} chances`)
    }
    else if(inp > a && inp < 100){
        console.log("your number is smaller than real num")
    }
    else if(inp < a && inp > 0){
        console.log("your number is greater than real num")
    }
    else{
        console.log("enter number inpetween 1 and 100")
    }
}