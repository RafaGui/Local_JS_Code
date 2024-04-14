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
}

console.log(user);