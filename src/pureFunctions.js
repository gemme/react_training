function sum(a, b){
    return a + b;
}

const result = sum(3, 7);

console.log(result);

const obj = {
    name: 'Gabriel'
}

function impure(param){
    param.lastname = 'Martinez';
}
function pure(param){
    //param.lastname = 'Martinez';
    return { ...param, lastname: 'Martinez' }
}

const res = pure(obj);
console.log(obj);
console.log(res);