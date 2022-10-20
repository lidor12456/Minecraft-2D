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