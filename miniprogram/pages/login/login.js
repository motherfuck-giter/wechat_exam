// pages/login/login.js
let app = getApp();
const db = wx.cloud.database();
const admin = db.collection('adminlist');
let name = null;
let password = null;
let flag = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //输入工作账号
  inputName: function (e){
    name = e.detail.detail.value
  },
  //输入密码
  inputPassword(e){
    password = e.detail.detail.value
  },

  /*登录*/
  bloginn(){
    let that = this;
    admin.get({
      success:(res)=>{
        let user=res.data;
        if(name=="a"&&password=="a")
          {
            flag=true;
            app.globalData.username=name
            wx.showToast({
              title: '登陆成功！',
              icon: 'success',
              duration: 2500
            })
            wx.navigateTo({
              url: '/pages/firstpage/firstpage',
            })
          }
          else
        for (let i=0;i < user.length; i++){
          if (name == user[i].name){
            if (password != user[i].password){
              wx.showToast({
                title: '密码错误！',
                icon: 'success',
                duration: 2500
              })
            } else{
              app.globalData.username=name
              wx.showToast({
                title: '登陆成功！',
                icon: 'success',
                duration: 2500
              })
              wx.navigateTo({
                url: '/pages/firstpage/firstpage',
              })
              flag = true;
              break;
            }
          } 
        }
        if (flag == false){
          wx.showToast({
            title: '该账号不存在！',
            icon: 'none',
            duration: 2500
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})