async function init(){
    const questionnaire = await fetch("assets/questionnaire.json").then(response => response.json())
    let currentQuestion = 0;
    let reponseStr = ""
    afficherQuestion(questionnaire,currentQuestion,reponseStr)
}

function afficherQuestion(questionnaire,currentQuestion,reponseStr){
    let question = questionnaire.questions[currentQuestion]

    if (!question){
        // fin du quizz
        document.getElementById('question').innerHTML = `Vous avez fini, allez a la page : <a class="link" href="./${reponseStr}.html">${reponseStr}.html</a>`
        document.getElementById('reponses').innerHTML = ""
        return 
    }

    reponseStr += `R${currentQuestion}`
    document.getElementById('question').innerText = question.question
    document.getElementById('reponses').innerHTML = ""

    // ajout boutons
    question.reponses.forEach((bouton)=>{
        document.getElementById('reponses').innerHTML += `<button class="m-2 btn btn-primary reponse">${bouton}</button>`
    })

    // ajout des event
    document.querySelectorAll('.reponse').forEach((bouton)=>{
        bouton.addEventListener('click',()=>{
            reponseStr += `_A${bouton.innerText}_`
            afficherQuestion(questionnaire,currentQuestion + 1,reponseStr)
        })
    })
}


document.addEventListener("DOMContentLoaded", (event) => {
    init()
});