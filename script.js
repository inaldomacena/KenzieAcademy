

   async function renderizaCards(){
   const lista = document.querySelector('#cardList') 

   lista.innerHTML = ""

   const listaDeDados = await fetch('https://swapi.dev/api/people',{
    method:"GET"
   })
 .then(function(resposta){
    return resposta.json()
 })
   //console.log(listaDeDados)
   for(let indice = 0; indice < listaDeDados.results.length; indice++){
    const elemento = listaDeDados.results[indice]

    const li = document.createElement('li')
    const divFrente = document.createElement('div')
    const divVerso = document.createElement('div')
    const divNomeFrente = document.createElement('div')
    const divNomeVerso = document.createElement('div')
    const listaDados = document.createElement('ul')
    const anoNasc = document.createElement('li')
    const planeta = document.createElement('li')
    const imagem = document.createElement('img')

    li.classList.add('card','listCard');
    li.classList.add('face','front');


    divNomeFrente.classList.add('titleCard')
    divNomeFrente.innerText = elemento.name
    divNomeVerso.classList.add('titleCard')
    divNomeVerso.innerText = elemento.name

    listaDados.classList.add('cardData')

    anoNasc.innerText ='ano de Nascimento: ' + elemento.birth_year

    const nomePlaneta = await fetch(elemento.homeworld,{
        method: "GET"
    })
    .then(function(resposta){
        return resposta.json()
    })
    planeta.innerText = 'planeta: ' + nomePlaneta.name

    divVerso.classList.add('face', 'back')
    imagem.src ="./assets/starduck.png"
    imagem.alt = "starduck"




    listaDados.append(anoNasc,planeta)
    divFrente.append(divNomeFrente,listaDeDados)
    divVerso.append(divNomeVerso,imagem)
    li.append(divFrente,divVerso)
    lista.append(li)

    }
    
        viraCard()
   }

   function viraCard(){
    const cards = document.querySelectorAll('.listCard')
    for(let indice = 0; indice < cards.length; indice++){
        const card = cards[indice]

        card.addEventListener('click', function(){
            card.classList.toggle('flip')
        })
    }
   }

renderizaCards()


