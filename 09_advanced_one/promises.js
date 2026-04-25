//fetch('https://google.com').then().catch().finally()
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography related , network 

    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000)
})  

promiseOne.then(function(){     // then-- connection wth resolve
    console.log("Promise consumed");
}); 