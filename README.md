# ☕ Kaffe

![image 6](https://github.com/VictorBravim/Kaffe/assets/122113588/5bebf963-591f-49f9-b7c1-4bb30b91622b)


## 🚀 Overview

Kaffe is a website project developed in React with Next.js, focused on presenting a fictional coffee shop with different sections such as products, company information and a contact form.

## 📋 Requirements

- Node.js
- npm ou yarn
- react-slick

## 🔧 Installation

1. Clone the Repository:
   
```
git clone https://github.com/VictorBravim/Kaffe.git
cd kaffe
```

2. Install Dependencies:
   
```
npm install
# ou
yarn install
```

3. Run the Project:
   
```
npm run dev
# ou
yarn dev
```

## 🛠️ Project Structure

- RootLayout.tsx: Defines the base layout of the site, including font imports (Montserrat), global styles (globals.css) and metadata settings.
- Page.tsx: Main component of the home page, which makes up the complete structure of the page, including navigation, hero, products, "About" section, contact section and footer.
- Nav.tsx: Site navigation, allows changing sections by clicking on buttons and visually highlights the current section.
- Hero.tsx: Image slider in the hero section of the home page, using react-slick for carousel functionality.
- Produtos.tsx: Renders a list of products with images and associated information, using static data.
- About.tsx: Presents information about different topics in content cards.
- Contact.tsx: Contact form that captures user information (name, email, message) and handles submission.
- Footer.tsx: Website footer with links to different sections and collapsible menu functionality.

## 📄 License

- This project is licensed under the [MIT License](LICENSE).
