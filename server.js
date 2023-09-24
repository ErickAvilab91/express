const app = express();

let tasks = [
    {
        "id": "0001",
        "isCompleted": false,
        "description": "comprar comida",
    },

    {
        "id": "0002",
        "isCompleted": false,
        "description": "hacer tareas Ada",
    },




    {
        "id": "0003",
        "isCompleted": false,
        "description": "Reparar el Carro",
    },
    
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(8080, () => {
    console.log('El servidor está corriendo en http://localhost:8080');
});