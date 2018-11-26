import WishlistService from "./wishlistService.js";

let _wishlistService = new WishlistService()
export default class WishlistController {
  constructor() {
    this.getWishlist()
  }

  getWishlist() {
    _wishlistService.getWishlist(draw)
  }
}
//Private
function draw() {
  let template = '';
  let wishlist = _wishlistService.wishlist
  wishlist.forEach(item => {
    template += `
    <div class="card col-3" >
      <img src="${item.img}" width="100px"/>
      <h5>${item.name}</h5>
      <p>$${item.price} - ${item.quantity}</p>
    </div>
    `
  });
  document.getElementById('wishlist-frame').innerHTML = template;
}