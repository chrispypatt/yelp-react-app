import './BusinessGrid.css'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import BusinessCell from './BusinessCell';

export default function BusinessGrid(props)  {
  return (
		<>
			<Grid container className="grid" spacing={3} xs={12}>
				{props.businesses.map(business => 
					<BusinessCell
						business={business}/>
					)
				}
			</Grid>
		</>
	);
};