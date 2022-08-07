import React from 'react';

import ContactPicker from '../contactPicker/ContactPicker';

const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date()
			.toLocaleDateString('en-gb')
			.split('/');
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Enter Title of Appointment here...'
				/>
				<input
					type='date'
					value={date}
					onChange={(e) =>
						setDate(new Date(e.target.value).toLocaleDateString('en-gb'))
					}
					min={getTodayString}
				/>
				<input
					type='time'
					value={time}
					onChange={(e) => setTime(e.target.value)}
				/>
				<ContactPicker
					contacts={contacts}
					onChange={(e) => setContact(e.target.value)}
				/>
				<input type='submit' value='Submit' />
			</form>
		</>
	);
};

export default AppointmentForm;
