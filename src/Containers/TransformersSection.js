import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

  // state= {
  //   displayed: false
  // }

  render() {
    console.log(this.props.content)
    return (
      <section className = "transformers-section">
        {/* Transformers here */}
        <Transformer content={this.props.content}/>
      </section>
    );
  }
}

export default TransformersSection;
