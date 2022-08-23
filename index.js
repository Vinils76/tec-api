import express from 'express';
const app = express();
const porta = 3000;

// ENDPOINTS 
//Rota para a raiz da API
app.get('/', (req, res) => {
    res.send('É um dia lindo hoje');
});

//Rota para exibir todos os alunos
app.get('/alunos', (req, res) => {
    res.send('Exibindo todos os alunos');
});

//Rota exibindo um único aluno
app.get('/alunos/:id', (req, res) => {
    res.send('Um único aluno');
});

//Rota para inserir alunos
app.post('/alunos', (req, res) => {
    res.send('Inserir alunos');
});

//Rota para atualizar todos os dados do aluno
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizando os dados do aluno');
});

//Rota para atualizar alguns/todos os dados do aluno
app.patch('/alunos/:id', (req, res) => {
    res.send('atualizar alguns/todos os dados do aluno');
});

app.delete('/alunos/:id', (req, res) => {
    res.send('Excluindo aluno');
});



// Configurando o servidor

app.listen(porta, () => {
    console.log('Ta lindo boy');
});
