let data = new Array(29);
data.fill('');
// var data2 = 
//     ["", "", "","", "", "","", "", "","", "", "","", "", "","", "", "","", "", "","", "", ""]
function drawGarden (arr) {
  let container = document.querySelector(".main-grid");
  for (let i of data) { 
    
    let cell = document.createElement("div");
    cell.innerHTML = i;
    cell.className = "cell";
    container.appendChild(cell);
  }
}
drawGarden(data);
drawGarden(data);
drawGarden(data);
