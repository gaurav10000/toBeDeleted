// objects can be declared as constructors or as litrals

// singleton : ye apni trah ka ek hi hai
// object jab bhi constructors se banega to singleton banega but jab litrals se banega to singleton nahi banega and kisise bhi bnaao as such kuch performance mai koi difference nahi hota


// now lets talk about objs through literals

const mySym = Symbol("key1")
const obj = {
    name: "Gaurav",
    age: "40",
    location: "Firozabad",
    [mySym]: "myKey1",
    isLoggedIn: true,
    "social Medias": ["Youtube", "Twitter"]
}

// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj[mySym]); // some special syntaxes for symbol dataTypes

// Object.freeze(obj);
// obj.age = "36"
// console.log(obj);


obj.greeting = function() {
    return ("Hello Friend");
}

console.log(typeof obj.greeting());