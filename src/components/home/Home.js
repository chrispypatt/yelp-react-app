import React, { useState, useEffect } from 'react';

import { Spin, PageHeader, Affix, Typography } from 'antd';

import { getYelpBusinesses } from '../../services/yelp';

import SearchBar from '../search-bar/SearchBar';
import BusinessTable from '../business-grid/BusinessGrid';

const DEFAULT_SEARCH = "Minneapolis, MN";
const { Title, Text } = Typography;

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
			<Affix offsetTop="0">
				<PageHeader
					className="site-page-header"
					style={{ backgroundColor: "white" }}
				>
					<Title level={2}>Search for Businesses or Cities</Title>
					<SearchBar
							defaultText={DEFAULT_SEARCH}
							onSubmit={searchTextChanged}
						/>
				</PageHeader>
      </Affix>
			
			{ loading &&   <Spin tip="Loading..."/> }
			{ !loading &&
				( businesses ? 
					<BusinessTable
						businesses={businesses}/>: <Text>Sorry, no businesses found.</Text>
				)
			}
		</>
	);
};

