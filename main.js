var product = "Socks"
var app = new Vue ({
    el: '#app',
    data: {
        altText: "A pair of socks",
        product: "Socks",
        inventory: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            },
            {
                variantId: '2235',
                variantColor: 'blue',
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0,
        methods: {
            addToCart() {
                this.cart += 1,
                alert ('add to cart clicked')
            },
            updateProduct (link) {
                this.image = link
            }
        }

    }
})
