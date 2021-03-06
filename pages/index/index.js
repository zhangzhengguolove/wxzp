//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    usernameInput: '',
    passwordInput: '',
    navH: 0
  },
  //事件处理函数
  onLoad: function () {
    this.setData({
      navH: app.globalData.navHeight
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  usernameInput: function (e) {//身份证判断
    this.setData({
      usernameInput: e.detail.value
    })
  },
  passwordInput: function (e) {//密码判断
    this.setData({
      passwordInput: e.detail.value
    })
  },
  loginBtnClick: function (e) {//登陆判断
    if (this.data.usernameInput==""){
      wx.showToast({
        title: '请输入身份证号！',
        icon: 'none',
        duration: 2000
      }) 
    } else if (this.data.passwordInput == ""){
      wx.showToast({
        title: '请输入密码！',
        icon: 'none',
        duration: 2000
      }) 
    }
  },
  ccmm: function (options) {//注册
     wx.navigateTo({
       url: '../register/register',
     })
  },
  wjmma: function (options) {//忘记密码
    wx.navigateTo({
      url: '../forget/forget',
    })
  }
})
