const user=  {
username :"vivek",
price:999,

welcomeMessage: function(){
    //console.log(`${this.username},welcome to website`)
    //console.log(this);
}
}
user.welcomeMessage()
//user.username = "viv"
//user.welcomeMessage()
//console.log(this)

//function chair(){
    let username= "vivek"
    //console.log(this.username);
//}

//chair()


//const chair = () => {
    //let username= "vivek"
   // console.log(this);
//}

//chair()

//const addTwo =(num1 , num2) =>{
    //return num1 + num2
//} 

//console.log(addTwo(5,8))

//const addTwo =(num1 ,num2) => (num1 + num2)
//console.log(addTwo(7,8)) 


//const addTwo = (num1 ,num2) =>  num1 + num2
const addTwo = (num1 ,num2) =>  ({username: "vivek"})


console.log(addTwo(4,6))