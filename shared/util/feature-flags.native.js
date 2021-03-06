// @flow

import type {FeatureFlags} from './feature-flags'

const ff: FeatureFlags = {
  admin: __DEV__,
  explodingMessagesEnabled: true,
  fsEnabled: true,
  fsWritesEnabled: __DEV__,
  plansEnabled: false,
  walletsEnabled: __DEV__,
}

if (__DEV__) {
  console.log('Features', ff)
}

export default ff
