import React, { Component } from 'react';

export default class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.myValue = React.createRef();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange() {
		this.setState({ value: this.myValue.current.value });
	}

	handleSubmit(event) {
		event.preventDefault();

		!this.state.value
			? alert('Please fill the field')
			: this.props.onTodosAdded(this.state.value);
		this.setState({ value: '' });
	}

	componentDidMount() {
		this.myValue.current.focus();
	}

	render() {
		const styles = {
			inputField: {
				padding: '0.4rem 1.2rem',
				fontFamily: 'inherit',
				fontSize: 14
			},
			button: {
				cursor: 'pointer',
				padding: '0.5rem 1.2rem',
				fontSize: 14,
				fontFamily: 'inherit',
				backgroundColor: 'tomato',
				color: 'white',
				border: '1px solid currentColor'
			}
		};

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					ref={this.myValue}
					type="text"
					placeholder="Enter your list here"
					style={styles.inputField}
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button type="submit" style={styles.button}>
					Add Todo
				</button>
			</form>
		);
	}
}
