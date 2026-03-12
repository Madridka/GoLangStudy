import type { App } from 'vue'
import PrimeVue from 'primevue/config'

// services
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'

// directives
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import StyleClass from 'primevue/styleclass'

import Aura from '@primeuix/themes/aura'

const primeOption = {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
      cssLayer: {
        name: 'primevue',
        order: 'theme,base,reset,primevue',
      },
    },
  },
}

export default {
  install: (app: App): void => {
    app.use(PrimeVue, primeOption)

    // services
    app.use(ConfirmationService)
    app.use(ToastService)
    app.use(DialogService)

    // directives
    app.directive('ripple', Ripple)
    app.directive('tooltip', Tooltip)
    app.directive('styleclass', StyleClass)
  },
}
