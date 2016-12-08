/*
-----------------------------------------------------------------------
    SYNCHRONOUS LOOP JavaScript
-----------------------------------------------------------------------
*/

// Example 1
// Complete separation of logic and result

function doSomething(param1, param2) {
    return new Promise(function(resolve, reject) {
        // Logic
        if (!param1 || !param2) {
            reject("error");
        }
        // Delay for two seconds
        setTimeout(function() {
            if (param1 === param2) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 2000);
    });
}
var i = 0,
    list = [
        { x: 2, y: 3 },
        { x: 5, y: 3 },
        { x: 4, y: 4 },
        { x: 7, y: null },
        { x: 9, y: 4 },
        { x: 0, y: 0 }
    ];

function compare(list) {
    doSomething(list[i].x, list[i].y).then(function(response) {
        // Result
        console.log(response);
        i++;
        if (i < list.length) {
            compare(list);
        }
    }, function(error) {
        console.log(error);
    });
}
compare(list);


// Example 2
// Logic and result in same block
// http://stackoverflow.com/questions/4288759/asynchronous-for-cycle-in-javascript/34195936#34195936

function asyncEach(iterableList, callback, done) {
    var i = -1,
        length = iterableList.length;

    function loop() {
        i++;
        if (i === length) {
            done();
            return;
        }
        callback(iterableList[i], loop);
    }
    loop();
}

var foo = [
    { name: 'Tom' },
    { name: 'John' },
    { name: 'Jerry' },
    { name: 'Alice' },
    { name: 'Bob' }
];
asyncEach(foo, function(item, callback) {
    setTimeout(function() {
        // logic
        // result
        console.log('Iteration ' + item.name);
        callback();
    }, 1500);
}, function() {
    console.log('All done!');
});
