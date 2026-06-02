const app = getApp();

Page({
  data: {
    username: 'root',
    password: 'root123',
  },
  onUsernameInput(event) {
    this.setData({ username: event.detail.value });
  },
  onPasswordInput(event) {
    this.setData({ password: event.detail.value });
  },
  enterCustomer() {
    app.login('guest');
    app.setRole('customer');
    wx.switchTab({
      url: '/pages/customer/home/index',
    });
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
    wx.showToast({ title: '已作为顾客登录', icon: 'success' });
    wx.switchTab({
      url: '/pages/customer/home/index',
    });
  },
});
