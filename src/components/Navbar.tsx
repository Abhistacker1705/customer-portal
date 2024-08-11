import React from 'react';

const Navbar: React.FC = () => {
	return (
		<nav className="bg-gray-800 text-neutral-100 p-4 shadow-lg">
			<div className="container mx-auto flex justify-center items-center">
				<div className="text-2xl font-bold">Customer Portal</div>
			</div>
		</nav>
	);
};

export default Navbar;
