import React from 'react';
import PropTypes from 'prop-types'

export const AvatarStatus = props => {
	const { name, subTitle } = props
	return (
		<div className="avatar-status">
			<div className="avatar-status-name">{name}</div>
			<div className="text-muted avatar-status-subtitle">{subTitle}</div>
		</div>
	)
}

AvatarStatus.propTypes = {
	name: PropTypes.string
}

export default AvatarStatus;
