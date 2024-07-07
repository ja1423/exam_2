import { defineStore } from "pinia";

export const usePiniaStore = defineStore("pinia", {
  state() {
    return {
      likedProducts: [],
      basket: [],
    };
  },
  actions: {
    addProductLiked(product) {
      const index = this.likedProducts.findIndex(
        (item) => product.id == item.id
      );

      console.log("ds", product);
      if (index == -1) {
        this.likedProducts.push(product);
      } else {
        this.likedProducts.splice(index, 1);
      }
    },
    addProductBasket(product, quantity) {
      console.log("quantity", quantity, product);
      const index = this.basket.findIndex((item) => product.id == item.id);

      if (index == -1) {
        this.basket.push({
          ...product,
          quantity: quantity || 1,
        });
      } else {
        this.basket.splice(index, 1);
      }
    },
  },
  persist: true,
});
