import gql from 'graphql-tag'
import { apolloClient } from "../vue-apollo"
const state = {
    clubData: {}
}

const getters = {
    currentClubData: (state) => state.clubData
}

const actions = {
    async getClub({ commit }, requestData) {
        console.log(requestData)
        const response = await apolloClient.query({
            query: gql`
                    query getAccountClub($id:ID,$players:Boolean){
                        club(id:$id,players:$players){
                            _id
                            clubName
                            clubAddress{
                                street
                                city
                                country
                                pin
                            }
                            approved
                            phone
                        }
                    }
                    `,
            variables: {
                ...requestData
            }


        })

        commit("SET_CLUB_DATA", response.data.club)
    },
    async registerClub({ commit }, clubData) {
        console.log(clubData)
        const response = await apolloClient.mutate({
            mutation: gql`
            mutation registerClub($id:ID!,$phone:String!,$telePhone:String,$street:String,$city:String,$state:String,$country:String,$pin:String,$clubAdminName:String,$clubName:String!){
                createClub(id:$id,input:{clubName:$clubName,clubAdminName:$clubAdminName,telePhone:$telePhone,phone:$phone,clubAddress:{street:$street,city:$city,state:$state,pin:$pin,country:$country}}){
                    _id
                clubName
                clubAddress{
                    street
                    city
                    state
                    country
                    pin
                    }
                    approved
                    phone
    
                }
            }
            `,
            variables: {
                ...clubData
            }
        })
        commit("SET_CLUB_DATA", response.data.createClub)
    }
}

const mutations = {
    SET_CLUB_DATA: (state, payload) => {
        state.clubData = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
