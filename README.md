# 🌍 Planet Fact – React + Tailwind CSS

Planet Fact is a visually engaging and responsive frontend project that presents detailed facts about the planets in our solar system. Built with **React**, **Vite**, and **Tailwind CSS**, this project is fully interactive and includes smooth transitions, animations, and a clean component structure.

---

## 🚀 Features

- 🌐 Planet facts: rotation time, revolution time, radius, average temperature
- 🪐 Toggle between Overview, Internal Structure, and Surface Geology views
- 📱 Fully responsive layout
- 🎨 Planet-specific theme colors
- ⚛️ Built with reusable components and clean folder structure
- 🌀 Smooth transitions and image animations
- 🌑 Dark-mode friendly design

---

## 🛠️ Technologies Used

- **React** (via Vite) – UI framework
- **Tailwind CSS** – utility-first CSS styling
- **Custom Assets** – SVG & PNG images for planet visuals
- **Modular Components** – for cards, layout, text, and more

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Koxone/Planet-Fact-React-Tailwind.git
   cd Planet-Fact-React-Tailwind
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🧩 Folder Structure

```
src/
├── assets/
│   ├── fonts/
│   └── images/
├── components/
│   ├── cards/
│   ├── containers/
│   ├── header/
│   └── text/
├── App.jsx
├── main.jsx
├── index.css
```

---

## 🖼️ Image Assets

- `planet-<name>.svg`: base images
- `planet-<name>-internal.svg`: internal view images
- `geology-<name>.png`: surface geology overlay images

Make sure your `<planet>` variable is lowercased to match the filenames, e.g.:

```js
src={`/src/assets/images/planet-${planet}.svg`}
```

---

## ✨ Credits

Developed by [Koxone](https://github.com/Koxone).

---

## 📄 License

This project is licensed under the MIT License.
