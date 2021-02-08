import './Home.css'
import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getYelpBusinesses } from '../../services/yelp';
import SearchBar from '../search-bar/SearchBar';
import BusinessTable from '../business-grid/BusinessGrid';

const DEFAULT_SEARCH = "Minneapolis, MN";

export default function Home()  {
	const [businesses, setBusinesses] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const searchTextChanged = (searchText) => {
		getBusinesses(searchText);
	}

	const getBusinesses = async (searchText) => {
		var response;
		setLoading(true);
		try {
			response = await getYelpBusinesses(searchText);
		} catch (e) {
			setError(true);
			setLoading(false);
			return;
		}
		setLoading(false);
		setBusinesses(response.businesses);
	};

	useEffect(() => {
		getBusinesses(DEFAULT_SEARCH);
	}, []);

  return (
		<>
			<div className="header">
				<h1>Search Businesses</h1>
				<SearchBar
					defaultText={DEFAULT_SEARCH}
					onSubmit={searchTextChanged}
				/>
			</div>
			<div className="spacer"/>
			<br/>
			{ loading && <CircularProgress/> }
			{ !loading &&
				( businesses ? 
					<BusinessTable
						businesses={businesses}/>: <h1>Sorry, no business found</h1>
				)
			}
		</>
	);
};

