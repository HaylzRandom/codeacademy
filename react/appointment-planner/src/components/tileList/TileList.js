import React from 'react';

import Tile from '../tile/Tile';

const TileList = ({ objArray }) => {
	return (
		<>
			{objArray.map((value, idx) => (
				<Tile value={value} key={idx} />
			))}
		</>
	);
};

export default TileList;
