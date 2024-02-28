import styled from 'styled-components';

export const StyledPortfolio = styled.div`
	scroll-margin-top: 180px;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 0 100px;

	.title {
		display: flex;
		justify-content: center;
		font-size: 30px;
		line-height: 40px;
		margin: 0 auto 40px;
	}
	.prjct {
		margin: 50px auto;
	}
	.preview,
	.info {
		padding: 0 10px;
	}
	.preview img {
		width: 100%;
		height: auto;
		border: 1px solid black;
	}
	.info {
		width: 100%;
		margin-top: 20px;

		div {
			margin-bottom: 10px;
		}

		.itmTitle p,
		.link p,
		.detail p {
			font-size: 16px;
			font-weight: bold;
		}
		.itmTitle p {
			margin-right: 25px;
		}
		.github p {
			margin-right: 35px;
		}
		.deploy p {
			margin-right: 15px;
		}
		.detail p {
			margin-right: 76px;
		}
	}
	@media (min-width: 768px) {
		.prjct {
			display: flex;
		}
		.preview,
		.info {
			padding: 0 30px;
		}
		.preview {
			// margin-top: 20px;
			// margin-right: 30px;
		}
		.info {
			margin-top: 0;
		}
	}
	@media (min-width: 1200px) {
		max-width: 1200px;
		margin: 0 auto 100px;
	}
`;
