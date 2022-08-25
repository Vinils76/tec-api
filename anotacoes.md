# Passo a passo

## Criando API
- entrar pelo terminal na pasta correta
- Iniciar o npm init
- Por type module no json
- npm install express (levantar servidor)
- criar arquivo inicial (ex: index.js)
- Importar o express na primeira linha de código
- Criar uma const e colocar o express dentro
- Criar uma const pra porta (ex: 3000/8080)
- npm install -g nodemon (atualiza o servidor automaticamente)

## Configurando Servidor

#### Configurando rotas
```js
//Raiz
app.get('/', (req, res) => {
    res.send('É um dia lindo hoje')}
    );

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

//Rota para deletar aluno
app.delete('/alunos/:id', (req, res) => {
    res.send('Excluindo aluno');
});
```

#### Config servidor
```js
app.listen(porta, () => {
    console.log('Servidor rodando')
});
```

