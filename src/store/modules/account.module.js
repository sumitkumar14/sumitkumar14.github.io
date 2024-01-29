import state from '../account/accountState';
import mutations from '../account/accountMutations';
import actions from '../account/accountActions';

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};
