import { renderQuizList } from "./quizList.js";
import { renderQuestion, renderAnswer, renderMainDiv, worldData, scienceData, geographyData, VocabularyData } from "./Quiz.js";
import { navigate } from "./router.js";

export function frontHeader() {
    var frontPageContent = `<header class="frontHeader">
                                <div class='leftHeader'>
                                    <p>Trivia Quiz<span class="byMayank"> by Mayank Verma</span></p>
                                    <li><a href="" class='homeAnchor'>Home</a></li>
                                    <li class='leaderboardLi'><a href="#">Leaderboards</a></li>
                                    <li class='aboutLi'><a href="#">About</a></li>
                                    <li><a href="javascript:void(0)" class='quizListAnchor'>Quiz Lists</a></li>
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
                                        <p>Get ready for an epic journey filled with exciting challenges and mind-boggling questions. whether you're a casual player or professional quiz master, there's always something new to discover!</p>
                                    </div>
                                    <button class='playNow-button'>Play Now</button>
                                </div>
                                <div class="rightDivOfFrontHeaderMainDiv">
                                    <div class='imagePng'>
                                        <img src="./quizbackgroung.png">
                                    </div>
                                </div>
                            </div>`;
    document.getElementById('app').innerHTML = frontPageContent;
    var playNowButton = document.querySelector(".playNow-button");
    playNowButton.addEventListener("click", function (event) {
        navigate('/showCategory');
    });
    document.querySelector('.quizListAnchor').addEventListener('click', function (event) {
        event.preventDefault();
        // showCategory();
        navigate('/showCategory');
    });
}
export function showCategory() {
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = renderQuizList();
    
    document.querySelector('.box1').addEventListener('click', function () {
        navigate('/showCategory/scienceQuiz');
    });

    document.querySelector('.box2').addEventListener('click', function () {
        navigate('/showCategory/worldQuiz');
    });

    document.querySelector('.box3').addEventListener('click', function () {
        navigate('/showCategory/GeographyQuiz');
    });

    document.querySelector('.box4').addEventListener('click', function () {
        navigate('/showCategory/VocabularyQuiz');
    });

    document.querySelector('.homeAnchor').addEventListener('click', function () {
        navigate('/');
    });

}
