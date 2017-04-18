function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    }).filter(function (e, i, c) { // extra step to remove duplicates
        return c.indexOf(e) === i;
    });
}

//var arr1 = ["mike", "sue", "tom", "kathy", "henry"];
//var arr2 = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"];

var arr1 = ['sue', 'sue', 'kathy'];
var arr2 = ['kathy', 'kathy', 'sue'];
console.log(intersect(arr1, arr2)); // ["sue", "kathy"]
