const MainconEl = document.querySelector('.maincontainer');

const StartBtn = document.querySelector('.start-btn');

const PopupEl = document.querySelector('.popup');

const ExitBtn = document.querySelector('.exit-btn');

const ContinueBtn = document.querySelector('.continue-btn');

const BlackbgEl = document.querySelector('#blackbg');

const TestEl = document.querySelector('.test');

const Nextbtn = document.querySelector('#next');



const Questiontracker = document.querySelector('#questiontracker');



const ScoreEl = document.querySelector('#score');

const QuestionEl = document.querySelector('#question');

const Option1El = document.querySelector('#option1');

const Option2El = document.querySelector('#option2');

const Option3El = document.querySelector('#option3');

const Option4El = document.querySelector('#option4');



let Questionnum = 1

let option

let score = 0





//Popup will appear 

StartBtn.addEventListener("click", () => {

    PopupEl.style.opacity = "1"

    PopupEl.style.transform = "scale(1.2)"

})



//popup will disappear 

ExitBtn.addEventListener("click", () => {

    PopupEl.style.opacity = "0"

    PopupEl.style.transform = "scale(0.1)"

})



//blackbg will come and popup will disappear 

ContinueBtn.addEventListener("click", () => {

    BlackbgEl.style.left = "0%"

    BlackbgEl.style.right = "0%"



    PopupEl.style.opacity = "0"

    PopupEl.style.transform = "scale(0.1)"

    setTimeout(QuestionAppearPopup, 700)

    QuestionAppear()

})



function QuestionAppearPopup() {

    TestEl.style.opacity = "1"

    TestEl.style.transform = "scale(1)"

}



function QuestionAppear() {



    ScoreEl.textContent = `Score: ${score} / 5`



    QuestionEl.textContent = questions[Questionnum - 1].question



    Option1El.textContent = questions[Questionnum - 1].options[0]

    Option2El.textContent = questions[Questionnum - 1].options[1]

    Option3El.textContent = questions[Questionnum - 1].options[2]

    Option4El.textContent = questions[Questionnum - 1].options[3]



    Questiontracker.textContent = `${Questionnum} of 5 questions`



    console.log("option is" + option);

}



function Next() {



    //checks the answer

    if (option == questions[Questionnum - 1].answer) {

        score++

        ScoreEl.textContent = `Score: ${score} / 5`

    }



    Questionnum++

    console.log(`${Questionnum} is Questionnum`);

    option = undefined



    QuestionAppear()



}



Nextbtn.addEventListener("click", function() {



    if (option !== undefined && Questionnum < questions.length) {

        Next()

    } else if (Questionnum >= questions.length) {



        TestEl.style.opacity = "0";

        TestEl.style.transform = "scale(0.001)";



        setTimeout(submit, 900);



    };



});



Option1El.addEventListener("click", function() {

    option = "A"

})



Option2El.addEventListener("click", function() {

    option = "B"

})



Option3El.addEventListener("click", function() {

    option = "C"

})



Option4El.addEventListener("click", function() {

    option = "D"

})







const Resultpopup = document.querySelector(".resultpopup")

const Progressdiv = document.querySelector("#progressdiv")

const Progress = document.querySelector("#progress")

const Yourresult = document.querySelector("#yourresult")





function submit() {



    Resultpopup.style.opacity = "1"

    Resultpopup.style.transform = "scale(1)"

    Yourresult.textContent = `You scored ${score} out of 5`





    let percent = 0

    if (score !== 0) {

        let interval = setInterval(() => {

            percent++

            Progress.textContent = `${percent}%`

            Progressdiv.style.backgroundImage = `conic-gradient(#7d2ae8 ${3.6 * percent}deg, white 0deg)`



            if (percent == score * 20) {

                clearInterval(interval)

            }

        }, 30)

    }

    Progress.textContent = `${percent}%`



}



const Tryagainbtn = document.querySelector("#tryagainbtn")

const Gotohomebtn = document.querySelector("#gotohomebtn")



Tryagainbtn.addEventListener("click", () => {



    Questionnum = 1

    option = undefined

    score = 0



    Resultpopup.style.opacity = "0"

    Resultpopup.style.transform = "scale(0.001)"



    TestEl.style.opacity = "1"

    TestEl.style.transform = "scale(1)"



    QuestionAppear()



})



Gotohomebtn.addEventListener("click", () => {



    Questionnum = 1

    option = undefined

    score = 0



    BlackbgEl.style.left = "-100%"

    BlackbgEl.style.right = "-100%"



    Resultpopup.style.opacity = "0"

    Resultpopup.style.transform = "scale(0.001)"



})
