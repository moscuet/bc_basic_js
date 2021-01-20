
// problem1: Jackpot

if(Math.floor(Math.random()*10)<5 ) {number1 = 0 } else number1 = 1
if(Math.floor(Math.random()*10)<5 ) {number2 = 0 } else number2 = 1
if(Math.floor(Math.random()*10)<5 ) {number3 = 0 } else number3 = 1
if(Math.floor(Math.random()*10)<5 ) {number4 = 0 } else number4 = 1
if(Math.floor(Math.random()*10)<5 ) {number5 = 0 } else number5 = 1
console.log( 'your random numbers :', number1, number2, number3, number4,number5)
let numberString = ''+number1+number2+number3+number4+number5
console.log(numberString)

if(numberString=== '11111'){
    console.log("congratulation!! You have won the Jackpot!!")
}
else if(numberString==='00000'){
    console.log(' Goodluck for next time, Congrats for getting all 0')
}
else{
    let probability = (1/2**5)*100
    console.log('Thanks for participating! its hard to win a jackpot always which has probablity only ' + probability + ' %')
}



// using switch statement
switch(numberString){
    case '11111':
        console.log("congratulation!! You have won the Jackpot!!")
        break;
    case '00000' : 
    console.log(' Goodluck for next time, Congrats for getting all 0')
    break;
    default:
        let probability = (1/2**5)*100
        console.log('Thanks for participating! its hard to win a jackpot always which has probablity only ' + probability + ' %')
    }

    