import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
 
@connect(({cart}) => ({
  ...cart,
}))
class Cart extends Component {
  config = {
    navigationBarTitleText: '购物车',
  };
 
  componentDidMount = () => {
    console.log('this.props is', this.props)
  };
 
  render() {
    return (
      <View className='cart-page'>
        cart
      </View>
    )
  }
}

export default Cart
