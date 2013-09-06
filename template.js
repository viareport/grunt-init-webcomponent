'use strict';


// module dependencies
var join = require("path").join;

exports.description = 'Créer un webcomponent Inativ ';
exports.after = 'Jobs done ! Il ne vous reste plus qu\'à créer le projet sur github et pusher.';

exports.template = function(grunt, init, done) {

  init.process({type: 'jquery'}, [
    // Prompt for these values.
    init.prompt('name', 'Nom du webcomponent (sans inativ-, ex: x-monwebcomponent)'),
    init.prompt('description', 'Un chose qui fait ceci et cela.'),
  ], function(err, props) {
    
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    grunt.file.mkdir( join(init.destpath(), 'dist') );
    grunt.file.mkdir( join(init.destpath(), 'test-result') );

    // All done!
    done();
  });

};