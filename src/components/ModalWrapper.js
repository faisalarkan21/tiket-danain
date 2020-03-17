import {
  Col, Form, Modal, Row,
} from 'antd';
import React from 'react';


const ModalUsers = ({
  visible = false, onOk, onCancel, children,
}) => {
  /**
  * @params (*) visible, onOk, onCancel, children is a props
  *
  */
  console.log('ModalUsers', visible, onOk, oncancel, children);
  return (
    <Modal
      title="Buy Ticket"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Row>
        <Col span={10}>
          <Form>
            {children}
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalUsers;
