var nome = "Rafael William";
var idade = 23;

var empresa = {
    nome: "Nerd Web Store",
    cidade: "Florianopolis",
    site: "www.nerdwebstore.com.br",
    email: "seila@gmail.com"
}

var user = {
    nome, 
    idade,
    ...empresa
    // o operador spread é invocado com "..." e serve para 
    //adiconar os valores de um array em outro como um ctrl c + ctrl v
}

console.log(user);