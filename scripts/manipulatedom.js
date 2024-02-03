window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.classList.add('tdNode');
  tdNode.appendChild(childNode);
  return tdNode;
}

function createBtnNode(btnTxt,e,l){
  let btnNode = document.createElement("button");
  let btnNodeText = document.createTextNode(btnTxt);
  btnNode.appendChild(btnNodeText);
  btnNode.addEventListener(e,l);
  return btnNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function edit(node) {
  let newNode = document.createElement("input");
  newNode.type = 'text';
  newNode.placeholder = 'Enter Cell (x,y) ...';
  node.replaceChild(newNode, node.childNodes[0]);
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createBtnNode("edit text","click", () =>  {
      edit(col1);
    }));
  
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

