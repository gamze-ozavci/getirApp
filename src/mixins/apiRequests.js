import axios from 'axios';

const apiRequests = {
    methods: {
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