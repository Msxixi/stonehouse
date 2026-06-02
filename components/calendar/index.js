Component({
  properties: {
    value: {
      type: String,
      value: '',
      observer() {
        this.buildCalendar();
      },
    },
  },
  data: {
    displayYear: 2026,
    displayMonth: 4,
    cells: [],
  },
  lifetimes: {
    attached() {
      const source = this.data.value ? new Date(this.data.value) : new Date();
      this.setData({
        displayYear: source.getFullYear(),
        displayMonth: source.getMonth() + 1,
      });
      this.buildCalendar();
    },
  },
  methods: {
    buildCalendar() {
      const { displayYear, displayMonth, value } = this.data;
      const firstDay = new Date(displayYear, displayMonth - 1, 1);
      const startWeekDay = firstDay.getDay() || 7;
      const daysInMonth = new Date(displayYear, displayMonth, 0).getDate();
      const cells = [];

      for (let i = 1; i < startWeekDay; i += 1) {
        cells.push({ id: `empty-${i}`, empty: true });
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const dateText = `${displayYear}-${String(displayMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        cells.push({
          id: dateText,
          day,
          dateText,
          active: value === dateText,
        });
      }

      this.setData({ cells });
    },
    prevMonth() {
      let { displayYear, displayMonth } = this.data;
      displayMonth -= 1;
      if (displayMonth === 0) {
        displayMonth = 12;
        displayYear -= 1;
      }
      this.setData({ displayYear, displayMonth }, () => this.buildCalendar());
    },
    nextMonth() {
      let { displayYear, displayMonth } = this.data;
      displayMonth += 1;
      if (displayMonth === 13) {
        displayMonth = 1;
        displayYear += 1;
      }
      this.setData({ displayYear, displayMonth }, () => this.buildCalendar());
    },
    selectDate(event) {
      const { date } = event.currentTarget.dataset;
      if (!date) return;
      this.setData({ value: date }, () => this.buildCalendar());
      this.triggerEvent('change', { value: date });
    },
  },
});
