const symbols = [
  "🍇",
  "🍉",
  "🚗",
  "🍌",
  "🏠",
  "🥭",
  "🍎",
  "🐯",
  "🍒",
  "🍓",
  "🐵",
  "🥝",
  "🍿",
  "🏀",
  "🎱",
  "🐻",
  "🍜",
  "🍢",
  "🎓",
  "🍤",
  "🦀",
  "🍦",
  "🍩",
  "🎂",
  "🍫",
  "🍭",
  "🍼",
  "🪔",
  "🍺",
  "🐱",
  "🐶",
];

const container = document.querySelector(".container");
const noOfAttempts = document.querySelector(".noOfAttempts");
const restartButton = document.querySelector(".btn");

const rows = 4;
const columns = 4;
let selectedSymbols = [];
let symbolToPrint = [];

restartButton.addEventListener("click", () => {
  container.innerHTML = "";
  selectedSymbols = [];
  symbolToPrint = [];
  noOfAttempts.innerHTML = 0;
  selectingSymbols();
});

selectingSymbols();

function selectingSymbols() {
  Array(rows + columns)
    .fill()
    .forEach(() => {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      selectedSymbols.push(symbols[randomIndex]);
      symbolToPrint.push(symbols[randomIndex]);
      symbolToPrint.push(symbols[randomIndex]);
    });

  shuffleArray(symbolToPrint);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  createDivs();
}

function createDivs() {
  symbolToPrint.map((symbol) => {
    container.innerHTML += `<div class='symbolContainer'>
    <div class='symbol'>${symbol}</div></div>`;
  });

  const symbolContainer = document.querySelectorAll(".symbolContainer");
  const symbol = document.querySelectorAll(".symbol");

  let matchingPairs = [];
  let matchingPairIndex = [];
  let matchPairTimeOut;

  symbolContainer.forEach((singleSymbol, index) => {
    singleSymbol.addEventListener("click", () => {
      noOfAttempts.innerHTML = Number(noOfAttempts.innerHTML) + 1;
      symbol[index].classList.add("activeSymbol");
      symbolContainer[index].classList.add("activeSymbolContainer");

      gameFunctionality(index);
    });
  });

  function gameFunctionality(index) {
    matchingPairs.push(symbol[index].innerHTML);
    matchingPairIndex.push(index);

    if (matchPairTimeOut) {
      clearTimeout(matchPairTimeOut);
    }
    if (matchingPairs.length > 2) {
      matchPairs();
    } else {
      matchPairTimeOut = setTimeout(() => {
        matchPairs();
      }, 2000);
    }
  }

  function matchPairs() {
    while (matchingPairs.length > 1) {
      if (matchingPairs[0] !== matchingPairs[1]) {
        symbolContainer[matchingPairIndex[0]].classList.remove(
          "activeSymbolContainer"
        );

        symbolContainer[matchingPairIndex[1]].classList.remove(
          "activeSymbolContainer"
        );

        symbol[matchingPairIndex[0]].classList.remove("activeSymbol");
        symbol[matchingPairIndex[1]].classList.remove("activeSymbol");
      }
      matchingPairs.shift();
      matchingPairs.shift();
      matchingPairIndex.shift();
      matchingPairIndex.shift();
    }
  }
}
