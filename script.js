const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        //Remove a class aberto desta tag para que as informações dele sejam ocultadas
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        // concatenando o id do pokemon com o prefixo cartao-
        const cartaoPokemonParaAbrir  = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')

        pokemonAtivoNaListagem.classList.remove('ativo')

        pokemon.classList.add('ativo')

    })
})

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

let folha = document.querySelector('.folha');
let bulbasauro = document.querySelector('.imagemB')
bulbasauro.addEventListener('click', () => {
    folha.style.display = 'block'
    folha.play()
})

let fogo = document.querySelector('.fogo')
let charmander = document.querySelector('.imagemC')
charmander.addEventListener('click', () => {
    fogo.style.display = 'block'
    fogo.play()
})

let agua = document.querySelector('.agua')
let gyarados = document.querySelector('.imagemD')
gyarados.addEventListener('click', () => {
    agua.style.display = 'block'
    agua.play()
})

let fanta = document.querySelector('.fantasma')
let gengar = document.querySelector('.imagemE')
gengar.addEventListener('click', () => {
    fanta.style.display = 'block'
    fanta.play()
})

let drago = document.querySelector('.dragao')
let dragonite = document.querySelector('.imagemF')
dragonite.addEventListener('click', () => {
    drago.style.display = 'block'
    drago.play()
})

let aviso = document.querySelector('.aviso')

function mouseEntrar() {
    pikachu.style.transform = 'scale(1.2)'
    bulbasauro.style.transform = 'scale(1.3)'
    charmander.style.transform = 'scale(1.1)'
    gyarados.style.transform = 'scale(1.1)'
    gengar.style.transform = 'scale(1.2)'
    dragonite.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.2)'
    //alterando a opacidadedo aviso para 1
    aviso.style.opacity = '1'
    //alterando a escala do aviso
    aviso.style.transform = 'scale(1)'
}

function mouseSair() {
    pikachu.style.transform = 'scale(1)'
    bulbasauro.style.transform = 'scale(1)'
    charmander.style.transform = 'scale(1)'
    gyarados.style.transform = 'scale(1)'
    gengar.style.transform = 'scale(1)'
    dragonite.style.transform = 'scale(1)'
    logo.style.transform = 'scale(1.1)'
    aviso.style.opacity = '0'
    aviso.style.transform = 'scale(.8)'
}

