import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup.js";
import MyDishes from "./components/MyDishes";
import DishCard from "./components/DishCard";
import NewDishFormWrapper from "./components/NewDishFormWrapper";
import EditDishFormWrapper from "./components/EditDishFormWrapper";
import { Switch, Route, withRouter } from "react-router-dom";
import Layout from "./components/Layout.js";
import Jumbotron from "./components/Jumbotron";


class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn, dishes } = this.props;
    return (
      <React.Fragment>
        {loggedIn ? <NavBar location={this.props.location} /> : <Home />}
        <Jumbotron />
        <Layout>
          <Switch>
            <Route
              exact
              path="/signup"
              render={({ history }) => <Signup history={history} />}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dishes" component={MyDishes} />
            <Route exact path="/dishes/new" component={NewDishFormWrapper} />
            <Route
              exact
              path="/dishes/:id"
              render={(props) => {
                const dish = dishes.find(
                  (dish) => dish.id === props.match.params.id
                );
                console.log(dish);
                return <DishCard dish={dish} {...props} />;
              }}
            />
            <Route
              exact
              path="/dishes/:id/edit"
              render={(props) => {
                const dish = dishes.find(
                  (dish) => dish.id === props.match.params.id
                );

                return <EditDishFormWrapper dish={dish} {...props} />;
              }}
            />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
    dishes: state.myDishes,
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
