import Tabs from "./tabs"
import Tab from "./tab"

export default (Vue) => {
    Vue.component(Tab.name, Tab)
    Vue.component(Tabs.name, Tabs)
}