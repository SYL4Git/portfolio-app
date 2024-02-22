import styled from 'styled-components';

export const StyledHeader = styled.div`
	width: 100%;
	height: 80px;
	margin: 0 auto;
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	z-index: 100;
	background-color: #87bcde;

	.logo img {
		width: 50px;
		height: 100%;
		padding: 4px 0;
		margin-left: 60px;
	}

	.menuModal img {
		width: 45px;
		height: 100%;
		margin-top: 10px;
		margin-right: 80px;
	}
`;
