import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';


class PackageComponent extends Component {
    render() {
      return (
        /* Spread below is important */
        <Container {...this.props} style={{...this.props.style }}> 
          {this.props.children}
        </Container>
      )
    }
}

export default PackageComponent;