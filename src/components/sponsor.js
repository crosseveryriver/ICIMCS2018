/**
 * Created by Administrator on 2017/11/22.
 */
'use strict';

import React from 'react'

class Sponsor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{fontSize: 14}}>
                <p>On behalf of the Conference Committee of the 10th International Conference on Internet Multimedia
                    Computing and Service, we invite you to participate in the sponsor program for ICIMCS 2018. The
                    conference will be held in Nanjing, Jiangsu, China, from August 17 to 19, 2018.
                    ICIMCS 2018 will gather researchers and academics from all over the world presenting important
                    results, new trends, and challenges in this area of Internet Multimedia.
                    We believe that the conference provides an ideal opportunity for companies working in cutting-edge
                    technology fields not only to show their brand to some of the brightest minds in the world, but also
                    be exposed to millions of viewers and readers through media reports on this conference.
                    A detailed note on the sponsorship options is attached. We are sure that your company will find it
                    of interest.
                    We sincerely invite you to come to Nanjing to explore and enjoy its myriad of facets, wealth of
                    activity and life excitement, while enjoying our meeting and exchange of information through this
                    unique international event of ICIMCS 2018 in a pleasant atmosphere.
                    We are looking forward to welcoming you in Nanjing.</p>
                <br/>
                <p>Yours sincerely,</p>
                <p>ICIMCS 2018 Sponsorship Chairs:</p>
                <p>Shiqiang Yang, Tsinghua University</p>
                <p>Yongdong Zhang, University of Science and Technology of China</p>
                <p>Shuqiang Jiang, Institute of Computing Technology, Chinese Academy of Sciences</p>
            </div>
        );
    }
}

export default Sponsor