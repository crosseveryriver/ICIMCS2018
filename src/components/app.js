'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {Menu, Row, Col} from 'antd';
import MyHomePage from './homepage'
import Author from './author'
import Sponsor from './sponsor'
import Organization from './organization'
import CallForPaper from './callforpaper'
import Accommodation from './accommodation'
import ConferenceVenue from './conferencevenue'
import Keynote from './keynote'
import PaperSubmission from './papersubmission'
import PresentationPreparation from './presentationpreparation'
import Registration from './registration'
import SpecialSession from './specialsession'
import Visa from './visa'
const SubMenu = Menu.SubMenu;

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: ''
        };
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <div style={{
                fontSize: "16.5px",
                lineHeight: "28px",
                fontWeight: "400",
                fontStyle: "normal"
            }}>
                <Row style={{"textAlign": "center"}}>
                    <img src="src/images/logo2.png" style={{maxWidth: "100%"}}/>
                </Row>
                <Row>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="home">
                            <Link to="/home"/>
                            <strong>Home</strong>
                        </Menu.Item>
                        <SubMenu title={<span><strong>Program</strong></span>}>
                            <Menu.Item key="keynote"><Link to="/keynote"/><strong>Keynote</strong></Menu.Item>
                            <Menu.Item key="specialSession"><Link to="/specialsession"/><strong>Special Session</strong></Menu.Item>
                        </SubMenu>

                        <SubMenu title={<span><strong>Author</strong></span>}>
                            <Menu.Item key="callForPaper"><Link to="/callforpaper"/><strong>Call For
                                Paper</strong></Menu.Item>
                            <Menu.Item key="paperSubmission"><Link to="/papersubmission"/><strong>Paper
                                Submission</strong></Menu.Item>
                            <Menu.Item key="presentationPreparation"><Link to="/presentationpreparation"/><strong>Presentation
                                Preparation</strong></Menu.Item>
                        </SubMenu>

                        <Menu.Item key="organization">
                            <Link to="/organization"/>
                            <strong> Organization</strong>
                        </Menu.Item>
                        <SubMenu title={<span><strong>Attending</strong></span>}>
                            <Menu.Item key="registration">
                                <Link to="/registration"/>
                                <strong>Registration</strong>
                            </Menu.Item>
                            <Menu.Item key="visa">
                                <Link to="/visa"/>
                                <strong> Visa</strong>
                            </Menu.Item>
                            <Menu.Item key="conferenceVenue">
                                <Link to="/conferencevenue"/>
                                <strong>Conference Veneu</strong>
                            </Menu.Item>
                            <Menu.Item key="accommodation">
                                <Link to="/accommodation"/>
                                <strong> Accommodation</strong>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="sponsor">
                            <Link to="/sponsor"/>
                            <strong> Sponsor</strong>
                        </Menu.Item>
                    </Menu>
                </Row>
                <Row>
                    <img src="src/images/素材/秦淮河.jpg" style={{width: "100%", "maxHeight": "20em"}}/>
                </Row>
                <Row type="flex" align="top">
                    <Col md={4} sm={3} xs={1}>

                    </Col>
                    <Col md={16} sm={18} xs={22}>
                        <br/>
                        <br/>
                        {this.props.children}
                        <br/>
                    </Col>
                    <Col span={24}>
                        <footer style={{textAlign : "center",backgroundColor : "#666",color : "white" , position: "absolute",
                            bottom: 0,width : "100%"}}>
                            <p>Posted by: ICIMCS 2018</p>
                        </footer>
                    </Col>

                </Row>
            </div>
        );
    }
}


// 配置路由
ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={Sider}>
            <IndexRoute component={MyHomePage}/>
            <Route path="home" component={MyHomePage}/>
            <Route path="author" component={Author}/>
            <Route path="sponsor" component={Sponsor}/>
            <Route path="organization" component={Organization}/>
            <Route path="callforpaper" component={CallForPaper}/>
            <Route path="accommodation" component={Accommodation}/>
            <Route path="conferencevenue" component={ConferenceVenue}/>
            <Route path="keynote" component={Keynote}/>
            <Route path="papersubmission" component={PaperSubmission}/>
            <Route path="presentationpreparation" component={PresentationPreparation}/>
            <Route path="registration" component={Registration}/>
            <Route path="specialsession" component={SpecialSession}/>
            <Route path="visa" component={Visa}/>
        </Route>
    </Router>
), document.getElementById('app'));
