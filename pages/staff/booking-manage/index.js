const app = getApp();

Page({
  data: {
    bookings: [],
    showPopup: false,
    form: {
      roomName: '青石会客包房',
      customerName: '',
      date: '2026-04-10',
      timeSlot: '14:00 - 16:00',
      note: '',
      deposit: '100',
      depositPaid: '已支付',
      status: '已确认',
    },
    roomOptions: ['青石会客包房', '公馆雅集包房'],
    slotOptions: ['10:00 - 12:00', '14:00 - 16:00', '16:30 - 18:30', '19:00 - 21:00'],
  },
  onShow() {
    this.refreshBookings();
  },
  refreshBookings() {
    this.setData({
      bookings: app.getBookings(),
    });
  },
  goMenuManage() {
    wx.redirectTo({ url: '/pages/staff/menu-manage/index' });
  },
  goBookingManage() {},
  goBeanManage() {
    wx.redirectTo({ url: '/pages/staff/beans-manage/index' });
  },
  togglePopup() {
    this.setData({
      showPopup: !this.data.showPopup,
    });
  },
  noop() {},
  onInput(event) {
    const { field } = event.currentTarget.dataset;
    this.setData({
      [`form.${field}`]: event.detail.value,
    });
  },
  onRoomChange(event) {
    const roomName = this.data.roomOptions[Number(event.detail.value)];
    this.setData({
      'form.roomName': roomName,
    });
  },
  onSlotChange(event) {
    const timeSlot = this.data.slotOptions[Number(event.detail.value)];
    this.setData({
      'form.timeSlot': timeSlot,
    });
  },
  onDepositPaidChange(event) {
    this.setData({
      'form.depositPaid': event.detail.value ? '已支付' : '未支付',
      'form.deposit': event.detail.value ? '100' : '0',
    });
  },
  addBookingRecord() {
    const {
      roomName, customerName, date, timeSlot, note, deposit, depositPaid, status,
    } = this.data.form;
    if (!customerName || !date) {
      wx.showToast({ title: '请填写完整预约信息', icon: 'none' });
      return;
    }
    app.addBooking({
      roomName,
      customerName,
      date,
      timeSlot,
      note,
      deposit: Number(deposit),
      depositPaid,
      status,
    });
    this.setData({
      showPopup: false,
      form: {
        roomName: '青石会客包房',
        customerName: '',
        date: '2026-04-10',
        timeSlot: '14:00 - 16:00',
        note: '',
        deposit: '100',
        depositPaid: '已支付',
        status: '已确认',
      },
    });
    this.refreshBookings();
    wx.showToast({ title: '预约已新增', icon: 'success' });
  },
  markStatus(event) {
    const { id, status } = event.currentTarget.dataset;
    if (status === '已取消') {
      app.deleteBooking(id);
      this.refreshBookings();
      wx.showToast({ title: '记录已删除', icon: 'success' });
      return;
    }
    app.updateBookingStatus(id, status);
    this.refreshBookings();
  },
});
