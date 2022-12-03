// practice 10
const fetchData = async (searchText) => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
  );
  const data = await res.json();
  displayData(data.drinks);
};
const displayData = (drinks) => {
  const drinksContainer = document.getElementById("drinks-container");
  drinksContainer.innerText = "";
  drinks.forEach((drink) => {
    // console.log(drink)
    const drinksDiv = document.createElement("div");
    drinksDiv.classList.add("col");
    drinksDiv.innerHTML = `
      <div class="card">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class ="mb-1">Cetagory : ${drink.strCategory}</p>
          <p>Ingredients : ${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3}</p>
          <button onclick="loadDetails(${drink.idDrink})" class="btn btn-warning fw-bold text-black-50 "  data-bs-toggle="modal" data-bs-target="#drinksDetails">Details</button>
        </div>
      </div>
    `;
    drinksContainer.appendChild(drinksDiv);
  });
  spinner(false);
};
// search functionality
const searchFunction = () => {
  spinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  fetchData(searchText);
};
// enter key activate
const searchField = document.getElementById("search-field");
searchField.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    searchFunction();
  }
})
// Details button funtionality
const loadDetails = (id) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.drinks[0]));
};

const displayDetails = (drink) => {
  const title = document.getElementById("title");
  title.innerText = `Name : ${drink.strDrink}`;
  const body = document.getElementById("body");
  body.innerHTML = `
    <img src="${drink.strDrinkThumb}"  class="img-fluid" alt="...">
    <p class ="mb-1 mt-4">Type : ${drink.strAlcoholic}</p>
    <p>Quantity : ${drink.strGlass}</p>
    <p>Making Procrss : ${drink.strInstructions}</p>
    `;
};

// loader or spinner
const spinner = isLoading => {
  const spinner = document.getElementById('spinner');
  if (isLoading) {
    spinner.classList.remove('d-none')
  }
  else {
    spinner.classList.add('d-none')
  }
}
// fetchData("a");
