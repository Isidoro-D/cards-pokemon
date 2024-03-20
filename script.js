const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');

//selecionando a tag com a class .imagemLOGO
let logo = document.querySelector('.imagemLOGO')
//selecionando a tag com a class .imagemA
let pikachu = document.querySelector('.imagemA')
//o método irá ser chamado ao carregar a página
function aocarregar() {
    // alternar o css fznd com que a img do pikachu e do logo alterem seu tamanho
    pikachu.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.1)'
}

//capturando a tag audio e colocando-a dentro de uma variável audioFundo
let audioFundo = document.querySelector('.audioFundo')
//capturando a imagem do play e adicionando-a dentro da variável audioPlay
let audioPlay = document.querySelector('.play')

//Função que dará o play automaticamente
function play() {
    audioFundo.play()
}
//Função que dará o pause automaticamente
function pause() {
    audioFundo.pause()
}

//guarda o elemento com a classe choque na variavel choque, o elemento em questão é a tag Vídeo
let choque = document.querySelector('.choque')
//.addEventListener irá aguardar pelo click na imagem do pikachu, quand for detectado o click, irá mudar o display: none para o display:block na tela
pikachu.addEventListener('click', () => {
    choque.style.display = 'block'
    choque.play()
})