const apiRequests = {
    data() {
        return {
            categories: [],
        }
    }, methods: {
        getCategories() {
            fetch('http://localhost:3000/categories').then((response) => response.json())
                .then((data) => {
                    this.categories = data
                })
                .catch((error) => console.log(error));
        }, getProductsByCategory(category) {
            fetch('http://localhost:3000/products/').then((response) => response.json())
                .then((data) => this.productList = data.filter((product) =>
                    product.categories.indexOf(this.$route.params.id) > -1))
                .catch((error) => console.log(error));
        }
    }
}

export default apiRequests;