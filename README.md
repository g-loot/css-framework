
![G-Loot CSS Framework](https://res.cloudinary.com/gloot/image/upload/v1657002851/Marketing/2022_prototype/G-Loot_Framework_logo.svg)

✨ A repo for building the [css-framework library](https://www.npmjs.com/package/@g-loot/css-framework), creating functional prototypes and hosting our brand guidelines.

------

## About the library

The G-Loot CSS Framework is a centralised front-end design system that allows any developer to quickly build pages that are **consistent** with the G-Loot brand and its user interface system.

Based on the utility-first framework  [Tailwind CSS](https://tailwindcss.com/), the G-Loot CSS Framework provides **pre-defined components** listed as well as highly composable, low-level **utility classes** to build complex user interfaces with speed in mind.

The main purpose of this repository is to create and maintain the various **css files** and the **tailwind theme** that are consumed by the various G-Loot products. 

## Pushing a new version

When a push is made on the main branch, **the library is automatically updated** on both:

- [Github packages](https://github.com/g-loot/css-framework/packages/1521083) (for internal use)
- [npmjs](https://www.npmjs.com/package/@g-loot/css-framework) (for easy access by the UXs and UIs on tools such as [Stackblitz](https://stackblitz.com/edit/gloot-framework))

⚠️ Before you push on main, make sure you **update the library version** on /framework/package.json

```json
{ 	
  "name": "@g-loot/css-framework", 
  "version": "👉{version to update}👈", 
  "dependencies": {} 
}
```

## Other purposes

This repository serves other purposes:

 - This is where the CSS Framework is put to the test and **improved**.
 - This is where **prototypes** are created to test out new features and updates.
 - This is home to our **branding guidelines** and **assets**. 

------

### For more info on how to use the framework, please read the [package readme](https://www.npmjs.com/package/@g-loot/css-framework) 