import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Weather from '../components/Weather';
import { resetHistory } from '../actions/historyActions';

const mapStateToProps = state => ({
    data: state.city,
    historyCityId: state.historyCityId,
});

const mapDispatchToProps = dispatch => ({
    resetHistory: bindActionCreators(resetHistory, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);


