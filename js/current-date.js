document.addEventListener("DOMContentLoaded", function () {
    const currentDateElements = document.querySelectorAll(".current-date");
    const today = new Date();
    const formattedDate = (today.getMonth() + 1).toString().padStart(2, '0') + "/" + today.getDate().toString().padStart(2, '0') + "/" + today.getFullYear();
    
    currentDateElements.forEach(element => {
        element.textContent = formattedDate;
    });
});
