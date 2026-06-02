const app = getApp();

Component({
  data: {
    tabbarConfig: [],
  },
  lifetimes: {
    attached() {
      this.syncFromGlobal();
    },
  },
  methods: {
    syncFromGlobal() {
      this.setData({
        tabbarConfig: app.getTabbarConfig(),
      });
    },
    switchTab(event) {
      const { path, active } = event.currentTarget.dataset;
      if (!path || active) return;
      app.setTabbarActive(path);
      this.syncFromGlobal();
      wx.switchTab({
        url: `/${path}`,
      });
    },
  },
});
