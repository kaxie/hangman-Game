var wrongGuess = document.getElementById("wrong-guesses");

var word_blanks = document.getElementById("word_blanks");

var guess_left = document.getElementById("guesses-left"); 

var wins = document.getElementById("win-counter");

var winsNum = 0;

var losses = document.getElementById("loss-counter");

var lossNum = 0;

var names_to_guess = ["michael","gary","brian","luke","anthony","kyle"];

var randomNumber= Math.floor(Math.random() * 6);

var namewanted = names_to_guess[randomNumber];

var nameWantedArray = new Array(...namewanted);

var namelength = namewanted.length;

var wrongGuess_text = "";

word_blanks_str = "";

var name_str_array;

var chance = 9;

for(var i=0;i<namelength;i++){
    word_blanks_str += "_ ";

}

var word_blanks_str_array = new Array(...word_blanks_str);
var word_blank = document.getElementById("word-blank");
word_blank.innerHTML=word_blanks_str;

var correctness = false;

document.onkeyup = function(event) {
    if(chance == 0){
        lossNum+=1;
        losses.innerHTML = lossNum;
        alert("you ran out of chances!");
        return;
    }
    correctness = false;
    var keyP = event.key;
    for( i=0; i<namewanted.length; i++){
        console.log(keyP);
        if( keyP === nameWantedArray[i] ){
            console.log(i);
            //console.log(nameWantedArray);
            word_blanks_str_array[0+2*i]=keyP;
            word_blanks_str = word_blanks_str_array.join("");
            console.log(word_blanks_str);
            correctness = true;
        }
    }
    word_blank.innerHTML = word_blanks_str; 
    //console.log(nameWantedArray);
    if(correctness == false){
        chance-=1;
        
        if(!wrongGuess_text.includes(keyP)){
            wrongGuess_text+=keyP;
            wrongGuess_text+=" ";
        }
        wrongGuess.innerHTML = wrongGuess_text;
    }
    guess_left.innerHTML = chance;

    if(!word_blanks_str.includes("_")){
        
        winsNum+=1;
        wins.innerHTML = winsNum;
    }
    
  };

  



 
