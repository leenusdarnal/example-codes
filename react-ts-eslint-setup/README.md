# All commands and files to setup eslint and prettier

## 1. eslint config

```javascript
npm init @eslint/config@latest
```

## 2. adding prettier and prettier plugin for eslint

```javascript
npm i -D prettier eslint-config-prettier
```

### **eslint-config-prettier:** An ESLint configuration which disables the formatting rules in ESLint that Prettier is going to be responsible for handling, hence avoiding any clashes.

https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs

### Add below line on .eslintrc.json file

```json
    "extends": [
        ...
        "prettier"
    ],
```

```javascript
  npm run lint //lint our project
  npm run lint:fix //lint and also fix errors in our project
  npm run format //format our codes with using prettier
```

## And add these lines to the setting.json file.

```json
{
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```
