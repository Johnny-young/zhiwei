/**
 * Created by lenovo on 2017/12/7.
 * 头部组件
 */
import React, {Component} from 'react';
import '../../../styles/index/header.css';

import UserCard from './UserCard';

// import Utils from '../../utils/utils';

// 登录时显示的组件
class Logined extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserCard: false
    }
  }
  render() {
    return <ul className="logined">
      <li className="download"><a className="btn_empty">下载APP</a></li>
      <li className="notify"><a className="notice"><img src="/images/notice.png"/></a></li>
      <li className="user-picture" onMouseEnter={() => this.setState({
        showUserCard: true
      })} onMouseLeave={() => this.setState({
        showUserCard: false
      })}>
        <a className="picture" ><img src={this.props.userInfo.imgUrl}/></a>
        {this.state.showUserCard ? <UserCard userInfo={this.props.userInfo}/> : null}
      </li>
    </ul>
  }
}

// 未登录显示的组件
class UnLogined extends Component {
  render() {
    return <ul className="unlogined">
      <li><a className="btn_empty">下载APP</a></li>
      <li><a href="/login">登录/注册</a></li>
    </ul>
  }
}

// 头部组件
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <div className="header">
        <div className="logo">
          <a href="/index" target="_self" title="首页">
            <img src="/images/logo.png" alt=""/>
          </a>
        </div>
        <ul className="nav-item">
          <li className="item"><a>技术分享</a></li>
          <li className="item"><a>技术资讯</a></li>
          <li className="item"><a>开源项目</a></li>
          <li className="item"><a>程序人生</a></li>
        </ul>
        <div className="search">

        </div>
        <div className="login-area">
          {this.props.userInfo ? <Logined userInfo={this.props.userInfo}/> : <UnLogined/>}
        </div>
      </div>
    </div>
  }
}


export default Header;