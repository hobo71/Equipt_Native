import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SportingGoods from './components/SportingGoods';

import * as sportingGoodsActions from './actions.js';

const mapStateToProps = state => ({
  sportingGoods: state.sportingGoods
});

const mapDispatchToProps = dispatch => {

  const actions = bindActionCreators({
    ...sportingGoodsActions
  }, dispatch);

  actions.fetchSportingGoods();

  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(SportingGoods);
