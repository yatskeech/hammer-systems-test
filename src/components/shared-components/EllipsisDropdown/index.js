import React from 'react'
import { Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'

const EllipsisDropdown = ({ trigger = 'click', placement = 'bottomRight', menu = <Menu /> }) => {
	return (
		<Dropdown overlay={menu} placement={placement} trigger={['click']}>
			<div className="ellipsis-dropdown">
				<EllipsisOutlined />
			</div>
		</Dropdown>
	)
}

EllipsisDropdown.propTypes = {
	trigger: PropTypes.string,
	placement: PropTypes.string
}

export default EllipsisDropdown
