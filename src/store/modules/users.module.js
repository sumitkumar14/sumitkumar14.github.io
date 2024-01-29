import state from '../users/usersState';
import mutations from '../users/usersMutations';
import actions from '../users/usersActions';

export const users = {
  namespaced: true,
  state,
  actions,
  mutations,
};
