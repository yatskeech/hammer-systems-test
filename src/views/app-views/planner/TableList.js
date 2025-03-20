import { Card, Col, Row } from 'antd';
import React from 'react';

const TableList = ({ onDragStart }) => {
  const tables = ['circle', 'elliptical', 'modern', 'rectangle', 'strict']

  return (
    <Card>
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Row gutter={16} style={{ flexWrap: 'nowrap' }}>
          {tables.map((table) => (
            <Col key={table}>
              <Card>
                <img
                  height={100}
                  src={`/img/tables/${table}.svg`}
                  alt={`${table} table`}
                  onDragStart={onDragStart}
                  draggable
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Card>
  )
};

export default TableList;