export const fetchBenches = (filters) => (
  $.ajax({
    url: '/api/benches',
    method: 'GET',
    data: filters,
  })
);
