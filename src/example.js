const valor = 'Mexico';
const cadena1 = 'Hola Mundo ' + '\n cadena1' + valor;
const cadena2 = "Hola Mundo " + ' cadena2' + valor; 
const cadena3 = `Hola
                Mundo ${valor}`;

console.log(cadena1);
console.log(cadena2);
console.log(cadena3);

const names = ['Gabriel', 'Ernesto', 'Manuel'];

const names2 = names.map(function(name) { return name + ' dw training' });

const mymap = function(arr, callback){
    const myarr = [];
    arr.forEach(element => {
        myarr.push(callback(element));
    });
    return myarr;
}

const mymap2 = mymap(names, function(name) { return name + ' dw training' });

console.log(names)
console.log(names2)
console.log(mymap2)