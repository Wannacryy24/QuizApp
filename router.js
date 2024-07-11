import { showCategory } from './frontPage.js';
import { frontHeader } from './frontPage.js';
import { renderMainDiv, renderQuestion, renderAnswer, worldData, geographyData, VocabularyData, scienceData } from './Quiz.js';
import { renderQuiz, renderQuizQuestion } from './Quiz.js';
const routes = {
    '/': frontHeader,
    '/showCategory': showCategory,
    '/showCategory/worldQuiz': function() {
        renderQuiz('worldQuiz');
    },

    '/showCategory/scienceQuiz': function() {
        renderQuiz('scienceQuiz');
    },

    '/showCategory/GeographyQuiz': function() {
        renderQuiz('GeographyQuiz');
    },

    '/showCategory/VocabularyQuiz': function() {
        renderQuiz('VocabularyQuiz');
    },

    '/showCategory/worldQuiz/:questionId': function(id) {
        renderQuizQuestion('worldQuiz', id);
    },

    '/showCategory/scienceQuiz/:questionId': function(id) {
        renderQuizQuestion('scienceQuiz', id);
    },

    '/showCategory/GeographyQuiz/:questionId': function(id) {
        renderQuizQuestion('GeographyQuiz', id);
    },

    '/showCategory/VocabularyQuiz/:questionId': function(id) {
        renderQuizQuestion('VocabularyQuiz', id);
    },
};

function getRoutes() {
    const path = window.location.pathname;
    const match = path.match(/\/showCategory\/(worldQuiz|scienceQuiz|GeographyQuiz|VocabularyQuiz)(?:\/(.+))?/);
    const quiz = match ? match[1] : null;
    const questionId = match ? match[2] : null;

    if (quiz && questionId) {
        return () => routes[`/showCategory/${quiz}/:questionId`](questionId);
    }
    return routes[path] || (() => '<h1>404 Not Found</h1>');
}


export function router() {
    const view = getRoutes();
    if (typeof view === 'function') {
        view();
    } else {
        document.getElementById('app').innerHTML = view();
    }
}

export function navigate(url) {
    history.pushState({}, "", url);
    router();
}

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
    router();
});
