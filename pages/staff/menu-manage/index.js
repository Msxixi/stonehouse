const app = getApp();

Page({
  data: {
    activeTab: 'products',
    activeStatus: 'on',
    menuProducts: [],
    searchKeyword: '',
    showPopup: false,
    categoryOptions: ['饮品', '甜点', '轻食'],
    menuOrders: [],
    salesAmount: 0,
    salesPercent: 0,
    form: {
      name: '',
      image: '',
      price: '',
      stock: '',
      category: '饮品',
      categoryIndex: 0,
    },
  },
  onShow() {
    this.refreshProducts();
    this.refreshOrders();
  },
  refreshProducts() {
    const keyword = this.data.searchKeyword.trim().toLowerCase();
    this.setData({
      menuProducts: app.getMenuProducts(this.data.activeStatus)
        .filter((item) => {
          if (!keyword) return true;
          return [item.name, item.category, item.desc]
            .filter(Boolean)
            .some((field) => String(field).toLowerCase().includes(keyword));
        })
        .map((item) => ({
          ...item,
          categoryIndex: this.data.categoryOptions.indexOf(item.category),
        })),
    });
  },
  switchStatus(event) {
    const { status } = event.currentTarget.dataset;
    this.setData({ activeStatus: status }, () => this.refreshProducts());
  },
  switchTab(event) {
    const { tab } = event.currentTarget.dataset;
    this.setData({ activeTab: tab });
  },
  refreshOrders() {
    const orders = app.getMenuOrders();
    const salesAmount = orders.reduce((sum, item) => sum + item.total, 0);
    this.setData({
      menuOrders: orders.map((item) => ({ ...item, expanded: false })),
      salesAmount,
      salesPercent: Math.min(100, Math.round((salesAmount / 500) * 100)),
    });
  },
  togglePopup() {
    this.setData({
      showPopup: !this.data.showPopup,
    });
  },
  noop() {},
  onSearchInput(event) {
    this.setData({
      searchKeyword: event.detail.value,
    }, () => this.refreshProducts());
  },
  onInput(event) {
    const { field, id } = event.currentTarget.dataset;
    const value = event.detail.value;
    if (id) {
      app.updateMenuProduct(id, {
        [field]: field === 'price' || field === 'stock' ? Number(value) : value,
      });
      this.refreshProducts();
      return;
    }
    this.setData({
      [`form.${field}`]: value,
    });
  },
  onCategoryChange(event) {
    const { id } = event.currentTarget.dataset;
    const category = this.data.categoryOptions[Number(event.detail.value)];
    if (id) {
      app.updateMenuProduct(id, { category });
      this.refreshProducts();
      return;
    }
    this.setData({
      'form.category': category,
      'form.categoryIndex': Number(event.detail.value),
    });
  },
  onUploadSuccess(event) {
    this.setData({
      'form.image': event.detail.url,
    });
  },
  addProduct() {
    const { name, image, price, stock, category } = this.data.form;
    if (!name || !price || !stock) {
      wx.showToast({ title: '请完整填写菜品信息', icon: 'none' });
      return;
    }
    app.addMenuProduct({
      name,
      image: image || '/assets/menu-latte.svg',
      price: Number(price),
      stock: Number(stock),
      desc: '店员新建菜品，可继续维护介绍内容。',
      category,
    });
    this.setData({
      showPopup: false,
      form: {
        name: '',
        image: '',
        price: '',
        stock: '',
        category: '饮品',
        categoryIndex: 0,
      },
    });
    this.refreshProducts();
    wx.showToast({ title: '菜品已新增', icon: 'success' });
  },
  toggleShelf(event) {
    const { id, next } = event.currentTarget.dataset;
    app.updateMenuProduct(id, { status: next });
    this.refreshProducts();
  },
  toggleOrder(event) {
    const { id } = event.currentTarget.dataset;
    this.setData({
      menuOrders: this.data.menuOrders.map((item) => (
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )),
    });
  },
  goBookingManage() {
    wx.redirectTo({ url: '/pages/staff/booking-manage/index' });
  },
  goBeanManage() {
    wx.redirectTo({ url: '/pages/staff/beans-manage/index' });
  },
});
