import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class SubBreeds extends Component {
  state = {
    subBreeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  getSubBreeds = this.getSubBreeds.bind(this);
  getFirstImg = this.getFirstImg.bind(this);

  render() {
    return <Options title="Sub-breeds" subtitle={this.props.match.params.breed} list={this.state.subBreeds} imgLabel={this.state.imgLabel} imgUrl={this.state.imgUrl} />
  }

  componentDidMount() {
    this.getSubBreeds()
      .then(this.getFirstImg);
  }

  getSubBreeds() {
    return new Promise((resolve, reject) => {
      axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/list`)
        .then(response => {
          return response.data.message
        })
        .then(subBreeds => {
          return subBreeds.map(breed => {
            return {
              label: breed
            }
          });

        })
        .then(subBreeds => {
          this.setState({
            subBreeds
          });
          resolve(subBreeds);
        });
    });
  }

  getFirstImg(dogs) {
    const firstDog = dogs[0];
    const firstUrl = `https://dog.ceo/api/breed/${this.props.match.params.breed}/${firstDog.label}/images/random`;
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

export default SubBreeds;