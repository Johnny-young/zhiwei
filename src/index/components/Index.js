/**
 * Created by lenovo on 2017/12/7.
 * Index页面组件
 */
import React, {Component} from 'react';
import Header from './Header'; //页头
import Content from './Content'; //内容
import Footer from './Footer'; // 页尾
import Utils from '../../utils/utils'; //工具

class Index extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null
    }
  }
  // 初始化获取用户信息，然后传递到需要的子组件
  componentDidMount() {
    Utils.ajax('user', null, (err, data) => {
      this.setState({'userInfo': data});
    });
  }

  render() {
    return <div>
      <Header userInfo={this.state.userInfo}/>
      <Content/>
      <Footer/>
    </div>
  }
}

export default Index;