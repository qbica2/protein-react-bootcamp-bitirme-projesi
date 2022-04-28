import React from "react";
import PropTypes from "prop-types";

function AddIcon( { width, height, color } ) {
	return (
		<svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_17_2)">
				<path d="M6.47202 12.945C6.23333 12.945 6.00441 12.8502 5.83563 12.6814C5.66684 12.5126 5.57202 12.2837 5.57202 12.045V0.9C5.57202 0.661305 5.66684 0.432387 5.83563 0.263604C6.00441 0.0948211 6.23333 0 6.47202 0C6.71072 0 6.93963 0.0948211 7.10842 0.263604C7.2772 0.432387 7.37202 0.661305 7.37202 0.9V12.045C7.37202 12.2837 7.2772 12.5126 7.10842 12.6814C6.93963 12.8502 6.71072 12.945 6.47202 12.945V12.945Z" fill="#4B9CE2"/>
				<path d="M12.045 7.37201H0.9C0.661305 7.37201 0.432387 7.27718 0.263604 7.1084C0.0948211 6.93962 0 6.7107 0 6.47201C0 6.23331 0.0948211 6.00439 0.263604 5.83561C0.432387 5.66683 0.661305 5.57201 0.9 5.57201H12.045C12.2837 5.57201 12.5126 5.66683 12.6814 5.83561C12.8502 6.00439 12.945 6.23331 12.945 6.47201C12.945 6.7107 12.8502 6.93962 12.6814 7.1084C12.5126 7.27718 12.2837 7.37201 12.045 7.37201Z" fill={color}/>
			</g>
			<defs>
				<clipPath id="clip0_17_2">
					<rect width="12.945" height="12.945" fill="white"/>
				</clipPath>
			</defs>
		</svg>

	);
}

AddIcon.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired
};

export default AddIcon;