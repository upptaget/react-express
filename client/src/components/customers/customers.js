import React, { memo, useState, useEffect } from 'react';
import useHttp from '../../hooks/http';
import ErrorModal from '../../UI/ErrorModal';
import LoadingIndicator from '../../UI/LoadingIndicator';
import Card from '../../UI/Card';
import './customers.css';

const Customers = memo(props => {
	const [customers, setCustomers] = useState([]);
	const {
		isLoading,
		error,
		data,
		sendRequest,
		reqExtra,
		reqIdentifier,
		clear
	} = useHttp();

	useEffect(() => {
		if (!isLoading && !error && data) {
			setCustomers(data);
		}
	}, [data, error, isLoading]);

	useEffect(() => {
		sendRequest('/api/customers/', 'GET');
	}, [sendRequest]);

	return (
		<div className='customers_container'>
			<Card>
				<h2>Customers:</h2>
				{error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
				{isLoading && <LoadingIndicator />}
				<ul>
					{customers.map(customer => (
						<li key={customer.id}>
							{customer.firstName} {customer.lastName}
						</li>
					))}
				</ul>
			</Card>
		</div>
	);
});

export default Customers;
