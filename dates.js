//dates in javascript

//let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);


//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date(2023,0,23 ,5 ,3)
let myCreatedDate = new Date("01-14-2013")

//console.log(myCreatedDate.toLocaleDateString());

let mytimeStamp = Date.now()//give the result miliseconds
//console.log(mytimeStamp);
//console.log(myCreatedDate.getTime());//this is change abot miliseconds by let variable
//console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() +1);// +1 tell us month
//console.log(newDate.getDay() +1);


newDate.toLocalString('default', {
    weekday: "long"
})
console.log(newDate);

