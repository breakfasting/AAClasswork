import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  // componentDidMount() {
  //   const { fetchBenches } = this.props;
  //   fetchBenches();
  // }

  render() {
    const { benches } = this.props;
    return (
      <div className="bench-index">
        {benches.map((bench) => <BenchIndexItem key={bench.id} bench={bench} />)}
      </div>
    );
  }
}

export default BenchIndex;
