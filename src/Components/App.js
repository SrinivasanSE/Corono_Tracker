import React from "react";
import Cards from "./cards/cards";
import Charts from "./charts/charts";
import Countrypicker from "./countrypicker/countrypicker";
import Styles from "./App.module.css";
import {
  fetchDataAction,
  fetchDailyDataAction,
  fetchCountriesDataAction,
  changeCountryAction,
} from "../redux/actions/actions";
import { connect } from "react-redux";
import { PacmanLoader } from "react-spinners";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchDataAction();
    this.props.fetchDailyDataAction();
    this.props.fetchCountriesDataAction();
  }
  handleCountryChange = async (country) => {
    this.props.changeCountryAction(country);
    this.props.fetchDataAction(country);
  };
  render() {
    return (
      <div>
        {this.props.fetching ? (
          <div className={Styles.spinner}>
            <PacmanLoader
              size={25}
              color={"orange"}
              loading={this.props.fetching}
            />
          </div>
        ) : (
          <div className={Styles.container}>
            <Cards data={this.props.data} fetching={this.props.fetching} />
            <Countrypicker
              handleCountryChange={this.handleCountryChange}
              countries={this.props.countries}
              country={this.props.country}
            />
            <Charts
              data={this.props.data}
              country={this.props.country}
              dailyData={this.props.dailyData}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  dailyData: state.dailyData,
  countries: state.countries,
  country: state.country,
  fetching: state.dataFetching || state.countriesFetching,
});

const mapDispatchToProps = {
  fetchCountriesDataAction,
  fetchDailyDataAction,
  fetchDataAction,
  changeCountryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
