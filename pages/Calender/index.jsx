import React, { useState } from 'react';
import { Calendar, Badge, Modal } from 'antd';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ]; break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ]; break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ]; break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))
      }
      <style jsx>{`
        .events {
          list-style: none;
          margin: 0;
          padding: 0;
          cursor: default;
        }
        .events .ant-badge-status {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          text-overflow: ellipsis;
          font-size: 12px;
        }
        .notes-month {
          text-align: center;
          font-size: 28px;
        }
        .notes-month section {
          font-size: 28px;
        }
      `}</style>
    </ul>
  );
}

const Index = () => {

  const [ visible, setVisible ] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} onSelect={showModal}></Calendar>
      <Modal
          title="编辑"
          visible={visible}
          onOk={hideModal}
          onCancel={hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
      </Modal>
    </div>
  );
};

export default Index;