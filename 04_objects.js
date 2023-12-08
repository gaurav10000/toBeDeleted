const tinderUser = new Object();

tinderUser.name = "Gaurav";
tinderUser.id = "8329bc";
tinderUser.isLoggedIn = "true";

const regularUser = {
  email: "something@gmail.com",
  fullName: {
    fullUserName: {
      firstName: "gaurav",
      lastName: "saraswat",
    },
  },
};

// console.log(tinderUser);
// console.log(regularUser);

// const obj3 = { tinderUser, regularUser} // this is a problmatic approach

// const obj3 = Object.assign({}, tinderUser, regularUser)
// const obj3 = {...regularUser, ...tinderUser}
// console.log(obj3);



// const users = [regularUser, tinderUser]

// console.log(typeof Object.keys(regularUser));

// console.log(tinderUser.hasOwnProperty('isFamous'));


const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// const { price: coursePrice } = course

// console.log(coursePrice);

