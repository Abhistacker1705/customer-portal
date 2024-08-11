import React, {useEffect} from 'react';
import {CustomerCard} from './CustomerCard';
import {Customer} from '../types';
import {data} from '../data/customer_data.ts';

interface CustomerListProps {
	selectedCustomer: Customer | null;
	setSelectedCustomer: (customer: Customer) => void;
}

const customers: Customer[] = data;

const CustomerList: React.FC<CustomerListProps> = ({
	selectedCustomer,
	setSelectedCustomer,
}) => {
	useEffect(() => {
		setSelectedCustomer(customers[0]);
	}, []);

	return (
		<div
			className={`flex flex-col w-1/5 overflow-y-scroll overflow-x-hidden border-r border-gray-300 max-md:flex-row max-md:w-screen max-md:overflow-x-scroll max-md:overflow-y-hidden`}>
			{customers.map((customer) => (
				<CustomerCard
					key={customer.id}
					customer={customer}
					selectedCustomer={selectedCustomer}
					setSelectedCustomer={setSelectedCustomer}
				/>
			))}
		</div>
	);
};

export default CustomerList;
