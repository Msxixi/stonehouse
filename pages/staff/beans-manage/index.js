const app = getApp();

function getEmptyForm() {
  return {
    name: '',
    shortDesc: '',
    detailDesc: '',
    image: '',
    stock: '',
    price: '',
  };
}

Page({
  data: {
    activeTab: 'products',
    activeStatus: 'on',
    beanProducts: [],
    searchKeyword: '',
    showPopup: false,
    popupMode: 'create',
    editingBeanId: '',
    beanOrders: [],
    form: getEmptyForm(),
  },
  onShow() {
    this.refreshBeans();
    this.refreshOrders();
  },
  getAllBeanProducts() {
    return app.getBeanProducts('on').concat(app.getBeanProducts('off'));
  },
  refreshBeans() {
    const keyword = this.data.searchKeyword.trim().toLowerCase();
    this.setData({
      beanProducts: app.getBeanProducts(this.data.activeStatus)
        .filter((item) => {
          if (!keyword) return true;
          return [item.name, item.shortDesc, item.detailDesc]
            .filter(Boolean)
            .some((field) => String(field).toLowerCase().includes(keyword));
        }),
    });
  },
  switchStatus(event) {
    const { status } = event.currentTarget.dataset;
    this.setData({ activeStatus: status }, () => this.refreshBeans());
  },
  switchTab(event) {
    this.setData({ activeTab: event.currentTarget.dataset.tab });
  },
  refreshOrders() {
    this.setData({
      beanOrders: app.getBeanOrders(),
    });
  },
  togglePopup() {
    if (this.data.showPopup) {
      this.closePopup();
      return;
    }
    this.setData({
      popupMode: 'create',
      editingBeanId: '',
      form: getEmptyForm(),
    }, () => {
      wx.nextTick(() => {
        this.setData({ showPopup: true });
      });
    });
  },
  closePopup() {
    this.setData({
      showPopup: false,
      popupMode: 'create',
      editingBeanId: '',
      form: getEmptyForm(),
    });
  },
  openEditPopup(event) {
    const { id } = event.currentTarget.dataset;
    const current = this.getAllBeanProducts().find((item) => item.id === id);
    if (!current) return;
    this.setData({
      popupMode: 'edit',
      editingBeanId: id,
      form: {
        name: current.name || '',
        shortDesc: current.shortDesc || '',
        detailDesc: current.detailDesc || '',
        image: current.image || '',
        stock: current.stock ?? '',
        price: current.price ?? '',
      },
    }, () => {
      wx.nextTick(() => {
        this.setData({ showPopup: true });
      });
    });
  },
  noop() {},
  onSearchInput(event) {
    this.setData({
      searchKeyword: event.detail.value,
    }, () => this.refreshBeans());
  },
  onInput(event) {
    const { field } = event.currentTarget.dataset;
    this.setData({
      [`form.${field}`]: event.detail.value,
    });
  },
  onUploadSuccess(event) {
    this.setData({
      'form.image': event.detail.url,
    });
  },
  addBeanProduct() {
    const { name, shortDesc, detailDesc, image, stock, price } = this.data.form;
    if (!name || !shortDesc || !detailDesc || !stock || !price) {
      wx.showToast({ title: '请完整填写咖啡豆信息', icon: 'none' });
      return;
    }
    app.addBeanProduct({
      name,
      shortDesc,
      detailDesc,
      image: image || '/assets/bean-classic.svg',
      stock: Number(stock),
      price: Number(price),
    });
    this.closePopup();
    this.refreshBeans();
    wx.showToast({ title: '咖啡豆已新增', icon: 'success' });
  },
  saveBeanProduct() {
    const { editingBeanId, form } = this.data;
    const { name, shortDesc, detailDesc, image, stock, price } = form;
    if (!editingBeanId) return;
    if (!name || !shortDesc || !detailDesc || !stock || !price) {
      wx.showToast({ title: '请完整填写咖啡豆信息', icon: 'none' });
      return;
    }
    app.updateBeanProduct(editingBeanId, {
      name,
      shortDesc,
      detailDesc,
      image: image || '/assets/bean-classic.svg',
      stock: Number(stock),
      price: Number(price),
    });
    this.closePopup();
    this.refreshBeans();
    wx.showToast({ title: '咖啡豆已更新', icon: 'success' });
  },
  updateOrderField(event) {
    const { id, field } = event.currentTarget.dataset;
    app.updateBeanOrder(id, {
      [field]: event.detail.value,
    });
    this.refreshOrders();
  },
  saveExpress(event) {
    const { id } = event.currentTarget.dataset;
    wx.showModal({
      title: '保存订单信息',
      content: '已更新快递单号和订单状态',
      showCancel: false,
    });
    app.updateBeanOrder(id, { status: '已发货' });
    this.refreshOrders();
  },
  toggleShelf(event) {
    const { id, next } = event.currentTarget.dataset;
    app.updateBeanProduct(id, { status: next });
    this.refreshBeans();
  },
  goMenuManage() {
    wx.redirectTo({ url: '/pages/staff/menu-manage/index' });
  },
  goBookingManage() {
    wx.redirectTo({ url: '/pages/staff/booking-manage/index' });
  },
});
