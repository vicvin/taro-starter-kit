import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
 
@connect(({center}) => ({
  ...center,
}))
export default class Center extends Component {
  config = {
    navigationBarTitleText: 'center',
  };
 
  componentDidMount = () => {
    console.log('center', this.props)
  };
 
  render() {
    return (
      <View className='center-page'>
        center
      </View>
    )
  }
}
