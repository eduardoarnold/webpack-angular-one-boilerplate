Lightweight scaffolding boilerplate using webpack with angular

### CLI
```sh
$ npm install
$ webpack --watch -dev # Start the webpack dev server with watch
$ nodemon # Starts the server and print listening port (open in another terminal)
$ gulp webpack:build # Lint the code and create bundle.js
$ gulp webpack:build-dev #Lint the code and create bundle.js and sourcemaps
```

### Source Structure
```cpp
- src/ // source Files
--- entry.js // webpack entry point
--- js/
- www/ // public Files
--- dist/ // public distribution files (bundles)
--- index.html // html entry point
```
