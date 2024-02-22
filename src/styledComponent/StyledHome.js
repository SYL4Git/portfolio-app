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
		width: 250px;
		margin: 50px auto;
		.WIA p {
			margin-bottom: 20px;
		}
		.WIA .frst {
			font-size: 40px;
			line-height: 40px;
		}
		.WIA .scnd {
			font-size: 20px;
		}
		.creed {
		}
	}
`;
