Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
  <div class="product flex">
    <div class="product-image">
      <img v-bind:src="image"alt="Socks Image">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>{{ userIsPremium }}</p>
      <p>Shipping: {{ shipping }}</p>
      <ul>
          <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <div v-for="(variant, index) in variants"
           :key="variant.variantId"
           class="color-box"
           :style="{ backgroundColor: variant.variantColor }"
           @mouseover="updateProduct(index)">
      </div>
      <div class="flex buttons-container">
        <button @click="emitAddToCart"
                :class="{ disabledButton: !inStock }"
                :disabled="!inStock">Add to Cart</button>
        <button @click="emitRemoveFromCart"
                :class="{ disabledButton: cart == 0 }"
                :disabled="cart == 0"
        >Remove from Cart</button>

      </div>

    </div>
  </div>
  `,
  data() {
    return {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
        variantQuantity: 20,
      }
    ],
   }
  },
  methods: {
    emitAddToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
   //   console.log('emitAddToCart was fired')
    },
    emitRemoveFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
     // console.log('emitRemoveFromCart was fired'),
     // console.log(this.variants[this.selectedVariant].variantId)

    },
    updateProduct(index) {
      this.selectedVariant = index,
      console.log(index)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping(){
      if (this.premium){
        return "Free"
      }else {
        return "$2.99"
      }
    },
    userIsPremium() {
      if (this.premium) {
        return "User is premium"
      }else {
        return "User is not premium"
      }
      }
   }
  })

  Vue.component('product-review', {
    template: `
    <form class="review-form">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>
    </form
    `,
    data() {
      return {
        name: null
      }
    }
  })



var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: []
  },
  methods: {
    addToCart(id) {
      this.cart.push(id)
   //   console.log('addToCart function was called')
    },
    removeFromCart(id){
      console.log('remove from card function called')
      var index = (this.cart.findIndex(o => o === id))
      if (index > -1) {
        this.cart.splice(index, 1)
      }
    }
  }
})
