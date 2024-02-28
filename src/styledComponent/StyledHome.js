import styled from 'styled-components';

export const StyledHome = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
`;

export const StyledAbout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 360px;
	margin: 160px auto;

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
				line-height: 16px;
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
		justify-content: center;
		flex-direction: row;
		padding: 50px;
		
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
	}
`;
