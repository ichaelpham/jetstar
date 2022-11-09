import React from 'react'
import styled from 'styled-components';

export const Robot = (props) => {

	const {
		position
	} = props;

	return (
		<RobotCell $position={position}>
			Robot
			{position}
		</RobotCell>
	)
}

const RobotCell = styled.div`
	width: 20%;
	position: absolute;
	bottom: 0;
	left: 0;
	background: olivedrab;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transform: ${({ $position }) => $position ? $position : 'translate(0, 0)' };
	transition: transform 200ms ease-in-out;

	&::before {
		display: block;
		content: '';
		padding-top: 100%;
	}
`;
