// let data = new Array(24);
// data.fill('');

// function drawGarden (arr) {
//   let container = document.querySelector(".main-grid");
//   for (let i of data) { 
    
//     let cell = document.createElement("div");
//     cell.innerHTML = i;
//     cell.className = "cell";
//     container.appendChild(cell);
//   }
// }
// drawGarden(data);
// // drawGarden(data);
// // drawGarden(data);
// let matrix = [];

// let stoneBlock = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
//   ];
//   let tree = [
//     [2, 2, 2],
//     [2, 2, 2],
//     [2, 2, 2],
//     [0, 1, 0],
//     [0, 1, 0],
//     [0, 1, 0],
//   ];
//   let cloud = [
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ];
//   let wood = [
//     [0, 1, 0],
//     [0, 1, 0],
//     [0, 1, 0],
//     [0, 1, 0],
//     [0, 1, 0],
//   ];

//   const drawObjects = (row, colom, type, object) => {
//     for (let i = 0; i < object.length; i++) {
//       for (let j = 0; j < object[i].length; j++) {
       
//         if (!Array.isArray(type)) {
//           if (object[i][j] === 1) {
//             matrix[row + i][colom + j].classList.remove(
//               matrix[row + i][colom + j].classList.value
//             );
//             matrix[row + i][colom + j].classList.add(type);
//           }
//         } else {
//           if (object[i][j] === 1) {
//             matrix[row + i][colom + j].classList.remove(
//               matrix[row + i][colom + j].classList.value
//             );
//             matrix[row + i][colom + j].classList.add(type[0]);
//           } else if (object[i][j] === 2) {
//             matrix[row + i][colom + j].classList.remove(
//               matrix[row + i][colom + j].classList.value
//             );
//             matrix[row + i][colom + j].classList.add(type[1]);
//           }
//         }
//       }
//     }
//   };
  
//   drawObjects(2, 5, "cloud", cloud);
//   drawObjects(2, 22, "cloud", cloud);
//   drawObjects(11, 5, "stone", stoneBlock);
//   drawObjects(11, 5, "stone", stoneBlock);
//   drawObjects(11, 22, "stone", stoneBlock);
//   drawObjects(8, 12, ["tree", "leaf"], tree);
//   drawObjects(8, 17, ["tree", "leaf"], tree);
//   drawObjects(9, 26, "wood", wood);












const container = document.querySelector('.main-grid');

const game = document.querySelector('.right-div');

let height =20;
let width =15;
let count = 0;
let treeCounter = document.querySelector('.tree-counter');


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
        // console.log(`hi i am gr${i}-${j}`);
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
   sky: '',
   cloud: 'cloud', 
   grass:'grass',
   leaf:'leaf'
}
// intializeGame()
// function intializeGame(){
//    for(let i = 0;i< inventory.rowTemp;i++){
//       for(let k = 0;k< inventory.colTemp;k++){
//          // container.style.display='grid';
//          // container.style.gridTemplate=`repeat(${inventory.rowTemp},1fr) / repeat(${inventory.colTemp},1fr)`
//          let div = document.createElement('div');
//          div.setAttribute('id',`cell${i}-${k}`)
//          div.setAttribute('class','cell')
//          // div.innerHTML = '';
//          container.appendChild(div)
//       }
//    } 
// }
function fillCells(){
   for(let k = 0;k< container.children.length;k++){
      let [i,j] = container.children[k].getAttribute('id').slice(4).split('-');
      
      
       fillGrass(i,j,k)
       filltree(i,j,k)
       fillleaf(i,j,k)
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

function fillGrass(i,j,k){
   if(i==12){
      container.children[k].classList.add(inventory.grass);
   }
   else if(i>=13){
      container.children[k].classList.add(inventory.ground);
   }
}




fillCells()


container.addEventListener('click',(event)=>{
   if(!event.target.getAttribute('class').includes('tree')){
      event.target.setAttribute('class',inventory.sky);
      count++
      treeCounter.innerHTML=count;

   }
})