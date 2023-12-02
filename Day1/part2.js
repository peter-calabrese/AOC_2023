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
    var temp ='';
    for(var i = 0; i < element.length; i++){
        for(var j = i; j <=5 +i ; j++){
            if(map[element.substring(i,j)]){

               temp = element.replace(element.substring(i,j), map[element.substring(i,j)])
               element = temp

            }
        }
    }
    
    charArray.push(element.split('').filter(element => parseInt(element)==element))

})

charArray.forEach(item =>{
    var num = item[0].toString() + item.pop().toString()
    sum+= parseInt(num)
 })
 
 console.log(sum)


 