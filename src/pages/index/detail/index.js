import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
 
@connect(({detail}) => ({
  ...detail,
}))
class Detail extends Component {
  config = {
    navigationBarTitleText: 'detail',
  };
 
  componentDidMount = () => {
    console.log('this.props is', this.props)
  };
 
  render() {
    return (
      <View className='detail-page'>
        detail
      </View>
    )
  }
}

export default Detail
