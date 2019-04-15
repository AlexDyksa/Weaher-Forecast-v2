import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import History from '../components/History';
import { chooseHistory } from '../actions/historyActions';

const mapStateToProps = state => ({
    data: state.city
});

const mapDispatchToProps = dispatch => ({
    chooseHistory: bindActionCreators(chooseHistory, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(History);


