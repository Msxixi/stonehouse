const app = getApp();

Page({
  data: {
    products: [],
    categories: ['饮品', '甜点', '轻食'],
    activeCategory: '饮品',
    keyword: '',
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    showCart: false,
    tableName: '',
  },
  onShow() {
    app.setTabbarActive('pages/customer/menu/index');
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().syncFromGlobal();
    }
    this.setData({
      tableName: app.getCurrentTableName(),
    });
    this.refreshProducts();
    this.refreshCart();
  },
  refreshProducts() {
    const { activeCategory, keyword } = this.data;
    const normalizedKeyword = keyword.trim().toLowerCase();
    const products = app.getMenuProducts().filter((item) => {
      const haystack = `${item.name} ${item.desc} ${item.category}`.toLowerCase();
      const matchesCategory = item.category === activeCategory;
      const matchesKeyword = !normalizedKeyword || haystack.includes(normalizedKeyword);
      return matchesCategory && matchesKeyword;
    });
    this.setData({ products });
  },
  refreshCart() {
    const cart = app.getMenuCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    this.setData({ cart, totalCount, totalPrice });
  },
  changeCategory(event) {
    const { category } = event.currentTarget.dataset;
    this.setData({ activeCategory: category }, () => this.refreshProducts());
  },
  onKeywordInput(event) {
    this.setData({
      keyword: event.detail.value,
    }, () => this.refreshProducts());
  },
  clearKeyword() {
    this.setData({
      keyword: '',
    }, () => this.refreshProducts());
  },
  goTab(event) {
    const { url } = event.currentTarget.dataset;
    if (!url) return;
    wx.switchTab({ url });
  },
  scanTable() {
    wx.showActionSheet({
      itemList: ['A01 桌', 'A02 桌', 'B01 桌', 'B02 桌', '花园 1 桌'],
      success: (res) => {
        const tableMap = ['A01', 'A02', 'B01', 'B02', '花园1'];
        const tableName = tableMap[res.tapIndex] || 'A01';
        app.setCurrentTableName(tableName);
        this.setData({ tableName });
      },
    });
  },
  orderNow(event) {
    const { id } = event.currentTarget.dataset;
    app.addMenuToCart(id);
    this.refreshCart();
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  },
  toggleCart() {
    if (!this.data.totalCount) {
      this.setData({ showCart: false });
      return;
    }
    this.setData({ showCart: !this.data.showCart });
  },
  clearCart() {
    app.clearMenuCart();
    this.refreshCart();
    this.setData({ showCart: false });
  },
  noop() {},
  changeQty(event) {
    const { id, delta } = event.currentTarget.dataset;
    app.updateMenuCartQuantity(id, Number(delta));
    this.refreshCart();
    if (!app.getMenuCart().length) {
      this.setData({ showCart: false });
    }
  },
  checkout() {
    if (!this.data.totalCount) {
      wx.showToast({ title: '购物车为空', icon: 'none' });
      return;
    }
    wx.showModal({
      title: '确认买单',
      content: `桌号 ${this.data.tableName || '未选择'}，共 ${this.data.totalCount} 件，合计 ¥${this.data.totalPrice}`,
      success: (res) => {
        if (!res.confirm) return;
        app.checkoutMenuCart();
        this.refreshProducts();
        this.refreshCart();
        this.setData({ showCart: false });
        wx.showToast({ title: '买单成功', icon: 'success' });
      },
    });
  },
});
