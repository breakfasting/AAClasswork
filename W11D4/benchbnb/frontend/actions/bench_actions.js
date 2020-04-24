import * as APIUtil from '../util/bench_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches,
});

export const fetchBenches = (filter) => (dispatch) => {
  // debugger
  return APIUtil.fetchBenches(filter)
    .then((benches) => dispatch(receiveBenches(benches)),
      (res) => dispatch(receiveErrors(res.responseJSON)))
};
