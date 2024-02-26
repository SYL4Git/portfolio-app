import React from 'react';
import PortfolioPackage from '../component/PortfolioPackage';
import { StyledPortfolio } from '../styledComponent/StyledPortfolio';

const Portfolio = React.forwardRef((_props, ref) => {
	const portfolioPack = PortfolioPackage();
	return (
		<StyledPortfolio ref={ref} className="styledPortfolio">
			<h1 className="title">Portfolio</h1>
			{portfolioPack.map((it) => (
				<div className="prjct" key={it.id}>
					<div className="preview">
						<img src={it.preview} alt="prjctPreview" />
					</div>
					<div className="info">
						<div className="itmTitle">
							<p>Project Title:</p>
							<span>{it.title}</span>
						</div>
						<div className="link">
							<div className="github">
								<p>Github link:</p>
								<a
									href={it.github}
									target="_blank"
									rel="noopener noreferrer"
								>
									Github_link
								</a>
							</div>
							<div className="deploy">
								<p>Deployed link: </p>
								<a
									href={it.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									Deployed_link
								</a>
							</div>
						</div>
						<div className="detail">
							<p>Detail: </p>
							<span>{it.detail}</span>
						</div>
					</div>
				</div>
			))}
		</StyledPortfolio>
	);
});
export default Portfolio;
