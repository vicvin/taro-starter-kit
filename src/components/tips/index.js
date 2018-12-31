import Taro from '@tarojs/taro'

export default class Tips{
  isLoading = false;
  /**
   *
   *
   * @param {*} title 显示信息
   * @param {*} onHide 隐藏的回调
   */
  toast(title, icon='none', duration=2000, onHide) {
    Taro.showToast({
      title,
      icon,
      mask: true,
      duration,
    })
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500)
    }
  }
  /**
   *  弹出加载提示
   *
   * @param {string} [title='加载中...']
   * @param {boolean} [force=false]
   */
  loading(title='加载中...', force=false) {
    if (this.isLoading && !force) return;
    this.loading = true;
    if (Taro.showLoading) {
      Taro.showLoading({
        title,
        mask: true,
      })
    } else {
      Taro.showNavigationBarLoading()
    }
  }
  /**
   *  加载完成
   * @returns
   * @memberof Tips
   */
  loaded() {
    let duration = 0;
    if (this.isLoading) {
      this.isLoading = false;
      if (Taro.hideLoading) {
        Taro.hideLoading()
      } else {
        Taro.hideNavigationBarLoading()
      }
      duration = 500;
    }
    return new Promise(resolve => setTimeout(resolve, duration))
  }
  /**
   * 弹出提示框
   *
   * @param {*} title
   * @param {number} [duration=1500]
   * @memberof Tips
   */
  success(title, duration=1500) {
    Taro.showToast({
      title,
      icon: 'success',
      duration,
    })
    if (duration > 0) {
      return new Promise(resolve => setTimeout(resolve, duration))
    }
  }

}