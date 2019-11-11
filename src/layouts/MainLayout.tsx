import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

class MainLayout extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return(
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    )
  }
};

export default MainLayout;
