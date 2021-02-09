import React from 'react';
import BusinessCell from './BusinessCell';
import { Row } from 'antd';

export default function BusinessGrid(props)  {
  return (
		<>
		<Row justify="space-around" align="middle">
				{
					props.businesses.map(business => 
						<BusinessCell
							business={business}
						/>
					)
				}
			</Row>
		</>
	);
};