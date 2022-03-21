//Geral 
//1. O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName('header');
console.log(header);

header[0].style.backgroundColor = '#2E948A';

//Geral
// 2. No menu do header, está faltando o link do item Cursos que deve redirecionar paracursos.html
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
linkCursos.setAttribute('href', 'curso.html');

//Home
// 1. No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
let centralizarTitulo = document.querySelector('#introducao')
centralizarTitulo.setAttribute('style' ,'justify-content:center')

// 2. Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
let depoimentos = document.querySelector('.titulo.depoimento h3');
depoimentos.innerHTML = 'Oque falam sobre nós';

// 3. Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
let blog = document.querySelector('main section:nth-child(5) h3');
blog.innerHTML = 'Mais conteúdo pra você';

// 4. Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas.
let titulos = document.getElementsByClassName('.titulo');
console.log(titulos)

//5. Na etapa de blog, o título deveria ser "Mais conteúdo pra você"
document.querySelectorAll(".titulo h3")[1].innerHTML = "Mais Conteúdo pra você"

//6. Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas.
let maiuscula = document.querySelectorAll(".titulo")
maiuscula.forEach(item => {
    item.style.textTransform = "uppercase";
})

