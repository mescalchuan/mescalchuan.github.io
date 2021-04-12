import { economicGroup } from '@/api/economic'

const state = {
    economicGroupList: []
}

const mutations = {
    SET_ECONOMIC_GROUP_LIST: (state, data) => {
        state.economicGroupList = data
    }
}

const actions = {
    getEconomicGroupList({ commit }, data) {
        economicGroup(data).then(res => {
            if (res && res.status === 0) {
                const data = res.data
                if (data) {
                    const economicGroupInfos = data.economicGroupInfos
                    console.log(economicGroupInfos)
                    commit('SET_ECONOMIC_GROUP_LIST', economicGroupInfos)
                }
            }
        })
    }
}

export default {
    state,
    mutations,
    actions
}
