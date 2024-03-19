const pot = (a,b) => a*b;

const student = {
    name: 'Nick',
    school: 'Sharpener',
    greet(){
        console.log('Hi I am '+ this.name + ' from '+ this.school);
    }

}

console.log(pot(15,15));
student.greet();