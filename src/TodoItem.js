import React, { Component } from 'react';

import Item from './Item';

export default class TodoItem extends Component {
	handleChecked = id => {
		this.props.onChecked(id);
	};

	handleDeleted = id => {
		this.props.onDeleted(id);
	};

	render() {
		return (
			<ul>
				{this.props.todos.length === 0 ? (
					<p>No todos, add todos here</p>
				) : (
					this.props.todos.map((todo, index) => {
						return (
							<Item
								key={index}
								id={todo.id}
								text={todo.text}
								checked={todo.completed}
								onChecked={this.handleChecked}
								onDeleted={this.handleDeleted}
							/>
						);
					})
				)}
			</ul>
		);
	}
}
