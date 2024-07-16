// API url and options
const drinksAPI = 'https://the-cocktail-db3.p.rapidapi.com';
const drink_options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '5e9f02defbmshf48f498556b1e15p1711ffjsn5649d1765dde',
      'x-rapidapi-host': 'the-cocktail-db3.p.rapidapi.com'
    }
};

// Load drink list
if (document.getElementById('drink-list')) {
    fetch(drinksAPI, drink_options)
        .then(response => response.json())
        .then(data => {
            const drinkList = document.getElementById('drink-list');
            data.forEach(drink => {
                const drinkItem = document.createElement('div');
                drinkItem.innerHTML = `
                    <h3>${drink.title}</h3>
                    <img src="${drink.image}" alt="${drink.title}">
                    <p>Svårighetsgrad: ${drink.difficulty}</p>
                    <a href="drinkinfo.html?id=${drink.id}">Mer info</a>
                `;
                drinkList.appendChild(drinkItem);
            });
        });
}

// Load drink info
if (window.location.pathname.includes('drinkinfo.html')) {
    const params = new URLSearchParams(window.location.search);
    const drinkId = params.get('id');
    fetch(`${drinksAPI}/${drinkId}`, drink_options)
        .then(response => response.json())
        .then(drink => {
            console.log(drink)
            document.getElementById('drink-title').textContent = drink.title;
            document.getElementById('drink-image').src = drink.image;
            document.getElementById('drink-description').textContent = drink.description;
            document.getElementById('drink-difficulty').textContent = drink.difficulty;
            document.getElementById('drink-portion').textContent = drink.portion;
            document.getElementById('drink-time').textContent = drink.time;
        });
}

// Load popular drinks
if (document.getElementById('popular-drinks')) {
    fetch(drinksAPI, drink_options)
        .then(response => response.json())
        .then(data => {
            const drinkList = document.getElementById('popular-drinks');
            data.slice(0, 3).forEach(drink => { // Limiting to 3 popular drinks
                const drinkItem = document.createElement('div');
                drinkItem.className = 'recipe-item';
                drinkItem.innerHTML = `
                    <h3>${drink.title}</h3>
                    <img src="${drink.image}" alt="${drink.title}">
                    <p>Svårighetsgrad: ${drink.difficulty}</p>
                    <a href="drinkinfo.html?id=${drink.id}">Mer info</a>
                `;
                drinkList.appendChild(drinkItem);
            });
        });
}