import Taro, { Component, login } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'



@connect(({ common, home }) => ({ common, ...home }))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    console.log(this.props)
  }

  componentDidHide () { }

  goToDemo = opt => {
    console.log('opt', opt)
    Taro.navigateTo({
      url: '/pages/index/detail/index'
    })
  }

  handleChange = type => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/handleChange',
      payload: {
        type,
      }
    })
  }

  asyncAdd = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/asyncAdd'
    })
  }

  render () {
    const { num } = this.props;
    return (
      <View className='index'>
        <View><Text>当前显示：{num}</Text></View>
        <Button className='add_btn' onClick={this.handleChange.bind(this, 'add')}>+</Button>
        <Button className='dec_btn' onClick={this.handleChange.bind(this, 'dec')}>-</Button>
        <Button className='dec_btn' onClick={this.asyncAdd}>async</Button>
        <View onClick={this.goToDemo.bind(this, "demo")}><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
