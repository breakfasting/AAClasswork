import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  benches: Object.values(state.entities.benches),
});

const mapDispatchToProps = (dispatch) => ({
  // fetchBenches: () => dispatch(fetchBenches()),
  updateFilter: (bounds) => dispatch(updateFilter(bounds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
