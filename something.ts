const root = document.querySelector("#root")
const tileWdith = window.innerWidth/5
const tileHeight = window.innerHeight/5

const gridContainer = document.createElement("div")
gridContainer.classList.add("grid")
root?.appendChild(gridContainer)

for(let x = 0; x < 5; x++){
    for(let y = 0; y < 5; y++){
        const newTile = document.createElement("div")
        newTile.classList.add("tile")
        newTile.style.width
        gridContainer.appendChild(newTile)
    }
}


