import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

const App = () => {
	/*
  Define state variables for 
  contacts and appointments 
  */
	const [contacts, setContacts] = useState([
		{ name: 'Google', phone: '0123456789', email: 'google@email.com' },
		{ name: 'Microsoft', phone: '0123456789', email: 'microsoft@email.com' },
	]);
	const [appointments, setAppointments] = useState([
		{
			title: 'Meeting Client',
			date: '22/08/2022',
			time: '09:45',
			contact: 'Microsoft',
		},
	]);

	const ROUTES = {
		CONTACTS: '/contacts',
		APPOINTMENTS: '/appointments',
	};

	/*
  Implement functions to add data to
  contacts and appointments
  */
	// Add Contact
	const addContact = (name, phone, email) => {
		setContacts((prev) => [...prev, { name, phone, email }]);
	};

	// Add Appointment
	const addAppointment = (title, contact, date, time) => {
		setAppointments((prev) => [...prev, { title, contact, date, time }]);
	};

	return (
		<>
			<nav>
				<NavLink to={ROUTES.CONTACTS} activeClassName='active'>
					Contacts
				</NavLink>
				<NavLink to={ROUTES.APPOINTMENTS} activeClassName='active'>
					Appointments
				</NavLink>
			</nav>
			<main>
				<Switch>
					<Route exact path='/'>
						<Redirect to={ROUTES.CONTACTS} />
					</Route>
					<Route path={ROUTES.CONTACTS}>
						{/* Add props to ContactsPage */}
						<ContactsPage addContact={addContact} contacts={contacts} />
					</Route>
					<Route path={ROUTES.APPOINTMENTS}>
						{/* Add props to AppointmentsPage */}
						<AppointmentsPage
							addAppointment={addAppointment}
							appointments={appointments}
							contacts={contacts}
						/>
					</Route>
				</Switch>
			</main>
		</>
	);
};

export default App;
