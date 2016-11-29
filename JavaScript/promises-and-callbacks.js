function doSomething1(param1, param2, successCallback, errorCallback) {
    // do something
    if (param1 === param2) {
        successCallback(true);
    } else {
        errorCallback(false);
    }
}
/*
Since 1 is equal to 1 it will print out true
*/
doSomething1(1, 1, function(response) {
    console.log(response);
}, function(error) {
    console.log(error);
});


function doSomething2(param1, param2){
    // Do something
    return new Promise(function(resolve, reject){
        setTimeout(function(){ // Delay for two seconds
            if(param1===param2){
                resolve(true);
            }else{
                reject(false);
            }
        }, 2000);
    });
}

/*
Since 1 does not equal 3 it will print out false
*/
doSomething2(1, 3).then(function(response) {
    console.log(response);
}, function(error) {
    console.log(error);
});
