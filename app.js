var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");



var apiURL="https://api.funtranslations.com/translate/yoda.json";

function translateURL(text){
  return `${apiURL}?text=${text}`;

}

var errorHandler= (error)=>{
  console.log("some error occured",error);
  alert("something went wrong with the server.Please try again.")
}

const clickHandler = () => {
  var input= txtInput.value;

  fetch(translateURL(input))
  .then(response=>response.json())
  .then(json=>{
    var translatedText=json.contents.translated;
    txtOutput.innerText= translatedText;
  })
  .catch(errorHandler);

};

btnTranslate.addEventListener("click", clickHandler);