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
        res.status(200).json(resultado); //200 - Tudo ok
    }
    })
};

function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro, resultado) => {
        if(resultado.length === 0){
            res.status(204).end();
            return;
        }

        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultado[0]);
        }
    });
}

// Inserir alunos

function inserir(aluno, res) {
    const sql = "INSERT INTO alunos SET ?"; /* O trecho SET ? estão vindo do mysql2 e a ? recebe os dados
    e atribui na ordem */

    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code); // 400 req inválida e mostra erro
        } else {
            res.status(201).json({"status:": "Aluno encherido"}); // 201 req criada e apresenta mensagem de ok
        }
    })
}

// Atualizar alunos
// Vai receber um Id e os dados restantes

function atualizar(id, aluno, res) {
    const sql = "UPDATE alunos SET ? WHERE id = ?";

    conexao.query(sql, [aluno, id], (erro, resultado) => { //Importante: as ordens dos parâmetros importam (caso mais de um)
        if(erro){
            res.status(400).json(erro.code);
        } else {
            //res.status(200).json("status" : "Atualizado com sucesso!");

            // spread operator (operador de espalhamento de objetos)
            res.status(200).json( {...aluno, id});
        }
    })
}

export {lerDados, inserir, lerUm, atualizar};
