import styled from 'styled-components';

export const StyledSkills = styled.div`
	scroll-margin-top: 180px;
	widith: 1200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
	.title {
		font-size: 40px;
		line-height: 50px;
		margin-bottom: 40px;
	}
`;
export const NonJava = styled.div`
	display: flex;
	padding: 40px 20px;
	margin-bottom: 60px;
	border: 1px solid black;
	background-color: yellow;
	border-radius: 20px;

	.html {
		padding: 20px 20px;
		margin: 0 30px;
		border: 1px solid black;

		background-color: white;
	}
	.html img {
		width: 100px;
		height: auto;
	}
	.css {
		padding: 20px 20px;
		margin: -2px 30px 0;
		border: 1px solid black;

		background-color: white;
	}
	.css img {
		width: 100px;
		height: auto;
	}
`;
export const Java = styled.div`
	padding: 40px 40px;
	margin-bottom: 60px;
	border: 1px solid black;
	border-radius: 20px;
	background-color: yellow;

	.javaScript {
		height: 90px;
		padding: 20px 20px;
		margin: 0 30px;
		border: 1px solid black;
		background-color: white;
	}
	.javaScript img {
		display: block;
		width: 150px;
		height: auto;
		margin: 0 auto;
	}

	.underJs div {
		height: 90px;
		padding: 20px 20px;
		margin: 30px 30px;
		border: 1px solid black;
		background-color: white;
	}
	.underJs img {
		display: block;
		width: 100px;
		height: auto;
	}
	.react img {
		margin: 0 auto;
	}
	.jQuery img {
		margin: 20px auto 0;
	}
	.slick img {
		margin: 10px auto 0;
	}
	.typeScript img {
		margin: 15px auto 0;
	}
`;
export const Miscellaneous = styled.div`
	padding: 40px 40px;
	margin-bottom: 60px;
	border: 1px solid black;
	border-radius: 20px;
	background-color: yellow;

	div {
		height: 90px;
		padding: 20px 20px;
		margin: 30px 30px;
		border: 1px solid black;
		background-color: white;
	}
	div img {
		width: 150px;
		height: auto;
		margin: 10px auto 0;
	}
	.firebase img {
		margin-top: 20px;
	}
	.node img {
		margin-top: 0px;
	}
	.ps img {
		width: 150px;
		height: 90px;
		margin-top: 0;
	}
`;
