const Button = ({ btnType, btnText, btnClick, btnValue }) => {
	return (
		<div className="Button">
			<button
				className={`${btnType}`}
				onClick={btnClick}
				value={btnValue}
			>
				{btnText}
			</button>
		</div>
	);
};
export default Button;
