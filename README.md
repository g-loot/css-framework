![G-Loot CSS Framework](https://res.cloudinary.com/gloot/image/upload/v1657002851/Marketing/2022_prototype/G-Loot_Framework_logo.svg)

A CSS Framework built on Tailwind CSS to bring consistency and speed to G-Loot products.

------

## Documentation

For full documentation, visit [gloot-framework.netlify.app](https://gloot-framework.netlify.app/).

## Using the framework

### 1. Install tailwindcss

Install tailwindcss and its peer dependencies via npm.

```bash
npm install -D tailwindcss postcss autoprefixer tailwindcss-animation-delay
```

### 2. Install the framework

Install @augustin_hiebel/gloot-framework (temporary name) via npm.

```bash
npm install @augustin_hiebel/gloot-framework
```

### 3. Import the css

Import the Framework CSS into your project stylesheet.

```css
@import '@augustin_hiebel/gloot-framework/styles/globals.css';
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
const tailwindConfig = require('@augustin_hiebel/gloot-framework/tailwind.config');
module.exports = {
  ...tailwindConfig,
  content: [
    "./pages/*.{js,ts,jsx,tsx,json}",
  ],
};
```

## That's it, your projects can now use the G-Loot theme and components.