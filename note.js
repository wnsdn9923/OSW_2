var newWords = {
    wordH2Input: document.getElementById("english"),
    wordMeaningInput: document.getElementById("korean")
  };

  var validate = document.querySelector('input');

  document.querySelector("#add-button").addEventListener("click", addWord);
  document.querySelector("#search-input").addEventListener("input", searchWord);

  function addWord(event) {
    if (validate.value === "") {
      alert("Please insert your word of the day");
    } else {
      event.preventDefault();
      var d1 = document.getElementById('card');
      d1.insertAdjacentHTML('beforeend', '<li><div><input class="card-title" value="' + newWords.wordH2Input.value + '" disabled><input class="card-text" value="' + newWords.wordMeaningInput.value + '" disabled></div><div><button class="edit">edit</button><button class="update">update</button><button class="delete">delete</button></div></li>');
      localStorage.setItem("word", newWords.wordH2Input.value);
      document.getElementById("english").value = "";
      document.getElementById("korean").value = "";
    }
  }