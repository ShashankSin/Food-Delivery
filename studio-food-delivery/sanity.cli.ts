import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '82a2s4b5',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
