import styled from 'styled-components';

export const StyledMenuModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: fixed;
	top: 80px;
	left: 0;
	right: 0;
	margin-right: 40px;
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.5);
	z-index: 1000;
	li {
		margin: 4px 0;
		font-size: 16px;
	}
`;
