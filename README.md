![Stryda CSS Framework](https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg)

# Stryda CSS Framework

A [next.js](https://nextjs.org/) project for building the [css-framework library](https://www.npmjs.com/package/@g-loot/css-framework), creating functional prototypes and hosting our brand guidelines.

The Stryda CSS Framework is a centralised front-end design system that allows any developer to quickly build pages that are **consistent** with the Stryda brand and its user interface system.

Based on the utility-first framework  [Tailwind CSS](https://tailwindcss.com/), the Stryda CSS Framework provides **pre-defined components** listed as well as highly composable, low-level **utility classes** to build complex user interfaces with speed in mind.

The main purpose of this repository is to create and maintain the various **css files** and the **tailwind theme** that are consumed by the various Stryda products.

## Getting started

Download the repository then...

Run this command in the root folder:
```bash
$ npm install --legacy-peer-deps
$ npm run dev
```

## How to use (How to use the project) (optional)

Provide instructions and examples so users/contributors can use the project. This will make it easy for them in case they encounter a problem – they will always have a place to reference what is expected. Also include info about various scripts, testing strategy etc
## Pushing a new version

When a push is made on the main branch, **the library is automatically updated** on both:

- [Github packages](https://github.com/g-loot/css-framework/packages/1521083) (for internal use)
- [npmjs](https://www.npmjs.com/package/@g-loot/css-framework) (for easy access by the UXs and UIs on tools such as [Stackblitz](https://stackblitz.com/edit/gloot-framework))

⚠️ If by pushing to main you wish to update the update the library, make sure you **update its version** on /framework/package.json

```json
{ 	
  "name": "@g-loot/css-framework", 
  "version": "👉{version to update}👈"
}
```

## Other purposes

This repository serves other purposes:

 - This is where the CSS Framework is put to the test and **improved**.
 - This is where **prototypes** are created to test out new features and updates.
 - This is home to our **branding guidelines** and **assets**. 

------

### For more info on how to use the framework, please read the [package readme](https://www.npmjs.com/package/@g-loot/css-framework) 
