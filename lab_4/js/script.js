const firstApp = new Vue({
    el: '#firstApp',
    data: {
        message: 'Hello, Vue!',
        dateStr: new Date().toLocaleString(),
    },
});

const secondApp = new Vue({
    el: '#secondApp',
    data: {
        txt: 'You can see me!',
        caption: 'hide',
        visible: true,
    },
    methods: {
        handler: function() {
            this.visible = !this.visible;
            if (this.visible)
                this.caption = 'hide';
            else
                this.caption = 'show';
        },
    },
});

const thirdApp = new Vue({
    el: '#thirdApp',
    data: {
        todos: [
            'learn JavaScript',
            'learn Vue.js',
            'learn React',
        ],
        caption: 'pop one',
    },
    methods: {
        handler: function() {
            this.todos.pop();
        },
    },
});