const moment = require('moment');

var date = moment();
date.add(100, 'year').subtract(100, 'year');
console.log(date.format('MMM do, YYYY h:mm a'));

console.log(moment().valueOf());
