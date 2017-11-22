'use strict';

import React from 'react'

class MyHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<strong><p style={{fontSize: "xx-large"}}>Welcome to ICIMCS 2018</p></strong>*/}
                <p style={{"textAlign": "justify", "lineHeight": "1.8em"}}>The 10th International Conference on Internet
                    Multimedia Computing and Service (ICIMCS 2018) will
                    be held at Nanjing, Jiangsu, China, from August 17 to 19, 2018.
                    2017 at Tsingtao, China. The conference will serve as an international forum to bring together
                    researchers and practitioners from academia and industry to discuss cutting-edge research on
                    state-of-the-art of internet multimedia processing, multimedia service, analysis and applications.
                    The conference calls for research papers reporting original investigation results and industrial
                    track papers reporting real multimedia applications and system development experiences. The
                    conference also calls for special session proposals focusing on specific emerging topics in the
                    multimedia area.&nbsp;</p>

                <p style={{"textAlign": "justify", "lineHeight": "1.8em"}}>All previous ICIMCS papers have been indexed
                    by EI. High quality papers will be recommended to the special issue of the SCI-indexed multimedia
                    journal this year.&nbsp;</p>
                <p style={{"textAlign": "justify", "lineHeight": "1.8em"}}>A "Best Paper Award" and a "
                    Best Student Paper Award>" will be conferred to
                    the author(s)
                    of a full paper presented at the conference,selected by the award committee based on the marks of
                    paper reviewing assessed by the Program Committee, and paper presentation quality assessed by
                    session chairs at the conference venue. The "Best Student Paper Award" will be given to a paper in
                    which the first author is a registered undergraduate or graduate student.<br/>
                </p>
                <br/>
            </div>
        );
    }
}

export default MyHomePage