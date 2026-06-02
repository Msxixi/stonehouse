const app = getApp();

Page({
  data: {
    rooms: [],
  },
  onShow() {
    app.setTabbarActive('pages/customer/booking/index');
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().syncFromGlobal();
    }
    this.setData({
      rooms: app.getRooms(),
    });
  },
  goTab(event) {
    const { url } = event.currentTarget.dataset;
    if (!url) return;
    wx.switchTab({ url });
  },
  openRoom(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/customer/room-detail/index?id=${id}`,
    });
  },
});
