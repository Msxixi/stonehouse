const initialMenuProducts = [
  {
    id: 'menu-1',
    name: '石房子拿铁',
    image: '/assets/menu-latte.svg',
    price: 32,
    stock: 28,
    desc: '云南小粒咖啡搭配丝滑牛乳，口感均衡温润。',
    category: '饮品',
    status: 'on',
  },
  {
    id: 'menu-2',
    name: '茶花公园手冲',
    image: '/assets/menu-pour.svg',
    price: 38,
    stock: 16,
    desc: '花香与柑橘调性明显，适合慢慢品味。',
    category: '饮品',
    status: 'on',
  },
  {
    id: 'menu-3',
    name: '李公馆提拉米苏',
    image: '/assets/menu-cake.svg',
    price: 26,
    stock: 10,
    desc: '酒香轻盈、奶香细腻，适合作为下午茶甜点。',
    category: '甜点',
    status: 'on',
  },
  {
    id: 'menu-4',
    name: '青石鸡肉可颂',
    image: '/assets/menu-coldbrew.svg',
    price: 29,
    stock: 12,
    desc: '轻食可颂搭配蔬菜与鸡肉，适合午后简餐。',
    category: '轻食',
    status: 'on',
  },
  {
    id: 'menu-5',
    name: '茶花巴斯克',
    image: '/assets/menu-cake.svg',
    price: 28,
    stock: 0,
    desc: '奶香扎实，带轻微焦糖风味。',
    category: '甜点',
    status: 'off',
  },
];

const initialBeanProducts = [
  {
    id: 'bean-1',
    name: '石房子典藏拼配',
    shortDesc: '坚果、黑巧克力、焦糖余韵',
    detailDesc: '适合意式咖啡与奶咖，风味稳定、层次厚实。',
    image: '/assets/bean-classic.svg',
    stock: 36,
    price: 88,
    status: 'on',
  },
  {
    id: 'bean-2',
    name: '昆明晨光 SOE',
    shortDesc: '柑橘、黄糖、花蜜香气',
    detailDesc: '单一产区中浅烘焙，适合手冲与美式。',
    image: '/assets/bean-sunrise.svg',
    stock: 24,
    price: 96,
    status: 'on',
  },
  {
    id: 'bean-3',
    name: '茶花花园微批次',
    shortDesc: '莓果、葡萄酒感、尾韵干净',
    detailDesc: '限量豆款，适合喜欢果香与发酵风味的顾客。',
    image: '/assets/bean-garden.svg',
    stock: 12,
    price: 118,
    status: 'on',
  },
  {
    id: 'bean-4',
    name: '石墙深烘焙',
    shortDesc: '榛果、可可、浓郁醇厚',
    detailDesc: '适合摩卡壶、法压壶与偏厚重口感的饮用者。',
    image: '/assets/bean-wall.svg',
    stock: 18,
    price: 82,
    status: 'off',
  },
];

const initialRooms = [
  {
    id: 'room-1',
    name: '青石会客包房',
    capacity: '4-6 人',
    deposit: 100,
    desc: '适合商务洽谈与小型下午茶，临窗可见园区景观。',
    detail: '青石会客包房保留了民国时期会客空间的雅致氛围，搭配中西合璧的窗饰与木作家具，适合轻商务会面与朋友聚会。',
    images: [
      '/assets/room-green-1.svg',
      '/assets/room-green-2.svg',
      '/assets/room-green-3.svg',
    ],
  },
  {
    id: 'room-2',
    name: '公馆雅集包房',
    capacity: '6-8 人',
    deposit: 100,
    desc: '适合生日、主题沙龙与精品品鉴活动。',
    detail: '公馆雅集包房拥有更完整的私密空间，可灵活布置为读书会、精品咖啡分享会与小型庆生活动场地。',
    images: [
      '/assets/room-salon-1.svg',
      '/assets/room-salon-2.svg',
      '/assets/room-salon-3.svg',
    ],
  },
];

const initialBookings = [
  {
    id: 'booking-1',
    roomName: '青石会客包房',
    customerName: '刘女士',
    date: '2026-04-12',
    timeSlot: '14:00 - 16:00',
    note: '需要安静一些的位置',
    deposit: 100,
    depositPaid: '已支付',
    status: '已确认',
  },
  {
    id: 'booking-2',
    roomName: '公馆雅集包房',
    customerName: '陈先生',
    date: '2026-04-13',
    timeSlot: '19:00 - 21:00',
    note: '想做生日布置',
    deposit: 100,
    depositPaid: '已支付',
    status: '待联系',
  },
];

const initialMenuOrders = [
  {
    id: 'order-menu-1',
    tableName: 'A01',
    items: [
      { name: '石房子拿铁', quantity: 2, price: 32 },
      { name: '李公馆提拉米苏', quantity: 1, price: 26 },
    ],
    total: 90,
    createdAt: '2026-04-09 10:30',
  },
  {
    id: 'order-menu-2',
    tableName: 'B03',
    items: [
      { name: '茶花公园手冲', quantity: 2, price: 38 },
      { name: '青石鸡肉可颂', quantity: 2, price: 29 },
    ],
    total: 134,
    createdAt: '2026-04-09 13:20',
  },
];

