// // for in
// var obj=[{
//     batch:18,
//     name:"ashok",
//     tech:"good",
//     comm:"good",
//     mock:"good"
// }]
// for (a in obj){
//     console.log(a+":"+obj[a]);
// }

// // // for of

// // var arr=[1,2,3,4,"ashok",true,{id:10},[10,20,30]]

// for(b of obj){
//     console.log(b);   
// }

// var c={
//     id:1,
//     age:26
// }
// console.log(Object.entries(c));
// console.log(c[1]);
var a = [1, 2, 3, 4, {name:"ashok",roll:"15"},5, {id: 1, age: 20}, [23, 44, 1, 1, 1], 939, 38, 16, 8, {last:"goud", gender: "male"}];
b=[];
for(i=0;i<a.length;i++){
    if(typeof a[i]=="object"){
        var b=a[i].age
        if(b==a[i].age && b!==undefined){
            console.log(b)
        }
    }
}
