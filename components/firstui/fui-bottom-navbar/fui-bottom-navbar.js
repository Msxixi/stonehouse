Component({
  properties: {
    current: {
      type: String,
      value: 'home',
    },
  },
  data: {
    items: [
      { key: 'home', label: '主页', url: '/pages/customer/home/index' },
      { key: 'menu', label: '点餐', url: '/pages/customer/menu/index' },
      { key: 'booking', label: '包房预定', url: '/pages/customer/booking/index' },
      { key: 'beans', label: '咖啡豆', url: '/pages/customer/beans/index' },
      { key: 'user', label: '用户', url: '/pages/customer/user/index' },
    ],
  },
  methods: {
    navigate(event) {
      const { url, key } = event.currentTarget.dataset;
      if (!url || key === this.data.current) return;
      wx.reLaunch({ url });
    },
  },
});
