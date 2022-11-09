import React from 'react'
import styled from 'styled-components';

export const Cell = (props) => {
	return (
		<GridItem>

		</GridItem>
	)
}

const GridItem = styled.div`
	width: 20%;
	display: block;
	position: relative;

	&::before {
		display: block;
		content: '';
		padding-top: 100%;
	}

	&:nth-child(odd) {
		background: rgba(0, 0, 0, 0.5);
	}
`;
