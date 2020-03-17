import React from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Loading = (props) => {
  console.log('isloading', props);
  return (
    props.isLoading && (
      <Spin className="loading" indicator={antIcon} />
    )

  );
};
export default Loading;
