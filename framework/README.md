![Stryda CSS Framework](https://res.cloudinary.com/gloot/image/upload/v1673531083/Stryda/logos/stryda-logo-dark-png.png)

👉 A **CSS Framework** built on [Tailwind CSS](https://www.npmjs.com/package/tailwindcss) to bring consistency and speed to **Stryda products**.

------

## Documentation

For full documentation, visit [stryda.netlify.app](https://stryda.netlify.app/).

## Using the framework

### 1. Install tailwindcss

Install tailwindcss and its peer dependencies via npm.

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 2. Install the framework

Install @g-loot/css-framework via npm.

```bash
npm install @g-loot/css-framework
```

### 3. Import the css

Import the Framework CSS into your project stylesheet.

```css
@import '@g-loot/css-framework/styles/globals.css';
```

### 4. Adapt webpack config.

Add postcss-loader to webpack.config.js.

```js
module: {
  rules: [
    {
      test: /\.(css)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }
  ]
}
```

### 5. Import and adapt tailwind config.

Import the framework config into your project tailwind.config.js and indicate which files Tailwind should scan.

```js
const tailwindConfig = require('@g-loot/css-framework/tailwind.config');
module.exports = {
  ...tailwindConfig,
  content: [
    "./pages/*.{js,ts,jsx,tsx,json}",
  ],
};
```

### Example repository

Check [this example setup](https://stackblitz.com/edit/stryda) of the Stryda Framework and Tailwind CSS on React (webpack).

## That's it!

Your projects can now consume the Stryda theme and components. ✨

