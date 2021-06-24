const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 1233, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 1234, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    // Methods
    methods:{
        // addToCart Method
        addToCart() {
            this.cart += 1;
        },
        // removeFromCart Method
        removeFromCart() {
            this.cart -= 1;
        },
         //Update Image Method
        updateImage(variantImg) {
            this.image = variantImg
        }
    },
   
})
