import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

// eslint-disable-next-line react/prefer-stateless-function
class Search extends React.Component {
  render() {
    const { benches, fetchBenches, updateFilter } = this.props;
    return (
      <div className="container">
        <BenchMap benches={benches} updateFilter={updateFilter} />
        <BenchIndex benches={benches} />
      </div>
    );
  }
}

export default Search;
