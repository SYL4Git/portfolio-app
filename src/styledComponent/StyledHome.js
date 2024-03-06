import styled from 'styled-components';

export const StyledHome = styled.div`
	position: relative;
	min-width: 360px;
	width: 100%;
	margin: 0 auto;
`;

export const StyledAbout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 100px auto 160px;

	.bannerImg {
		height: auto;
		margin: 0 auto 50px;

		img {
			width: 100%;
			height: auto;
		}
	}
	.catchPhrase {
		width: 50%;
		margin: 50px auto 0;

		.wia {
			display: inline;
			text-align: center;

			p {
				margin-bottom: 20px;
			}
			.frst {
				font-size: 30px;
				line-height: 30px;
				font-weight: 600;
			}
			.scnd {
				font-size: 16px;
				line-height: 25px;
			}
		}
		.creed {
			display: inline;
			text-align: center;

			.frst {
				margin-bottom: 20px;
				font-size: 30px;
				line-height: 30px;
				font-weight: 600;
			}
			.scnd,
			.thrd,
			.frth {
				margin-bottom: 10px;
				font-size: 16px;
				line-height: 16px;
			}
		}
	}

	@media (min-width: 768px) {
		display: flex;
		width: 100%;
		justify-content: center;
		flex-direction: row;
		box-sizing: border-box;
		padding: 0 20px;
		
		.bannerImg, .catchPhrase{
			width: 50%
			height: auto;
			margin: 0 auto 0;
		}
		.bannerImg {
			margin-right:50px;
		}
		.catchPhrase {
			margin-left:50px;
			.wia {
				margin-top: 0;
			}
			.frst {
				font-size: 40px;
				line-height: 40px;
			}
			.scnd {
				font-size: 20px;
			}
		}
	}
	@media (min-width: 1200px) {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20px;
	}
`;
