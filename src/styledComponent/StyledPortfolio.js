import styled from 'styled-components';

export const StyledPortfolio = styled.div`
	scroll-margin-top: 180px;
	width: 1200px;
	display: flex;
	flex-direction: column;
	margin: 0 auto 50px;

	.title {
		font-size: 40px;
		line-height: 50px;
		margin: 0 auto 40px;
	}
	.prjct {
		display: flex;
		margin-bottom: 50px;
	}
	img {
		width: 600px;
		height: auto;
		margin-left: 50px;
	}
	.info {
		margin-left: 150px;
	}
`;
