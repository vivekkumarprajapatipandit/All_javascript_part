//console.log("vivek")
//console.log("vivek2")
//console.log("vivek3")
//callback function in javascript please see the carefully make this
/*function sum (a,b){
    console.log( a + b);
}
function Calculator(a ,b,sumCallback){
    sumCallback(a,b)
}
Calculator(3 , 4 , sum);


function mul(a,b){
    console.log( a * b);


}
function Cambridge ( a, b , mulCallback){
    mulCallback(a,b)
}
Cambridge(2,5 ,mul);


function sub( a ,b ){
    console.log(a - b)
}
function concrete(a,b, subCallback){
    subCallback(a,b)
}
concrete(10,4,sub)


function div( a ,b ){
    console.log(a / b)
}
function concret(a,b, divCallback){
    divCallback(a,b)
}
concret(10,4,div)
// call back hell


// this the callback function in up 

// call back function

function getIdea(ideaNext, nextIdea ){
    setInterval (() => {
        console.log("data and waht you have idea",ideaNext )
    if(nextIdea){
        nextIdea();
    }
    },5000)
}
getIdea(1, () => {
    getIdea(2, () => {
        getIdea(2, () =>{

        });

    });
});

// promise part in javascript

/*const getPromise = () =>{
  return new Promise ((resolve, reject) => {
        console.log("my name is vivek kmar prajapati")
        reject("error");
        //
        
    });
};

let Promise = getPromise();
Promise.then((res) => {
    console.log("what is your name");

});
Promise.catch ((err) => {
    console.log("what is the name of your name")
})
*/
// Promises chaining 


/*
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 3000);
    });
}


function asyncFunc2 (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success part 2")
        },3000);
    });
};

let promiseInstance = asyncFunc(); // Rename 'Promise' to 'promiseInstance'
promiseInstance.then((res) => {
    console.log(res); // Will log 'success' after 3 seconds

let promiseInstance2 = asyncFunc2();
promiseInstance2.then ((res) =>{
    console.log(res);
})
});*//*
function api(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("weather update");
            resolve(200);
        },2000)
    })
}
async function  getWeatheData(){
    await api()
}*/
const Student = {
    fullName: "vivek kumar praajapati",
    marks : 94.4,
    PrintMarks: function () {
    console.log("marks",this.marks)
    },

};