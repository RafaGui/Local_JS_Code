const Pessoa = require('./api/api')

const exibeDados = (nome, idade) => {
    console.log(`Olá ${nome}, você tem ${idade} anos de idade`);
}
const nome = Pessoa.nome;
const idade = Pessoa.idade;

exibeDados(nome, idade);