/**
 * Created by Administrator on 2017/11/22.
 */
'use strict'

import React from 'react'
import { Col } from 'antd'

class Keynote extends React.Component{
    render(){
        var persons = [
            {
                name : "Tat-Seng Chua",
                location : "National University of Singapore, Singapore",
                url : "http://www.acmmm.org/2017/wp-content/uploads/2017/01/Tat-Seng-Chua-300x300.jpg"
            }
        ]
        return (
            <div>
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
            </div>
        )
    }
}

export default Keynote