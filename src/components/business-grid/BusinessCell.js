import React from 'react';
import { Card, Col, Rate, Image } from 'antd';
const { Meta } = Card;

export default function BusinessCell(props)  {

  return (
			<Col xs={24} sm={20} md={10} lg={6} xl={5} justify={"center"}>
				<Card
					hoverable
					style={{ margin: 20 }}
					cover={	<Image 
						style= {{ objectFit: "cover", height: "240px" }}
						alt={props.business.name} 
						src={props.business.image_url} />}
				>
					<Meta 
						title={props.business.name} 
						description={props.business.price ? `Price - ${props.business.price}` : ""}
					/>			
					<p>{props.business.rating} <Rate allowHalf disabled defaultValue={props.business.rating}/></p>
				</Card>
			</Col>
	);
};