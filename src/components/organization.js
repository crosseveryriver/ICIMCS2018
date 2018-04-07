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
                    "url": "src/images/avatar/yongrui.jpg"
                }
            ],
            "General Chair": [
                {
                    "name": "Dan Schonfeld",
                    "location": "University of Illinois Chicago, USA",
                    "url": "src/images/avatar/danschonfeld.jpg"
                },
                {
                    "name": "Gangshan Wu",
                    "location": "Nanjing University, China",
                    "url": "src/images/avatar/gangshanwu.jpg"
                },
                {
                    "name": "Chong-Wah Ngo",
                    "location": "City University of Hong Kong, Hong Kong",
                    "url": "src/images/avatar/chongwahngo.jpg"
                }
            ],
            "Program Chair": [
                {
                    "name": "Yo-Sung Ho",
                    "location": "Gwangju Institute of Science and Technology, Korea",
                    "url": "src/images/avatar/yosungho.jpg"
                },
                {
                    "name": "Jinhui Tang",
                    "location": "Nanjing University of Science and Technology, China",
                    "url": "src/images/avatar/jinhuitang.jpg"
                },
                {
                    "name": "Guo-Jun Qi",
                    "location": "University of Central Florida, USA",
                    "url": "src/images/avatar/guojunqi.jpg"
                },
                {
                    "name": "Tongwei Ren",
                    "location": "Nanjing University, China",
                    "url": "src/images/avatar/tongweiren.png"
                }
            ],
            "Publicity Chair": [
                {
                    "name": "Tao Mei",
                    "location": "JD, China",
                    "url": "src/images/avatar/meitao.jpeg"
                },
                {
                    "name": "Jialie Shen",
                    "location": "Newcastle University, UK",
                    "url": "src/images/avatar/jialieshen.jpg"
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
                    "location": "The Army Engineering University of PLA, China",
                    "url": "src/images/avatar/tingrui.jpg"
                },
                {
                    "name": "Qingshan Liu",
                    "location": "Nanjing University of Information Science and Technology, China",
                    "url": "src/images/avatar/qingshanliu.jpg"
                },
                {
                    "name": "Yugang Jiang",
                    "location": "Fudan University, China",
                    "url": "src/images/avatar/yugangjiang.jpg"
                }
            ],
            "Sponsorship Chair": [
                {
                    "name": "Shiqiang Yang",
                    "location": "Tsinghua University, China",
                    "url": "src/images/avatar/shiqiangyang.jpg"
                },
                {
                    "name": "Yongdong Zhang",
                    "location": "University of Science and Technology of China, China",
                    "url": "src/images/avatar/yongdongzhang.jpg"
                },
                {
                    "name": "Shuqiang Jiang",
                    "location": "Institute of Computing Technology, Chinese Academy of Sciences, China",
                    "url": "src/images/avatar/shuqiangjiang.jpg"
                }
            ],
            "Publication Chair": [
                {
                    "name": "Rongrong Ji",
                    "location": "Xiamen University, China",
                    "url": "src/images/avatar/rongrongji.jpg"
                },
                {
                    "name": "Bing-Kun Bao",
                    "location": "Institute of Automation, Chinese Academy of Sciences, China",
                    "url": "src/images/avatar/binkunbao.jpg"
                },
                {
                    "name": "Weiqing Min",
                    "location": "Institute of Computing Technology, Chinese Academy of Sciences, China",
                    "url": "src/images/avatar/weiqingmin.png"
                }
            ],
            "Special Session Chair": [
                {
                    "name": "Peng Cui",
                    "location": "Tsinghua University, China",
                    "url": "src/images/avatar/pengcui.JPG"
                },
                {
                    "name": "Hanwang Zhang",
                    "location": "Nanyang Technological University, Singapore",
                    "url": "src/images/avatar/hanwangzhang.JPG"
                },
                {
                    "name": "Si Liu",
                    "location": "Institute of Information Engineering, Chinese Academy of Sciences, China",
                    "url": "src/images/avatar/siliu.jpg"
                },
                {
                    "name":"Huimin Lu",
                    "location":"Kyushu Institute of Technology, Japan",
                    "url":"src/images/avatar/huiminlu.jpg"
                }
            ],
            "Finance Chair & Registration Chair": [
                {
                    "name": "Jie Tang",
                    "location": "Nanjing University, China",
                    "url": "src/images/avatar/jietang.jpg"
                }
            ],
            "Website Chair": [
                {
                    "name": "Xi Shao",
                    "location": "Nanjing University of Posts and Telecommunications, China",
                    "url": "src/images/avatar/xishao.jpg"
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