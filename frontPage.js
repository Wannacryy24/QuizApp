import { renderQuizList } from "./quizList.js";
import { renderQuestion, renderAnswer, renderMainDiv,worldData, scienceData ,geographyData ,VocabularyData} from "./Quiz.js"
export function frontHeader() {
  var frontPageContent = `<header class="frontHeader">
                                    <div class='leftHeader'>
                                        <p>Trivia Quiz</p>
                                        <li><a href="" class='homeAnchor'>Home</a></li>
                                        <li><a href="#">Leaderboards</a></li>
                                        <li><a href="#">About</a></li>
                                        </div> 
                                        <div class="rightHeader">
                                        <li><a href="">Quiz Lists</a></li>
                                    </div>
                            </header>
                            <div class="frontHeaderMainDiv">    
                                <div class="leftDivOfFrontHeaderMainDiv">
                                    <div class='lets-Start-text'>
                                        <p>Let's Start the Game</p>
                                    </div>
                                    <div class='dive-Into-text'>
                                        <p>Dive into a World Of Endless Trivia Fun</p>
                                    </div>
                                    <div class='get-ready-text'>
                                        <p>Get ready for an epic journey filled with exciting challenges and mind-boggling questions. whether you're a casual player or professional quiz master , there's always something new to discover!</p>
                                    </div>
                                    <button class='playNow-button'>Play Now</button>
                                </div>
                                <div class="rightDivOfFrontHeaderMainDiv">
                                <div class='imagePng'>
                                <img src="./quizbackgroung.png">
                                </div>
                            </div>`;
  document.body.innerHTML += frontPageContent;

  var playNowButton = document.querySelector(".playNow-button");
  playNowButton.addEventListener("click", function (event) {
    showCategory();
  });
}

function showCategory() {
  var frontHeaderMainDiv = document.querySelector(".frontHeaderMainDiv");
  frontHeaderMainDiv.classList.add("hidden");
  setTimeout(() => {
    frontHeaderMainDiv.innerHTML = renderQuizList();
    frontHeaderMainDiv.classList.remove("hidden");
    
    document.querySelector('.box2').addEventListener('click',function(){
      renderMainDiv();
      renderQuestion(worldData,0);
      renderAnswer(worldData,0);
    });

    document.querySelector('.box1').addEventListener('click',function(){
      renderMainDiv();
      renderQuestion(scienceData,0);
      renderAnswer(scienceData,0);
    });

    document.querySelector('.box3').addEventListener('click',function(){
      renderMainDiv();
      renderQuestion(geographyData,0);
      renderAnswer(geographyData,0);
    });

    document.querySelector('.box4').addEventListener('click',function(){
      renderMainDiv();
      renderQuestion(VocabularyData,0);
      renderAnswer(VocabularyData,0);
    });


  }, 200);
}

