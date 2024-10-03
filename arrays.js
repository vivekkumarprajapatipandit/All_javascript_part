const myArr = [1,2,3,4,5,6,7,8,]
const myHeroes =["sonam", "wanghchuk"]

//console.log(myArr[0])
//myArr.push(6)
//myArr.pop(6)

//myArr.unshift(9)
//myArr.shift()
//console.log(myArr.includes(8))
//console.log(myArr);

const  newArr = myArr.join()
//console.log(newArr);
//console.log(myArr);
//console.log(typeof newArr);



// slice and splice**********************


console.log("A", myArr);
const myn1 = myArr.slice( 1,3)

console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice( 1,3)
console.log(myn2);
