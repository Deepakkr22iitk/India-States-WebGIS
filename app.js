let map = L.map('map').setView([22.9734, 78.6569], 5);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Store layer reference for search
let statesLayer;
let stateData = [];

const realStateNames = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
 "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujrat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand",
  "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura",
  "Uttar Pradesh", "Uttaranchal", "West Bengal",
];

// Random dummy population generator
function getRandomPopulation() {
  return Math.floor(Math.random() * (100000000 - 1000000)) + 1000000;
}

// Load GeoJSON
fetch('data/india_states.geojson')
  .then(res => res.json())
  .then(data => {
    data.features.forEach((f, i) => {
      f.properties.st_nm = realStateNames[i] || `State ${i + 1}`;
      f.properties.population = getRandomPopulation();
    });

    stateData = data.features;

    statesLayer = L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(`<strong>${feature.properties.st_nm}</strong>`);
        feature.layerRef = layer;
      },
      style: {
        color: "#444",
        weight: 1,
        fillColor: "#69b3a2",
        fillOpacity: 0.6
      }
    }).addTo(map);

    updateSidebar();
  });

function updateSidebar() {
  const summary = document.getElementById('summary');
  const totalStates = stateData.length;

  const randomStates = [...stateData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map(s => `<li>${s.properties.st_nm} - Pop: ${s.properties.population.toLocaleString()}</li>`)
    .join('');

  summary.innerHTML = `
    <p><strong>Total States:</strong> ${totalStates}</p>
    <p><strong>Random States:</strong></p>
    <ul>${randomStates}</ul>
  `;
}

document.getElementById('searchBtn').addEventListener('click', function () {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('searchResult');

  let found = false;

  stateData.forEach(feature => {
    const stateName = feature.properties.st_nm.toLowerCase();
    if (stateName === input) {
      const bounds = L.geoJSON(feature).getBounds();
      map.fitBounds(bounds);

      resultDiv.innerHTML = `🔍 <strong>${feature.properties.st_nm}</strong><br>Population: ${feature.properties.population.toLocaleString()}`;
      found = true;
    }
  });

  if (!found) {
    resultDiv.innerHTML = "❌ State not found.";
  }
});
