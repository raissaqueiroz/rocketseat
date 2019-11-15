const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const requireDir = require("require-dir"); //Faz o require de todos os arquivos dentro da pasta de uma vez
// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
// Iniciando conexão com o DB
mongoose.connect(
    "mongodb://localhost:27017/apirest", 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }
);

requireDir("./models");

// const Product = mongoose.model("Product");
// Primeira Rota
// app.get("/", (req, res) => {
//     Product.create({
//         title: "React Native",
//         description: "Curso maneiro topzeira que to preenchendo pra encher linguiça aqui.",
//         url: "https://github.com/facebook/react-native"
//     });
    
//     res.send("Olá, mundo!");
// });

app.use("/", require("./router"));

app.listen("3333");