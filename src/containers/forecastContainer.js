import { connect } from 'react-redux';

import Forecast from '../components/Forecast';

const mapStateToProps = state => ({
    data: state.city,
    historyCityId: state.historyCityId
});

export default connect(mapStateToProps)(Forecast);


