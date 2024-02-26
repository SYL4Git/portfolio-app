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
							<p>{it.title}</p>
						</div>
						<div className="link">
							<div className="github">
								<p>Github:</p>
								{it.github}
							</div>
							<div className="deploy">
								<p>Deployed: </p>
								{it.link}
							</div>
						</div>
						<div className="detail">{it.detail}</div>
					</div>
				</div>
			))}
		</StyledPortfolio>
	);
});
export default Portfolio;
