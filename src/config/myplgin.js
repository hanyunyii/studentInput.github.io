//引入axios
import Axios from 'axios'
import axios from "axios";

//插件是一个对象 对象中必须有install方法  我们在install方法的形参Vue就是Vue原型,我们可以在方法中编写逻辑代码
var myplgin = {
    install(Vue) {
        //添加拦截器
        var my_axios = Axios.create({
            //设置基准url以后调用axios请求都会将这里的url拼接在请求的url前

        })
        my_axios.interceptors.request.use((config) => {
            return config;

        })
        //处理好的axios设置到vue原型对象中
        // axios.defaults.baseURL = 'https://www.vshanxi.cn:8111'
        axios.defaults.baseURL = 'http://127.0.0.1:9112/'
        // axios.defaults.baseURL = 'http://182.92.190.125:9112'
        axios.defaults.headers.satoken=localStorage.getItem('token')
        Vue.prototype.$http = my_axios
    }
}

//打包导出
export default myplgin;