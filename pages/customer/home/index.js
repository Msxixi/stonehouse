Page({
  data: {
    recommendedList: [
      '流沙美式：咖啡与流沙的奇妙融合，每一口都有浓郁与顺滑的双重享受',
      '酸角气泡美式：热带酸角的清新酸甜，遇上气泡与咖啡，带来轻盈又上头的夏日感。',
      '提拉米苏：一勺下去，柔软细腻在口中化开，经典的咖啡甜点永不过时。',
    ],
    activities: [
      {
        title: '精品咖啡分享会',
        intro: '周末限时活动，介绍云南本地咖啡豆风味与冲煮方式，适合咖啡爱好者报名参与。',
        image: '/assets/5.jpeg',
      },
      {
        title: '民国建筑主题下午茶',
        intro: '以石房子建筑故事为灵感设计主题甜点和饮品组合，适合拍照与朋友聚会。',
        image: '/assets/gallery-1.svg',
      },
      {
        title: '品牌联名快闪展',
        intro: '开放小型品牌联名与艺术快闪，支持空间展示、沙龙活动和预约布置。',
        image: '/assets/gallery-4.svg',
      },
    ],
    gallery: [
      '/assets/1.jpeg',
      '/assets/2.jpeg',
      '/assets/3.jpeg',
      '/assets/4.jpeg',
    ],
    showActivityModal: false,
    currentActivity: null,
  },
  onShow() {
    app.setTabbarActive('pages/customer/home/index');
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().syncFromGlobal();
    }
  },
  goTab(event) {
    const { url } = event.currentTarget.dataset;
    if (!url) return;
    wx.switchTab({ url });
  },
  openActivity(event) {
    this.setData({
      currentActivity: event.currentTarget.dataset.item,
      showActivityModal: true,
    });
  },
  closeActivity() {
    this.setData({
      showActivityModal: false,
      currentActivity: null,
    });
  },
  noop() {},
});
