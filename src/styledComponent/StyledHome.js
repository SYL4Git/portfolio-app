import styled from 'styled-components';

export const StyledHome = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
`;
export const StyledAbout = styled.div`
	width: 1200px;
	margin: 160px auto;
	display: flex;

	.bannerImg {
		width: 50%;
		height: auto;
		margin-bottom: 50px;
	}
	.bannerImg img {
		width: 100%;
		height: auto;
	}
	.catchPhrase {
		width: 300px;
		margin: 50px auto;
		.wia {
			margin-top: 80px;
			margin-bottom: 100px;
			p {
				margin-bottom: 20px;
			}
			.frst {
				font-size: 40px;
				line-height: 40px;
			}
			.scnd {
				font-size: 20px;
			}
		}
		.creed {
			.frst {
				margin-bottom: 20px;
				font-size: 40px;
				line-height: 40px;
			}
			.scnd,
			.thrd,
			.frth {
				margin-bottom: 10px;
				font-size: 18px;
				line-height: 20px;
			}
		}
	}
`;
