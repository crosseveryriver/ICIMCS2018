'use strict';

import React from 'react'

class MyHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{fontSize: 14}}>
                <strong><p style={{fontSize: "xx-large"}}>Welcome to ICIMCS 2018</p></strong>
                <p style={{"textAlign": "justify", "lineHeight" : "1.8em"}}><span style={{"color": "#025695"}}><strong>The 9th International Conference on Internet
                    Multimedia Computing and Service (ICIMCS 2017)</strong> </span>will be held from August 23 - 25,
                    2017 at Tsingtao, China. Surrounded by sea and mountains, Tsingtao has the modern facilities for
                    vacation, convention, and exhibition. This city, bordered by the Yellow Sea on two sides, has the
                    largest bathing beach in Asia and produces the mellow Tsingtao Beer. The three-day conference
                    includes invited keynotes, oral, and poster presentations.&nbsp;</p>

                <p style={{"textAlign": "justify", "lineHeight" : "1.8em"}}>All previous ICIMCS papers have been indexed by EI. Selected high-quality
                    papers will be recommended to the special issue of the SCI-indexed multimedia journal this year.</p>
                <p style={{"textAlign": "justify", "lineHeight" : "1.8em"}}>A "<span style={{"color" : "#FF0000"}}><strong>Best Paper Award</strong></span>" and a "<span
                    style={{"color" : "#FF0000"}}><strong>Best Student Paper Award</strong></span>" will be conferred to the author(s)
                    of a full paper presented at the conference, selected by the award committee based on the marks of
                    paper reviewing assessed by the Program Committee, and paper presentation quality assessed by
                    session chairs at the conference venue. The "Best Student Paper Award" will be given to a paper in
                    which the first author is a registered postgraduate or Ph.D student.<br/>
                </p>
            </div>
    );
    }
    }

    export default MyHomePage