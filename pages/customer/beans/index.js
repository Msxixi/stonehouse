const app = getApp();

Page({
  data: {
    beans: [],
    filteredBeans: [],
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    showCart: false,
    activeTab: 'products',
    beanOrders: [],
    keyword: '',
  },
  onShow() {
    app.setTabbarActive('pages/customer/beans/index');
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().syncFromGlobal();
    }
    this.refreshData();
  },
  refreshData() {
    const cart = app.getBeanCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const beans = app.getBeanProducts();
    const filteredBeans = this.filterBeans(beans, this.data.keyword);
    this.setData({
      beans,
      filteredBeans,
      beanOrders: app.getBeanOrders(),
      cart,
      totalCount,
      totalPrice,
    });
  },
  filterBeans(beans, keyword) {
    const normalizedKeyword = keyword.trim().toLowerCase();
    return beans.filter((item) => {
      const haystack = `${item.name} ${item.shortDesc} ${item.detailDesc}`.toLowerCase();
      return !normalizedKeyword || haystack.includes(normalizedKeyword);
    });
  },
  switchTab(event) {
    this.setData({
      activeTab: event.currentTarget.dataset.tab,
      showCart: false,
    });
  },
  onKeywordInput(event) {
    const keyword = event.detail.value;
    this.setData({
      keyword,
      filteredBeans: this.filterBeans(this.data.beans, keyword),
    });
  },
  clearKeyword() {
    this.setData({
      keyword: '',
      filteredBeans: this.filterBeans(this.data.beans, ''),
    });
  },
  goTab(event) {
    const { url } = event.currentTarget.dataset;
    if (!url) return;
    wx.switchTab({ url });
  },
  addToCart(event) {
    const { id } = event.currentTarget.dataset;
    app.addBeanToCart(id);
    this.refreshData();
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
    app.clearBeanCart();
    this.refreshData();
    this.setData({ showCart: false });
  },
  noop() {},
  changeQty(event) {
    const { id, delta } = event.currentTarget.dataset;
    app.updateBeanCartQuantity(id, Number(delta));
    this.refreshData();
    if (!app.getBeanCart().length) {
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
      content: `共 ${this.data.totalCount} 件，合计 ¥${this.data.totalPrice}`,
      success: (res) => {
        if (!res.confirm) return;
        app.checkoutBeanCart();
        this.refreshData();
        this.setData({ showCart: false, activeTab: 'orders' });
        wx.showToast({ title: '买单成功', icon: 'success' });
      },
    });
  },
});
