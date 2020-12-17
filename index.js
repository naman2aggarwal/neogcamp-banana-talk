let inputTextArea = document.querySelector("#inputTextArea");
let bananaTextArea = document.querySelector("#bananaTextArea");

let translateButton = document.querySelector("#btn-translate");

let url =
  "https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/minion.json";

translateButton.addEventListener("click", translateToBanana);

function translateToBanana() {
  let inputTxt = inputTextArea.value;

  fetch(generateUrl(inputTxt))
    .then((response) => response.json())
    .then((data) => {
      bananaTextArea.value = data.contents.translated;
    })
    .catch(() => alert("Some error occured!, Please try after sometime."));
}

function generateUrl(val) {
  let encodedValue = encodeURI(val);
  return `${url}?text=${encodedValue}`;
}
