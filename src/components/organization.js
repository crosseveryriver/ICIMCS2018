/**
 * Created by Administrator on 2017/11/22.
 */
'use strict'

import React from 'react'
import { Row, Col } from 'antd'

class Organization extends React.Component{
    render(){
        var personnel ={
            "Honorable Chair": [
                {
                    "name": "Yong Rui",
                    "location": "Lenovo, China",
                    "url": "src/images/avatar/Yong-Rui-300x300.jpg"
                }
            ],
            "General Chair": [
                {
                    "name": "Dan Schonfeld",
                    "location": "University of Illinois Chicago, USA",
                    "url": "src/images/avatar/image003.jpg"
                },
                {
                    "name": "Gangshan Wu",
                    "location": "Nanjing University, China",
                    "url": "src/images/avatar/gangshanwu.jpg"
                },
                {
                    "name": "Chong-Wah Ngo",
                    "location": "City University of Hong Kong, Hong Kong",
                    "url": "src/images/avatar/chong_wah_ngo.jpg"
                }
            ],
            "Program Chair": [
                {
                    "name": "Yo-Sung Ho",
                    "location": "Gwangju Institute of Science and Technology, Korea",
                    "url": "src/images/avatar/Yo-Sung%20Ho.jpg"
                },
                {
                    "name": "Jinhui Tang",
                    "location": "Nanjing University of Science and Technology, China",
                    "url": "src/images/avatar/Jinhui-Tang.jpg"
                },
                {
                    "name": "Guo-Jun Qi",
                    "location": "University of Central Florida, USA",
                    "url": "src/images/avatar/guojunqi.jpg"
                },
                {
                    "name": "Tongwei Ren",
                    "location": "Nanjing University, China",
                    "url": "src/images/avatar/avatar-rentw.png"
                }
            ],
            "Publicity Chair": [
                {
                    "name": "Tao Mei",
                    "location": "Microsoft Research Asia, China",
                    "url": "src/images/avatar/meitao.jpeg"
                },
                {
                    "name": "Jialie Shen",
                    "location": "Newcastle University, UK",
                    "url": "src/images/avatar/JialieShen .jpg"
                },
                {
                    "name": "Jitao Sang",
                    "location": "Beijing Jiaotong University, China",
                    "url": "src/images/avatar/jitaosang.jpg"
                }
            ],
            "Local Chair": [
                {
                    "name": "Ting Rui",
                    "location": "PLA University of Science and Technology, China",
                    "url": "src/images/avatar/ruit.jpg"
                },
                {
                    "name": "Qingshan Liu",
                    "location": "Nanjing University of Information Science and Technology, China",
                    "url": "src/images/avatar/qsliu.jpg"
                },
                {
                    "name": "Yugang Jiang",
                    "location": "Fudan University, China",
                    "url": "src/images/avatar/31.jpg"
                }
            ],
            "Sponsorship Chair": [
                {
                    "name": "Shiqiang Yang",
                    "location": "Tsinghua University, China",
                    "url": "src/images/avatar/yangsq.jpg"
                },
                {
                    "name": "Yongdong Zhang",
                    "location": "University of Science and Technology of China, China",
                    "url": "src/images/avatar/20170420175436895.jpg"
                },
                {
                    "name": "Shuqiang Jiang",
                    "location": "Institute of Computing Technology, Chinese Academy of Sciences, China",
                    "url": "src/images/avatar/u=3229325356,1295260164&fm=27&gp=0.jpg"
                }
            ],
            "Publication Chair": [
                {
                    "name": "Rongrong Ji",
                    "location": "Xiamen University, China",
                    "url": "src/images/avatar/rongrongji.jpg"
                },
                {
                    "name": "Binkun Bao",
                    "location": "Institute of Automation, Chinese Academy of Sciences, China",
                    "url": "src/images/avatar/2013881633_1121277125406.jpg"
                },
                {
                    "name": "Weiqing Min",
                    "location": "Institute of Computing Technology, Chinese Academy of Sciences, China",
                    "url": "src/images/avatar/minweiqing.png"
                }
            ],
            "Special Session Chair": [
                {
                    "name": "Qingxiong Yang",
                    "location": "City University of Hong Kong, Hong Kong",
                    "url": "src/images/avatar/qiyang_STF.jpg"
                },
                {
                    "name": "Peng Cui",
                    "location": "Tsinghua University, China",
                    "url": "src/images/avatar/IMG_5488.JPG"
                },
                {
                    "name": "Hanwang Zhang",
                    "location": "Nanyang Technological University, Singapore",
                    "url": "src/images/avatar/IMG_5292.JPG"
                }
            ],
            "Finance Chair & Registration Chair": [
                {
                    "name": "Jie Tang",
                    "location": "Nanjing University, China",
                    "url": "src/images/avatar/jietang.jpg"
                }
            ],
            "ACM SIGMM China Chapter Chair": [
                {
                    "name": "Changsheng Xu",
                    "location": "Institute of Automation, Chinese Academy of Sciences, China",
                    "url": "src/images/avatar/changshengxu.jpg"
                }
            ]
        }

        return (
            <div>
                <Row type="flex" gutter={20} style={{"lineHeight" : "1.8em","marginBottom" : "20px"}}>
                    <br/>
                    {Object.keys(personnel).map(function (title) {
                        var persons = personnel[title]
                        return (
                            <Col span={24} key={title}>
                                <h2 style={{
                                    "fontWeight": "bold",
                                    "lineHeight": "2em",
                                    "marginBottom": "10px"}}>{title}</h2>
                                <br/>
                                <Row type="flex"  align="top">
                                    {persons.map(function (person) {
                                        return (
                                            <Col md={6} xs={12} sm={8} style={{"textAlign": "center" ,"marginBottom" : "20px"}} key={person.name}>
                                            <div style={{"textAlign": "center"}}>
                                                <img src={person.url} style={{
                                                    width: "160px",
                                                    height: "160px",
                                                    "borderRadius": "100%",
                                                    "overflow": "hidden"
                                                }}/>
                                            </div>
                                            <p><strong>{person.name}</strong></p>
                                            <p>{person.location}</p>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}

export default Organization