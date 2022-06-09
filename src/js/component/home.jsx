import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {

	const cards = [
		{
			title: "Cat 1",
			image: "https://placekitten.com/408/287",
			description: "one cat"
		},
		{
			title: "Cat 2",
			image: "https://placekitten.com/408/288",
			description: "two cat"
		},
		{
			title: "Cat 3",
			image: "https://placekitten.com/408/289",
			description: "red cat"
		},
		{
			title: "Cat 4",
			image: "https://placekitten.com/408/290",
			description: "blue cat"
		}

	]

	return (
		<div className="row justify-content-center">
			<div className="col-8 ">
				<Navbar />
				<Jumbotron />
				<div className="d-flex justify-content-between">
				{cards.map((card, i) => {
					return <Card
					imgsrc={card.image}
					title={card.title}
					description={card.description}
				/>
				})}
				</div>
			</div>
		</div >
	);
};

export default Home;
