const moviesApp = new Vue({
    el: '#moviesApp',
    data: {
        movies: [
            { 
                id: 1, title: 'Terminator', year: 1984, rating: 8.1,
                img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/ca/Terminator_poster.jpg/204px-Terminator_poster.jpg'
            },
            { 
                id: 2, title: 'Terminator 2', year: 1991, rating: 8.2,
                img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/85/Terminator2poster.jpg/201px-Terminator2poster.jpg'
            },
            { 
                id: 3, title: 'Terminator 3', year: 2003, rating: 6.1,
                img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/73/Terminator_3_Rise_of_the_Machines.jpg/250px-Terminator_3_Rise_of_the_Machines.jpg' 
            },
			{ 
                id: 4, title: 'Terminator Genisys', year: 2015, rating: 5.5,
                img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Terminator_Genisys.JPG/220px-Terminator_Genisys.JPG' 
            },
        ],
    },
    methods: {
        showYear: function(index) {
            alert(`year: ${this.movies[index].year}`);
        },
    },
});