// Code your solutions in this file
const gifts = ["bicycle","skateboard","playstation"];

function wrapGift(gifts){
    for(let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

return gifts;
}
wrapGift(gifts);

for (let age=20;age<35;age++){
    console.log(`I'm ${age} year old. Happy birthday to me!`);
    debugger;
}

function writeCards(stringArray,eventName){
    const stringLength = stringArray.length;
    const newArray = []
    for(let i=0;i<stringLength;i++){
        newArray.push(`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`)
        console.log(newArray);
    }
    return newArray;

}
writeCards(["Guadalupe","Ollie","Aki"], "birthday");


function countDown(initialNumber){
    let i=initialNumber;
    while(i>=0){
        console.log(i);
        --i;
    }
}
countDown(10)