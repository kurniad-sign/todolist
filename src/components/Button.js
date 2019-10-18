import React from 'react';

export default function Button({ onFiltered, currentFilter, children }) {
	return (
		<button
			onClick={() => {
				onFiltered(currentFilter);
			}}
		>
			{children}
		</button>
	);
}
