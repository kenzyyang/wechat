//index.js
const app = getApp()

Page({
  data: {
    itemList: [

    ],
    hasItem: false
  },

  onLoad: function() {
    // 获取用户信息
    wx.cloud.callFunction({
      name: 'login',
    }).then(res => {
      this.setData({
        openId: res.result.event.userInfo.openId,
        logged: true,
      });
    })
    if (this.data.itemList.length === 0) {
      console.log('无词条');
    }
  },
  onGetOpenid: function() {
    // 调用云函数
  
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid);
        app.globalData.openid = res.result.openid;
        console.log(res);
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
 

})
