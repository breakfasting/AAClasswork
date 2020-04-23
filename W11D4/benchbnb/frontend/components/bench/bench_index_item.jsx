import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <div>
    <ul>
      <li>{bench.id}</li>
      <li>{bench.description}</li>
      <li>{bench.lat}</li>
      <li>{bench.lng}</li>
    </ul>
  </div>
);

export default BenchIndexItem;
