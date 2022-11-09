import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Robot from '../Robot';
import { Cell } from './Cell';
import { CommandInput } from './CommandInput';

export const TableTop = () => {

	const [position, setPosition] = useState(null);

	useEffect(() => {

	}, []);

	const rowLimit = 5;
	const colLimit = 5;

	const cellsLength = rowLimit * colLimit;

	return (
		<Wrapper>
			<Inner>
				<h1>Table Top</h1>
				<Table>

					{ Array.from(Array(cellsLength)).map((cell, index) => (
						<Cell key={`cell-${index}`} />
					)) }

					<Robot
						position={position}
						rowLimit={rowLimit}
						colLimit={colLimit}
					/>
				</Table>

				<CommandInput
					rowLimit={rowLimit}
					colLimit={colLimit}
					setPosition={setPosition}
				/>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	
`;

const Inner = styled.div`
	max-width: 400px;
	width: 100%;
	margin: 0 auto;
	text-align: center;
`;

const Table = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 1px solid black;
	position: relative;
`;
