import React from 'react';
import PortfolioPackage from '../component/PortfolioPackage';
import { StyledPortfolio } from '../styledComponent/StyledPortfolio';

const Portfolio = React.forwardRef((_props, ref) => {
	const portfolioPack = PortfolioPackage();
	return (
		<StyledPortfolio ref={ref} className="styledPortfolio">
			{portfolioPack.map((it) => (
				<div className="prjct" key={it.id}>
					<div className="preview">
						<img src={it.preview} alt="prjctPreview" />
					</div>
					<div className="info">
						<div className="link">{it.link}</div>
						<div className="detail">{it.detail}</div>
					</div>
				</div>
			))}
		</StyledPortfolio>
	);
});
export default Portfolio;
