import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtAvatar } from 'taro-ui'

import './index.scss';

import AvatarIcon from '../../assets/images/default/user/avatar.png'
import StateNewIcon from '../../assets/images/default/user/order/state_new.png'
import StatePayIcon from '../../assets/images/default/user/order/state_pay.png'
import StateSendIcon from '../../assets/images/default/user/order/state_send.png'
import StateUnevaluateIcon from '../../assets/images/default/user/order/state_unevaluate.png'
import StateRefundIcon from '../../assets/images/default/user/order/state_refund.png'
import AddressIcon from '../../assets/images/default/user/address.png'
import CollectIcon from '../../assets/images/default/user/collect.png'
 
@connect(({center}) => ({
  ...center,
}))
class Center extends Component {
  state = {
    orderContent: [
      {
        id: 1,
        icon: StateNewIcon,
        name: '待收货'
      },
      {
        id: 2,
        icon: StatePayIcon,
        name: '待收货'
      },
      {
        id: 3,
        icon: StateSendIcon,
        name: '已完成'
      },
      {
        id: 4,
        icon: StateUnevaluateIcon,
        name: '待评价'
      },
      {
        id: 5,
        icon: StateRefundIcon,
        name: '退款售后'
      }
    ],
    moreContent: [
      {
        id: 1,
        icon: AddressIcon,
        name: '地址管理',
      },
      {
        id: 2,
        icon: CollectIcon,
        name: '商品关注'
      }
    ]
  }
  config = {
    navigationBarTitleText: '个人中心',
  };
 
  componentDidMount = () => {
    console.log('center', this.props)
  };
 
  render() {
    const { orderContent, moreContent } = this.state
    return (
      <View className='center-page'>
        <View className='avatar-wrap'>
          <AtAvatar image={AvatarIcon} circle></AtAvatar>
          <Text className='nick'>点击登录</Text>
        </View>
        {/* 订单 */}
        <View className='order'>
          <Text className='my-order'>我的订单</Text>
          <Text className='all-order' onClick={this.handleIcon.bind(this, 0, '/pages/order/index?tab=0')}>全部订单</Text>
        </View>
        <View className='icon-wrap'>
          {
            orderContent.map(icon=>{
              return(
                <View key={icon.id} className='icon-item' onClick={this.handleIcon.bind(this, icon.id, icon.path)}>
                  <Image src={icon.icon} className='icon-img'></Image>
                  <Text>{icon.name}</Text>
                </View>
              )
            })
          }
        </View>
        <View className='more-wrap'>
          {moreContent.map(item => {
            return(
              <View key={item.id} className='more-item'>
                <Image className='more-icon' src={item.icon}></Image>
                <Text>{item.name}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}


export default Center