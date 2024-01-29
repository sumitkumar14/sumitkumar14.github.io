import state from '../alert/alertState';
import mutations from '../alert/alertMutations';
import actions from '../alert/alertActions';

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations,
};
