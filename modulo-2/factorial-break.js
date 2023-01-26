var num = 10;
var result = num;
var i = 1;
while (i < num){
    if(i === 10) {
        break;
    }
    result = result * i;
    i++;

    console.log(i);
    console.log(result);
}
console.log(`El factorial de 10 es: ${result}`)