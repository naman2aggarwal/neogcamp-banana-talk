let inputTextArea = document.querySelector("#inputTextArea");
let bananaTextArea = document.querySelector("#bananaTextArea");

let translateButton = document.querySelector("#btn-translate");

translateButton.addEventListener("click", translateToBanana);

function translateToBanana() {
  let inputTxt = inputTextArea.value;
  let url = `https://api.funtranslations.com/translate/minion.json?text=${inputTxt}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      bananaTextArea.value = data.contents.translated;
    })
    .catch(() => alert("Some error occured!, Please try after sometime."));
}
