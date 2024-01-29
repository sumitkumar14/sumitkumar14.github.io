import { userService } from '../../_services';

export default {
  getAll({ commit }) {
    commit('getAllRequest');

    userService.getAll()
      .then(
        (users1) => commit('getAllSuccess', users1),
        (error) => commit('getAllFailure', error),
      );
  },

  delete({ commit }, id) {
    commit('deleteRequest', id);

    userService.delete(id)
      .then(
        () => commit('deleteSuccess', id),
        (error) => commit('deleteFailure', { id, error: error.toString() }),
      );
  },
};
