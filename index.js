const inventory = newInventory()
window.move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
character.style.position = 'fixed'


let direction = null;
let x = 0;
let y = 0;

character.style.left = x + 'px'
character.style.bottom = y + 'px'

function moveCharacter(){ 
    if(direction === 'west'){
        x-=1
    }
    if(direction === 'north'){
        y+=1
    }
    if(direction === 'east'){
        x+=1
    }
    if(direction === 'south'){
        y-=1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

setInterval(moveCharacter, 1)

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
        character.src = 'assets/green-character/west.gif'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
        character.src = 'assets/green-character/north.gif'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
        character.src = 'assets/green-character/east.gif'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
        character.src = 'assets/green-character/south.gif'
    }
})

document.addEventListener('keyup', function(e){
    direction = null
    character.src = 'assets/green-character/static.gif'

})

window.move(newImage('assets/tree.png')).to(200, 450)
window.move(newImage('assets/pillar.png')).to(350, 250)
window.move(newImage('assets/pine-tree.png')).to(450, 350)
window.move(newImage('assets/crate.png')).to(150, 350)
window.move(newImage('assets/well.png')).to(500, 575)
window.move(newItem('assets/sword.png')).to(500, 555)
window.move(newItem('assets/shield.png')).to(165, 335)
window.move(newItem('assets/staff.png')).to(600, 250)
