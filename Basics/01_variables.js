const var1 = "var1"
let var2 = "var2"
var var3 = "var3" // prefer not to use var, because of issues with block scope and functional scope
var4 = "var4"

// var1 = "var2"  //  cannot asssign a const variable

console.log(var1);

console.table([var1, var2, var3, var4])