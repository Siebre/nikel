const nome = "Anderson Siebre"
let nome2 = ""
let pessoaDefault = {
    nome: "Anderson Siebre",
    idade: "28",
    trabalho: "Técnico",
}

let nomes = ["Anderson Siebre", "Guilherme Omar", "Douglas Franco"];
let pessoas = [
    {
    nome: "Anderson Siebre",
    idade: "28",
    trabalho: "Técnico",
    },
    {
       nome : "Anastácia Siebre",
       idade : "0",
       trabalho : "Bebê",
    }
];


function alterarNome() {
    nome2 = "Lorena Lassen"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("------Imprimir Pessoas-------")
    pessoas.forEach((item)=>{
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
    
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome : "Nilva Siebre",
    idade : "40",
    trabalho : "Mãe"
});

imprimirPessoas();

console.log(pessoas);

//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome : "Anastácia Siebre",
//     idade : "0",
//     trabalho : "Bebê",
// })

//recebeEalteraNome("Bruna Stefens");
//recebeEalteraNome("Anderson Siebre");

//alterarNome();