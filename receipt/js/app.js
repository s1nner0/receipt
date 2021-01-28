document.addEventListener("DOMContentLoaded", function(){
    console.log("onload");

    let url = "https://api.spoonacular.com/recipes/random/?apiKey=4d945d6fd3be4ac18bb285cbf1be5c06";
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        
        let recipe = data.recipes[0];
        let title = recipe.title;
        let imageUrl = recipe.image;
        let ingredients = recipe.extendedIngredients;
        let summary = recipe.summary;
        let instructions = recipe.instructions;

        document.querySelector(".main").innerHTML = `
            <div class="blockh1">
                <h1><p class="ph1">${title}</p></h1>
            </div>
            <img src="${imageUrl}"/>
            `;

            
            document.querySelector(".summary").innerHTML = `<p>${summary}</p>`;
            document.querySelector(".instructions").innerHTML = `
            <h2>Instructions</h2>
            ${instructions}
            `;
            
            let output = '';
            
            ingredients.forEach(ingredient => {
                output += `<li>${ingredient.name}: ${ingredient.amount} ${ingredient.unit}</li>`
                
            });
            document.querySelector(".list").innerHTML = output;
    });
    
});