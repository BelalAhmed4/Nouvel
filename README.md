## README for Nouvil Project

### Project Overview

Nouvil is a visually engaging web project featuring a dynamic parallax scrolling effect. The webpage includes a beautifully designed header, an animated main section with various layered images, and a content section that provides a poetic description of a nocturnal journey.

### Features

- **Parallax Scrolling:** Images move at different speeds when the user scrolls, creating a depth effect.
- **Responsive Design:** The layout adapts to various screen sizes.
- **Interactive Elements:** Smooth transitions and interactive hover effects on the menu items.

### Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

### File Structure

```
project-root/
├── index.html
├── css/
│   ├── global.css
│   ├── normalize.css
│   └── style.css
├── img/
│   ├── stars1.webp
│   ├── moon2.webp
│   ├── mountains3.webp
│   ├── mountains4.webp
│   ├── river5.webp
│   ├── boat6.webp
│   └── mountains7.webp
└── script.js
```

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd project-directory
   ```
3. **Open `index.html` in your browser to view the application.**

### HTML Structure

The `index.html` file includes the main structure of the webpage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/global.css" />
  <link rel="stylesheet" href="css/style.css" />
  <title>Nouvil</title>
</head>
<body>
  <header class="flex-column">
    <h2><a class="logo" href="">Nouvil</a></h2>
    <ul class="menu flex-row">
      <li>Home</li>
      <li>Service</li>
      <li>Contact</li>
      <li>About Us</li>
    </ul>
  </header>
  <section class="main flex-column">
    <img id="stars" src="img/stars1.webp" alt="" />
    <h2 id="nouvil">Nouvil</h2>
    <img id="moon" src="img/moon2.webp" alt="" />
    <img id="mountain3" src="img/mountains3.webp" alt="" />
    <img id="mountain4" src="img/mountains4.webp" alt="" />
    <img id="river" src="img/river5.webp" alt="" />
    <img id="boat" src="img/boat6.webp" alt="" />
    <img id="mountain7" src="img/mountains7.webp" alt="" />
  </section>
  <section class="content">
    <h1>Navigating the Night :</h1>
    <p>As the soft tendrils of night unfurl...</p>
  </section>
  <script src="script.js"></script>
</body>
</html>
```

### CSS Styling

The CSS files (`global.css` and `style.css`) contain global styles and specific styles for the main content:

#### `global.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

html {
  font-size: 10px;
  scroll-behavior: smooth;
}

/* Flex and Grid systems */
.flex-row {
  display: flex;
}
.flex-column {
  display: flex;
  flex-direction: column;
}

/* Additional global styles... */
```

#### `style.css`

```css
body {
  background-color: #1d0e27;
  height: 100vh;
}

header {
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 1.1rem;
  z-index: 100;
}

.logo {
  color: #eee;
  text-decoration: none;
  font-size: 2.3rem;
}

.menu li {
  font-weight: 500;
  color: #eee;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.9rem;
  transition-duration: 0.3s;
}

.menu li:hover {
  background-color: #eee;
  color: #1d0e27;
}

.main {
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
}

.main img {
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}

#moon {
  mix-blend-mode: screen;
  transform: translateY(4rem);
}

#nouvil {
  transform: translateY(-15rem);
}

.content {
  padding: 5%;
  margin-top: 10rem;
  font-size: 1.6rem;
  color: #eee;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

### JavaScript Functionality

The `script.js` file controls the parallax effect:

```javascript
let stars = document.getElementById("stars");
let nouvil = document.getElementById("nouvil");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountain7 = document.getElementById("mountain7");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value * 2 + "px";
  moon.style.top = value * 2.5 + "px";
  mountain3.style.top = value * 0.5 + "px";
  mountain4.style.top = value * 0.5 + "px";
  mountain7.style.top = value * 0.3 + "px";
  river.style.top = value + "px";
  boat.style.top = value * 0.5 + "px";
  boat.style.left = value + "px";
  nouvil.style.fontSize = value + "px";

  if (scrollY >= 20) {
    document.querySelector(".main").style.background =
      "linear-gradient(red,blue)";
  } else {
    document.querySelector(".main").style.background = "transparent";
  }
  if (value >= 74) {
    nouvil.style.fontSize = 74 + "px";
    nouvil.style.position = "fixed";
  } else {
    nouvil.style.display = "block";
  }
  if (value >= 320) {
    nouvil.style.display = "none";
  }
  if (value >= 120) {
    document.querySelector(".main").style.background =
      "linear-gradient(to left, #376281, #10001f)";
  }
};
```

### Usage

1. **Open the web page:** View the animated effects by scrolling through the page.
2. **Menu Navigation:** Hover over menu items to see the interactive effects.

### License

This project is licensed under the MIT License.

For further details or contributions, please refer to the project repository.
