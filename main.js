import './style.css';
import { frontHeader } from "./frontPage.js";
import { router } from './router.js';
import { navigate } from './router.js';
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded");
    frontHeader();
    router();
});
function header(){
    
var headerDiv = document.createElement('header');
var headerDiv = document.querySelector('.headerTag');
headerDiv.innerHTML = `<header class="frontHeader">
                                <div class='leftHeader'>
                                    <p class='triviaQuiz'>Trivia Quiz</p>
                                    <li><a href="" class='homeAnchor'>Home</a></li>
                                    <li class='leaderboardLi'><a href="#">Leaderboards</a></li>
                                    <li class='aboutLi'><a href="https://mayankvermaportfolio.netlify.app/" target='_blank'>About me</a></li>
                                    <li><a href="javascript:void(0)" class='quizListAnchor'>Quiz Lists</a></li>
                                </div>
                            </header>`;
}
header();
document.querySelector('.homeAnchor').addEventListener('click', function () {
    navigate('/');
});