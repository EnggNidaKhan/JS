//   create array nd display its length nd each element
// let arr= [10,20,30,40,50];
// console.log(arr.length);
// console.log(arr[0],arr[1],arr[2],arr[3],arr[4]);
// console.log(arr[5],arr[6]);

// let arr=[100,200,300,400];
// console.log(arr.length);      //find arr length  ==>4
// arr.push(10);                 //adding ele from the arr end using push==>
// console.log(arr);             //[ 100, 200, 300, 400, 10 ]
// arr.pop();         //remove the ele from the arr last using pop()
// console.log(arr);     //[ 100, 200, 300, 400 ]

// arr.unshift(20);     //adding the ele in arry at begning
// console.log(arr);    //[ 20, 100, 200, 300, 400 ]
// arr.shift();     // remove ele from begning of the aary
// console.log(arr);   // [ 100, 200, 300, 400 ]

// let arr=[1,2,3,4];    //orignal array
// let arr1=[...arr];    //orignal array copy

// console.log(arr);  //orignal array         [ 1, 2, 3, 4 ]
// console.log(arr1); //orignal array copy     [ 1, 2, 3, 4 ]

// arr.push(10);
// console.log(arr);   //[ 1, 2, 3, 4, 10 ]
// arr1.pop();
// console.log(arr1);  //[ 1, 2, 3 ]

// if u will perform any operation on origanal array or copy array it will be not affected .
// bcz both arrays have different memory.

// let arr1=[1,2,3,4];
// console.log(arr1);  //[ 1, 2, 3, 4 ]

// let arr2=[5,6,7,8];
// console.log(arr2);    //[5,6,7,8]

// let arr3=[...arr1,...arr2];  //merging two array using split function
// console.log(arr3);          // [  1, 2, 3, 4, 5, 6, 7, 8 ]

// arr3.push(9);
// arr3.push(10);
// console.log(arr3);  //[ 1, 2, 3, 4,  5,  6, 7, 8, 9, 10]
  

// // Delete perticular inedx element in the array
// //splice()
// let arr1=[1,2,3,4,5,6,7,8,9,10];
// arr1.splice(3,4);
// console.log(arr1);    //[ 1, 2, 3, 8, 9, 10 ] delete element index 3 to next 4 elements

// arr1.splice(0,1);
// console.log(arr1);   //[ 2, 3, 8, 9, 10 ]

// arr1.splice(4,1);
// console.log(arr1);   //[ 2, 3, 8, 9 ]

// arr1.splice(1,1);
// console.log(arr1);    //[ 2, 8, 9 ]

// // add element perticular indexed

// arr1.splice(2,0,10);
// console.log(arr1);  //[ 2, 8, 10, 9 ]

// arr1.splice(2,1);
// console.log(arr1);  //[ 2, 8, 9 ]

// arr1.splice(3,0,10);
// console.log(arr1);   //[ 2, 8, 9, 10 ]

// arr1.splice(2,0,3,4,5,6,7);
// console.log(arr1);      // [2,8,3,4,5,6,7,9,10 ]

// arr1.splice(2,4);
// console.log(arr1);   //[ 2, 8, 7, 9, 10 ]

// arr1.splice(1,1,3,4,5,6);
// console.log(arr1);   //[2, 3, 4,  5, 6, 7, 9, 10 ]
// arr1.splice()
  
// arr1.splice(6,0,8);
// console.log(arr1);    //[2, 3, 4,  5, 6,7, 8, 9, 10]
  
// //map():It is used to manipulate each element

// console.log(
//    [1,2,3,4,5].map((element,index)=>{
//           return element*10;
//    })
// );              //[ 10, 20, 30, 40, 50 ]

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//           return element-1;
//     })
// );           //[ 0, 1, 2, 3, 4 ]

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//          return [element]
//     })
// );               //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//           return [element,index];
//     })
// );                //[ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//          return {[index]:element}
//     })
// );               //[ { '0': 1 }, { '1': 2 }, { '2': 3 }, { '3': 4 }, { '4': 5 } ]

// //Filter():

