// Main app js pymecore UI
const url = "http://localhost:8080/";

const app = new Vue({
    el: '#app',
    data: {
        message: []
    },
    mounted() {
        axios.get(url)
            .then(response => {
                this.message = response.data.message;
            })
            .catch(error => {
                    console.log(error);
            })
    }
});