import React from 'react';

const Tile = ({ value }) => {
	const arr = Object.values(value);

	return (
		<div className='tile-container'>
			{arr.map((data, idx) => {
				if (idx === 0) {
					return (
						<p className='tile-title' key={idx}>
							{data}
						</p>
					);
				} else {
					return (
						<p className='tile' key={idx}>
							{data}
						</p>
					);
				}
			})}
		</div>
	);
};

export default Tile;