// console.log(
//     [1,2,3,4,5].filter((element,index)=>{
//         return element>=3;           //[ 3, 4, 5 ]
//     }).map((element,index)=>{
//            return element*2;
//     })                           //[ 6, 8, 10 ]
// );         

// console.log(
//     [{"e_id":111, "e_name":"Alex","e_sal":20000},
//      {"e_id":222,"e_name":"John","e_sal":40000},
//      {"e_id":333,"e_name":"Smita","e_sal":500000 },
//      {"e_id":444,"e_name":"Alina","e_sal":660000 },
//      {"e_id":555,"e_name":"King","e_sal":890000 },
//      {"e_id":666,"e_name":"Smith","e_sal":450000 }
//     ].filter((element,index)=>{
//           return element.e_sal>30000;
//     })
// );             /*[
//     { e_id: 222, e_name: 'John', e_sal: 40000 },
//     { e_id: 333, e_name: 'Smita', e_sal: 500000 },
//     { e_id: 444, e_name: 'Alina', e_sal: 660000 },
//     { e_id: 333, e_name: 'King', e_sal: 890000 },
//     { e_id: 333, e_name: 'Smith', e_sal: 450000 }
//   ]*/
  
//     console.log(
//         [{"e_id":111, "e_name":"Alex","e_sal":20000},
//          {"e_id":222,"e_name":"John","e_sal":40000},
//          {"e_id":333,"e_name":"Smita","e_sal":500000 },
//          {"e_id":444,"e_name":"Alina","e_sal":660000 },
//          {"e_id":555,"e_name":"King","e_sal":890000 },
//          {"e_id":666,"e_name":"Smith","e_sal":450000 }
//         ].filter((element,index)=>{
//               return element.e_sal>=30000;
//         }).map((element,index)=>{
//             return element.e_name==="Alina"?{"e_id":444,"e_name":"Cherry","e_sal":700000 }:element;

//         })           /*[
//             { e_id: 222, e_name: 'John', e_sal: 40000 },
//             { e_id: 333, e_name: 'Smita', e_sal: 500000 },
//             { e_id: 444, e_name: 'Cherry', e_sal: 700000 }, updated
//             { e_id: 555, e_name: 'King', e_sal: 890000 },
//             { e_id: 666, e_name: 'Smith', e_sal: 450000 }
//           ] */
//     );

//Reduce():It is used to find sum of elements
console.log(
    [1,2,3,4,5].reduce((firstele,accumulator)=>{
            return firstele+accumulator;
    })
);                // 15

console.log(
    [1,2,3,4,5].map((ele,index)=>{
          return ele*5;              //[ 5, 10, 15, 20, 25 ]
    }).filter((ele,index)=>{
              return ele>=10;         //[ 10, 15, 20, 25 ]
    }) 
    .reduce((fele,accumulator)=>{
       return fele+accumulator;
    })
);                     //70

console.log(
    ["js", "to", "welcome"].reduceRight((fele,accumulator)=>{
        return fele+accumulator;
    })
);                         //welcome to js

//Slice();
        //0   1  2  3  4  5  6  7  8  9
       //-10 -9 -8  -7 -6 -5 -4 -3 -2 -1          
let arr1=[10,20,30,40,50,60,70,80,90,100];
console.log(arr1.slice(4,6));       //[ 50, 60 ]
console.log(arr1.slice(9,10));      //[ 100 ]
console.log(arr1.slice(2,6));       //[ 30, 40, 50, 60 ]

console.log(arr1.slice(-1));             //[ 100 ]
console.log(arr1.slice(-10,-5));      //[ 10, 20, 30, 40, 50 ]
console.log(arr1.slice(-10));         //[10,20,30,40,50,60,70,80,90,100]
console.log(arr1.slice(-10,-9))       //[ 10 ]

//flat():It is used to conver multi-diamentinal array into single dimentinal array
console.log(
    [[1],[2],[3],[4],[5],[5],[7],[8],[9],[10]].flat(1)
);    //[1, 2, 3, 4,  5, 5, 7, 8, 9, 10 ]

console.log(
    [[[[[[[[1]]]]]]],[[[[[[[[[[10]]]]]]]]]],[[[[[[[[[[[20]]]]]]]]]]]].flat(Infinity)
); //[ 1, 10, 20 ]

