
export const state = () => ({
  blockstackUserSession: null,
})

export const mutations = {

  // BLOCKSTACK USER
  SET_USERSESSION(state, userSession) {
    state.blockstackUserSession = userSession || null
  },

}

export const actions = {

}

export const getters = {
  loggedUser: state => state.userSession
}