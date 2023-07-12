function moves(input) {
    // class movie {
    //     constructor(name,date,director) {
    //         this.name= name;
    //         this.date = date;
    //         this.director = director;
    //     }
    // }

    let moviesArr = [];
    for (const moviesArrElement of input) {
        if (moviesArrElement.includes("addMovie")) {
            // moviesArr.push(new movie(moviesArrElement.replace("addMovie ", "")));
            const [_, name] = moviesArrElement.split("addMovie ");
            moviesArr.push({
                name
            })

        } else if (moviesArrElement.includes("directedBy")) {
            const [movieName, dictorName] = moviesArrElement.split(" directedBy ");
            const movie = moviesArr.find(m => m.name === movieName);
            if (movie) {
                movie.director = dictorName;
            }
        } else if (moviesArrElement.includes("onDate")) {
            const [movieName, movieDate] = moviesArrElement.split(" onDate ");
            const movie = moviesArr.find(m => m.name === movieName);
            if (movie) {
                movie.date = movieDate;
            }

        }
    }

    moviesArr
        .filter(movie => movie.name && movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}


moves(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);
moves(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo']);