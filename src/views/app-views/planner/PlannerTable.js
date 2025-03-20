import { Button, Card, Table, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';

const PlannerTable = ({ images, onDelete, onExport, onImport }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.id - b.id
      },
    },
    {
      title: 'X',
      dataIndex: 'x',
      sorter: {
        compare: (a, b) => a.x - b.x
      },
    },
    {
      title: 'Y',
      dataIndex: 'y',
      sorter: {
        compare: (a, b) => a.y - b.y
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (text) => text[0].toUpperCase() + text.slice(1),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="Delete">
            <Button danger icon={<DeleteOutlined />} onClick={() => onDelete(elm.id)} size="small"/>
          </Tooltip>
        </div>
      )
    }
  ];

  return (
    <div>
      <Card>
        <Table columns={columns} dataSource={images} rowKey='id' />
      </Card>
      <Card>
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Button type='primary' onClick={onExport}>Экспортировать</Button>
          <Button onClick={onImport}>Импортировать</Button>
        </div>
      </Card>
    </div>
  )
}

export default PlannerTable;