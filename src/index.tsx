import { createRuntime } from 'exf-ts'

const runtime = createRuntime()

/* We pass rules to runtime so platforms which pass that rules will be mounted */ 
const rules = {}

runtime.createPlatform({
  name: 'ex',
  providers: {
    service: {
      type: 'singleton',
      value: () => import('./service')
    }
  },
  components: [
    { tag: 'app', element: () => import('./App') }
  ],
  bootstrap: {
    element: 'app',
    container: 'body'
  },
  global: {
    style: `
      .bg-red {
        background: red;
      }
    `
  },
  conditions (rules) {
    return true
  }
})

runtime.run(rules)