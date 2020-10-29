let numeroDeUsuarios = document.querySelector('#numeroDeUsuarios')
let botonGenerarUsuarios = document.querySelector('#botonGenerarUsuarios')
let usuariosGenerados = document.querySelector('#usuariosGenerados')

function generadorDeUsuarios(numero) {
    usuariosGenerados.innerHTML = ''
    for (let i = 0; i < numero; i++) {
        const nombre = faker.name.findName()
        const ciudad = faker.address.city()
        const profesion = faker.name.jobTitle()
        const direccion = faker.address.streetAddress()
        const telefono = faker.phone.phoneNumber()
        const email = faker.internet.email()
        const aspiracion_salarial = faker.random.number(5000000)
        const edad = faker.random.number(55)

        usuariosGenerados.innerHTML += `{"nombre": "${nombre}", "ciudad": "${ciudad}", "profesion": "${profesion}", "direccion": "${direccion}", "telefono": "${telefono}", "email": "${email}", "aspiracion-salarial": ${aspiracion_salarial}, "edad": ${edad}},`
    }
}

botonGenerarUsuarios.onclick = function() {
    let num = parseInt(numeroDeUsuarios.value)
    generadorDeUsuarios(num)
}

/* Resultados del generador:
archivo: usuariosGenerados.json

Comando para usar una nueva base de datos llamada lista_de_usuarios:
    > use lista_de_usuarios

Comando para insertar todos los elementos creados por el generador en una nueva colección llamada usuarios:
    > db.usuarios.insertMany([datos_generados])

Comando para aumentar los salarios de los usuarios de la ciudad de Santinoland al doble:
    > db.usuarios.updateMany({ "ciudad": "Santinoland"} , {$mul:{"aspiracion-salarial" : 2}})

Comando para eliminar a todos los usuarios menores de 18 años:
    > db.usuarios.deleteMany({"age": {$lte : 18}})
*/
