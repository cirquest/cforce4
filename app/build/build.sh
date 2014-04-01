r.js -o app/build/app.build.js
cd dist
rm -rf data/js/bower_components/backbone-amd data/js/bower_components/underscore-amd data/js/bower_components/jquery data/js/bower_components/requirejs-text
rm -rf data/js/templates
rm -rf data/js/bower_components/requirejs/.bower.json data/js/bower_components/requirejs/bower.json data/js/bower_components/requirejs/README.md
rm -rf data/css/cforce.css data/css/reset.css
rm -rf build build.txt data/js/views data/js/collections data/js/models