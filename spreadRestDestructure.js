let fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
let fruitMapped = fruits.map(function(item) {
    if(item === ' '){
        return 'empty string';
    }else{
        return item;
    }
})
console.log(fruits);
console.log(fruitMapped);

///////////////////////////////////////////////////////////
const obj1 = {'key1': 1}

const obj2 = {...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}

///////////////////////////////////////////////////////////

const obj3 = {'key1': 1 , 'key2' : 2}

const obj4 = { ...obj3, key1: 1000}



console.log(obj3)

console.log(obj4)

//////////////////////////////////////////////////////////