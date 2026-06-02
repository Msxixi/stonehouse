const app = getApp();

Page({
  data: {
    room: null,
    selectedDate: '',
    slotIndex: 0,
    timeSlots: ['10:00 - 12:00', '14:00 - 16:00', '16:30 - 18:30', '19:00 - 21:00'],
    customerName: '',
    customerPhone: '',
    note: '',
    imageIndex: 0,
    payDeposit: true,
  },
  onLoad(options) {
    const room = app.getRoomById(options.id);
    this.setData({
      room,
      selectedDate: this.formatDate(new Date()),
    });
  },
  formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  },
  onCalendarChange(event) {
    this.setData({ selectedDate: event.detail.value });
  },
  onSlotChange(event) {
    this.setData({ slotIndex: Number(event.detail.value) });
  },
  onNameInput(event) {
    this.setData({ customerName: event.detail.value });
  },
  onPhoneInput(event) {
    this.setData({ customerPhone: event.detail.value });
  },
  onNoteInput(event) {
    this.setData({ note: event.detail.value });
  },
  changeImage(event) {
    this.setData({ imageIndex: Number(event.detail.current) });
  },
  onDepositChange(event) {
    this.setData({ payDeposit: !!event.detail.value });
  },
  submitBooking() {
    const {
      room, customerName, customerPhone, selectedDate, timeSlots, slotIndex, note, payDeposit,
    } = this.data;
    if (!customerName || !customerPhone) {
      wx.showToast({ title: '请填写联系人信息', icon: 'none' });
      return;
    }
    if (!payDeposit) {
      wx.showModal({
        title: '未支付押金提醒',
        content: '如果客户迟到10分钟则不能为客户保留房间',
        success: (res) => {
          if (!res.confirm) return;
          this.saveBooking();
        },
      });
      return;
    }
    this.saveBooking();
  },
  saveBooking() {
    const {
      room, customerName, customerPhone, selectedDate, timeSlots, slotIndex, note, payDeposit,
    } = this.data;
    app.addBooking({
      roomName: room.name,
      customerName,
      date: selectedDate,
      timeSlot: timeSlots[slotIndex],
      phone: customerPhone,
      note,
      deposit: payDeposit ? room.deposit : 0,
      depositPaid: payDeposit ? '已支付' : '未支付',
    });
    wx.showToast({ title: '预定已提交', icon: 'success' });
    this.setData({
      customerName: '',
      customerPhone: '',
      note: '',
      payDeposit: true,
    });
  },
});
