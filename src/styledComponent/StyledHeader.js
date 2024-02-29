import styled from 'styled-components';

export const StyledHeaderMob = styled.div`
	display: flex;
	height: 80px;
	position: sticky;
	top: 0;
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

export const StyledHeaderTab = styled.div`
	@media (min-width: 768px) {
		display: none;
		width: 100%;
		height: 80px;
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
		ul {
			display: flex;
			margin-top: 10px;
			margin-right: 80px;

			li {
				margin-left: 20px;
			}
		}
	}
`;
