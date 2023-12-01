import * as fs from 'fs';
const charArray = []
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var sum =0
var data = fs.readFileSync('data.txt', 'utf-8').split('\n')

data.forEach(element=>{
    console.log(element.split('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'))
    // console.log(tmp)
    // charArray.push(element.split('').filter(element => (parseInt(element)==element)))
   
})

charArray.forEach(item =>{
   var num = item[0].toString() + item.pop().toString()
   sum+= parseInt(num)
})

console.log(sum)
