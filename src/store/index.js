import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import { alert } from './modules/alert.module';
import { account } from './modules/account.module';
import { users } from './modules/users.module';

export default createStore({
  modules: {
    alert,
    account,
    users,
  },
  state,
  mutations,
  actions,
});
