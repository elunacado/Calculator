const express = require('express');
const bodyparser= require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('calculator', { result: '' });})

app.post('/calculate',(req,res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const operator = req.body.operation;
    let result;

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