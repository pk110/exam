// 测面滑动菜单效果
const SHOW_MENU = true
const HIDE_MENU = false
const SHOW_EXAM = true
const HIDE_EXAM = false

const sideBar = {
	state: {
		show: false,
		showExam:false,
		zIndex:'z-index:0'
	},
	mutations: {
		showUser(state){
			state.show = SHOW_MENU
		},
		showExam(state){
			state.showExam = SHOW_EXAM,
			setTimeout(function(){
				state.zIndex = 'z-index:-1'
			},300)
		},
		resetZindex(state){
			setTimeout(function(){
				state.zIndex = 'z-index:0'
			},300)
		}
	},
	actions: {
		showUser ({commit}) {
			commit('showUser')
		},
		showExam ({commit}) {
			commit('showExam')
		},
		resetZindex ({commit}) {
			commit('resetZindex')
		},
	},
	getters: {

	}
}
export default sideBar
