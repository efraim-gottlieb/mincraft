const board = document.getElementById("board");
const tiles = document.getElementById("tiles");
const toolBar = document.getElementById("tools");
const tools = {
  "🥄": "soil",
  "✂️": "grass",
  "⛏️": "stone",
  "🗡️": "umen",
};
let choice;
const stack = {
  soil: 0,
  grass: 0,
  stone: 0,
  sky: 0,
  umen: 0,
};

const sky = 492;
const grass = 41;
const soil = 287;
const stone = 246;

for (let i = 0; i < sky; i++) {
  const divTile = document.createElement("div");
  divTile.classList.add("sky");
  board.append(divTile);
}

for (let i = 0; i < grass; i++) {
  const divTile = document.createElement("div");
  divTile.classList.add("grass");
  board.append(divTile);
}

for (let i = 0; i < soil; i++) {
  const divTile = document.createElement("div");
  divTile.classList.add("soil");
  board.append(divTile);
}

for (let i = 0; i < stone; i++) {
  const divTile = document.createElement("div");
  divTile.classList.add("stone");
  board.append(divTile);
}
const tilesList = ["grass", "stone", "soil", "umen"];
function numbers() {
  tiles.innerHTML = "";
  for (let i = 0; i < tilesList.length; i++) {
    const divTile = document.createElement("div");
    divTile.innerHTML = `<div>${stack[tilesList[i]]}</div>`;
    divTile.className = tilesList[i];
    tiles.append(divTile);
  }
}
numbers();
board.addEventListener("click", (event) => {
  if (toolsList.includes(choice)) {
    if (event.target.className == tools[choice]) {
      stack[event.target.className] += 1;
      event.target.className = "sky";
    }
  } else {
    if (event.target.className == "sky") {
      if (stack[choice] > 0) {
        stack[choice]--;
        event.target.className = choice;
      }
    }
  }
  numbers();
});

tiles.addEventListener("click", (event) => {
  choice = event.target.className;
});
toolBar.addEventListener("click", (event) => {
  choice = event.target.className;
});

const toolsList = ["⛏️", "🗡️", "🥄", "✂️"];
for (let i = 0; i < toolsList.length; i++) {
  const div = document.createElement("div");
  div.innerHTML = toolsList[i];
  div.className = toolsList[i];
  toolBar.append(div);
}
