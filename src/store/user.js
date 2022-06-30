import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from '@firebase/auth'

import {
  getDatabase,
  ref,
  set
} from 'firebase/database'

import User from './userCheckHelper'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password, name }) {
      try {
        const user = await createUserWithEmailAndPassword(getAuth(), email, password)
        commit('setUser', new User(user.user.uid))
        const db = getDatabase()
        await set(ref(db, `/users/${user.user.uid}`), {
          name,
          basket: 'empty'
        })
        console.log(user.user.uid)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async loginUser ({ commit }, { email, password }) {
      const user = await signInWithEmailAndPassword(getAuth(), email, password)
      commit('setUser', new User(user.user.uid))
    },
    async logoutUser ({ commit }) {
      signOut(getAuth())
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
