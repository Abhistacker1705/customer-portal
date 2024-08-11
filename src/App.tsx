import React, {useState} from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import {Customer} from './types';
import Navbar from './components/Navbar';

const App: React.FC = () => {
	const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
		null
	);

	return (
		<div className="flex flex-col max-h-screen bg-gray-950 text-neutral-100">
			<Navbar />
			<div className="flex h-[calc(100dvh-4rem)] max-md:flex-col">
				<CustomerList
					selectedCustomer={selectedCustomer}
					setSelectedCustomer={setSelectedCustomer}
				/>
				{selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
			</div>
		</div>
	);
};

export default App;
