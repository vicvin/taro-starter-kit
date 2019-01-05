import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
 
@connect(({album}) => ({
  ...album,
}))
class Album extends Component {
  config = {
    navigationBarTitleText: 'album',
  };
 
  componentDidMount = () => {
    console.log('this.props is', this.props)
    console.log('this.$router', this.$router.params)
    const { dispatch } = this.props;
    const { tabId, checkId } = this.$router.params;
    dispatch({
      type: 'album/initData',
      payload: {
        tabId,
        checkId 
      }
    })
  };
 
  render() {
    const { checkTabName, checkName } = this.props;
    return (
      <View className='album-page'>
        我选择的是{checkTabName}中的{checkName}
      </View>
    )
  }
}

export default Album
