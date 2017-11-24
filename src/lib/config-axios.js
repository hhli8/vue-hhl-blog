// ip配置
export const domainConfig = {
  'localhost:8083': {
    url: 'http://127.0.0.1:3000'
  }
}
export const configAxios = {
  init (_axios) {
    _axios.defaults.baseURL = 'http://127.0.0.1:3000'
    //_axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
    //_axios.defaults.headers.post['Content-Type'] = 'application/json';
    //_axios.defaults.headers = {'ss':9}
    // 添加一个请求拦截器
    _axios.interceptors.request.use(function (config) {
       
        //console.log('++++++++++++++++++++');
        //console.log(config);
        // 如果是get请求，将请求参数转码
        if (config.method === 'get') {
            config.url = encodeURI(config.url);
        }
        // Do something before request is sent
        // console.log('请求拦截器');
//      if (store.getters.token) {
//          config.headers['token'] = store.getters.token; // 让每个请求携带token为自定义key 请根据实际情况自行修改
//      }
//      console.log(config.url);
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    
    // 添加一个响应拦截器
    _axios.interceptors.response.use(function (res) {
        // Do something with res data
        // console.log('响应拦截器');
        // res.status;
        // 统一拦截有点问题。比如：有需要定制的提示信息，添加、保存、修改失败等
        // if (res.data.ok) {
        //     // console.log('interceptors');
        //     return res;
        // } else {
        //     window.$message({
        //         type: 'error',
        //         message: res.data.msg || '服务器异常，请稍后重试！'
        //     });
        // }
        return res;
    }, function (error) {
        if (error.response) {
            if (error.response.status === 401) {
                window.$message({
                    type: 'error',
                    message: '登录信息过期，请重新登录！'
                });
                store.commit('USER_SIGNOUT');
            } else if (error.response.status === 412) {
                window.$message({
                    type: 'error',
                    message: '您的账户在别处登陆，已被迫下线，如非本人操作，请及时修改密码！'
                });
                store.commit('USER_SIGNOUT');
            } else if (error.response.status === 500) {
                let loadArr = document.getElementsByClassName('el-loading-mask');
                for (let i = 0; i < loadArr.length; i++) {
                    loadArr[i].style.display = 'none';
                }
            } else {
                window.$message({
                    type: 'error',
                    message: error.error || '服务器异常，请稍后重试！'
                });
                // return Promise.reject(error.response.data);   // 返回接口返回的错误信息
            }
        }
        // return Promise.reject(error.response.data);   // 返回接口返回的错误信息
        return Promise.reject(error);
    });
        
        
  }
}
