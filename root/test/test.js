var TestSuite = require('spatester').TestSuite;

var testSuite = new TestSuite("inativ-{%= name %} test", {});

Testem.useCustomAdapter(function(socket) {
    testSuite.setSocket(socket);
});

/** TODO : écrire les tests **/


document.addEventListener('DOMComponentsLoaded', function(){
    testSuite.run();
});