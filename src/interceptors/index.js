import { Indicator } from 'mint-ui'
const interceptRequest = {
  addToken (config) {
    if (config.method === 'post' && config.data.isLogin === true) {
      delete config.data.isLogin
      config.data.accesstoken = 'd0bcaffb-af98-4960-bda2-437d3bd6b75b'
    } else if (config.method === 'post') {
      config.data.accesstoken = 'd0bcaffb-af98-4960-bda2-437d3bd6b75b'
    } else {
      config.accesstoken = 'd0bcaffb-af98-4960-bda2-437d3bd6b75b'
    }
    return config
  },
  loading (config) {
    var txt = '加载中...'
    if (config.data) {
      if (config.data.loadingTxt) {
        txt = config.data.loadingTxt
        delete config.data.loadingTxt
      }
    }
    Indicator.open(txt)
    return config
  },
  requestError (error) {
    // 对发起请求错误做点什么
    return Promise.reject(error)
  }
}
const interceptResponse = {
  closeLoading (response) {
    Indicator.close()
    return response
  },
  responseError (error) {
    // 对响应请求错误做点什么
    Indicator.close()
    return Promise.reject(error)
  }
}

export {
  interceptRequest,
  interceptResponse
}
