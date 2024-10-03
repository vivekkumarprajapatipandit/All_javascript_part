const  marvel_hero =["vivek", "kumar","prajapati"]
const dc_heroes =["hariom","vishvakarma","raja"]

//marvel_hero.push(dc_heroes)

//console.log(marvel_hero[3][0]);

//const all_heroes = marvel_hero.concat(dc_heroes)

//console.log(all_heroes);

const all_newheroes = [...marvel_hero, ...dc_heroes]//spread operator
//console.log(all_newheroes);


const another_array = [1,2,3,[4,5,6], 7,[8,9,[4,7]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

//console.log(Array.isArray("vivek"))
//console.log(Array.from("vivek"))
//console.log(Array.from({name: "vivek"}))//interesting
let score1 = 300
let score2 = 500
let score3 = 600
console.log(Array.of(score1,score2,score3))




