// BUBBLE BACKGROUND

const canvas = document.getElementById("bubble")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let bubbles = []

for(let i=0;i<40;i++){
bubbles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*5+2,
speed:Math.random()*1+0.5
})
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

bubbles.forEach(b=>{

ctx.beginPath()
ctx.arc(b.x,b.y,b.size,0,Math.PI*2)
ctx.fillStyle="rgba(255,255,255,0.4)"
ctx.fill()

b.y -= b.speed

if(b.y < 0){
b.y = canvas.height
b.x = Math.random()*canvas.width
}

})

requestAnimationFrame(animate)

}

animate()



// MINI GAME IKAN

let score = 0

const gameArea = document.getElementById("gameArea")
const scoreText = document.getElementById("score")
const scorePanel = document.getElementById("scoreDisplay")

function updateScore(){
scoreText.innerText = score
scorePanel.innerText = score
}

function spawnFish(){

const fish = document.createElement("div")
fish.classList.add("fishGame")
fish.innerHTML = "🐟"

fish.style.top = Math.random()*160 + "px"

fish.onclick = function(){

score++
updateScore()

fish.remove()

}

gameArea.appendChild(fish)

setTimeout(()=>{
fish.remove()
},4000)

}

setInterval(spawnFish,2000)

function updateScore(){
document.getElementById("scoreDisplay").innerText = score
}