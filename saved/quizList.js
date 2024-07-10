export function renderQuizList() {
    return `
    <div class="contentWrapper">     
        <div class="interestDiv">
            <h2 class="interest">Select From The List Of Quizzes</h2>
        </div>
        <div class='displayListsMainDiv'>
            <div class="box1">
                <img src='./science.webp'>
                <div class='geoQuizTitleDiv'>
                    <h1>Science</h1>
                    <p>This quiz is a gas…and a liquid and a solid.</p>
                </div>
            </div>
            <div class="box2">
                <img src='./world.webp'>
                <div class='geoQuizTitleDiv'>
                    <h1>World Miscellaneous</h1>
                    <p>From plagues to revolutions, can you name these pivotal events?</p>
                </div>
            </div>
            <div class="box3">
                <img src='./venice.webp'>
                <div class='geoQuizTitleDiv'>
                    <h1>Geography</h1>
                    <p>Figure out if your geography skills border on greatness</p>
                </div>
            </div>
            <div class="box4">
                <img src='./vocab.webp'>
                <div class='geoQuizTitleDiv'>
                    <h1>Vocabulary Quizzes</h1>
                    <p>Can you handle the (barometric) pressure?</p>
                </div>
            </div>
        </div>
    </div>`;
}
