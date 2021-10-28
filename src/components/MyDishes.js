import { React } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const MyDishes = props => {
    const { dishes } = props;

    return (
        <CardGroup style={{display: 'flex', flexDirection: 'row'}}>
            {dishes.length > 0 &&
                dishes.map(d => (
                    <Card key={d.id} style={{ width: '100em' }} style={{flex: 1}}>
                        <Card.Img variant="top" src={d.attributes.picture} />
                        <Card.Body>
                            <Card.Title>{d.attributes.name}</Card.Title>
                            <Card.Text>Possibly some text here</Card.Text>
                            <Link to={`/dishes/${d.id}`}>
                                <Button variant="primary">Full Recipe</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
        </CardGroup>
    );
};

const mapStateToProps = state => {
    return {
        dishes: state.myDishes
    };
};

export default connect(mapStateToProps)(MyDishes);