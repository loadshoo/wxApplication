// compent/infoCompent/infoCompent.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        image: {
            type:String,
            value:'icon'
        },
        header:{
            type:String,
            value:'header'
        },
        content:{
            type:String,
            value:'content'
        },
        cssStyle:{
            type:String,
            value:'cssStyle'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        image:"/static/images/threejao.png",
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
