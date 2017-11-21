'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';
import {Menu, Icon, Row, Col} from 'antd';
import MyHomePage from './homepage'
import Author from './author'
import { Navbar} from 'antd-mobile'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: ''
        };
    }

    handleClick= (e) => {
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <div style={{fontSize : "1em"}}>
                <Row>
                    <img src="src/images/logo.jpg" style={{width : "100%" }}/>
                </Row>
                <Row>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={this.state.current}
                            mode="horizontal"
                        >
                            <Menu.Item key="homepage"  style={{"text-align" : "center"}}>
                                <Link to="/homepage"/>
                               Homepage
                            </Menu.Item>
                            <Menu.Item key="authors" style={{"text-align" : "center"}}>
                                <Link to="/authors"/>
                               Authors
                            </Menu.Item >

                            <Menu.Item style={{"text-align" : "center"}}>
                                Other
                            </Menu.Item>
                            <Menu.Item style={{"text-align" : "center"}}>
                                Other
                            </Menu.Item><Menu.Item style={{"text-align" : "center"}}>
                            Other
                        </Menu.Item><Menu.Item style={{"text-align" : "center"}}>
                            Other
                        </Menu.Item><Menu.Item style={{"text-align" : "center"}}>
                            Other
                        </Menu.Item><Menu.Item style={{"text-align" : "center"}}>
                            Other
                        </Menu.Item>
                        </Menu>
                </Row>
                <Row>
                    <img src="src/images/nanjing.jpg" style={{width : "100%", "max-height" : "20em"}}/>
                </Row>
                <Row>
                    <Col md={4} sm={3} xs={1}></Col>
                    <Col md={16} sm={18} xs={22}>
                    <br/>
                    <br/>
                    {this.props.children}
                </Col></Row>
            </div>
        );
    }
}


// 配置路由
ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={Sider}>
            <IndexRoute component={MyHomePage} />
            <Route path="homepage" component={MyHomePage}/>
            <Route path="authors" component={Author}/>
        </Route>
    </Router>
), document.getElementById('app'));
