// pages/noItem/noItem.js
Component({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 页面处理函数
  methods: {
    to() {
      wx.switchTab({
        url: '../user/user'
      })
    }
  }
 
})