var newWords = {
    wordH2Input: document.getElementById("english"),
    wordMeaningInput: document.getElementById("korean")
  };

  var validate = document.querySelector('input');

  document.querySelector("#add-button").addEventListener("click", addWord);
  document.querySelector("#search-input").addEventListener("input", searchWord);