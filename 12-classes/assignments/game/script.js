let score = document.querySelector('#score')


console.log(score)
class Enemy {
    constructor(color, weapon, motive, height, width, x, y, health) {
        this.color = color
        this.weapon = weapon
        this.motive = motive
        this.height = height
        this.width = width
        this.x = x
        this.y = y
        this.health = health
    }
    
    removeEnemy(e){
        // remove it 
        // change image to explosion
       e.target.style.backgroundImage = "url('https://cdn.staticcrate.com/stock-hd/graphics/print-design/Explosion-RED-Graphic-style05_prev_lg.png')";
        // delay element being removed 
        // settimeout 
        // 1 second -> 1000

        const remover = () => {
            document.body.removeChild(e.target)
        }
        setTimeout(remover,1000)
        score.innerText++
        
    }

    appendEnemy() {
        // create a div
        const newEnemyElement = document.createElement('div')
        newEnemyElement.style.height = this.height
        newEnemyElement.style.width = this.width
        newEnemyElement.style.backgroundColor = `#${this.color}`
        newEnemyElement.style.backgroundImage = "url`https://www.giantbomb.com/a/uploads/square_small/16/164924/3263493-2335185263-latest.jpg`"
        //background image 

        // set the attribues / styles
        // left and top properties (x,y)

        newEnemyElement.style.left = this.x
        newEnemyElement.style.top = this.y
        // postion
        newEnemyElement.style.position = 'absolute'
        // append to the document

        //add event listener
        newEnemyElement.addEventListener('click', (e) => this.removeEnemy(e))
        document.body.appendChild(newEnemyElement)
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


const createRandomEnemy = () => {
        // height and width between 25 - 200px
        // x 0 -1000px
        // y 0 - 700px
        // random color 
        const randomVal = randomNumber(25, 200)
        const randomX = randomNumber(0, 1000)
        const randomY = randomNumber(0, 700)
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const newEnemy = new Enemy(randomColor, 'sword', 'angry', `${randomVal}px`, `${randomVal}px`, `${randomX}px`, `${randomY}px`, 100)
        newEnemy.appendEnemy()
    }
    createRandomEnemy()



setInterval(createRandomEnemy,3000)
