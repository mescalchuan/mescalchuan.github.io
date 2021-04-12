const getters = {
  sidebar: state => state.app.sidebar,
  menuList: state => state.app.menuList,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  accountList: state => state.account.accountList,
  accountGroupList: state => state.account.accountGroupList
}
export default getters
