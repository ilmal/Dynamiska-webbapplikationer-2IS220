// API url and options
const foodsAPI = 'https://chinese-food-db.p.rapidapi.com';
const food_options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '5e9f02defbmshf48f498556b1e15p1711ffjsn5649d1765dde',
    'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
  }
};

// Load food list
if (document.getElementById('food-list')) {
    fetch(foodsAPI, food_options)
        .then(response => response.json())
        .then(data => {
            const foodList = document.getElementById('food-list');
            data.forEach(food => {
                const foodItem = document.createElement('div');
                foodItem.innerHTML = `
                    <h3>${food.title}</h3>
                    <img src="${food.image}" alt="${food.title}">
                    <p>Svårighetsgrad: ${food.difficulty}</p>
                    <a href="foodinfo.html?id=${food.id}">Mer info</a>
                `;
                foodList.appendChild(foodItem);
            });
        });
}

// Load food info
if (window.location.pathname.includes('foodinfo.html')) {
    const params = new URLSearchParams(window.location.search);
    const foodId = params.get('id');

    fetch(`${foodsAPI}/${foodId}`, food_options)
        .then(response => response.json())
        .then(food => {
            console.log("FOOD: ", food)
            document.getElementById('food-title').textContent = food.title;
            document.getElementById('food-image').src = food.image;
            document.getElementById('food-description').textContent = food.description;
            document.getElementById('food-difficulty').textContent = food.difficulty;
            document.getElementById('food-portion').textContent = food.portion;
            document.getElementById('food-time').textContent = food.time;
            
            const ingredientsList = document.getElementById('food-ingredients');
            food.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
        });
}

// Load popular foods
if (document.getElementById('popular-foods')) {
    fetch(foodsAPI, food_options)
        .then(response => response.json())
        .then(data => {
            const foodList = document.getElementById('popular-foods');
            data.slice(0, 3).forEach(food => { // Limiting to 3 popular foods
                const foodItem = document.createElement('div');
                foodItem.className = 'recipe-item';
                foodItem.innerHTML = `
                    <h3>${food.title}</h3>
                    <img src="${food.image}" alt="${food.title}">
                    <p>Svårighetsgrad: ${food.difficulty}</p>
                    <a href="foodinfo.html?id=${food.id}">Mer info</a>
                `;
                foodList.appendChild(foodItem);
            });
        });
}
