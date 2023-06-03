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

  function searchWord() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var cards = document.querySelectorAll('#card li');

    for (var i = 0; i < cards.length; i++) {
      var korean = cards[i].querySelector('.card-title').value.toLowerCase();
      var english = cards[i].querySelector('.card-text').value.toLowerCase();
      var card = cards[i];

      if (korean.includes(input) || english.includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  }