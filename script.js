const API_BASE_URL = "http://localhost:3000"; // Replace with your actual API base URL

// Fetch all cities
async function fetchCities() {
    const response = await fetch(`${API_BASE_URL}/cities`);
    return await response.json();
}

// Fetch places for a specific city
async function fetchCityPlaces(cityId) {
    const response = await fetch(`${API_BASE_URL}/cities/${cityId}/places`);
    return await response.json();
}

// Fetch all types
async function fetchTypes() {
    const response = await fetch(`${API_BASE_URL}/types`);
    return await response.json();
}

// Fetch a specific place by ID
async function fetchPlace(placeId) {
    const response = await fetch(`${API_BASE_URL}/places/${placeId}`);
    return await response.json();
}

// Fetch comments for a specific place
async function fetchPlaceComments(placeId) {
    const response = await fetch(`${API_BASE_URL}/places/${placeId}/comments`);
    return await response.json();
}

// Fetch the rating for a specific place
async function fetchPlaceRating(placeId) {
    const response = await fetch(`${API_BASE_URL}/places/${placeId}/rating`);
    return await response.json();
}
const citiesDiv = document.querySelector("#mesta")
async function AddCitites() {
    try {
      const cities = await fetchCities();
      cities.forEach(city => {
        const card = document.createElement("div");
        card.className = "city-card";
  
        const img = document.createElement("img");
        img.src = "./pictures/download.jfif";
        img.className = "city-image";
  
        const name = document.createElement("div");
        name.className = "city-name";
        name.innerHTML = city.name;
  
        // On click, show city places below
        card.addEventListener("click", () => {
            const placesDiv = document.querySelector("#places");
            placesDiv.innerHTML = ""; // clear previous
          
            if (Array.isArray(city.places) && city.places.length > 0) {
              city.places.forEach(place => {
                const placeCard = document.createElement("div");
                placeCard.className = "place-card";
          
                const img = document.createElement("img");
                img.src = place.imageUrl || "./pictures/eifel.jfif"; // ✅ use real or fallback image
                img.alt = place.name;
                img.className = "place-image";
          
                const name = document.createElement("div");
                name.innerText = place.name;
                name.className = "place-name";
          
                placeCard.appendChild(img);
                placeCard.appendChild(name);
                placesDiv.appendChild(placeCard);
              });
            } else {
              placesDiv.innerHTML = "<div class='place-card'>No places available</div>";
            }
          });
  
        card.appendChild(img);
        card.appendChild(name);
        citiesDiv.appendChild(card);
      });
    } catch (err) {
      console.error("Error loading cities:", err);
    }
  }
  
  AddCitites();




/* Example usage
async function Zmrd(){
    try {
        const cities = await fetchCities();
        console.log("Cities:", cities);

        const cityPlaces = await fetchCityPlaces(1); // Replace 1 with the desired city ID
        console.log("City Places:", cityPlaces);

        const types = await fetchTypes();
        console.log("Types:", types);

        const place = await fetchPlace(1); // Replace 1 with the desired place ID
        console.log("Place:", place);

        const comments = await fetchPlaceComments(1); // Replace 1 with the desired place ID
        console.log("Comments:", comments);

        const rating = await fetchPlaceRating(1); // Replace 1 with the desired place ID
        console.log("Rating:", rating);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

 Zmrd();
*/

