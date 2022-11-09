import React, { useState } from 'react'
import styled from 'styled-components';

export const CommandInput = (props) => {

	const [command, setCommand] = useState();

	const {
		setPosition,
		rowLimit = 5,
		colLimit = 5
	} = props;

	/**
 * 
 * @param {String} positionStr 
 * @returns {String} transformValue 
 */
function createCoordinates(positionStr) {
	// If larger then 3, the coordinate isn't valid;
	const strLimit = 3;
	
	if(!positionStr || positionStr.length > strLimit) {
		return null
	}

	const positionStrArray = positionStr.split(',');
	const width = 100;

	// 0 is x coordinate, 1, is y coordinate
	const translateArray = positionStrArray.map((coordStr, index) => {
		// convert from str to float 
		const coordFloat = parseFloat(coordStr);

		// To account transform / translate
		const offset = coordFloat > 1 ? 1 : 0	;
		const direction = index === 0
			? 1 
			: -1;

		const translateValue = (width * (coordFloat - offset)) * direction;

		return `${translateValue}%`
	})

	return `translate(${translateArray.join(',')})`;
}

	const handleSubmit = () => {
		// Check if string contains `place(xx)`;
		// TO-DO: use row / col limits in regex if possible
		const regExp = /place\(([0-5]+(,[0-5]+))\)/;
		const matches = regExp.exec(command);

		if(matches?.[1]) {
			const newPosition = createCoordinates(matches?.[1]);

			if(newPosition) {
				setPosition(newPosition);
			}
		}
	}

	const handleOnChange = (e) => {
		const value = e?.target?.value;
		setCommand(value);
	}

	return (
		<Wrapper>
			<Input
				type='text'
				label='command-input'
				onChange={handleOnChange}
				placeholder={'Write place() commands..'}
			/>
			<Button onClick={handleSubmit} type='submit'>Submit</Button>
		</Wrapper>
	)
}



const Input = styled.input`
	padding: 0.25em;
`;

const Button = styled.button`o
	padding: 0.25em;
	margin-left: 1em;
`;

const Wrapper = styled.div`
	margin-top: 1em;
`;
