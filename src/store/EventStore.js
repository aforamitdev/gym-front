import gql from 'graphql-tag'
import { apolloClient } from "../vue-apollo"
const state = {
    allEvents: [],
    createdEvent: {}
}

const getters = {
}

const actions = {
    async eventCreate({ commit }, eventData) {
        console.log(eventData)
        try {
            const result = await apolloClient.mutate({
                mutation: gql`
            mutation createEvent($title:String,$description:String,$location:String,$registrationDue:String,$eventDate:String){
                createEvent(input:{title:$title,description:$description,location:$location,registrationDue:$registrationDue,eventDate:$eventDate}){
                    _id
                    title
                    description
                    location
                    registrationDue
                    eventDate
                    reportingTime
                    level
                }
            }
            `,
                variables: {
                    ...eventData
                }
            })
            commit("EVENT_CREATED", result.data)
        } catch (error) {
            throw new Error(error)
        }
    }
    ,
    async getEvents({ commit }) { }
}

const mutations = {
    EVENT_CREATED: (state, payload) => {
        state.createdEvent = payload.createEvent
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
