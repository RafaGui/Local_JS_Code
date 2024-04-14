fetch("api.json").then((response) => {
    response.json().then((dados) => {
        dados.usuarios.map((dado) => {
            const div = document.querySelector('.dados');

            const divLi = document.createElement('li');
            divLi.className = "set-block"

            const divTitle = document.createElement("h3");
            divTitle.textContent = dado.nome;
            const divIdade = document.createElement("p");
            divIdade.innerHTML = 
                `${dado.idade}, ${dado.nacionalidade}`;
            // divIdade += dado.nacionalidade;

            divLi.appendChild(divTitle);
            divLi.appendChild(divIdade);

            div.appendChild(divLi);
        });
    });
});



