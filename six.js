//const coding = [ "java", "javascript", "python", "database", "mysql",]

//c//onst values = coding.forEach((item) =>  {
    //console.log(item);
    //return item

//})
//console.log(values)
//const  myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter((num) => {
    //return num > 4
//})

//const newNums = []
//myNums.forEach( (num) => {
    //if (num > 4){
        //newNums.push(num)
        
    //}

//})
//console.log(newNums);;

const books = [
    {title: 'Book one' , genre: "fiction", publish: 1981,edition: 2008},
    {title: 'Book two' , genre: "Non-fiction", publish: 1982,edition: 2007},
    {title: 'Book Three' , genre: "History", publish: 1983,edition: 2006},
    {title: 'Book four' , genre: "science", publish: 1984,edition: 2005},
    {title: 'Book five' , genre: "Non-fiction", publish: 1985,edition: 2004},
    {title: 'Book six' , genre: "science", publish: 1986,edition: 2003},
    {title: 'Book seven' , genre: "fiction", publish: 1987,edition: 2002},
    {title: 'Book eight' , genre: "history", publish: 1988,edition: 2001},
    {title: 'Book nine' , genre: "science", publish: 1989,edition: 2000},
    {title: 'Book nine' , genre: "science", publish: 1989,edition: 1999}
];

//const userBooks =books.filter((bk) => bk.genre === 'History')
//console.log(userBooks);

 const userBooks = books.filter( (bk)   => {
    return bk.publish >= 2000 && bk.genre === "science"
})
console.log(userBooks);