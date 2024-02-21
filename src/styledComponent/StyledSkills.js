import styled from 'styled-components';

export const StyledSkills = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-margin-top: 180px;
`;
export const NonJava = styled.div`
	display: flex;
	border: 1px solid black;
	background-color: yellow;
	border-radius: 20px;
	padding: 30px 20px 40px;
	margin-bottom: 60px;

	.html {
		padding: 20px 20px;
		margin: 0 30px;
		background-color: white;
	}
	.html img {
		width: 100px;
		height: auto;
	}
	.css {
		padding: 20px 20px;
		margin: -2px 30px 0;
		background-color: white;
	}
	.css img {
		width: 100px;
		height: auto;
	}
`;
export const Java = styled.div`
	display: flex;
	border: 1px solid black;
	background-color: yellow;
	border-radius: 20px;
	padding: 20px 20px;
	margin-bottom: 60px;

	div {
		padding: 20px 20px;
		margin: 0 30px;
		background-color: white;
	}
	div img {
		width: 100px;
		height: auto;
	}
`;
export const Miscellaneous = styled.div`
	display: flex;
	border: 1px solid black;
	background-color: yellow;
	border-radius: 20px;
	padding: 20px 20px;
	margin-bottom: 60px;

	div {
		width: 60px;
		height: 60px;
	}
	div img {
		width: 100%;
		height: auto;
	}
`;
