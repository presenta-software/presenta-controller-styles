import { colors, colorvars } from './colors/index'
import fonts from './fonts/index'
import transitions from './transitions/index'
import scenevars from './scenevars/index'
import blockvars from './blockvars/index'
import layouts from './layouts/index'

const controller = function (routerElement, router, ctrlConfig, projectConfig) {}

controller.colors = colors
controller.colorvars = colorvars
controller.fonts = fonts
controller.transitions = transitions
controller.scenevars = scenevars
controller.blockvars = blockvars
controller.layouts = layouts

controller.install = Presenta => {
  Presenta.addController('styles', controller)
}

export default controller

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(controller)
}
