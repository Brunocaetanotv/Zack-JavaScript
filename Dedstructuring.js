// Novo recurso do ES2015

const  pessoa = {
    nome:'Ana',
    idade: 5,
    endereço: {
        logradouro:'Rua ABS',
        numero: 255 
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)


const { nome: n, idade: i } = pessoa 
console.log(n,i)


const { sobrenome, bemuhs} = pessoa
console.log(sobrenome, bemuhs)


