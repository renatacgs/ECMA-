/*function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '6544645213'
    };
    return novosDados;
}

cadastroPessoa({nome:'Renata', sobrenome: 'Cristina', anoInicio: 2035});


function cadastrar(usuarios, ...novosUsuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalusuarios);
}

let usuarios = ["Matheus", "Joao"];

let novosUsuarios = cadastrar(usuarios, "Renata", "Cristina");

<!----------------------------------------------------------------------------->

const lista = [1,2,3,4,5,6];

const novaLista = lista.map(function(item, index){
    return item + index;
});

console.log(novaLista);

const soma = lista.reduce(function(total, proximo){
    return total + proximo;

});

console.log(soma);

const find = lista.find(function(item){
    return item === 6;
});
console.log(find);

<!----------------------------------------------------------------------------->

function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) =>  {
        return total + proximo;
    });
    console.log(total);
}

adicionar(1,2,3,4,5);

<!----------------------------------------------------------------------------->

class List{
    constructor(){
        this.data = [];
    }
        add(data){
            this.data.push(data);
            console.log(this.data);
        }
    
}

class ListaTarefas extends List {
    constructor(){
        super();

        this.nome = "renata";
  }

  mostrarNome(){
      console.log(this.nome);
  }

};

const minhasTarefas = new ListaTarefas();

document.getElementById('novo').onclick = function(){
    minhasTarefas.add("Minha Tarefa");
}

minhasTarefas.mostrarNome();

<!---------------------------------------------------------------------->

class Pessoa{
    constructor(){
        this.nome = '',
        this.sobrenome = ''
    }

    nomePessoa(primeironome){
        this.nome = primeironome;
        console.log('Meu nome eh: '+this.nome);
    }
    segundoNome(segundonome){
        this.sobrenome = segundonome;
        console.log('Meu sobrenome eh '+this.sobrenome);
    }

    nomeCompleto(){
        let nomeCompleto = this.nome + ' ' + this.sobrenome;
        console.log(nomeCompleto);
    }
};

let pessoa1= new Pessoa();

pessoa1.nomePessoa('Renata');
pessoa1.segundoNome('Cristina');
pessoa1.nomeCompleto();

<!-------------------------------------------------------------------->

//DESAFIO DA AULA
//CRIAR UMA LISTA DE PRODUTOS
const produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];

console.log('Lista com todos os produtos: '+ produtos); //retorna a lista com os produtos

console.log('Quantidade de produtos: ' + produtos.length); //tamanho da lista

console.log('Tirando o produto mouse da lista: ' + produtos.filter(p=>p!=='Mouse')); //tirando produto mouse da lista e retorna os que sobraram

const findProduto = produtos.find(p=> p === 'Computador') //procura um produto na lista

if(findProduto){
    console.log(`Existe ${findProduto} na lista!`);
}

produtos.splice(1,1)
console.log('Meus produtos da lista: ' + produtos); //removendo o segundo item da lista

const numeros = [4,6,8,0,-2] //ordenando os numeros
console.log('Numeros ordenados: '+numeros.sort()); //ordenando os numeros

console.log('Item removido :' +numeros.shift()); //removendo primeiro item da lista

console.log('Nova ordem: '+numeros.reverse()); //invertendo ordem da lista

//adicionando novo numero na lista
numeros.push(5);
console.log(numeros);

//dia atual
let hoje = '02/06/2021';
const [dia,mes,ano] = hoje.split('/');

console.log('Dia: '+ dia);
console.log('Mes: '+ mes);
console.log('Ano: '+ ano);

<!---------------------------------------------------->

//includes
//endsWith = verifica se termina com aquilo que você procura
//startsWith = verifica se começa com aquilo que você procura

let nomes = ['Renata', 'Cristina', 'Mel', 'Juju'];

console.log(nomes.includes('Juju'));

    console.log("RENATA ESTA NA LISTA");
}else{
    console.log('RENATA NAO ESTA NA LISTA');
}

let nome = 'Renata';

console.log(nome.startsWith('Re'));

<!---------------------------------------------------->

//SOME = verifica se tem algum que satisfaz o que o usuario quer
// EVERY = verifica se todos satisfazem o que o uuuario quer
let nomes = [
    {nome: 'Renata', idade: 21},
    {nome: 'Cristina', idade: 22},
    {nome: 'Mel', idade: 1}

];

//console.log(nomes.some(nome => nome === 'Mel')); //SOME

console.log(nomes.every(nome=>nome.idade >= 18));
if(nomes.every(nome=>nome.idade >= 18)){
    console.log('Todos maiores de 18');
}else{
    console.log('Alguem nao eh maior de 18 anos');
}
<!---------------------------------------------------->

var listElement = document.querySelector('#app');
var posts = [];

function nutriApp(){
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then(r => r.json())
    .then(json => {
        posts = json;
        console.log(posts);

        for(post of posts){
            var titleElement = document.createElement('li');
            var title = document.createTextNode(post.titulo);

            var imgElement = document.createElement('img');
            imgElement.src = post.capa;
            imgElement.style = "width:50px; height: 50px";

            titleElement.appendChild(title); 
            listElement.appendChild(titleElement);
            listElement.appendChild(imgElement);
                } n
    });

}
<!------------------------------------------------------------->
*/
//https://api.github.com/repos/ + valor digitado

var div = document.querySelector('#repos');
var listElement = document.querySelector('#repos ul');

var repositorios = [];

buscaRepos = async () => {
	const input = document.querySelector('#input');

	if(input.value === ''){
		alert('Insira um nome abaixo!');
		return;
	}

	const hasRepo = repositorios.find(repo => repo.full_name === input.value);

	if(hasRepo){
		alert('O repositorio ja esta nesta lista!');
		return;
	}


	const response = await fetch(`https://api.github.com/repos/${input.value}`)
					 .then(res => res.json())
					 .then(json => {
					 	console.log(json);
					 	repositorios.push(json);
					 	input.value = '';

					 	renderRepos();
					 })


}
function renderRepos(){
    listElement.innerHTML = '';

    for(repo of repositorios){
        let repoElement = document.createElement('li');
        repoElement.setAttribute("style", "text-decoration: none; list-style:none;");
        
        let avatarElement = document.createElement('img');
        avatarElement.src = repo.owner.avatar_url;
        avatarElement.setAttribute("style", "width: 24px; height: 24px; border-raidus: 12px;");
        

        let linkElement = document.createElement('button');
        linkElement.textContent = 'Excluir';

        let posicao = repositorios.indexOf(repo);

        linkElement.setAttribute('onclick', 'deletarRepo('+posicao+')');



        let name = document.createTextNode(repo.full_name)
       
        repoElement.appendChild(avatarElement);
        repoElement.appendChild(name);
        repoElement.appendChild(linkElement);
        listElement.appendChild(repoElement);
    }
}

function deletarRepo(posicao){
	repositorios.splice(posicao, 1);
	renderRepos();

}