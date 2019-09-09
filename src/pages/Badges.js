import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError';

import api from '../api'

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000)//actualiza los datos cada 5 segundos
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})

    try{
      const data = await api.badges.list();
      this.setState({loading: false, data: data})
    }catch(error){
      this.setState({loading: false, error: error})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.intervalId);
  }

  render() {
    if(this.state.loading === true && !this.state.data){
      return <PageLoading />
    }
    if(this.state.error){
      return <PageError error={this.state.error} />
    }
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <h2>Lista de Productos</h2>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo Producto
            </Link>
          </div>

          <BadgesList badges={this.state.data} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
