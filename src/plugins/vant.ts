/**
 * 按需引入vant
 */
import { Button } from 'vant'

const pluginsVant = [
  Button
]

export const vantPlugins = {
  install: function(vm) {
    pluginsVant.forEach((item:any) => {
      vm.component(item.name, item);
    });
  }
}