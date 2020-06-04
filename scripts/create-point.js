//function to fill the selctors on html 
function fillSelectors(url, selector) {

    fetch(url)
    .then(res => res.json())
        .then(elements => {
            elements.forEach(element => {
                if(selector == document.querySelector("select[name=city]")){
                    selector.innerHTML += `<option value="${element.nome}">${element.nome}</option>`
                } else {
                    selector.innerHTML += `<option value="${element.id}">${element.nome}</option>`
                }
            })
        })
    }

//function that use IBGE API for the cities of states
function getCities(event){
    const citySelector = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value
    const citiesUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` 

    const indexOfSelectedState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text
    citySelector.innerHTML = '<option value="">Selecione a Cidade</option>'
    citySelector.disabled = true

    fillSelectors(citiesUrl, citySelector)
    citySelector.disabled = false
}

//function to catch all the brazilians states (IBGE)
function populateUFs() {
    const ufSelector = document.querySelector("select[name=uf]")
    const statesUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

    fillSelectors(statesUrl, ufSelector)
}
//Add function getCities to event "change" 
document
    .querySelector("select[name=uf]")
    .addEventListener('change', getCities)

//start the code calling function populateUFs
populateUFs()

const itemsToCollect = document.querySelectorAll(".items-grid li")
const collectedItems = document.querySelector('input[name = items]')
const selectedItems = []
itemsToCollect.forEach(item => item.addEventListener("click", handleSelectedItem))

function handleSelectedItem(event) {
    const itemLi =event.target
    

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(item => item == itemId)

    if(alreadySelected >= 0){
        selectedItems.splice(alreadySelected,1)
        console.log(selectedItems)
    } else{
        selectedItems.push(itemId)
    }
    console.log(selectedItems)
    collectedItems.value = selectedItems
}