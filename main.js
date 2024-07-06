import './style.css'

import { frontHeader } from "./frontPage.js";
import { renderQuizList } from "./quizList.js";
import { renderQuestion ,renderAnswer,renderMainDiv } from "./Quiz.js";


document.addEventListener('DOMContentLoaded', function() {
    frontHeader();
});