import React, { Component } from 'react';

import Item from './Item';

export default class TodoItem extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.items.map((item, index) => {
						return (
							<Item key={index} text={item.text} completed={item.completed} />
						);
					})}
				</ul>
			</div>
		);
	}
}
