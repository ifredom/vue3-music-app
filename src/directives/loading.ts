import { Directive, createApp } from 'vue'
import Loading from '@/components/base/Loading'

function append(el: any) {
  el.appendChild(el.instance.$el)
}
function remove(el: any) {
  el.removeChild(el.instance.$el)
}

const loading: Directive = {
  mounted(el, { value }) {
    console.log('v-loading mounted');
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    if (value) {
      // 加载中
      append(el)
    }
  },
  updated(el, { value, oldValue }) {
    console.log('v-loading updated', value, oldValue);

    if(!value && oldValue) {
      remove(el)
    }
  },
}

export default loading
