import React from 'react';
import qs from 'query-string';
import {
  List, Avatar, Icon, Row, Col, Button, Card, Descriptions,
} from 'antd';
import Services from '../utils/Api';
import Loading from '../components/Loading';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
    };
  }


  componentDidMount() {
    const { location: { search } } = this.props;
    const { id } = qs.parse(search);
    console.log('id', id);
    new Services().get(`users/${id}`).then((data) => {
      console.log('data', data);
      this.setState({ data, isLoading: false });
    });
  }

  handleClickItem =() => {
    //   console.log('asas')
    const cloneState = this.state.data
    cloneState.name = 'zxzxzxzxzx';
    cloneState.saya = 'zzz'
    this.setState({data: cloneState})
  }


  render() {
    console.log('this.props', this.state);

    return (
      <div>
                    <Loading isLoading={this.state.isLoading}></Loading>

        <Row>
          <Col style={{ marginTop: 50, marginBottom: 50 }} offset={2} span={14}>
            <Card title="Profile Faisal Arkan">
              <Row>
                <Col offset={1} xs span={24}>
                  <Descriptions style={{ marginTop: 20 }} title="User Info">
                    <Descriptions.Item label="UserName">
                      
                      <a onClick={this.handleClickItem}> {this.state.data.name}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Telephone">
                      1810000000
                    </Descriptions.Item>
                    <Descriptions.Item label="Live">
                      Hangzhou, Zhejiang
                    </Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,
                      China
                    </Descriptions.Item>
                  </Descriptions>
                </Col>

              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Profile;
