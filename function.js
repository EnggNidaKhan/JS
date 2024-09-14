// function fun_one(arg1?:string,arg2?:string):void{
//     console.log(arg1,arg2);
// }
// fun_one();
// function fun_one(arg1:string,arg2?:string):void{
//    console.log(arg1,arg2);
// }
// fun_one("nida");
// fun_one("Hiii","Hello");
// op:D:\HTML\JS>tsc function.ts  
// D:\HTML\JS>node function.js
// nida undefined
// Hiii Hello
// fun_one();      expected 1-2 argument , but got 0
function fun_two(op1, op2, op3) {
    if (op2 === void 0) { op2 = "Nida"; }
    var op4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        op4[_i - 3] = arguments[_i];
    }
    console.log(op1, op2, op3, op4);
}
// fun_two();
fun_two("Khan");
