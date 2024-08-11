import React from 'react';
import {Customer} from '../types';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
	customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({customer}) => {
	return (
		<div className="w-4/5 max-h-screen overflow-y-auto bg-gray-900 rounded-lg shadow-lg max-md:w-full max-md:h-3/4">
			<div className="sticky top-0 bg-gray-900 p-6 z-10">
				<h2 className="text-3xl font-bold text-white mb-2">{customer.name}</h2>
				<p className="text-xl text-gray-300 mb-1">{customer.title}</p>
				<p className="text-md text-gray-400">{customer.address}</p>
			</div>
			<div className="mt-4">
				<h3 className="sticky top-32 z-10 bg-gray-900 p-6  text-2xl font-semibold text-white mb-4">
					Photo Gallery
				</h3>
				<PhotoGrid />
			</div>
		</div>
	);
};

export default CustomerDetails;
