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
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home" >
                                <Link to="/home"/>
                               Home
                            </Menu.Item>
                            <SubMenu title={<span>Program</span>}>
                                <Menu.Item key="keynote"><Link to="/keynote"/>Keynote</Menu.Item>
                                <Menu.Item key="specialSession"><Link to="/specialsession"/>Special Session</Menu.Item>
                            </SubMenu>

                            <SubMenu title={<span>Author</span>}>
                                <Menu.Item key="callForPaper"><Link to="/callforpaper"/>Call For Paper</Menu.Item>
                                <Menu.Item key="paperSubmission"><Link to="/papersubmission"/>Paper Submission</Menu.Item>
                                <Menu.Item key="presentationPreparation"><Link to="/presentationpreparation"/>Presentation Preparation</Menu.Item>
                            </SubMenu>

                            <Menu.Item key="organization">
                                <Link to="/organization"/>
                                Organization
                            </Menu.Item>
                            <SubMenu title={<span>Attending</span>}>
                                <Menu.Item key="registration">
                                    <Link to="/registration"/>
                                    Registration
                                </Menu.Item>
                                <Menu.Item key="visa">
                                    <Link to="/visa"/>
                                    Visa
                                </Menu.Item>
                                <Menu.Item key="conferenceVenue">
                                    <Link to="/conferencevenue"/>
                                    Conference Veneu
                                </Menu.Item>
                                <Menu.Item key="accommodation">
                                    <Link to="/accommodation"/>
                                    Accommodation
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="sponsor">
                                <Link to="/sponsor"/>
                                Sponsor
                            </Menu.Item>
                        </Menu>
                </Row>
                <Row>
                    <img src="src/images/素材/秦淮河.jpg" style={{width : "100%", "maxHeight" : "20em"}}/>
                    <img src="src/images/素材/紫峰1.jpg" style={{width : "100%", "maxHeight" : "20em"}}/>
                    <img src="src/images/素材/紫峰2.jpg" style={{width : "100%", "maxHeight" : "20em"}}/>
                    <img src="src/images/素材/紫峰3.jpg" style={{width : "100%", "maxHeight" : "20em"}}/>

                </Row>
                <Row type="flex"  align="top">
                    <Col md={4} sm={3} xs={1}>

                    </Col>
                    <Col md={16} sm={18} xs={22}>
                    <br/>
                    <br/>
                    {this.props.children}
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
            <IndexRoute component={MyHomePage} />
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
