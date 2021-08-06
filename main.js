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
      <p>User is premium: {{ premium }}</p>
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
        <button @click="addToCart"
                :class="{ disabledButton: !inStock }"
                :disabled="!inStock">Add to Cart</button>
        <button @click="removeFromCart"
                :class="{ disabledButton: cart == 0 }"
                :disabled="cart == 0"
        >Remove from Cart</button>

      </div>
      <div class="cart">
        <p>Cart ({{ cart }})</p>
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
        variantQuantity: 0,
      }
    ],
    cart: 0
   }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateProduct(index) {
      this.selectedVariant = index
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
    }
   }
  })



var app = new Vue({
  el: '#app',
  data: {
    premium: true,
  }
})
