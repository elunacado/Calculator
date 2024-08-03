const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuración básica para permitir el procesamiento de datos de formulario
app.use(bodyParser.urlencoded({extended:true}));

// Establece EJS como motor de plantillas para renderizar vistas
app.set('view engine', 'ejs');

// Ruta raíz que renderiza la calculadora con un resultado inicial vacío
app.get('/',(req,res) => {
    res.render('calculator', { result: '' });
})

// Ruta que maneja la lógica de cálculo en base a la operación solicitada
app.post('/calculate',(req,res) => {
    // Convierte los valores de entrada a enteros
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    // Obtiene el operador de la solicitud
    const operator = req.body.operation;
    let result; // Variable para almacenar el resultado

    // Switch para determinar la operación a realizar
    switch(operator){
        case "add":
        result = num1 + num2;
        break;
        case "subtract":
        result = num1 - num2;
        break;
        case "multiply":
        result = num1 * num2;
        break;
        case "divide":
        if(num2 == 0){
            result = "Cannot divide by zero";
            break;
        }else{
            result = num1 / num2;
        }
        break;
        case "exponential":
        result = Math.pow(num1,num2);
        break;
        default:
        result = "Invalid Operation";
    }
    res.render('calculator',{result:result});
});

app.listen(3000,(res) => {
    console.log("10-4 on port 3000")
});