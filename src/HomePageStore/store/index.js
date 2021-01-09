export default {
    namespaced: true,
    state: {
        counter:0
    },
    mutations:{
        incCounter:function(state,payload){
            state.counter += payload.id;
        }
    },
    actions:{
        incCounterAction:function({ commit }){
            commit('incCounter',{id:10});
        }
    },
    getters:{
        getCounter:function(state){
            return state.counter;
        }
    }
}