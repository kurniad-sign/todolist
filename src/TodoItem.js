import React from 'react';

export default function TodoItem({
	id,
	text,
	checked,
	currentFilter,
	onChecked,
	onDeleted
}) {
	if (currentFilter === 'Completed' || currentFilter === 'Active') {
		return (
			<li>
				<span>{text}</span>
			</li>
		);
	}

	return (
		<li id={id}>
			<input type="checkbox" checked={checked} onChange={() => onChecked(id)} />{' '}
			<span
				style={{
					textDecoration: checked ? 'line-through' : 'none'
				}}
			>
				{text}
			</span>{' '}
			<button onClick={() => onDeleted(id)}>Delete</button>
		</li>
	);
}
