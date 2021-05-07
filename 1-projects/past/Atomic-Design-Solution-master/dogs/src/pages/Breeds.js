import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  getBreeds = this.getBreeds.bind(this);
  getFirstImg = this.getFirstImg.bind(this);

  render() {
    return <Options title="Breeds" list={this.state.breeds} imgLabel={this.state.imgLabel} imgUrl={this.state.imgUrl} />
  }

  componentDidMount() {
    this.getBreeds()
      .then(this.getFirstImg);
  }

  getBreeds() {
    return new Promise((resolve, reject) => {
      axios.get("https://dog.ceo/api/breeds/list")
        .then(response => response.data.message)
        .then(this.filterBreeds)
        .then(breeds => {
          return breeds.map(breed => {
            return {
              label: breed,
              path: `/subbreeds/${breed}`
            }
          });

        })
        .then(breeds => {
          this.setState({
            breeds
          });
          resolve(breeds);
        });
    });
  }

  filterBreeds(breeds) {
    const choiceBreeds = {
      hound: "hound",
      retriever: "retriever",
      terrier: "terrier",
      poodle: "poodle",
      setter: "setter"
    }

    return breeds.filter(breed => choiceBreeds[breed]);
  }

  getFirstImg(dogs) {
    const firstDog = dogs[0];
    const firstUrl = `https://dog.ceo/api/breed/${firstDog.label}/images/random`;
    axios.get(firstUrl)
      .then(response => response.data.message)
      .then(imgUrl => {
        this.setState({
          imgLabel: firstDog.label,
          imgUrl
        });
        return dogs;
      });
  }
}

export default Breeds;