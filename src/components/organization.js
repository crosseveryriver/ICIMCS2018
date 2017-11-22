/**
 * Created by Administrator on 2017/11/22.
 */
'use strict'

import React from 'react'
import { Row, Col } from 'antd'

class Organization extends React.Component{
    render(){
        var personnel = {
            "Honorable Chair": [
                {
                    "name": "Yong Rui",
                    "location": "Lenovo, China",
                    "url": "http://www.acmmm.org/2017/wp-content/uploads/2017/01/Yong-Rui-300x300.jpg"
                }
            ],
            "General Chair": [
                {
                    "name": "Dan Schonfeld",
                    "location": "University of Illinois Chicago, USA",
                    "url": "https://www.ece.uic.edu/~ds/Schonfeld_Home_files/image003.jpg"
                },
                {
                    "name": "Gangshan Wu",
                    "location": "Nanjing University, China",
                    "url": "src/images/gangshanwu.jpg"
                },
                {
                    "name": "Chong-Wah Ngo",
                    "location": "City University of Hong Kong, Hong Kong",
                    "url": "http://www.acmmm.org/2016/wp-content/uploads/2015/11/chong_wah_ngo.jpg"
                }
            ],
            "Program Chair": [
                {
                    "name": "Yo-Sung Ho",
                    "location": "Gwangju Institute of Science and Technology, Korea",
                    "url": "http://www.apsipa.org/tc/IVMPhoto/Yo-Sung%20Ho.jpg"
                },
                {
                    "name": "Jinhui Tang",
                    "location": "Nanjing University of Science and Technology, China",
                    "url": "http://www.acmmm.org/2017/wp-content/uploads/2017/01/Jinhui-Tang.jpg"
                },
                {
                    "name": "Guo-Jun Qi",
                    "location": "University of Central Florida, USA",
                    "url": "http://www.cs.ucf.edu/images/people/img_gqi.jpg"
                },
                {
                    "name": "Tongwei Ren",
                    "location": "Nanjing University, China",
                    "url": "http://software.nju.edu.cn/rentw/img/avatar-rentw.png"
                }
            ],
            "Publicity Chair": [
                {
                    "name": "Tao Mei",
                    "location": "Microsoft Research Asia, China",
                    "url": "http://www.acmsigmmbj.org/products/common/upload/2014/06/27/meitao.jpeg"
                },
                {
                    "name": "Jitao Sang",
                    "location": "Beijing Jiaotong University, China",
                    "url": "http://www.nlpr.ia.ac.cn/mmc/homepage/sangjitao.png"
                }
            ],
            "Local Chair": [
                {
                    "name": "Ting Rui",
                    "location": "PLA University of Science and Technology, China",
                    "url": "TODO"
                },
                {
                    "name": "Qingshan Liu",
                    "location": "Nanjing University of Information Science and Technology, China",
                    "url": "http://isc.nuist.edu.cn/Qingshan/qsliu.jpg"
                },
                {
                    "name": "Yugang Jiang",
                    "location": "Fudan University, China",
                    "url": "http://ccfcv.org/wp-content/uploads/2016/08/31.jpg"
                }
            ],
            "Sponsorship Chair": [
                {
                    "name": "Shiqiang Yang",
                    "location": "Tsinghua University, China",
                    "url": "http://g.hiphotos.baidu.com/baike/pic/item/a8ec8a13632762d0d1f99213a3ec08fa503dc652.jpg"
                },
                {
                    "name": "Yongdong Zhang",
                    "location": "University of Science and Technology of China, China",
                    "url": "http://lfn.ustc.edu.cn/uploadfile/20170420175436895.jpg"
                },
                {
                    "name": "Shuqiang Jiang",
                    "location": "Institute of Computing Technology, Chinese Academy of Sciences, China",
                    "url": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3229325356,1295260164&fm=27&gp=0.jpg"
                }
            ],
            "Publication Chair": [
                {
                    "name": "Rongrong Ji",
                    "location": "Xiamen University, China",
                    "url": "http://www.ee.columbia.edu/~rj2349/newprofile.png"
                },
                {
                    "name": "Binkun Bao",
                    "location": "Institute of Automation, Chinese Academy of Sciences, China",
                    "url": "http://www.nlpr.ia.ac.cn/fileup/PIC/2013881633_1121277125406.jpg"
                },
                {
                    "name": "Weiqing Min",
                    "location": "Institute of Computing Technology, Chinese Academy of Sciences, China",
                    "url": "http://nlpr-web.ia.ac.cn/mmc/homepage/minweiqing.png"
                }
            ],
            "Special Session Chair": [
                {
                    "name": "Qingxiong Yang",
                    "location": "City University of Hong Kong, Hong Kong",
                    "url": "http://www6.cityu.edu.hk/stfprofile/qiyang_STF.jpg"
                },
                {
                    "name": "Peng Cui",
                    "location": "Tsinghua University, China",
                    "url": "http://media.cs.tsinghua.edu.cn/~multimedia/cuipeng/files/IMG_5488.JPG"
                },
                {
                    "name": "Hanwang Zhang",
                    "location": "Nanyang Technological University, Singapore",
                    "url": "http://lms.comp.nus.edu.sg/sites/default/files/styles/medium/public/people-avatars/IMG_5292.JPG"
                }
            ],
            "Finance Chair & Registration Chair": [
                {
                    "name": "Jie Tang",
                    "location": "Nanjing University, China",
                    "url": "http://mcg.nju.edu.cn/image/avatar/tangj_large.jpg"
                }
            ],
            "ACM SIGMM China Chapter Chair": [
                {
                    "name": "Changsheng Xu",
                    "location": "Institute of Automation, Chinese Academy of Sciences, China",
                    "url": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=4786ada68a13632711edc531a18ea056/c8ea15ce36d3d539e0593eb93a87e950352ab067.jpg"
                }
            ]
        }

        return (
            <div>
                <Row type="flex" gutter={20} style={{"lineHeight" : "1.8em","marginBottom" : "20px"}}>
                    <Col span={24} style={{"textAlign" : "center"}}>
                        <h1 >Organizing Committee</h1>
                    </Col>
                    <br/>
                    {Object.keys(personnel).map(function (title) {
                        var persons = personnel[title]
                        return (
                            <Col span={24}>
                                <h2 style={{
                                    "fontSize": "16px",
                                    "fontWeight": "bold",
                                    "lineHeight": "2em",
                                    "marginBottom": "10px"}}>{title}</h2>
                                <hr width="100%" size="3" color="blue"/>
                                <br/>
                                <Row type="flex"  align="top">
                                    {persons.map(function (person) {
                                        return (
                                            <Col md={6} xs={12} sm={8} style={{"textAlign": "center" ,"marginBottom" : "20px"}} key={person.name}>
                                                <div style={{"textAlign": "center"}}>
                                                    <img src={person.url} style={{
                                                        width: "120px",
                                                        height: "120px",
                                                        "overflow": "hidden"
                                                    }}/>
                                                </div>
                                                <p><a href="#">{person.name}</a></p>
                                                <p><a href="#">{person.location}</a></p>
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