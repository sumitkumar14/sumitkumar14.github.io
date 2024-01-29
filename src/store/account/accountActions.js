import router from '@/router';
import { userService } from '../../_services';

export default {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });

    userService.login(username, password)
      .then(
        (user1) => {
          commit('loginSuccess', user1);
          router.push('/');
        },
        (error) => {
          commit('loginFailure', error);
          dispatch('alert/error', error, { root: true });
        },
      );
  },
  logout({ commit }) {
    userService.logout();
    commit('logout');
  },
  register({ dispatch, commit }, user1) {
    debugger;
    commit('registerRequest', user1);
    debugger;
    userService.register(user1)
      .then(
        (user2) => {
          commit('registerSuccess', user2);
          router.push('/login');
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true });
          });
        },
        (error) => {
          debugger;
          commit('registerFailure', error);
          dispatch('alert/error', error, { root: true });
        },
      );
  },
};
