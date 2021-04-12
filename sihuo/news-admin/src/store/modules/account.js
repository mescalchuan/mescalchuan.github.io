import { getAccount, saveAccount, accountGroup } from '@/api/account'

const state = {
	accountList: [],
	accountGroupList: []
}

const mutations = {
	SET_ACCOUNT_LIST: (state, data) => {
		state.accountList = data
	},
	SET_ACCOUNT_GROUP_LIST: (state, data) => {
		state.accountGroupList = data
	}
}

const actions = {
	getAccountList({ commit }) {
		const data = {
			'pageNum': 0,
			'pageSize': 5,
			'pages': 1,
			'total': 0
		}
		getAccount(data).then(res => {
			if (res && res.status === 0) {
				const data = res.data
				if (data) {
					const accountInfos = data.accountInfos
					console.log(accountInfos)
					commit('SET_ACCOUNT_LIST', accountInfos)
				}
			}
		}).catch(() => {
		})
	},

	addAccount(data) {
		console.log(data)
		// data['accountGroupIds'] = [0]
		// data['manageVillages'] = [0]
		saveAccount(data).then((res) => {
			// console.log(res)
		}).catch(() => {
		})
	},

	getAccountGroup({ commit }) {
		accountGroup().then(res => {
			if (res && res.status === 0) {
				const data = res.data
				if (data) {
					const accountGroupInfos = data.accountGroupInfos
					commit('SET_ACCOUNT_GROUP_LIST', accountGroupInfos)
				}
			}
		}).catch(() => {
		})
	}
}

export default {
	state,
	mutations,
	actions
}
