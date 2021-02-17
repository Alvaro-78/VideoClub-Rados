
const homeButton = () => {

  switchScreenHome("screenHome","screenSearch");
};

let switchScreenHome = (actualStage,futureStage) => {
  let actualScreen = document.getElementById(actualStage);

  let futureScreen = document.getElementById(futureStage);

  actualScreen.style.display = "grid";
  futureScreen.style.display = "none";
};

let switchScreenSearchResult = (actualStage,futureStage) => {
  let actualScreen = document.getElementById(actualStage);

  let futureScreen = document.getElementById(futureStage);

  actualScreen.style.display = "none";
  futureScreen.style.display = "grid";
};