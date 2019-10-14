import React, { Component } from 'react';

import Item from './Item';

export default class TodoItem extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo, index) => {
					return (
						<Item
							key={index}
							id={todo.id}
							text={todo.text}
							completed={todo.completed}
						/>
					);
				})}
			</ul>
		);
	}
}
