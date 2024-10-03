const myNumbers = [1,2,4,3,5,6,7,8,9,10]


//const newNums = myNumbers.map((num)  => { return num + 10});

const newNums = myNumbers
               .map((num)  => num * 10)
               .map((num)  => num  + 3)
               .map((num)   => num + 6)
               .filter((num)  => num >= 40)
console.log(newNums);