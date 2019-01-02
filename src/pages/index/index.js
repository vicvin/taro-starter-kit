import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'


@connect(({ common, home }) => ({ common, home }))
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
      url: '/pages/detail/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View onClick={this.goToDemo.bind(this, "demo")}><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
