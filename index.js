import express from 'express';
import { lerDados, inserir, lerUm, atualizar, excluir } from './src/aluno.js';
const app = express();
const porta = process.env.PORT || 3000;

// Configurando suporte a JSON
app.use(express.json());

// Configurando suporte a dados de input de formulários
app.use(express.urlencoded({extended : true}) );




// ENDPOINTS 

//Rota para a raiz da API
app.get('/', (req, res) => {
    res.send('Raiz da API-NODE');
});

//Rota para exibir todos os alunos
app.get('/alunos', (req, res) => {
    //res.send('Exibindo todos os alunos');
    lerDados(res);
});

//Rota exibindo um único aluno
app.get('/alunos/:id', (req, res) => {
    //res.send('Um único aluno');
    const id = parseInt(req.params.id); //parseInt assegura que vá retornar um número
    lerUm(id, res);
});

//Rota para inserir alunos
app.post('/alunos', (req, res) => {
    //res.send('Inserir alunos');
    const newAluno = req.body;
    inserir(newAluno, res);
});

//Rota para atualizar todos os dados do aluno
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizando os dados do aluno');
});

//Rota para atualizar alguns/todos os dados do aluno
app.patch('/alunos/:id', (req, res) => {
    //res.send('atualizar alguns/todos os dados do aluno');
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});

//Rota para deletar aluno
app.delete('/alunos/:id', (req, res) => {
    //res.send('Excluindo aluno');
    const id = parseInt(req.params.id);
    excluir(id, res);
});

// Configurando o servidor

app.listen(porta, () => {
    console.log('Ta lindo');
});
