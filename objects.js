//const tinderUser = new Object()// this is single ton object
const tinderUser = {}//non single ton object
tinderUser.id = "123abcd"
tinderUser.name = "vivek"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "vk6255@gmail.com",
    fullname:{
        username:{
            firstname:"vivek",
            middlename:"kumar",
            lastname : "prajapati"
        }
    }
    
}
//console.log(regularUser.fullname.username.firstname);



const obj1 =   {1: "a",2:"b"}
const obj2 =   {3: "a",4:"b"}
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "vk6255@gmail.com"
    },
    {
        id: 1,
        email: "vk6255@gmail.com"
    },
    {
        id: 1,
        email: "vk6255@gmail.com"
    },
]
users[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));

//console.log(Object.entries(tinderUser));
//console.log(Object.entries(tinderUser.hasOwnProperty('isLoggedIn')));

//******************************* */
const course = {
    coursename: "english javascript",
    price : "999",
    courseInstructor:"vivek"
}
//course.courseInstructor
const {courseInstructor: instructor} =  course

console.log(instructor);
