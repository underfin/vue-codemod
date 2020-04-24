import { defineInlineTest } from 'jscodeshift/src/testUtils'
const transform = require('../root-prop-to-use')

defineInlineTest(
  transform,
  {
    rootPropName: 'router',
  },
  `createApp({ router });`,
  `createApp({}).use(router);`,
  'correctly transform root `router` prop to `.use(router)`'
)
