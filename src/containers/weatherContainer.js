import { connect } from 'react-redux';

import Weather from '../components/Weather';

const mapStateToProps = state => ({
    data: state.city
});

export default connect(mapStateToProps)(Weather);


