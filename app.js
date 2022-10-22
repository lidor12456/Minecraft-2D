
const container = document.querySelector('.main-grid');

const game = document.querySelector('.right-div');

//----------------COUNTERS SETTINGS----------------//

let height =20;
let width =30;
let groundCount=0;
let grassCount=0;
let stoneCount=0;
let woodCount=0;
let treeCount=0;
let leafCount=0;

let groundCounter = document.querySelector('.ground-counter');
let grassCounter = document.querySelector('.grass-counter');
let stoneCounter = document.querySelector('.stone-counter');
let woodCounter = document.querySelector('.wood-counter');
let treeCounter = document.querySelector('.tree-counter');
let leafCounter = document.querySelector('.leaf-counter');



//----------------TOOLS SETTINGS----------------//

const tools = ['axe', 'pickaxe','shovel'];
let currentTool = null;
const axe = document.querySelector('.axe');
const pickaxe = document.querySelector('.pickaxe');
const shovel = document.querySelector('.shovel');

axe.addEventListener('click', e => {
    currentTool=axe;
    axe.style.border = '1px solid red'
    pickaxe.style.border = '1px solid white'
    shovel.style.border = '1px solid white'
})
pickaxe.addEventListener('click', e => {
    currentTool=pickaxe;
    axe.style.border = '1px solid white'
    pickaxe.style.border = '1px solid red'
    shovel.style.border = '1px solid white'
})
shovel.addEventListener('click', e => {
    currentTool=shovel;
    axe.style.border = '1px solid white'
    pickaxe.style.border = '1px solid white'
    shovel.style.border = '1px solid red'
})


//----------------DRAW THE GAME----------------//
function createGrid(height, width) {
    container.setAttribute(
      "style",
      `grid-template: repeat(${height}, 1fr) / repeat(${width}, 1fr);`
    );
  
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let element = document.createElement("div");
        element.innerText = "";
        element.setAttribute("id", `cell${i}-${j}`);
        element.setAttribute("class", "grid-item");
        container.append(element);
      }
    }
  }
  createGrid(height, width);

let inventory ={
   rowTemp: 20,
   colTemp: 15,
   current: '',
   tree: 'tree',
   stone: 'stone',
   ground: 'ground',
   sky: 'sky',
   cloud: 'cloud', 
   grass:'grass',
   leaf:'leaf'
}

function fillCells(){
   for(let k = 0;k< container.children.length;k++){
      let [i,j] = container.children[k].getAttribute('id').slice(4).split('-');
      
      
       fillGrass(i,j,k)
       filltree(i,j,k)
       fillleaf(i,j,k)
       fillstone(i,j,k)
       fillcloud(i,j,k)
   } 

}

function fillcloud(i,j,k){
    if(((i==0||i==1||i==0||i==0)&&j==2)||(i==0||i==1||i==0||i==0)&&j==13){
       container.children[k].classList.add(inventory.cloud);
    }
    
 }
function fillleaf(i,j,k){
   if( i<8 && i>5 && j>7 && j<11 ){
      container.children[k].classList.add(inventory.leaf);
   }
}

function filltree(i,j,k){
   if((i==8||i==11||i==10||i==9)&&j==9){
      container.children[k].classList.add(inventory.tree);
   }
   
}
function fillstone(i,j,k){
   if((i==8||i==11||i==10||i==9)&&j==3){
      container.children[k].classList.add(inventory.stone);
   }
   
}

function fillGrass(i,j,k){
   if(i==12){
      container.children[k].classList.add(inventory.grass);
   }
   else if(i>=13){
      container.children[k].classList.add(inventory.ground);
   }
}


fillCells()

//----------------REMOVE ELEMENTS----------------//
container.addEventListener('click',(event)=>{

   if(event.target.getAttribute('class').includes('ground')&& currentTool==shovel){
      event.target.setAttribute('class',inventory.sky);
      updateGroundCounter(groundCounter);}

   if(event.target.getAttribute('class').includes('grass')&& currentTool==shovel){
      event.target.setAttribute('class',inventory.sky);
      updateGrassCounter(grassCounter);}

   if(event.target.getAttribute('class').includes('stone')&& currentTool==pickaxe){
      event.target.setAttribute('class',inventory.sky);
      updateStoneCounter(stoneCounter);}

   if(event.target.getAttribute('class').includes('wood') && currentTool==axe){
      event.target.setAttribute('class',inventory.sky);
      updateWoodCounter(woodCounter);}

   if(event.target.getAttribute('class').includes('tree')&& currentTool==axe){
      event.target.setAttribute('class',inventory.sky);
      updateTreeCounter(treeCounter);}

   if(event.target.getAttribute('class').includes('leaf')&& currentTool==axe){
      event.target.setAttribute('class',inventory.sky);
      updateLeafCounter(leafCounter);}
    })

      //----------------ADD ELEMENTS----------------//



//     groundCounter.addEventListener('click',(event)=>{
//         drawGround()
//     })
//     function drawGround() {
//         groundCounter.style.border='1px solid red';


// }
// container.addEventListener('click',(event)=>{
// if ((groundCount!=0)){
// console.log('im ground');
// }            
// }) 


 



//----------------UPDATE COUNTERS----------------//

   

function updateGroundCounter (string) {
    groundCount++;
    string.innerHTML=groundCount;
}
function updateGrassCounter (string) {
    grassCount++
    string.innerHTML=grassCount;
}
function updateStoneCounter (string) {
    stoneCount++;
    string.innerHTML=stoneCount;
}
function updateWoodCounter (string) {
    woodCount++;
    string.innerHTML=woodCount;
}
function updateTreeCounter (string) {
    treeCount++;
    string.innerHTML=treeCount;
}
function updateLeafCounter (string) {
    leafCount++;
    string.innerHTML=leafCount;
}

