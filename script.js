// const question = document.querySelectorAll(".question");
const questionBtn = document.querySelectorAll(".question-btn");
// const minusBtn = document.querySelectorAll(".minus-icon");
// const plusBtn = document.querySelectorAll(".plus-icon");

// question.addEventListener('click', function(){
//     questionBtn.classList.add('show-text')
// });

// question.addEventListener('click', function(){
//     questionBtn.classList.remove('show-text')
// });

// traverses DOM

questionBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text') // use toggle method to go back and forth
    })
});