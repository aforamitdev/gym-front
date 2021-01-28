import { apolloClient } from "../vue-apollo"
import { gql } from "graphql-tag"
import router from "../router/index"
const state = {
  allClubs: [],
  userToken: "",
  userData: JSON.parse(localStorage.getItem("user"))
}

const getters = {
  getRegistrationClub: (state) => state.allClubs,

  getProfileId: (state) => state.userData.profileId
}

const actions = {
  // async login({ commit }, email, password) {
  //   await graphql.query({
  //     query: gql`
  //     query login(input:{$email:String,$password:String}){
  //       login(email:$email,password:$password){
  //         token
  //       }
  //     }
  //   `,
  //     variables: {
  //       email: email,
  //       password: password,
  //     }

  //   })
  // }
  async login({ commit, dispatch }, loginData) {
    console.log(loginData)
    try {

      const result = await apolloClient.query({
        query: gql`query login($email:String!,$password:String!){
          login(input:{email:$email,password:$password}){
              token
          }
        }`,
        variables: {
          ...loginData
        }
      })
      localStorage.setItem("token", result.data.login.token)
      commit("SET_USER_TOKEN", result.data.login.token)
      await dispatch("accountData")
      const user = JSON.parse(localStorage.getItem("user"))
      console.log(user, "userType")
      if (user) {
        if (user.userType === "admin") {
          router.push("/admin")
        }
        if (user.userType === "club") {

          router.push('/club')
        }
        if (user.userType === "player") {
          router.push("/player")
        }
      } else {
        router.push("/auth/register")
      }
    } catch (error) {
      throw new Error(error)
    }

  },
  async register({ commit }, userData) {
    console.log(userData, "asasas")
    try {
      const result = await apolloClient.mutate({
        mutation: gql`
        mutation createAccount($firstName:String!,$lastName:String!,$userType:Role!,$password:String!,$email:String!,$clubId:ID){
          createAccount(input:{firstName:$firstName,lastName:$lastName,userType:$userType,email:$email,password:$password,clubId:$clubId}){
            token
          }
        }  
        `,
        variables: {
          ...userData,
        }
      })
      localStorage.setItem("token", result.data.createAccount.token)
      commit("SET_USER_TOKEN", result.data.createAccount.token)
      router.push("/home")

    } catch (error) {
      throw new Error(error)
    }

  },
  async getClubs({ commit }, flag) {
    try {
      const results = await apolloClient.query({
        query: gql`
      query clubs($registration:Boolean){
          clubs(registration:$registration){
            _id
            clubName
          }
      }`,
        variables: {
          registration: flag.registration
        }
      })

      commit("SET_ALL_CLUBS", results.data)

    } catch (error) {
      throw new Error(error)
    }
  },

  async accountData({ commit }) {
    console.log("exec")
    try {
      const results = await apolloClient.query({
        query: gql`
        query accountData{
          accountData{
            _id
          firstName,
          lastName,
          userType,
          email
          profileId
          }
        }
        `
      })
      localStorage.setItem("user", JSON.stringify(results.data.accountData))
      return
    } catch (error) {
      throw new Error(error)
    }
  },
  async logout({ commit }) {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    apolloClient.clearStore()
    apolloClient.cache.reset()
    commit("REMOVE_TOKEN")
    router.push("/")
  }

}

const mutations = {

  SET_LOGIN_DATA: (state, payload) => { },
  SET_ALL_CLUBS: (state, payload) => {
    state.allClubs = payload.clubs
  },
  SET_USER_TOKEN: (state, payload) => {
    state.userToken = payload
  },
  REMOVE_TOKEN: (state, payload) => {
    state.userToken = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
