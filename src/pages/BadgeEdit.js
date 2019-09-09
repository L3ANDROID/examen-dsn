import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async (e) => { //al cargar los datos
    this.setState({loading: true, error: null})

    try{
      const data = await api.badges.read(
        this.props.match.params.badgeId //de esta forma accedemos a las variables gracias a react router
      )
      this.setState({loading: false, form: data})
    }catch(error){
      this.setState({loading: false, error: error})
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => { //al darle click
    e.preventDefault()
    this.setState({loading: true, error: null})
    try{
      await api.badges.update(this.props.match.params.badgeId,this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges'); //es una redireccion

    } catch(error){
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if(this.state.loading){
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero-image BadgeEdit__hero">
        <h2>Editar Producto</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'NOMBRE'}
                lastName={this.state.form.lastName || 'DESCRIPCION'}
                twitter={this.state.form.twitter || 'PRECIO'}
                jobTitle={this.state.form.jobTitle || 'CANTIDAD'}
                email={this.state.form.email || ''}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
            <h1>Editar</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
