import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rental from './components/Rental';

import * as rentalActions from './actions.js';

const mapStateToProps = ({ rental }) => ({
  rental
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...rentalActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Rental);
