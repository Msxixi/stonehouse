Component({
  properties: {
    value: {
      type: String,
      value: '',
    },
    text: {
      type: String,
      value: '上传图片',
    },
  },
  methods: {
    chooseImage() {
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          const file = res.tempFiles && res.tempFiles[0];
          if (!file) return;
          this.triggerEvent('success', {
            url: file.tempFilePath,
          });
        },
      });
    },
  },
});
