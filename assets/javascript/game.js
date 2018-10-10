$(document).ready(function () {

    var wordlist = ['hello', 'show', 'choice', 'name', 'most', 'bye', 'great', 'low'];
    var letterguess = [];
    var chancesleft = 0;
    var correct = 0;
    var incorrect = 0;
    var outcome = "incorrect";

    function getRandomeInt(wordsLen) {
        var random = Math.floor(Math.random() * wordsLen) + 1;
        return random;
    }

    var randomword = wordlist[getRandomeInt(wordlist.length)];
    console.log(randomword);

    for (var i = 0; i < randomword.length; i++) {
        var targetWord = document.getElementById("blanksArea");
        var newSpace = document.createElement("li");
        newSpace.className = randomword.charAt(i);
        newSpace.id = randomword.charAt(i);
        newSpace.textContent = " _ ";
        targetWord.appendChild(newSpace);
    };

    chancesleft = randomword.length;

    document.onkeyup = function (event) {
        //Add check for getting only alphabates 
        var isLetter = event.keyCode >= 65 && event.keyCode <= 90;
        var usedletter = letterguess.includes(event.key);

        if (isLetter === true && usedletter === false ) {
            //Match
            for (var i = 0; i < randomword.length; i++) {
                var key = event.key
                var found = document.getElementById(key);
                if (found.className === key) {
                    found.textContent = " " + key + " ";
                    outcome = "correct";
                    correct++;
                };
            };

            if (outcome === "incorrect") {
                chancesleft = chancesleft - 1;
                incorrect++;
                console.log(chancesleft);
                    
                    if(chancesleft > 0)
                    {
                        console.log(chancesleft);

                    }else{
                        document.getElementById('c' + chancesleft).style.color = "white";
                    }
                   
            }
            if (chancesleft === 0 && outcome === "incorrect") {
                var score = document.getElementById('WinOrLoose').textContent = "LOOSE";

            }
            outcome = "incorrect";

            letterguess.push(event.key);
            document.getElementById(event.key).style.color = "black";
            console.log(letterguess);
            console.log(chancesleft);

           

        }
    }

});
