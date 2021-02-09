let quizContainer = document.getElementById("quiz");
let questions = document.getElementById("options");
let buttonForward = document.getElementById("goforward");
let buttonGoBack = document.getElementById("goback");

generateQuiz(questions,quizContainer, buttonForward, buttonGoBack);

//estrutura
function generateQuiz(questions, quizContainer, buttonForward, buttonGoBack,){
    function showQuestions(){
    }
    function showResults(){
    }
    showQuestions(questions, quizContainer);
    buttonForward.onclick = function(){
    }
    buttonGoBack.onclick = function(){
    }
}
//perguntas
function showQuestions(questions, quizContainer) {
    let output = [];
    let respostas;
    for(i=0; i<questions.length; i++){ //faltará filtrar e seleccionar mais que uma :'S
        respostas = [] 
    }
}

//fazer novas perguntas quando avança 
//seleccionar mais que uma opção e des-seleccionar opções quando clicadas a segunda vez
//criar cor diferente quando outra opção for seleccionada
let highlight = (elem ) => {

    elem.addEventListener("click", function( event ) {
      // highlight the target 
       if (event.target.style.fontWeight !== "bold"){
       event.target.style.fontWeight = "bold"
       event.target.style.backgroundColor = "lightgray"
      } else {
        event.target.style.fontWeight = "normal"
        event.target.style.backgroundColor = "white"
      } 
    }, false); 
  }
  

  for (const elem of showQuestions) { highlight(elem) }
//eventlistener para os botões pra frente e pra trás
