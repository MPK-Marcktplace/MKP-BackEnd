
window.addEventListener("load", function(e){

    const modalBtn =  document.querySelector("#modalRegister-btn");
    const modal = document.querySelector(".modal-section");
    const closeBtn = document.querySelector(".container i");
    const registerBtn = document.querySelector("#register-btn");

    modalBtn.addEventListener("click", function(e){
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function(e){
        modal.style.display = "none";
    });
    registerBtn.addEventListener("click", function(e){
        modal.style.display = "none";
    });
});

