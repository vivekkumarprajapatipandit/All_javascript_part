const myNums = [1,2,3]

//const myTotal = myNums.reduce(function (acc, currval){
    //console.log(`acc : ${acc} and currval: ${currval}`);
    //return acc + currval
//},0)


const myTotal =myNums.reduce((acc,curr) => acc + curr,0)

console.log(myTotal);

const ShoppingCart = [
    {
    itemName: "javascript course",
    price:   2000


    },
    {
        itemName: "java course",
        price:   4000
    
    
        },
        {
            itemName: "python course",
            price:   3000
        
        
            },
            {
                itemName: "Database course",
                price:   6000
            
            
                }
];


const priceToPay=ShoppingCart.reduce((acc, item)  => acc + item.price,0 )
console.log(priceToPay);