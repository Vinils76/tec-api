import mysql from 'mysql2';

// Configurando a conexão
const conexao = mysql.createConnection({
    host: 'srv28.prodns.com.br',
    user: 'webmaio1_escnode',
    password: 'Vini7670',
    database: 'webmaio1_escnode'
});

// Conectando ao bando de dados
//conexao.connect();

conexao.connect(erro => {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco conectado em: ${conexao.config.host}`);
    }
});

export default conexao