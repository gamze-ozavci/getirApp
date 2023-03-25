import axios from 'axios';

const apiRequests = {
    methods: {
        async getCategories() {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:3000/categories'
                }).then(apiResponse => apiResponse.data);

                return response;
            } catch (error) {
                throw error;
            }
        },
        async getProductsByCategory(category) {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:3000/products'
                }).then(apiResponse => {
                    const products = apiResponse.data.filter((product) =>
                        product.categories.indexOf(category) > -1);

                    return products;
                });

                return response;
            } catch (error) {
                throw error;
            }
        },
        async getProductById(id) {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:3000/products'
                }).then(apiResponse => {
                    let product = apiResponse.data.filter((product) => {
                        return product.id === Number(id);
                    });

                    return product[0];
                });

                return response;
            } catch (error) {
                throw error;
            }
        },
        async getProductsInBasket() {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:3000/baskets/'
                }).then(apiResponse => apiResponse.data);

                return response;
            } catch (error) {
                throw error;
            }
        },
        async getProductInBasket(productId) {
            const productsInBasket = await this.getProductsInBasket(productId);
            const productData = productsInBasket.filter((product) => {
                return product.id === Number(productId);
            })[0];

            return productData;
        },
        async addProductToBasket(productId) {
            const addedProduct = await this.getProductById(productId);

            axios.post("http://localhost:3000/baskets", addedProduct)
                .then(response => response)
                .catch(error => {
                    console.error("There was an error!", error);
            });
        },
        async increaseProductQuantity(productId) {
            try {
                const productData = await this.getProductInBasket(productId);

                productData.quantity = productData.quantity + 1;

                await axios({
                    method: 'put',
                    url: 'http://localhost:3000/baskets/' + productId,
                    data: productData
                });

                return productData.quantity;
            } catch (error) {
                if (error.response.status === 404) {
                    console.log('Resource could not be found!');
                } else {
                    console.log(error.message);
                }
            }
        },
        async decreaseProductQuantity(productId) {
            try {
                const productData = await this.getProductInBasket(productId);

                if (productData.quantity > 0) {
                    productData.quantity = productData.quantity - 1;

                    await axios({
                        method: 'put',
                        url: 'http://localhost:3000/baskets/' + productId,
                        data: productData
                    });
                } else {
                    await this.removeProductInBasket(productId);
                }

                return productData.quantity;
            } catch (error) {
                if (error.response.status === 404) {
                    console.log('Resource could not be found!');
                } else {
                    console.log(error.message);
                }
            }
        },
        async removeProductInBasket(productId) {
            try {
                await axios({
                    method: 'delete',
                    url: 'http://localhost:3000/baskets/' + productId
                });
            } catch (error) {
                if (error.response.status === 404) {
                    console.log('Cannot remove item!');
                } else {
                    console.log(error.message);
                }
            }
        }
    }
}

export default apiRequests;