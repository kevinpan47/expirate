import React from 'react';
import {Progress, Space} from 'antd';
import '../../App.css';

const FoodProgress = (props) => {

  return(
    <div className="space-align-container">
      <div className="space-align-block">
          <Space align="center">
          <Progress type="circle" percent={props.progress} format={percent => `${percent} Days`} />
            <span className="mock-block">
              <h2>{props.name}</h2><br/>
              Brought on: {props.buyDate}<br/>
              Use by: {props.useDate}
            </span>
          </Space>
      </div>
    </div>
        

  );
}

export default FoodProgress;