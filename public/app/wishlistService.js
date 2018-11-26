
let _api = axios.create({
  baseURL: '/api/items'
})
let _wishlist = []
export default class WishlistService {
  constructor() {
  }
  getWishlist(callback) {
    _api.get('')
      .then(res => {
        console.log(res.data)
        _wishlist = res.data
        callback()
      })
  }
  get wishlist() {
    return _wishlist
  }
}