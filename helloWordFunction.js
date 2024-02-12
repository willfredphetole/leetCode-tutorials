
var createHelloWorld = function() {
    
    return function(){
        return "Hello World";
    };
 };
 const hello = createHelloWorld();
 hello();
 console.log(hello())
