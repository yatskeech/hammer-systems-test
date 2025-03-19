import React, { Component } from 'react'
import { Card, Table } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';
import EditUser from './EditUser';
import UsersService from 'services/UsersService';

export class UserList extends Component {
  state = {
    users: [],
    loading: false,

    currentUser: {},
    isEdited: false,
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    this.setState({ loading: true });
    try {
      const users = await UsersService.getUsers();
      this.setState({ users, loading: false });
    } catch {
      this.setState({ loading: false });
    }
  }

  updateUser = async (user) => {
    await UsersService.updateUser(user);
    this.setState(({ users }) => ({
      users: users.map((u) => u.id === user.id ? user : u)
    }));
  }

  handleEdit = (record) => {
    this.setState({ isEdited: true, currentUser: { ...record } });
  };

  handleClose = () => {
    this.setState({ isEdited: false, currentUser: {} });
  }

  render() {
    const { users, loading, isEdited, currentUser } = this.state;

    if (loading) {
      return <Loading cover="content"/>;
    }

    const tableColumns = [
      {
        title: 'User',
        dataIndex: 'name',
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus name={record.name} subTitle={record.email}/>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Username',
        dataIndex: 'username',
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Website',
        dataIndex: 'website',
        render: (_, record) => (
          <div className='d-flex'>
            <a href={`https://${record.website}`}>{record.website}</a>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      }
    ];

    return (
      <Card bodyStyle={{'padding': '0px'}}>
        <Table
          onRow={(record) => ({ onClick: () => this.handleEdit(record) })}
          columns={tableColumns}
          dataSource={users}
          rowKey='id'
        />
        <EditUser
          visible={isEdited}
          close={this.handleClose}
          update={this.updateUser}
          user={currentUser}
        />
      </Card>
    )
  }
}

export default UserList
