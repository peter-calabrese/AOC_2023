import * as fs from 'fs';
const charArray = []

const map = {
    'one':1,
    'two':2,
    'three':3,
    'four':4,
    'five':5,
    'six':6,
    'seven':7,
    'eight':8,
    'nine':9
}

var sum=0
var data = fs.readFileSync('data.txt', 'utf-8').split('\n')

data.forEach(element=>{
    var temp=[];
    var original = element
    for (var key in map){
       temp=element.replaceAll(key,map[key])
       element = temp
    console.log(element)
 }
    console.log({element: original, replaced: temp})
})

// charArray.forEach(item =>{
//    var num = item[0].toString() + item.pop().toString()
//    sum+= parseInt(num)
// })

console.log(sum)
