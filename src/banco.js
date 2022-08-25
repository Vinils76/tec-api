import mysql from 'mysql2';

// Configurando a conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});

// Conectando ao bando de dados
//conexao.connect();

conexao.connect(erro => {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log('Banco conectado com sucesso!');
    }
});

export default conexao