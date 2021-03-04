import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
	state = {
		contacts: contacts.slice(0, 5),
	};

	// Iteration 2: Add New Random Contacts
	// addRandomContact = () => {
	// 	// copy and expand contacts array into new copyContacts array
	// 	const copyContacts = [...this.state.contacts];
	// 	// get random contact
	// 	const getRandomContact =
	// 		contacts[Math.floor(Math.random() * contacts.length)];
	// 	// check if random contact isn't already in array
	// 	if (!copyContacts.includes(getRandomContact)) {
	// 		// if not, push into the new array
	// 		copyContacts.push(getRandomContact);
	// 	}
	// 	// update state
	// 	this.setState({ contacts: copyContacts });
	// };

	// Iteration 2: Add New Random Contacts
	addRandomContact = () => {
		const unusedContacts = contacts.filter(
			contact => !this.state.contacts.includes(contact)
		);
		const contact =
			unusedContacts[Math.floor(Math.random() * unusedContacts.length)];
		if (contact) {
			this.setState({
				contacts: [...this.state.contacts, contact],
			});
		}
	};

	// Iteration 3: Sort Contacts By Name And Popularity
	// sortByName = () => {
	// 	const copyContacts = [...this.state.contacts];
	// 	// sort contacts in alphabetical order
	// 	copyContacts.sort((a, b) => (a.name < b.name ? -1 : 1));
	// 	// update state
	// 	this.setState({ contacts: copyContacts });
	// };

	// Iteration 3: Sort Contacts By Name And Popularity
	sortByName = () => {
		const sortedContacts = [...this.state.contacts];
		// sort contacts in alphabetical order
		sortedContacts.sort((first, second) => (first.name < second.name ? -1 : 1));
		// update state
		this.setState({ contacts: sortedContacts });
	};

	sortByPopularity = () => {
		const sortedContacts = [...this.state.contacts];
		// sort contacts in alphabetical order
		sortedContacts.sort(
			(first, second) => second.popularity - first.popularity
		);
		// update state
		this.setState({ contacts: sortedContacts });
	};

	// // Iteration 4: Remove Contacts
	// deleteContact = id => {
	// 	const contacts = [...this.state.contacts];
	// 	// delete contact from table
	// 	const filteredContacts = contacts.filter(contact => contact.id !== id);
	// 	// update state
	// 	this.setState({ contacts: filteredContacts });
	// };

	// Iteration 4: Remove Contacts
	deleteContact = id => {
		const maintainedContacts = this.state.contacts.filter(
			contact => contact.id !== id
		);
		this.setState({ contacts: maintainedContacts });
	};

	render() {
		return (
			<div className='App'>
				<div className='container'>
					<table>
						<tr>
							<th colSpan='4'>
								<h1>IronContacts</h1>
							</th>
						</tr>

						<tr>
							<td colSpan='4'>
								<button onClick={this.addRandomContact}>
									Add Random Contact
								</button>
								<button onClick={this.sortByName}>Sort by name</button>
								<button onClick={this.sortByPopularity}>
									Sort by popularity
								</button>
							</td>
						</tr>

						<tbody>
							<tr>
								<th>Picture</th>
								<th>Name</th>
								<th>Popularity</th>
								<th>Action</th>
							</tr>

							{/* Iteration 1 */}
							{this.state.contacts.map(contact => {
								const { name, pictureUrl, popularity, id } = contact;

								return (
									<tr key={id}>
										<td>
											<img src={pictureUrl} alt='profileImg' />
										</td>
										<td>{name}</td>
										<td>{popularity.toFixed(2)}</td>
										<td>
											<button onClick={() => this.deleteContact(id)}>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default App;
