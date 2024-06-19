const app = Vue.createApp({
    // Data, Methods
    data() {
        return {
            url: "https://google.com",
            bookTitle: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45,
            showBooks: false,
            x: 0,
            y: 0,
            books: [
                {
                    title: "Something Something",
                    author: "Someone Someone",
                    datePublished: 2004,
                    img: "image1.jpg",
                    isFav: true,
                },
                {
                    title: "Something Something",
                    author: "Someone Someone",
                    datePublished: 2004,
                    img: "image2.jpg",
                    isFav: true,
                },
                {
                    title: "Something Something",
                    author: "Someone Someone",
                    datePublished: 2004,
                    img: "image3.jpg",
                    isFav: false,
                },
            ],
        };
    },
    methods: {
        changeTitle() {
            this.bookTitle = "New Book Name";
        },
        showData() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e) {
            console.log(e, e.type);
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
    },
    // Template
    // template: '<h1>Hello from Vue :D</h1>'
});

app.mount("#app");
