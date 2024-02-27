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
		width: 50%;
		height: auto;
		margin: 0 auto 50px;

		img {
			width: 100%;
			height: auto;
		}
	}
	.catchPhrase {
		width: 50%;
		margin: 0px auto;
		.wia {
			display: inline-block;
			text-align: center;
			margin-top: 80px;
			margin-bottom: 100px;

			p {
				margin-bottom: 20px;
			}
			.frst {
				// width: 200px;
				font-size: 26px;
				line-height: 30px;
				font-weight: 600;
			}
			.scnd {
				font-size: 14px;
			}
		}
		.creed {
			display: inline-block;
			text-align: center;
			.frst {
				// width: 200px;
				margin-bottom: 20px;
				font-size: 26px;
				line-height: 30px;
				font-weight: 600;
			}
			.scnd,
			.thrd,
			.frth {
				margin-bottom: 10px;
				font-size: 14px;
			}
		}
	}

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		align-items: stretch;

		.bannerImg {
			margin: 0 auto;
		}
		.catchPhrase {
			margin: 0px auto;
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
