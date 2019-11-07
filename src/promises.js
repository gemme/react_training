

const promise1 = new Promise((success, error) => {
    
    if(true){
        setTimeout(() => {
            return success('Exitooo');
        }, 500)    
    }
    setTimeout(() => {
        return error('Salio mal algo')
    }, 2000)    
});
const promise2 = new Promise((success, error) => {
    
    if(false){
        setTimeout(() => {
            return success('Exitooo22');
        },5000)    
    }
    setTimeout(() => {
        return error('Salio mal algo22')
    }, 5000)    
});

async function  execPromises(){
    try{
        const data = await promise1
        const data2 = await promise2
        console.log(data);
        console.log(data2);
    }catch(e){
        console.log('Error', e)
    }
        
}

execPromises();

/* Promise.all([
    promise1,
    promise2
]).then(result => console.log(result)) */