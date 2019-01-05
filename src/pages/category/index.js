import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView, Image, Text, } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
 
@connect(({category}) => ({
  ...category,
}))
class Category extends Component {
  config = {
    navigationBarTitleText: '分类',
  };

  componentDidShow = () => {
    const systemInfo = Taro.getSystemInfoSync();
    this.setState({
      screenHeight: systemInfo.windowHeight,
    })
  };

  componentDidMount = () => {
    console.log('this.props is', this.props)
    const { dispatch } = this.props;
    dispatch({
      type: 'category/initData'
    })
  };

  changeTab = id => {
    const { tagCheckId } = this.props;
    if (id === tagCheckId) return;
    // const checkId = id-2 > 0 ? id-2 : 0;
    // this.setState({
    //   tagCheckId: id,
    //   tagCheckView: `check${checkId}`
    // })
    console.log('点击的左侧栏--->', this.props)
    console.log('点击的左侧栏id--->', id)
    const { dispatch } = this.props;
    dispatch({
      type: 'category/changeTab',
      payload: {
        id,
      }
    })
  }

  handleCategory = id => {
    const { tagCheckId } = this.props;
    console.log('点击的id',this.props, id)
    Taro.navigateTo({
      url: `/pages/index/album/index?tabId=${tagCheckId}&checkId=${id}`
    })
  }
 
  render() {
    const { screenHeight } = this.state;
    const { tagList, tagCheckId, tagCheckView, categoryList } = this.props;
    console.log('this.props', this.props)
    return (
      <View className='cate'>
        {/* <View className='category-content' style={{height: `${screenHeight-42.5}px`}}> */}
        <View className='category-content'>
          {/* 左侧 */}
          <ScrollView 
            scrollIntoView={tagCheckView}
            scrollY
            className='category-left'
            scrollWithAnimation
            // style={{height: `${screenHeight-42.5}px`}}
            style={{height: `${screenHeight}px`}}
          >
            <View className='left-list'>
              {tagList.map(tag => {
                return(
                  <View key={tag.id} id={`check${tag.id}`} onClick={this.changeTab.bind(this, tag.id)} className={tagCheckId === tag.id?'left-item active':'left-item'}>
                    <Text className='left-item-text'>{tag.text}</Text>
                  </View>
                )
              })}
            </View>
          </ScrollView>
          {/* 右侧显示 */}
          <ScrollView
            scrollY='true'
            scrollWithAnimation
            className='category-right-scroll'
            // style={{height: `${screenHeight-42.5}px`}}
            style={{height: `${screenHeight}px`}}
          >
            <View className='category-right'>
              {categoryList.map(tag => {
                return(
                  <View key={tag.id} onClick={this.handleCategory.bind(this, tag.id)} className='right-item'>
                    <Image src={tag.img} className='right-item-img'></Image>
                    <View className='right-item-text'>{tag.text}</View>
                  </View>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Category
