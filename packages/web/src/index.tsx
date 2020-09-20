import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('oneforall', () => App)
AppRegistry.runApplication('oneforall', {
  rootTag: document.getElementById('root'),
})
