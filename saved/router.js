import { showCategory } from './frontPage.js';
import { renderMainDiv, renderQuestion, renderAnswer, worldData ,geographyData ,VocabularyData ,scienceData} from './Quiz.js';

const routes = {
    '/showCategory': showCategory,

    '/showCategory/worldQuiz': function() {
        console.log('done');
        renderMainDiv();
        renderQuestion(worldData, 0);
        renderAnswer(worldData, 0);
    },

    '/showCategory/scienceQuiz':function(){
        renderMainDiv();
        renderQuestion(scienceData, 0);
        renderAnswer(scienceData, 0);
    },

    '/showCategory/GeographyQuiz':function(){
        renderMainDiv();
        renderQuestion(geographyData, 0);
        renderAnswer(geographyData, 0);
    },

    '/showCategory/VocabularyQuiz':function(){
        renderMainDiv();
        renderQuestion(VocabularyData, 0);
        renderAnswer(VocabularyData, 0);
    }
};

function getRoutes() {
    const path = window.location.pathname;
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
