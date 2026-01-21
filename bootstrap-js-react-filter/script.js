const produtos = [
    { nome: "Notebook", categoria: "eletronico" },
    { nome: "Celular", categoria: "eletronico" },
    { nome: "Camiseta", categoria: "roupa" },
    { nome: "Calça", categoria: "roupa" }
];

const lista = document.getElementById("lista");
const total = document.getElementById("total");
const filtro = document.getElementById("filtro");

function render(produtosFiltrados) {
    lista.innerHTML = "";

    produtosFiltrados.forEach(produto => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = produto.nome;
        lista.appendChild(li);
    });

    total.innerText = produtosFiltrados.length;
}

filtro.addEventListener("change", () => {
    const valor = filtro.value;

    if (valor === "todos") {
        render(produtos);
    } else {
        const filtrados = produtos.filter(
            p => p.categoria === valor
        );
        render(filtrados);
    }
});

// primeira renderização
render(produtos);
