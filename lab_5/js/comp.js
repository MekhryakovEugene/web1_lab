Vue.component('movie-component', {
    props: ['movie', 'handler'],
    template: `
    <div>
        <h1> {{ movie.title }} </h1>
        <img :src="movie.img" width="120" />
        <br/>
        <h2> {{ movie.rating }} </h2>
        <button v-on:click="handler"> Show year </button>
    </div>
    `,
});