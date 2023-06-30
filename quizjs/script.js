const quizDB=[
    {
        question: "Q1 : What is the full form of HTML ?",
        a:"hello to my land",
        b:"hey text markup language",
        c:"hypertext markup location",
        d:"Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question: "Q2 : What is the full form of css ?",
        a:"cascading style sheet",
        b:"case style short",
        c:"case style system",
        d:"coding style system",
        ans:"ans1"
    },
    {
        question: "Q3 : What is the full form of HTTP?",
        a:"hello to post",
        b:"hey text transfer language",
        c:"HyperText Transfer Protocol",
        d:"Hypertext test protocol",
        ans:"ans3"
    },
    {
        question: "Q4 : What is the full form of JS ?",
        a:"java system",
        b:"javascript",
        c:"javasource",
        d:"java short",
        ans:"ans2"
    },
    {
        question: "Q5 : What is the full form of OTP ?",
        a:"object transfer protocol",
        b:"object test protocol",
        c:"One-time Password",
        d:"on time password",
        ans:"ans3"
    },
    {
        question: "Q6 : What is the full form of OS ?",
        a:"Operating System",
        b:"oject system",
        c:"on softwer",
        d:"one system",
        ans:"ans1"
    },
    {
        question: "Q7 : What is the full form of GUI ?",
        a:"graphical unix interface",
        b:"Graphical User Interface",
        c:"graphical use interface",
        d:"graph use insert",
        ans:"ans2"
    },
    {
        question: "Q8 : What is the full form of UI/UX ?",
        a:"user insert / user exit",
        b:"use insert / use exit",
        c:"User interface/User experience",
        d:"use internal / use external",
        ans:"ans3"
    },
    {
        question: "Q9 : What is the full form of RAM ?",
        a:"required access managment",
        b:"required access memory",
        c:"random all memory",
        d:"Random-access memory",
        ans:"ans4"
    },
    {
        question: "Q10 : What is the full form of ROM ?",
        a:"Read-only memory",
        b:"required one memory",
        c:"read object memory",
        d:"read on memory",
        ans:"ans1"
    },
]

const question = document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showscore=document.querySelector('#showscore');

let questionCount=0;
let score=0;

const loadQuestion= () => {
    const questionList=quizDB[ questionCount];

    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
     return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const CheckedAnswer=getCheckAnswer();
    console.log(CheckedAnswer); 

    if(CheckedAnswer==quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showscore.innerHTML=`
             <h3>You scored ${score}/${quizDB.length}</h3>
             <button class="btn" onclick="location.reload()">play again
             <button class="btn" onclick="location.href='exit.html'">Exit</button>
             </button>   
        `;
        showscore.classList.remove('scoreArea');
    }
});
