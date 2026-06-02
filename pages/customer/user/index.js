const app = getApp();

Page({
  data: {
    username: 'root',
    password: 'root123',
    profile: {
      isLoggedIn: false,
      username: '',
    },
  },
  onShow() {
    app.setTabbarActive('pages/customer/user/index');
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().syncFromGlobal();
    }
    this.setData({
      profile: app.getUserProfile(),
    });
  },
  onInput(event) {
    const { field } = event.currentTarget.dataset;
    this.setData({
      [field]: event.detail.value,
    });
  },
  goTab(event) {
    const { url } = event.currentTarget.dataset;
    if (!url) return;
    wx.switchTab({ url });
  },
  loginAsStaff() {
    const { username, password } = this.data;
    if (!username || !password) {
      wx.showToast({ title: '请输入账号和密码', icon: 'none' });
      return;
    }
    app.login(username);
    if (username === 'root' && password === 'root123') {
      app.setRole('staff');
      wx.navigateTo({
        url: '/pages/staff/menu-manage/index',
      });
      return;
    }
    app.setRole('customer');
    this.setData({
      profile: app.getUserProfile(),
    });
    wx.showToast({ title: '已作为顾客登录', icon: 'success' });
  },
  logout() {
    app.logout();
    this.setData({
      profile: app.getUserProfile(),
    });
    wx.showToast({ title: '已退出登录', icon: 'success' });
  },
});
