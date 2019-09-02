import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import services from './services'
import moment from 'moment'

import {
  Container,
  Header,
  Aside,
  Main,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Table,
  TableColumn,
  Button,
  Select,
  Cascader,
  Option,
  Form,
  FormItem,
  DatePicker,
  Tabs,
  TabPane,
  Input,
  Row,
  Col,
  Upload,
  Link,
  MessageBox,
  Message,
  Dialog,
  InputNumber,
  Pagination,
  Notification,
  Tag,
  Popover,
  Badge,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Transfer,
  Steps,
  Step,
  Card,
  Image,
  Autocomplete,
  Collapse,
  CollapseItem,
  Tooltip
} from 'element-ui'
import '@/assets/scss/element-variables.scss'


Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Select)
Vue.use(Cascader)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(DatePicker)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Link)
Vue.use(Dialog)
Vue.use(InputNumber)
Vue.use(Pagination)
Vue.use(Tag)
Vue.use(Popover)
Vue.use(Badge)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Transfer)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Card)
Vue.use(Image)
Vue.use(Autocomplete)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tooltip)
moment.locale('zh-cn')

Vue.config.productionTip = false

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification

Vue.prototype.$services = services

Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
