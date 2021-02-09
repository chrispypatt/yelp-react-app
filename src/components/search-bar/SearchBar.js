import React, { useState } from 'react';

import { Input } from 'antd';
const { Search } = Input;

export default function SearchBar(props)  {
	const [searchText, setSearchText] = useState(props.defaultText);

	const onSubmit = () => {
			props.onSubmit(searchText);
	}

	const onChange = (e) => {
		setSearchText(e.target.value);
	}

  return (
		<>
			<Search 
				className="search-bar"
				placeholder="Search for businesses" 
				onChange={onChange} 
				style={{ width: 400 }} 
				value={searchText}
				onKeyPress={event => {
					if (event.key === 'Enter') {
						onSubmit();
					}
				}}
				allowClear
				enterButton
				size="large"
			/>
		</>
	);
};
