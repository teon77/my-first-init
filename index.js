let moment = require('moment'); // require
moment().format(); 


const timeToNow = (dateArr) => {
    try {
 return moment(dateArr).fromNow();
    } catch(error) {
        console.error(error);
        console.log("You Should call the function with an array, example: ([2007, 0, 29])")
    }
}

const TimeFromAToB = (firstDateArr, secondDateArr) => {
    try {
        return moment(firstDateArr).from(moment(secondDateArr));
    } catch (error) {
        console.error(error);
        console.log("You Should call the function with two arrays, example: ([2007, 0, 28], [2007, 0, 29])")
    }
}

