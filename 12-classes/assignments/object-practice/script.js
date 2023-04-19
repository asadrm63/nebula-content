class Enemy { 
    constructor(color,weapon,motive,height,width,x,y,health)
    { this.color = color 
        this.weapon = weapon
         this.motive = motive 
         this.height = height
          this.width = width 
          this.x = x 
          this.y = y 
          this.health = health
         }
        
           appendEnemy(){ 
            // create a div 
            const newEnemyElement = document.createElement('div');
            // set the attribues / styles 
            newEnemyElement.style.backgroundColor = `#${this.color}`;  
            // left and top properties (x,y)
            newEnemyElement.style.height = this.height;  
            newEnemyElement.style.width= this.width;  
            newEnemyElement.style.position = "absolute";  
            newEnemyElement.style.left = this.x;  
            newEnemyElement.style.top = this.y;  

             // append to the document
             document.body.appendChild(newEnemyElement)
            } } 
             const newEnemy = new Enemy('red','sword','angry','100px','100px','200px','200px',100) 
       
             newEnemy.appendEnemy()
             
             console.log(newEnemy)


             
             
             for(let i = 0; i < 10; i++){ 
                // height and width between 25 - 200px
            const randomHeight = Math.floor(Math.random() * (200 - 25) + 25);
            const randomWidth = Math.floor(Math.random() * (200 - 25) + 25);
                // x 0 -1000px
            const randomX = Math.floor(Math.random() * 1000);
                // y 0 - 700px
                const randomY= Math.floor(Math.random() * (1000));
                // random color 
                let randomColor = Math.floor(Math.floor(Math.random()*16777215).toString(16));

                const newEnemy = new Enemy(randomColor,'sword','angry',`${randomHeight}px`,`${randomWidth}px`,`${randomX}px`,`${randomY}px`,100) 
                newEnemy.appendEnemy() 
            }
        

        