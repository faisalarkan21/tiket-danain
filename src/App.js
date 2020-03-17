import {
  Row, Input, Col, List, Avatar, Form, Select, InputNumber, Divider,
} from 'antd';
import { AccountBookFill }  from '@ant-design/icons';
import React from 'react';
import './App.css';
import Loading from './components/Loading';
import Services from './utils/Api';
import ModalUsers from './components/ModalWrapper';
var numeral = require("numeral");
const { Option } = Select;


const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);


class App extends React.Component {
 
  /**
   * 
   * State are just ready to use. 
   */
 
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      users: [],
      isLoading: true,
      selectedTicket: '',
      hargaHargaTiket: "",
      chooseHargaTiketValue: "",
      totalTiket: "",
      modalVisibleBuy: false
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
      new Services().get('users').then((data) => {
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
    this.props.history.push({ pathname: '/list-person/profile', search: `?id=${item.id}` });

  }

  handleOnOk = () => { };

  handleOnCancel = () => { };


  render() {
    
    const {
      totalTiket,
      modalVisibleBuy,
      hargaHargaTiket,
      chooseHargaTiketValue,
      chooseHargaTiketLabel
    } = this.state;

    // console.log('modalVisibleBuy', modalVisibleBuy)

    return (
      <>
        <div className="container">
          {/* Do import modal Wrapper here */}


          <Loading isLoading={this.state.isLoading}></Loading>
          <Row>
            <Col span={8}>
              <Input value={this.state.search} onChange={this.handleOnChange} placeholder="Basic usage" />
            </Col>
          </Row>
          <Row>
          <Col span={8}>
          <Divider dashed />
            <List
              itemLayout="horizontal"
              dataSource={this.state.users}
              renderItem={(item) => (
                <List.Item
                
                actions={[
                 <a>Buy</a>
                ]}
                
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a onClick={() => this.handleDetailPerson(item)}>{item.name}</a>}
                    description={item.email}
                  />
                </List.Item>
              )}
            />
             </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default App;
