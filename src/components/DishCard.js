import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const DishCard = ({ dish }) => {
    return (
        dish?
        <div className= "card"> 
                <Card style={{ width: '30rem'}} class="card">
                <Card.Img variant="top" src={dish.attributes.picture} />
                <Card.Body>
                <Card.Title>{dish.attributes.name}</Card.Title>
                <Card.Text>
                Ingredients: {dish.attributes.ingredients}
                </Card.Text>
                <Card.Text>
                Directions: {dish.attributes.directions}
                </Card.Text>
                <Card.Text>
                Cook Time: {dish.attributes.cook_time}
                </Card.Text>
                <Link to={`/dishes/${dish.id}/edit`}>
                    <Button variant="primary" size="md">
                        Edit This Recipe
                    </Button>
                    </Link>
               
            </Card.Body>
            </Card>
            </div> :
      <p>This the the Dish card with no dish!</p>

    )
}

export default DishCard