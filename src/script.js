// write your JavaScript here

const SumbitBtn = document.querySelector("#submit");
const CancelBtn = document.querySelectorAll("#cancel-btn");
const dialog = document.querySelector(".dialog-box");
const feedback = document.querySelector(".feedback");
const SurveyBtn = document.querySelector("#open");
const displayRating = document.querySelector(".display-rating");
const getRatingValue = document.querySelectorAll(".rating-value")

console.log(getRatingValue);

SurveyBtn.addEventListener('click', () =>{
    dialog.showModal(); 
})


CancelBtn.forEach(button => {
    button.addEventListener('click', () => {
        if(dialog){
            dialog.close();;
        }

        if(feedback){
            feedback.close();
        }
    });
});

SumbitBtn.addEventListener('click', () => {
  dialog.close();
  feedback.showModal();
});


let rating = 0;
getRatingValue.forEach(button => {
    button.addEventListener('click', ()=>{
        getRatingValue.forEach(btn => btn.classList.remove('btn-clicked'));
        
        button.classList.add('btn-clicked');
        console.log("added");
        
       
       rating = button.textContent;

       
        if(displayRating){
            displayRating.textContent = rating;
        };

    })

})


