# Webaverse Character Studio
An open, collaborative and evolving 3D avatar studio for the open metaverse.

## Quick Start
```bash
# Clone the repo and change directory into it
git clone https://github.com/webaverse-studios/CharacterCreator
cd CharacterCreator

# Install dependencies with legacy peer deps flag to ignore React errors
npm install --legacy-peer-deps
npm run dev

# Or use yarn
yarn install
yarn run dev
```

## Using as an npm package

The project is published to npm under the name `@ashon/charactercreator`.
Install it in your own React project with:

```bash
npm install @ashon/charactercreator
# or
yarn add @ashon/charactercreator
```

The package exports a `CharacterCreator` React component containing the full avatar editor as well as several context helpers:

```javascript
import { CharacterCreator, SceneContext, ViewContext } from '@ashon/charactercreator'

function MyApp() {
  return <CharacterCreator />
}
```

- **CharacterCreator** – renders the entire character creator interface.
- **SceneContext** – access the Three.js scene and avatar options.
- **ViewContext** – control which view (create, load, appearance, etc.) is active.

All required assets are bundled with the package. After building your application, the character creator will appear wherever the component is rendered.

