import styled from 'styled-components';

export const StyledSkills = styled.div`
	scroll-margin-top: 180px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
	.title {
		font-size: 30px;
		line-height: 30px;
		margin-bottom: 40px;
	}
	@media (min-width: 768px) {
		.title {
			font-size: 40px;
			line-height: 40px;
		}
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
		width: 50px;
		height: auto;
	}
	.css {
		padding: 20px 20px;
		margin: -2px 30px 0;
		border: 1px solid black;
		background-color: white;
	}
	.css img {
		width: 50px;
		height: auto;
	}
	@media (min-width: 768px) {
		.html img,
		.css img {
			width: 100px;
			height: auto;
		}
	}
`;
export const Java = styled.div`
	padding: 40px 40px;
	margin-bottom: 60px;
	border: 1px solid black;
	border-radius: 20px;
	background-color: yellow;

	div {
		width: 200px;
		height: 100px;
		padding: 20px 20px;
		margin: 0 30px 30px;
		border: 1px solid black;
		background-color: white;
	}

	div img {
		display: block;
		width: 150px;
		height: auto;
		margin: 0 auto;
	}
	.react img {
		margin: 0 auto;
		width: 100px;
		height: auto;
	}
	.jQuery img {
		margin: 10px auto 0;
	}
	.slick img {
		margin: 0px auto 0;
		width: 130px;
		height: auto;
	}
	.typeScript img {
		margin: 5px auto 0;
	}
	@media (min-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		max-width: 1000px;
		margin: 0 50px 60px;
	}
`;
export const Miscellaneous = styled.div`
	height: auto;
	padding: 40px 40px;
	margin-bottom: 60px;
	border: 1px solid black;
	border-radius: 20px;
	background-color: yellow;

	div {
		width: 200px;
		height: 100px;
		padding: 20px 20px;
		margin: 30px 30px;
		border: 1px solid black;
		background-color: white;
	}
	div img {
		display: block;
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
	@media (min-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		max-width: 1000px;
		margin: 0 50px 60px;
	}
`;
