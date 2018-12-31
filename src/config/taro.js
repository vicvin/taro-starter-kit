import Taro, { Component } from '@tarojs/taro'
import { SHAREINFO } from './index';

const nav = Taro.navigateTo;

Taro.navigateTo = data => {
  if (Taro.getgetCurrentPages().length > 8) {
    return Taro.redirectTo(data);
  }
  return nav(data)
}

Component.prototype.onShareAppMessage = function() {
  return SHAREINFO;
}