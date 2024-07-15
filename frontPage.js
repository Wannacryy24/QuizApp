import { renderQuizList } from "./quizList.js";
import { renderQuestion, renderAnswer, renderMainDiv, worldData, scienceData, geographyData, VocabularyData } from "./Quiz.js";
import { navigate } from "./router.js";

export function frontHeader() {
    var frontPageContent = `
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
                                    <button class='playNow-button animate__heartBeat animate__animated animate__repeat'>Play Now</button>
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
        navigate('/showCategory');
    });
}

export function showCategory() {
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = renderQuizList();
    
    document.querySelector('.box1').addEventListener('click', function () {
        // navigate('/showCategory/scienceQuiz');
        startCountDown(`scienceQuiz`);
    });

    document.querySelector('.box2').addEventListener('click', function () {
        startCountDown('worldQuiz');
        // navigate('/showCategory/worldQuiz');
    });

    document.querySelector('.box3').addEventListener('click', function () {
        startCountDown('GeographyQuiz')
        // navigate('/showCategory/GeographyQuiz');
    });

    document.querySelector('.box4').addEventListener('click', function () {
        startCountDown('VocabularyQuiz')
        // navigate('/showCategory/VocabularyQuiz');
    });

    document.querySelector('.homeAnchor').addEventListener('click', function () {
        navigate('/');
    });
}

function startCountDown(quiz){
    var appDiv = document.querySelector('#app')
    console.log(appDiv);
    appDiv.innerHTML = `<div class= 'quizTimertext'>Quiz Starts in</div><div class='countdown'>3</div>`
    let countDown = 3 ;
    var x = setInterval(function(){
        countDown--;
        if(countDown>=0){
            document.querySelector('.countdown').textContent = countDown;
            if(countDown ==0){
                document.querySelector('.quizTimertext').innerHTML='';
                document.querySelector('.countdown').textContent = 'Quiz Begins...';
            }
        }else{
            clearInterval(x);
            navigate(`/showCategory/${quiz}`);
        }
    },1000);
}
