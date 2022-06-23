function getAdmins(map) {
    //Criando array auxiliar
    let admins = [];

    for ([key, value] of map) {
       if (value === 'Admin') {
           admins.push(key)
       } 
    }
    return admins;
}

//Criando o map
const usuarios = new Map();

//Adc usuários
usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));