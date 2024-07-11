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
  console.log("buttonClicked");
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
  console.log(selectedSymbols);
  console.log(symbolToPrint);
  shuffleArray(symbolToPrint);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
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
  console.log(symbolContainer);
  console.log(symbol);

  symbolContainer.forEach((singleSymbol, index) => {
    singleSymbol.addEventListener("click", () => {
      console.log("clicked");
      noOfAttempts.innerHTML = Number(noOfAttempts.innerHTML) + 1;
      gameFunctionality(index);
    });
  });

  let steps = 0;
  let matchingPairs = [];
  let matchingPairIndex = [];

  function gameFunctionality(index) {
    console.log("symbolsClicked" + symbol[index].innerHTML);
    matchingPairs.push(symbol[index].innerHTML);
    matchingPairIndex.push(index);

    console.log("matching pairs" + matchingPairIndex);
    console.log("matching pairs" + matchingPairs);

    symbolContainer[index].classList.add("activeSymbolContainer");
    symbol[index].classList.add("activeSymbol");
    setTimeout(() => {
      matchPairs();
    }, 1000);
  }

  function matchPairs() {
    if (matchingPairs.length === 2) {
      matchingPairs[0] === matchingPairs[1]
        ? (console.log("matched"),
          (matchingPairIndex = []),
          (matchingPairs = []))
        : ((matchingPairs = []),
          symbolContainer[matchingPairIndex[0]].classList.remove(
            "activeSymbolContainer"
          ),
          symbolContainer[matchingPairIndex[1]].classList.remove(
            "activeSymbolContainer"
          ),
          symbol[matchingPairIndex[0]].classList.remove("activeSymbol"),
          symbol[matchingPairIndex[1]].classList.remove("activeSymbol"),
          (matchingPairIndex = []));
    }
  }
}
