import React from 'react';

const ContactPicker = ({ contacts, onChange }) => {
	return (
		<>
			<select onChange={onChange}>
				<option value=''>Select a Contact</option>
				{contacts.map((contact, idx) => (
					<option value={contact.name} key={idx}>
						{contact.name}
					</option>
				))}
			</select>
		</>
	);
};

export default ContactPicker;
