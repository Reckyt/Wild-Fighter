import React from 'react';
import axios from 'axios';

// const sampleSuperHeroe = {};

const arraySup = [];

class ArraySup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { superHero: '' };

    this.getSuperHeroe = this.getSuperHeroe.bind(this);
  }

  getSuperHeroe() {
    axios
      .get(`https://www.superheroapi.com/api.php/10156616570523372`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          superHeroe: data.result[0]
        });
      });
    arraySup.push(this.state.superHero);
    console.log(this.state.superHero);
  }

  render() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}

export default ArraySup;
