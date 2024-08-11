import React from 'react';
import {Customer} from '../types';

interface CustomerCardProps {
	customer: Customer;
	selectedCustomer: Customer | null;
	setSelectedCustomer: (customer: Customer) => void;
}

export const CustomerCard: React.FC<CustomerCardProps> = ({
	customer,
	selectedCustomer,
	setSelectedCustomer,
}) => {
	return (
		<div
			className={`p-4 m-2 cursor-pointer rounded-lg shadow-lg transform transition-transform duration-200 ${
				selectedCustomer && customer.id === selectedCustomer.id
					? 'bg-gray-700 hover:bg-gray-700 scale-105'
					: 'bg-gray-800 hover:bg-gray-700'
			}`}
			onClick={() => setSelectedCustomer(customer)}>
			<h4 className="text-lg font-semibold text-white">{customer.name}</h4>
			<p className="text-sm text-gray-400">{customer.title}</p>
		</div>
	);
};
