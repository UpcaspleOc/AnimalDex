const listaSelecaoAnimal = document.querySelectorAll('.animal')

listaSelecaoAnimal.forEach(animal => {
 

    animal.addEventListener('click', () => {
      
        const cartaoAnimalAberto = document.querySelector('.aberto')        
        cartaoAnimalAberto.classList.remove('aberto')

        const idAnimalSelecionado = animal.attributes.id.value

        const idDoCartaoAnimalParaAbrir = 'cartao-' + idAnimalSelecionado
        const cartaoAnimalParaAbrir = document.getElementById(idDoCartaoAnimalParaAbrir)
        cartaoAnimalParaAbrir.classList.add('aberto')

        const animalAtivoNaListagem = document.querySelector('.ativo')
        animalAtivoNaListagem.classList.remove('ativo')

        const animalSelecionadoNaListagem = document.getElementById(idAnimalSelecionado)
        animalSelecionadoNaListagem.classList.add('ativo')

    })
    
})