import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const ITEM = [
	{
		id: 1,
		text: 'Play with Son',
		completed: false
	},
	{
		id: 2,
		text: 'Make Cappuccino',
		completed: false
	},
	{
		id: 3,
		text: 'Go to Campus',
		completed: false
	}
];

export default class App extends Component {
	render() {
		return (
			<div>
				<TodoForm />
				<TodoItem items={ITEM} />
			</div>
		);
	}
}
