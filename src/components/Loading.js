import React from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Loading = () => (
  <Spin className="loading" indicator={antIcon} />
);

export default Loading;
