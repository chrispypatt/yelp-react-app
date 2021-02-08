import './SearchBar.css';
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar(props)  {
	const [searchText, setSearchText] = useState(null);

	const onSubmit = () => {
		// if (searchText) {
			props.onSubmit(searchText);
		// }
	}

	const onChange = (e) => {
		setSearchText(e.target.value);
	}

  return (
		<>
			<Paper className="search-bar">
				<InputBase
					inputProps={{ style: { textAlign: 'center' }}} 
					placeholder="Search for businesses"
					defaultValue={props.defaultText}
					onChange={onChange}
					onKeyPress={event => {
						if (event.key === 'Enter') {
							onSubmit();
						}
					}}
				/>
			</Paper>
			<IconButton onClick={onSubmit}>
				<SearchIcon />
			</IconButton>
		</>
	);
};