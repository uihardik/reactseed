import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Carousel } from 'antd';
import Listuser from './common/Listuser';

class Dashboard extends Component {

  constructor (props) {
    super(props)
  }
  render () {
      let img1 = require('../styles/images/img1st.jpg');
      let img2 = require('../styles/images/imagestwo.jpg');
      let img3 = require('../styles/images/img3rd.jpg');
      let img4 = require('../styles/images/img1st.jpg');
    return (
      <div className="dashBoard">
        <div className="dashcarousel">
          <Carousel autoplay>
            <div><img src={img1} alt="img1" width="100%" height="auto"/></div>
            <div><img src={img2} alt="img1" width="100%" height="auto"/></div>
            <div><img src={img3} alt="img1" width="100%" height="auto"/></div>
            <div><img src={img4} alt="img1" width="100%" height="auto"/></div>
          </Carousel>
        </div>
        <div>
          <Listuser />
        </div>
      </div>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Dashboard)
