import React from 'react';

import './styles/BadgeDetail.css';
import confLogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetail(props){

    const badge = props.badge;

    return(
        <div>
            <div className="BadgeDetails__hero">
                <div className="container"> {/* Margen y centrado */}
                    <div className="row"> {/* una fila */}
                        <div className="col-6"> {/* Divide la pagina en dos columnas */}
                            <h2>Descripción Producto</h2>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h3>Acciones</h3>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`} >Edit</Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal} 
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetail;