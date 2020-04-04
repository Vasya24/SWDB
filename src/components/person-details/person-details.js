import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    gender: null,
    birthYear: null,
    eyeColor: null
  };

  constructor() {
    super();
    this.updatePerson();
  }

  updatePerson() {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService.getPerson(id).then((person) => {
      this.setState({
      id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
      });
    });
  }

  render() {
    const {id, name, gender, birthYear, eyeColor} = this.state;
    return (
      <div className="person-details card">
        <img className="person-image" alt=""
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}