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
      isLoading: true,
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
        isLoading: false,
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
          isLoading: false,
        });
      })
    })

    console.log('this.state.search', this.state.search);
  }

  handleDetailPerson = (item = []) => {

    console.log('kena', item, this.props)
    this.props.history.push({ pathname:'/list-person/profile', search: `?id=${item.id}` });

  }

  render() {
    return (
      <>
        <div className="container">
          <Loading isLoading={this.state.isLoading}></Loading>
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
                <List.Item onClick={() => this.handleDetailPerson(item)}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a>{item.name}</a>}
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
