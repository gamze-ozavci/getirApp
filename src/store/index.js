import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            {
                "id": 3,
                "name": "Elidor Güçlü ve Parlak",
                "categories": [
                    "Kişisel Bakım"
                ],
                "image": "https://cdn.getir.com/product/5ce65821fd9b330001c4a987_76c0c649-4e30-46ad-b22c-987d308e5748.jpeg",
                "price": 25.9,
                "originalPrice": 32.5,
                "quantity": 1
            },
            {
                "id": 4,
                "name": "Nogger Paketi",
                "categories": [
                    "Dondurma"
                ],
                "image": "https://cdn.getir.com/product/62e251a9316441a5a5928aff_tr_1659692215906.jpeg",
                "price": 49,
                "originalPrice": 60,
                "quantity": 1
            },
            {
                "id": 5,
                "name": "Erikli",
                "categories": [
                    "Su & İçecek"
                ],
                "image": "https://cdn.getir.com/product/5fbce44d7d580fc3304aee67_tr_1663337670673.jpeg",
                "price": 31.1,
                "originalPrice": 38.8,
                "quantity": 1
            },
            {
                "id": 6,
                "name": "Colgate Zig Zag Charcoal",
                "categories": [
                    "Kişisel Bakım"
                ],
                "image": "https://cdn.getir.com/product/5e936403f9f1a4e80b11e5aa_tr_1605687129209.png",
                "price": 43.99,
                "originalPrice": 43.99,
                "quantity": 1
            },
            {
                "id": 7,
                "name": "Sleepy Natural 2 Beden",
                "categories": [
                    "Bebek"
                ],
                "image": "https://cdn.getir.com/product/5ceae037c461e70001cc97f8_tr_1560255462225.jpeg",
                "price": 12,
                "originalPrice": 19,
                "quantity": 1
            },
            {
                "id": 8,
                "name": "Whiskas 1 Yaş Üstü Sığır Etli",
                "categories": [
                    "Evcil Hayvan"
                ],
                "image": "https://cdn.getir.com/product/55983faab1dc700c006a724d_tr_1601931914145.jpeg",
                "price": 41.5,
                "originalPrice": 55,
                "quantity": 1
            },
            {
                "id": 9,
                "name": "Cumhuriyet Gazetesi",
                "categories": [
                    "Ev & Yaşam"
                ],
                "image": "https://cdn.getir.com/product/5ea824181dbe2b58f152951f_tr_1588244080645.jpeg",
                "price": 6,
                "originalPrice": 6,
                "quantity": 1
            },
            {
                "id": 10,
                "name": "Metaltex Jolly Şişe Açacağı",
                "categories": [
                    "Ev & Yaşam"
                ],
                "image": "https://cdn.getir.com/product/5ceae037c461e70001cc97f8_tr_1560255462225.jpeg",
                "price": 23.5,
                "originalPrice": 23.5,
                "quantity": 1
            },
            {
                "id": 11,
                "name": "Coca-Cola Zero Sugar",
                "categories": [
                    "Su & İçecek"
                ],
                "image": "https://market-product-images-cdn.getirapi.com/product/57ebcb84-6a39-44bd-87d4-45fb638b7e9b.jpg",
                "price": 62.5,
                "originalPrice": 62.5,
                "quantity": 1
            },
            {
                "id": 12,
                "name": "Ice Dream Antep Fıstıklı",
                "categories": [
                    "Dondurma"
                ],
                "images": "https://market-product-images-cdn.getirapi.com/product/5aadcf13-2a90-4178-b626-74ddf0e96115.jpg",
                "price": 40,
                "originalPrice": 40,
                "quantity": 1
            }
        ],
        baskets: [
            {
                "id": 6,
                "name": "Colgate Zig Zag Charcoal",
                "categories": [
                    "Kişisel Bakım"
                ],
                "image": "https://cdn.getir.com/product/5e936403f9f1a4e80b11e5aa_tr_1605687129209.png",
                "price": 43.99,
                "originalPrice": 43.99,
                "quantity": 5
            }
        ],
        categories: [
            {
                "id": "kisiselBakim",
                "name": "Kişisel Bakım",
                "image": "https://market-product-images-cdn.getirapi.com/category/d7b76064-6334-43a4-aafe-ace887ec2da6.jpeg"
            },
            {
                "id": "evYasam",
                "name": "Ev & Yaşam",
                "image": "https://market-product-images-cdn.getirapi.com/category/d737c0bd-538c-486c-9485-46aff62856d1.jpeg"
            },
            {
                "id": "suIcecek",
                "name": "Su & İçecek",
                "image": "https://market-product-images-cdn.getirapi.com/category/f66f92ea-f680-4dd4-808b-8f8a71709a86.jpeg"
            },
            {
                "id": "meyveSebze",
                "name": "Meyve & Sebze",
                "image": "https://market-product-images-cdn.getirapi.com/category/d43a0396-b588-4666-ac43-af4b3159fee2.jpeg"
            },
            {
                "id": "dondurma",
                "name": "Dondurma",
                "image": "https://market-product-images-cdn.getirapi.com/category/0f329100-f339-4503-bf56-095ab4c11c98.jpeg"
            },
            {
                "id": "bebek",
                "name": "Bebek",
                "image": "https://market-product-images-cdn.getirapi.com/category/517efd09-95b6-466a-980e-55db579ebddc.jpeg"
            },
            {
                "id": "evcilHayvan",
                "name": "Evcil Hayvan",
                "image": "https://market-product-images-cdn.getirapi.com/category/907cbf21-00b7-4f94-b257-9fd8b104cf02.jpeg"
            }
        ],
        addresses: [{
            baslik: 'Gamze Ev',
            mahalle: 'Yeni mah. 1519. sok. Güres cad.',
            binaNo: '1',
            kat: '7',
            daireNo: '28',
            longAddress: 'Yeni mah. 1519. sok. Güres cad. bina: 1 kat: 7 daire: 28'
        }],
        activeCategory: '',
        selectedAddress: 'Gamze Ev',
        selectedAddressLong: 'Yeni mah. 1519. sok. Güres cad. bina: 1 kat: 7 daire: 28',
        totalCartAmount: 0
    },
    mutations: {
        addToBasket: (state, addedProduct) => {
            const productExistsBasket = state.baskets.some(function (product) {
                if (product.id === addedProduct.id) {
                    product.quantity++;

                    return true;
                }
            });

            if (!productExistsBasket) {
                state.baskets.push(addedProduct);
            }
        },
        removeProduct: (state, removedProduct) => {
            const productExistsBasket = state.baskets.some(function (product) {
                if (product.id === removedProduct.id) {
                    product.quantity--;

                    return true;
                }
            });
        },
        addAddress: (state, addressData) => {
            addressData['longAddress'] = addressData.mahalle +
                ' Bina no:' + addressData.binaNo +
                ' Kat: ' + addressData.kat +
                ' Daire No: ' + addressData.daireNo;

            state.addresses.push(addressData);
        },
        setSelectedCategory: (state, selectedAddress) => {
            state.selectedAddress = selectedAddress;

            state.addresses.some((address) => {
                if (address.baslik === selectedAddress) {
                    state.selectedAddressLong = address.longAddress;

                    return true;
                }
            })
        }
    },
    actions: {
        addProductToBasket: (context, productId) => {
            const addedProduct = context.getters.getProductById(productId);

            context.commit('addToBasket', addedProduct);
        },
        removeProductFromBasket: (context, productId) => {
            const removedProduct = context.getters.getProductById(productId);

            context.commit('removeProduct', removedProduct);
        }
    },
    modules: {},
    getters: {
        getProductsByCategory: (state) => {
            return state.products.filter((product) =>
                product.categories.indexOf(state.activeCategory) > -1);
        },
        getProductById: (state) => (id) => {
            return state.products.find((product) => product.id === Number(id))
        },
        getProductsInBasket: (state) => {
            return state.baskets;
        },
        getTotalCartAmount: (state) => {
            let totalAmount = 0;

            state.baskets.forEach((item) => {
                totalAmount += item.quantity * item.price;
            });

            return (totalAmount).toFixed(2);
        }
    }
});