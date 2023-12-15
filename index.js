

function receivesAFunction(callback){

    callback();
}

function callthecallback(){
    console.log('Call my callback');
}

receivesAFunction(callthecallback);


function returnsANamedFunction() {

    function newFunction() {
      console.log('I am a named function');
    }
  
    return newFunction;
  }
  
  const myFunction = returnsANamedFunction();
  myFunction(); 
  

  function returnsAnAnonymousFunction(){
    return function(){
        return `Return Anonymous Function`
    }
  }

  const anonymousfunction=returnsAnAnonymousFunction();
  console.log(anonymousfunction());