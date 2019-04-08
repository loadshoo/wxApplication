//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        arter: [
            //01
            {
                imageArt: "/static/images/art-one.png",
                imageInfo: "/static/images/artLuag.png",
                imgNumber: "/static/images/01.png",
                name: "微静",
                info1: "1999.8",
                info2: "167cm",
                info3: "中国传媒大学",
                info4: "表演专业"
            },
            //02
            {
                imageArt: "/static/images/art-two.png",
                imageInfo: "/static/images/fians.png",
                imgNumber: "/static/images/number2.png",
                name: "阿瓦古丽",
                artStyleTwo: "art-img-two art-img",
                info1: "1998.11",
                info2: "165cm",
                info3: "出国留学",
                info4: "流行舞蹈专业"
            },
            //03
            {
                imageArt: "/static/images/art-three.png",
                imageInfo: "/static/images/info-art-three.png",
                imgNumber: "/static/images/number03.png",
                name: "毛毛",
                info1: "1999.12",
                info2: "165cm",
                info3: "四川艺术职业学院",
                info4: "流行舞蹈专业"
            },
            //04
            {
                imageArt: "/static/images/art-four.png",
                imageInfo: "/static/images/info-art-four.png",
                imgNumber: "/static/images/number04.png",
                name: "蕾蕾",
                info1: "2000.4",
                info2: "166cm",
                info3: "长江职业学院",
                info4: "播音主持"
            },
            //05
            {
                imageArt: "/static/images/art-five.png",
                imageInfo: "/static/images/info-art-five.png",
                imgNumber: "/static/images/number05.png",
                name: "邱纤",
                info1: "1999.11",
                info2: "164cm",
                info3: "四川师范大学",
                info4: "表演专业"
            },
            //06
            {
                imageArt: "/static/images/art-six.png",
                imageInfo: "/static/images/info-art-six.png",
                imgNumber: "/static/images/number06.png",
                name: "晓知",
                info1: "1999.7",
                info2: "165cm",
                info3: "四川艺术职业学院",
                info4: "影视表演专业"
            },

        ],
    },
    //小程序转发实现
    onShareAppMessage: function(res) {
        if (res.from === 'button') {
            console.log(res.target, res)
        }
        return {
            title: "好多美少女",
            path: "pages/index/index",
            imageUrl: "/static/images/frist.png"
        }
    },
    //拨号实现
    telPhone: function() {
        wx.makePhoneCall({
            phoneNumber: '17780663441',
        })
    },
    //复制
    bindViewTap: function() {

        wx.setClipboardData({
            data: '这是一个微信号',
            success: function(res) {
                wx.showToast({
                    title: '微信号已复制',
                    icon: "none"
                })
            }
        })
    },

    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
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
    }
})