import WishlistController from "./wishlistController.js";

class App {
  constructor() {
    this.controllers = {
      wishlistController: new WishlistController()
    }
  }
}

window.app = new App()