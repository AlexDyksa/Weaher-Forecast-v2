import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '../components/Form';
import { changeCityName, fetchData } from '../actions/formActions';
import { resetHistory } from '../actions/historyActions';

const mapStateToProps = state => ({
    enteredCityName: state.enteredCityName,
    city: state.city
});

const mapDispatchToProps = dispatch => ({
    changeCityName: bindActionCreators(changeCityName, dispatch),
    fetchData: bindActionCreators(fetchData, dispatch),
    resetHistory: bindActionCreators(resetHistory, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);