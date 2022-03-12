
let characters;
const charList = document.querySelector("section#character-list")
const result = fetch('https://swapi.dev/api/people')


charList.addEventListener('click', (event) => {
    const trigger = event.target

    console.log(trigger.dataset)

    if (trigger.className === "character-card") {
        document.querySelector('div#modal').classList.toggle('hide')
        document.querySelector('div#modal').classList.toggle('show')
    }
})

result
.then(response => {
    return response.json()

})
.then(data => {
console.log(data)
characters = [...data.results]
const charCards = data.results.map(char => {
    return `<div class="character-card"
    data-character="${char}">
    <h2 data-character="${char}">${char.name}</h2>
    <p data-character="${char}">Birth Year: ${char.birth_year}</p>
    <p data-character="${char}">Gender: ${char.gender}</p>
    <p data-character="${char}">Hair Color: ${char.hair_color}</p>
    </div>`
})
charList.innerHTML = charCards.join("")
})
