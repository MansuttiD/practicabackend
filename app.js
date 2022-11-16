const express = require('express')


const port = 9001

const app = express()

app.get('/profile', (peticion, respuesta) => {
    respuesta.json({
        name:'Hola mundo',
        age: 30,
        country: 'Venezuela'
    })
    

})


app.post('/ejemplo-post', (peticion, respuesta) => {
    respuesta.json({
        empresa1: 'RiotGames',
        empresa2: 'Xs2',
        empresa3: 'Xssss3'
    })
    

})

app.patch('/ejemplo-patch', (peticion, respuesta) => {
    respuesta.json({
        empresa1: 'RiotGames',
        empresa2: 'Xs2',
        empresa3: 'Xssss3'
    })
    

})

app.get('/ejemplo-get', (peticion, respuesta) => {

    respuesta.json(
        ["jugar video juegos", "escuchar musica", "comer pizza"]
    )
    

})


//? este listen va a estar hasta abajo de nuestro app.js
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
}) //! puerto en el que se ejecuta la api y el otro un callback