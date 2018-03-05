// 测面滑动菜单效果
const SHOW_MENU = true
const HIDE_MENU = false
const SHOW_EXAM = true
const HIDE_EXAM = false
const SHOW_SLIDER = true
const HIDE_SLIDER = false

const slideBar = {
	state: {
		show: false,
		showExam:false,
		showSlider:false,
		zIndex:'z-index:0',
		box:false,
		bottomLeft:'',
		sliderSiger:'',
		registerShow:false,
		registerNextShow:false,
		privateShow:false,
		showUpdata:false
	},
	mutations: {
		showUser(state){
			state.show = SHOW_MENU
		},
		showSiger(state){
			state.showSlider = SHOW_SLIDER
			state.box = true
			state.bottomLeft = 'left:80%;transition:left .5s ease;'
			state.sliderSiger = 'slider-right'
		},
		showExam(state){
			state.showExam = SHOW_EXAM,
			setTimeout(function(){
				state.zIndex = 'z-index:-1'
			},300)
		},
		hiddenSiger(state){
			state.showSlider = HIDE_SLIDER;
			state.box = false
			state.bottomLeft = 'left:0'
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
		showSiger ({commit}) {
			commit('showSiger')
		},
		showExam ({commit}) {
			commit('showExam')
		},
		resetZindex ({commit}) {
			commit('resetZindex')
		},
		hiddenSiger ({commit}) {
			commit('hiddenSiger')
		}
	},
	getters: {

	}
}
export default slideBar
