//{}= says to scope


if(true){
    let a =10
    const b =19
    var c = 20
    //console.log(a)
   
    
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username ="vivek"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);
    two()
}
//one()
if (true){
    const username = "vivek";
    if(username ==="vivek"){
        const website = "youtube"
       // console.log(username + website);
    }
    //console.log(website);

}
//console.log(username);
//*******************************************************Interesting concept of scope */


function addone(num){
return num + 1
}
console.log(addone(5));


const addTwo = function(num){
    return num + 2
}
addTwo(5)