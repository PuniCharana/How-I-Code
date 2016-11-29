var qwerty = {
    test1: null,
    test2: 'somestring',
    test3: 3,
    test4: {},
    test5: {
        foo: "bar"
    },
    test6: "",
    test7: undefined,
    test8: " ",
	test9: true,
	test10: [],
	test11: ["77","88"],
	test12: {
		foo: "foo",
		bar: {
			foo: "q",
			bar: {
				foo:4,
				bar:{}
			}
		},
		bob: {}
	}
}

var asdfg = [,,"", " ", "yyyy", 78, null, undefined,true, {}, {x:6}, [], [2,3,5]];

function clean_data(obj) {
    for (var key in obj) {
        // Delete null, undefined, "", " "
        if (obj[key] === null || obj[key] === undefined || obj[key] === "" || obj[key] === " ") {
            delete obj[key];
        }
        // Delete empty object
		// Note : typeof Array is also object
        if (typeof obj[key] === 'object' && Object.keys(obj[key]).length <= 0) {
            delete obj[key];
        }
		// If object call function again
		if(typeof obj[key] === 'object'){
			clean_data(obj[key]);
		}
    }
	return obj;
}

var objData = clean_data(qwerty);
console.log(objData);
/*
**********************************************
				OUTPUT
**********************************************
{
    test2: 'somestring',
    test3: 3,
    test5: {
        foo: "bar"
    },
	test9: true,
	test11: ["77","88"],
	test12: {
		foo: "foo",
		bar: {
			foo: "q",
			bar: {
				foo:4,
			}
		}
	}
}

*/

var arrayData = clean_data(asdfg);
console.log(arrayData);
/*
**********************************************
				OUTPUT
**********************************************

[yyyy", 78, true, {x:6}, [2,3,5]]

*/

