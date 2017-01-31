// Regular expression to find links in a given string
// http://regexr.com/37i6s
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ligula laoreet, gravida mi nec, venenatis mauris. http://www.charana.co.in Suspendisse facilisis dui non leo cursus faucibus. Curabitur commodo felis tellus, ut ultricies massa tempor eu."

var patt = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var result = patt.exec(str);

console.log(result);


/*

https://google.com
http://www.cool.com.au
http://www.cool.com.au/ersdfs
http://www.cool.com.au/ersdfs?dfd=dfgd@s=1
http://www.cool.com/index.html

*/
