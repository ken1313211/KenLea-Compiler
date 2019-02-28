const compiler = require('compile-run');
const $ = require('jquery');


$('#compileBtn').on('click', function() {
    let code = editor.get('value').trim();

    compiler.runJava(code, null, (stdout, stderr, err) => {
        if(!err && !stderr){
            $('#output').html(stdout);
        } else if (stderr) {
            $('#output').html(stderr);
        } else {
            $('#output').html(err);
        }
    });
});