import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({
	todos,
	currentFilter,
	onChecked,
	onDeleted,
	onFiltered
}) {
	const filteredTodos = onFiltered(todos, currentFilter);
	return (
		<ul>
			{todos.length === 0 ? (
				<p>No todos, add todos here</p>
			) : (
				filteredTodos.map((todo, index) => {
					return (
						<TodoItem
							key={index}
							id={todo.id}
							text={todo.text}
							checked={todo.completed}
							currentFilter={currentFilter}
							onChecked={id => onChecked(id)}
							onDeleted={id => onDeleted(id)}
						/>
					);
				})
			)}
		</ul>
	);
}
