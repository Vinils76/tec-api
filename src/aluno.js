import conexao from './banco.js';

function lerDados(res) {
// Programando o CRUD
const sql = "SELECT * FROM alunos ORDER BY nome";

// Conectando Banco de Dados
conexao.query(sql, (erro, resultado) => {
    if(resultado.length === 0) {
        res.status(204).end(); //204 = Sem conteúdo - Método .end() para qualquer comunicação
        return;
    }

    if(erro) {
        res.status(400).json(erro.code); //400 - Requisição inválida
    } else {
        res.status(200).json(resultados); //200 - Tudo ok
    }
    })
};

export {lerDados};
