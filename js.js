//for searching
function filterRecipes() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

//cool recipe showing button
function toggleRecipe(button) {
    
    const fullRecipe = button.parentElement.querySelector('.full-recipe');
    

    if (fullRecipe.style.display === "block") {
        fullRecipe.style.display = "none";
        button.textContent = "View Recipe";
        button.style.backgroundColor = "#ff6347"; 
    } else {
        fullRecipe.style.display = "block";
        button.textContent = "Hide Recipe";
        button.style.backgroundColor = "rgb(209, 55, 55)"; 
    }
}
