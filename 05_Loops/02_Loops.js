//loops
// let array=[1,2,3,4,5]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }                         

//for while do while

//higher order loops
// array.forEach(element => {
    
// });
// greet="Hello"
// for (const element of greet) {
//     console.log(element)
// }



// let map=new Map()  //map is not iterable so cant be done using for in
// map.set('IN','India')
// map.set('NP','Nepal')
// map.set('FR','France')

// console.log(map)

// for (const element of map) {
//     console.log(element)
// }
// for (const [key,value] of map) {
//     console.log(`${key} :: ${value}`)  //cant do in object this way..only works in map
// }

// const myConst={
//     Js:'javascript',
//     cpp:'c++',
//     py:'python'
// }

// for (const key in myConst) {
//     if (Object.prototype.hasOwnProperty.call(myConst, key)) {
//         const element = myConst[key];
//         // console.log(element,key)
//     }
// }



// array.forEach((item)=>{
//     console.log(item)
// })
// let myCode=[{a:1,c:3},{a:2,c:4}]
// values=myCode.forEach((value,index,array)=>{
    
//     console.log(`What is this ${value.a}`)
// })

// let values=[]
// let myCode=[{a:1,c:3},{a:2,c:4}]
// values=myCode.forEach((value,index,array)=>{
    
//     console.log(`What is this ${value.a}`)
//     return value.a;
// })         //yesari hudaina so map filter reduce ako ho

// console.log(values)



// let myNums=[1,2,3,4,5,6,7,8,9]
// let newNums=myNums.filter((num)=>{
    //     return num>5;
    // })
    // console.log(myNums)
    // console.log(newNums)
    
    // let newNum=myNums.map((value)=>{
        //     return value+10;
        // })
        
        // let newNum=myNums.map((value)=>{
            //     return value+10;
            // }).map((value)=>{
                //     return value*2
                // }).filter((value)=>{
                    //     return value%10===0;
                    // });
                    
                    // console.log(newNum)


let myNums=[1,2,3,4,5,6,7,8,9]
let initialValue=10;
let sum=myNums.reduce((accumultor,currentValue)=>{
    return accumultor+currentValue;
},initialValue)
console.log(sum)
