import './BusinessCell.css'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function BusinessCell(props)  {
  return (
		<>
			<Grid item xs={12} sm={8} md={6} lg={3} xl={2} >
				<Card className="cell">
					<CardMedia
						className="image"
						image={props.business.image_url}
						title={props.business.name}
					/>
					<CardContent className="info">
						<Typography gutterBottom variant="h5" component="h2">
						{props.business.name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Price - {props.business.price}
							<br/>
							{props.business.rating}/5
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</>
	);
};