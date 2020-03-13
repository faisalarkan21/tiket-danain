import {
  Row, Input, Col, List, Avatar,
} from 'antd';
import React from 'react';
import './App.css';
import Loading from './components/Loading';
import Services from './utils/Api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      users: [],
      isLoading: false,
    };
  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => [
    new Services().get('users').then((users) => {
      console.log('res', users);
      this.setState({
        users,
      });
    })
  ]

  handleOnChange = (e) => {



    this.setState({
      search: e.target.value
    }, () => {

      // console.log('this.state.search')
      new Services().get('users').then(( data ) => {
        // console.log('resa', data);
        let newList = [];
        let currentList = [...data];
        newList = currentList.filter(item => {
          const lc = item.name.toLowerCase();
          console.log('lc', lc)
          const filter = this.state.search.toLowerCase();
          return lc.includes(filter);
        });
        this.setState({
          users: newList,
        });
      })
    })

    console.log('this.state.search', this.state.search);
  }

  render() {
    return (
      <>
        <div className="container">
          <Row>
            <Col span={8}>
              <Input value={this.state.search} onChange={this.handleOnChange} placeholder="Basic usage" />
            </Col>
          </Row>
          <Row>
            <List
              itemLayout="horizontal"
              dataSource={this.state.users}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.email}
                  />
                </List.Item>
              )}
            />
          </Row>
        </div>
      </>
    );
  }
}

export default App;
