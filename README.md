# 🇮🇳 India States WebGIS Dashboard

A simple and interactive **WebGIS dashboard** built using **Leaflet.js**, displaying Indian state boundaries with search, statistics, and popup interactions. Designed to simulate a lightweight GIS experience entirely in the browser — no backend required!

---

## 🌐 Live Features

✅ Interactive map with **state boundaries**  
✅ Search bar to **find states by name**  
✅ Sidebar with:
- Total number of states
- 5 randomly listed states (with population)
✅ Popups with state names on map click  
✅ Dummy population values per state  
✅ Fully responsive layout with **clean UI**

---

## 🚀 Project Setup

### 🔧 Prerequisites
- A modern browser (Chrome, Firefox, Edge, etc.)
- VS Code with **Live Server extension** (recommended)

### 📁 Folder Structure
```
webGIS/
├── index.html
├── styles.css
├── app.js
├── data/
│   └── india_states.geojson
```

### 🛠 Steps to Run

1. **Download or clone** this project.
2. Download the latest [`india_states.geojson`](https://github.com/Subhash9325/GeoJson-Data-of-Indian-States) file and place it in the `data/` folder.
3. Open `index.html` using **Live Server** in VS Code:
   - Right-click → `Open with Live Server`
4. Search for a state like `Maharashtra`, `Kerala`, or `Punjab` in the input field.
5. Watch the map zoom to the state and display population!

---

## 🧰 Tools & Libraries Used

| Tool            | Purpose                                 |
|-----------------|------------------------------------------|
| [Leaflet.js](https://leafletjs.com/) | Interactive mapping |
| [OpenStreetMap](https://www.openstreetmap.org/) | Map tiles |
| HTML/CSS/JS     | Frontend framework                      |
| [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) | Local server to run without CORS issues |

---

## ✨ Highlights

- 📍 **GeoJSON loading**: Loads vector data for state boundaries.
- 🔍 **State search**: Zooms and highlights the selected state.
- 📊 **Dummy population values**: Assigned dynamically to each state.
- 🧠 **Custom styling**: Colorful map polygons and interactive UI.
- 📱 **Responsive design**: Works smoothly across screen sizes.

---

## 📚 What I Learned

- 📌 How to load and visualize **GeoJSON** data with Leaflet.js
- 🎯 Implementing **search functionality** with filtered map highlighting
- 🗂️ Organizing code into a maintainable structure (`app.js`, `styles.css`, etc.)
- 🎨 Crafting a responsive sidebar layout with **Flexbox/CSS**
- 🧪 Debugging common issues (CORS, MIME types, 404s, Live Server errors)

---

## 📝 Future Improvements (Ideas 💡)

- 📍 Add real population data from census API or CSV
- 🌍 Enable base map switching (e.g., satellite, terrain)
- 🧭 Add zoom controls and state boundary highlights
- 📤 Export filtered stats to CSV or PDF
- 🖼️ Add tooltip overlays on hover for quick glance info

---

## 🤝 Acknowledgements

- GeoJSON data courtesy of [Subhash9325/GeoJson-Data-of-Indian-States](https://github.com/Subhash9325/GeoJson-Data-of-Indian-States)
- Leaflet map engine: [Leaflet.js](https://leafletjs.com/)
- Tile layers from [OpenStreetMap](https://www.openstreetmap.org/)
