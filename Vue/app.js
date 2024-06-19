const app = Vue.createApp({
    // Data, Functions
    data() {
        return {
            bookTitle: 'The Final Empire',
            author: "Brandon Sanderson",
            age: 45,
            
        }
    }
    // Template
    // template: '<h1>Hello from Vue :D</h1>'
})

app.mount('#app')