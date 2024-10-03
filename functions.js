
function sayMyName(){
console.log("v")
console.log("i")
console.log("v")
console.log("e")
console.log("k")
}

//sayMyName()

function addTwoNumbers(num1,num2){
    let result = num1 + num2 
    return result
}

//const result = addTwoNumbers(3,8)
//console.log("result",result);


function loginMessage(username = "viv"){//(!username)
if(!username){
    console.log("please enter the user name")
return
}
    return `${username} just logged In`
}
//console.log(loginMessage())

// we will see the javascript of functions
//(...num1) rest operator
function CalculatorPrice (val1 ,val2, ...num1){
    return num1
}
console.log(CalculatorPrice(200,300,400,500))
const user = {
    username: "prajapati",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username:"hariom",
    price : 499
})

const myNewArray = [ 400,500,900,300]
function returnSecondValue (getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));