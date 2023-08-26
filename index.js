const express = require('express');
// creando instancia de express
const app = express();

const clientDB = {
    c1: {
        name: "Miriam Gonzales",
        amount: 500
    },
    c2:{
        name: "Jonathan D",
        amount: 300
    }
}

const PORT = 3000;

// middleWare, cada middleware se ejecuta en orden
app.use(express.json());

app.listen(PORT, () =>
    {
        console.log('Listenig port', PORT);
    });

// la '/' se refiere al root del servidor    
app.get('/', (req, res) =>
            {
                res.send('Your server is working');
            });


app.get('/clients/',
(req,res) =>{
        const clients = clientDB;
        res.status(200).json({clients})
})

app.get('/clients/:clientId',
(req,res) =>{
    const {clientId} = req.params;
        const client = clientDB[clientId];
        res.status(200).json({
            message: 'user found',
            client
        })
});

app.post('/clients',
(req,res) => {
    const data = req.body;
    const dbLength = Object.keys(clientDB).length+1;
    const clientidentifier = 'c'+dbLength;
    clientDB[clientidentifier] = data;
    res.status(201).json({
        confirmatin: true
    });
})

app.patch('/clients/updateName/:clientid',
(req,res) => {
    const {clientId} = req.params;
    const {name} = req.body;
    const dbLength = Object.keys(clientDB).length+1;
    const clientidentifier = 'c'+dbLength;
    clientDB[clientidentifier] = data;
    res.status(200).json({
        confirmatin: true
    });
})