let arr3=[1,2,3];
let arr4=["one","two","three"];
console.log(
    arr3.map((ele,index)=>{
        return [ele,arr4[index]]    //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]       
    }).flat(Infinity)              
    //[ 1, 'one', 2, 'two', 3, 'three' ]
);

//FlatMap():

let ar1=["Nida"];
let ar2=["Khan"];
console.log(
    ar1.flatMap((ele,index)=>{
        return [ele,ar2[index]]
    })
);                        [ 'Nida', 'Khan' ]

//findIndex():It is used to know the index of element

console.log(
   [1,2,3,4,5,6,7,8].findIndex((ele,index)=>{
         return ele==3;
   })
);                    //2

console.log(
    [1,2,3,4,5,6,7,8].findIndex((ele,index)=>{
          return ele==8;
    })
 );                       //7

 console.log(
    [20,40,34,56,23].findIndex((ele,index)=>{
                return ele==50;
    })
 );            //-1

 //delete indxof value

 let arr2 = [1,2,3,4,5,6,7,8,9];
 arr2.splice(2,1);
 console.log(arr2);                        //[  1, 2, 4, 5,6, 7, 8, 9]

 arr2.splice(arr2.findIndex((ele,index)=>{
       return ele==9;
 }),1)          
 console.log(arr2);                         //[1, 2, 4, 5,6, 7, 8]

 arr2.splice(arr2.findIndex((ele,index)=>{
         return ele==6;
 }),1)
 console.log(arr2);                          //[ 1, 2, 4, 5, 7, 8 ]

 let arr5=[
    {"e_id":11,"e_name":"e_one","e_sal":10000},
    {"e_id":22,"e_name":"e_two","e_sal":30000},
    {"e_id":33,"e_name":"e_three","e_sal":40000},
    {"e_id":44,"e_name":"e_four","e_sal":50000}  
 ]
 arr5.splice(arr5.findIndex((ele,index)=>{
      return ele.e_id==22;
 }),1);
 console.log(arr5);                     /*[
                                            { e_id: 11, e_name: 'e_one', e_sal: 10000 },
                                            { e_id: 33, e_name: 'e_three', e_sal: 40000 },
                                            { e_id: 44, e_name: 'e_four', e_sal: 50000 }
                                        */

//Some(): If at least one element statisfied the condition it will return true

console.log(
    [1,2,3,4,5,6,7,8].some((ele,index)=>{
            return ele<=1;
    })
);                        //true

console.log(
    [1,2,3,4,5,6,7,8].some((ele,index)=>{
            return ele>10;
    })
);                   //false

/*every(): If all element statisfied the condition it will return true & all elements not statisfied the
  the condition it will retrun false */

console.log(
    [10,20,30,40,50].every((ele,index)=>{
            return ele>=60;
    })
);             //false

console.log(
    [10,20,30,40,50].every((ele,index)=>{
            return ele<=50;
    })
);             //true

//find(): If element is available it will return that ele otherwise it will return undefined.

console.log(
    [1,2,3,4,5,6,7,8].find((ele,index)=>{
           return ele==8;
    })
);                   //8

console.log(
    [1,2,3,4,5,6,7,8].find((ele,index)=>{
           return ele==10;
    })
);                   //undefined

//fill(): It is used to replace the existing element with new element

let arr6=[1,2,3,4];
console.log(arr6.fill(100));   //[ 100, 100, 100, 100 ]

console.log(arr6.fill(200,1));           //[ 100, 200, 200, 200 ]

console.log(arr6.fill(300,2));           //[ 100, 200, 300, 300 ]

console.log(arr6.fill(400,3));           //[ 100, 200, 300, 400 ]

//Indexof(): It is used to won create indexof for repeated ele

// let arr7 = [1,2,3,1,2,3];
// arr7.forEach((ele,index)=>{
//     console.log(arr7.indexOf(ele),index)
// })                       //[0 1 2 0 1 2]

let arr8= [10,20,30,10,20,30];
console.log(
    arr8.filter((ele,index)=>{
        return arr8.indexOf(ele)!=index
    })                                              //[ 10, 20, 30 ]
)



