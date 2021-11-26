const movies = require('./movies.json');

/**
 * The @returns tag documents the value that a function returns, in this case an array.
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * The @param tag requires you to specify the name of the parameter you are documenting, the parameter's type
 * (enclosed in curly brackets) and a description of the parameter.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();