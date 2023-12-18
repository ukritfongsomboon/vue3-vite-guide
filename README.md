# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# Setup Config Module

## 1 Statup Port

vite.config.ts

```javascript
export default defineConfig({
   ...
   server : {
     port : 8080
   },
   ...
})

```

## 2 Set './src' to '@' path

```javascript
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    ...
    resolve : {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    ...
})
```

หากพบ Error "Cannot find name '\_\_dirname'" หรือ "Cannot find module 'path' or its corresponding type declarations." ให้แก้ดังต่อไปนี้

### FIX Problem [Reference](https://bobbyhadz.com/blog/typescript-export-interface)

-   install @types/node

```npm
npm i -D @types/node
```

-   Add typing in "tsconfig.json"

```javascript
{
  ...
  "types": [
      "node"
  ]
  ...
}
```

หากพบ Error "Cannot find module '@/xxxxxx.ts' or its corresponding type declarations."

### FIX Problem [Reference](https://stackoverflow.com/questions/54839057/vscode-showing-cannot-find-module-ts-error-for-vue-import-while-compiling-doe)

-   Add typing in "tsconfig.json"

```typescript
{
  "compilerOptions": {
    /* other configs */
    "paths": {
      "@/*": [
        "./src/*" // set path `@/*` as alias of `src/*`
      ]
    },
    /* other configs */
  }
}
```

## 3 Vue Router

```javascript

```

## 4 Axios

```javascript

```

## 5 Pinia

```javascript

```
