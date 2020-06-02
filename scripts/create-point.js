function populateUFs() {
    const ufSelector = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            states.forEach(state => {

                ufSelector.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            })
        })
}
function getCities(event){
    const citySelector = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` 
    const indexOfSelectedState = event.target.selectedIndex
    console.log(stateInput)
    stateInput.value = event.target.options[indexOfSelectedState].text
    citySelector.innerHTML = '<option value="">Selecione a Cidade</option>'
    fetch(url)
    .then(res => res.json())
        .then(cities => {
            cities.forEach(city => {

                citySelector.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            })
        })
    citySelector.disabled = false
}

populateUFs()
document
    .querySelector("select[name=uf]")
    .addEventListener('change', getCities)
    