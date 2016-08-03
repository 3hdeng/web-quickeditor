rm "gulp-sass": "~1.1.0" from package.json
  
"gulp": "~3.8.10" --> "gulp": "~3.9.1"


rm gulp-sass from local node_modules
$ npm install -g gulp-sass  # install global gulp-sass
$ npm install gulp-sass    # just cp the global gulp-sass to local


xxx $ npm install gulp

//=== gulpfile.js
why
require('require-dir')('./gulp');


npm install gulp-sass --save-dev

//===
gulp/server.js
browserSync.init()
{
    server :{},
    middleware: ...,
    port:8080
}
