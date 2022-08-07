import React from 'react';

const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Enter name here...'
				required
			/>
			<input
				type='tel'
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				/* pattern='(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)' */
				placeholder='Enter phone number here...'
				required
			/>
			<input
				type='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Enter e-mail address here...'
				required
			/>
			<input type='submit' value='Submit' />
		</form>
	);
};

export default ContactForm;