const initialBeanOrders = [
  {
    id: 'bean-order-1',
    customerName: '周小姐',
    phone: '13800138000',
    address: '昆明市盘龙区北京路 88 号',
    items: [
      { name: '石房子典藏拼配', quantity: 1, price: 88 },
      { name: '昆明晨光 SOE', quantity: 1, price: 96 },
    ],
    total: 184,
    expressNo: '',
    status: '待发货',
  },
];

App({
  onLaunch() {
    this.globalData = {
      currentRole: 'customer',
      userProfile: {
        isLoggedIn: false,
        username: '',
      },
      currentTableName: '',
      tabbarConfig: [
        {
          key: 'home',
          active: true,
          pagePath: 'pages/customer/home/index',
          text: '主页',
          iconPath: '/assets/tab-home.svg',
          selectedIconPath: '/assets/tab-home-active.svg',
        },
        {
          key: 'menu',
          active: false,
          pagePath: 'pages/customer/menu/index',
          text: '点餐',
          iconPath: '/assets/tab-menu.svg',
          selectedIconPath: '/assets/tab-menu-active.svg',
        },
        {
          key: 'booking',
          active: false,
          pagePath: 'pages/customer/booking/index',
          text: '包房预定',
          iconPath: '/assets/tab-booking.svg',
          selectedIconPath: '/assets/tab-booking-active.svg',
        },
        {
          key: 'beans',
          active: false,
          pagePath: 'pages/customer/beans/index',
          text: '咖啡豆',
          iconPath: '/assets/tab-beans.svg',
          selectedIconPath: '/assets/tab-beans-active.svg',
        },
        {
          key: 'user',
          active: false,
          pagePath: 'pages/customer/user/index',
          text: '用户',
          iconPath: '/assets/tab-user.svg',
          selectedIconPath: '/assets/tab-user-active.svg',
        },
      ],
      store: {
        menuProducts: initialMenuProducts,
        beanProducts: initialBeanProducts,
        rooms: initialRooms,
        bookings: initialBookings,
        menuOrders: initialMenuOrders,
        beanOrders: initialBeanOrders,
        menuCart: [],
        beanCart: [],
      },
    };
  },
  setRole(role) {
    this.globalData.currentRole = role;
  },
  setTabbarActive(pagePath) {
    this.globalData.tabbarConfig = this.globalData.tabbarConfig.map((item) => ({
      ...item,
      active: item.pagePath === pagePath,
    }));
  },
  getTabbarConfig() {
    return this.globalData.tabbarConfig.map((item) => ({ ...item }));
  },
  login(username) {
    this.globalData.userProfile = {
      isLoggedIn: true,
      username,
    };
  },
  logout() {
    this.globalData.currentRole = 'customer';
    this.globalData.userProfile = {
      isLoggedIn: false,
      username: '',
    };
    this.globalData.currentTableName = '';
  },
  setCurrentTableName(tableName) {
    this.globalData.currentTableName = tableName;
  },
  getCurrentTableName() {
    return this.globalData.currentTableName || '';
  },
  getUserProfile() {
    return { ...this.globalData.userProfile };
  },
  getMenuProducts(status = 'on') {
    return this.globalData.store.menuProducts
      .filter((item) => item.status === status)
      .map((item) => ({ ...item }));
  },
  getBeanProducts(status = 'on') {
    return this.globalData.store.beanProducts
      .filter((item) => item.status === status)
      .map((item) => ({ ...item }));
  },
  getRooms() {
    return this.globalData.store.rooms.map((item) => ({ ...item, images: [...item.images] }));
  },
  getRoomById(id) {
    const room = this.globalData.store.rooms.find((item) => item.id === id);
    return room ? { ...room, images: [...room.images] } : null;
  },
  getBookings() {
    return this.globalData.store.bookings.map((item) => ({ ...item }));
  },
  getMenuOrders() {
    return this.globalData.store.menuOrders.map((item) => ({
      ...item,
      items: item.items.map((orderItem) => ({ ...orderItem })),
      expanded: false,
    }));
  },
  getBeanOrders() {
    return this.globalData.store.beanOrders.map((item) => ({
      ...item,
      items: item.items.map((orderItem) => ({ ...orderItem })),
    }));
  },
  addMenuProduct(payload) {
    this.globalData.store.menuProducts = [
      {
        id: `menu-${Date.now()}`,
        status: 'on',
        ...payload,
      },
      ...this.globalData.store.menuProducts,
    ];
  },
  updateMenuProduct(id, payload) {
    this.globalData.store.menuProducts = this.globalData.store.menuProducts.map((item) => (
      item.id === id ? { ...item, ...payload } : item
    ));
  },
  deleteMenuProduct(id) {
    this.globalData.store.menuProducts = this.globalData.store.menuProducts.filter((item) => item.id !== id);
  },
  addBeanProduct(payload) {
    this.globalData.store.beanProducts = [
      {
        id: `bean-${Date.now()}`,
        status: 'on',
        ...payload,
      },
      ...this.globalData.store.beanProducts,
    ];
  },
  updateBeanProduct(id, payload) {
    this.globalData.store.beanProducts = this.globalData.store.beanProducts.map((item) => (
      item.id === id ? { ...item, ...payload } : item
    ));
  },
  deleteBeanProduct(id) {
    this.globalData.store.beanProducts = this.globalData.store.beanProducts.filter((item) => item.id !== id);
  },
  addBooking(payload) {
    this.globalData.store.bookings = [
      {
        id: `booking-${Date.now()}`,
        status: '已提交',
        ...payload,
      },
      ...this.globalData.store.bookings,
    ];
  },
  deleteBooking(id) {
    this.globalData.store.bookings = this.globalData.store.bookings.filter((item) => item.id !== id);
  },
  updateBookingStatus(id, status) {
    this.globalData.store.bookings = this.globalData.store.bookings.map((item) => (
      item.id === id ? { ...item, status } : item
    ));
  },
  updateBeanOrder(id, payload) {
    this.globalData.store.beanOrders = this.globalData.store.beanOrders.map((item) => (
      item.id === id ? { ...item, ...payload } : item
    ));
  },
  getMenuCart() {
    return this.globalData.store.menuCart.map((item) => ({ ...item }));
  },
  addMenuToCart(productId) {
    const product = this.globalData.store.menuProducts.find((item) => item.id === productId && item.status === 'on');
    if (!product) return;
    const existing = this.globalData.store.menuCart.find((item) => item.id === productId);
    if (existing) {
      if (existing.quantity < product.stock) {
        existing.quantity += 1;
      }
    } else {
      this.globalData.store.menuCart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      });
    }
  },
  updateMenuCartQuantity(productId, delta) {
    this.globalData.store.menuCart = this.globalData.store.menuCart
      .map((item) => {
        if (item.id !== productId) return item;
        const product = this.globalData.store.menuProducts.find((productItem) => productItem.id === productId);
        const nextQuantity = item.quantity + delta;
        const safeQuantity = product ? Math.min(nextQuantity, product.stock) : nextQuantity;
        return { ...item, quantity: safeQuantity };
      })
      .filter((item) => item.quantity > 0);
  },
  checkoutMenuCart() {
    const cart = this.getMenuCart();
    if (!cart.length) return;
    const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const orderItems = cart.map((item) => ({ name: item.name, quantity: item.quantity, price: item.price }));
    this.globalData.store.menuProducts = this.globalData.store.menuProducts.map((product) => {
      const hit = cart.find((cartItem) => cartItem.id === product.id);
      if (!hit) return product;
      return { ...product, stock: Math.max(0, product.stock - hit.quantity) };
    });
    this.globalData.store.menuOrders = [
      {
        id: `order-menu-${Date.now()}`,
        tableName: this.getCurrentTableName() || `新订单 ${this.globalData.store.menuOrders.length + 1}`,
        items: orderItems,
        total,
        createdAt: '刚刚',
      },
      ...this.globalData.store.menuOrders,
    ];
    this.clearMenuCart();
  },
  clearMenuCart() {
    this.globalData.store.menuCart = [];
  },
  getBeanCart() {
    return this.globalData.store.beanCart.map((item) => ({ ...item }));
  },
  addBeanToCart(productId) {
    const product = this.globalData.store.beanProducts.find((item) => item.id === productId && item.status === 'on');
    if (!product) return;
    const existing = this.globalData.store.beanCart.find((item) => item.id === productId);
    if (existing) {
      if (existing.quantity < product.stock) {
        existing.quantity += 1;
      }
    } else {
      this.globalData.store.beanCart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      });
    }
  },
  updateBeanCartQuantity(productId, delta) {
    this.globalData.store.beanCart = this.globalData.store.beanCart
      .map((item) => {
        if (item.id !== productId) return item;
        const product = this.globalData.store.beanProducts.find((productItem) => productItem.id === productId);
        const nextQuantity = item.quantity + delta;
        const safeQuantity = product ? Math.min(nextQuantity, product.stock) : nextQuantity;
        return { ...item, quantity: safeQuantity };
      })
      .filter((item) => item.quantity > 0);
  },
  checkoutBeanCart() {
    const cart = this.getBeanCart();
    if (!cart.length) return;
    this.globalData.store.beanCart.forEach((cartItem) => {
      this.globalData.store.beanProducts = this.globalData.store.beanProducts.map((product) => (
        product.id === cartItem.id
          ? { ...product, stock: Math.max(0, product.stock - cartItem.quantity) }
          : product
      ));
    });
    this.globalData.store.beanOrders = [
      {
        id: `bean-order-${Date.now()}`,
        customerName: this.globalData.userProfile.username || '顾客',
        phone: '待填写',
        address: '线下自提 / 待补充地址',
        items: cart.map((item) => ({ name: item.name, quantity: item.quantity, price: item.price })),
        total: cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
        expressNo: '',
        status: '待发货',
      },
      ...this.globalData.store.beanOrders,
    ];
    this.clearBeanCart();
  },
  clearBeanCart() {
    this.globalData.store.beanCart = [];
  },
});
