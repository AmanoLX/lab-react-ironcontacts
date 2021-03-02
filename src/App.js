import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
	state = {
		firstContacts: contacts.slice(0, 5),
	};

	// Iteration 2: Add New Random Contacts
	addRandomContact = () => {
		// copy and expand firstContacts array into new copyContacts array
		const copyContacts = [...this.state.firstContacts];
		// get random contact
		const getRandomContact =
			contacts[Math.floor(Math.random() * contacts.length)];
		// check if random contact isn't already in array
		if (!copyContacts.includes(getRandomContact)) {
			// if not, push into the new array
			copyContacts.push(getRandomContact);
		}
		// update state
		this.setState({ firstContacts: copyContacts });
	};

	// Iteration 3: Sort Contacts By Name And Popularity
	sortByName = () => {
		const copyContacts = [...this.state.firstContacts];
		// sort contacts in alphabetical order
		copyContacts.sort((a, b) => (a.name < b.name ? -1 : 1));
		// update state
		this.setState({ firstContacts: copyContacts });
	};

	sortByPopularity = () => {
		const copyContacts = [...this.state.firstContacts];
		// sort contacts in alphabetical order
		copyContacts.sort((a, b) => b.popularity - a.popularity);
		// update state
		this.setState({ firstContacts: copyContacts });
	};

	// Iteration 4: Remove Contacts
	deleteContact = id => {
		const copyContacts = [...this.state.firstContacts];
		// delete contact from table
		const filteredContacts = copyContacts.filter(contact => contact.id !== id);
		// update state
		this.setState({ firstContacts: filteredContacts });
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
							{this.state.firstContacts.map(contact => {
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
