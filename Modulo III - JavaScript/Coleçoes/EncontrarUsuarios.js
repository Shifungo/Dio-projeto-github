function getAdmins(Map){
    let resultado = [];

        for([key, value] of Map)
        if (value === 'Admin'){
            resultado.push(key)
        }
    return resultado;
}
function getUsers(Map){
    let resultado = [];
    
        for([key, value] of Map)
        if (value === 'user'){
            resultado.push(key)
        }
    return resultado;
}



const usuarios = new(Map);

usuarios.set('luiz', 'user')
usuarios.set('paulo', 'user')
usuarios.set('lucas', 'Admin')
usuarios.set('jean', 'user')
usuarios.set('daniel', 'Admin')
usuarios.set('matheus', 'user')
usuarios.set('ryan', 'Admin')
usuarios.set('marcos', 'Admin')
usuarios.set('mario', 'user')
usuarios.set('claudia', 'user')
usuarios.set('andressa', 'Admin')

console.log(getAdmins(usuarios));
console.log(getUsers(usuarios));