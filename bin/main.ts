// Don't use SyntheticDefaultImports(ex. import cdk from 'aws-cdk-lib')
// because cdk list doesn't work properly with SyntheticDefaultImports.
import * as cdk from 'aws-cdk-lib'

import { StatefulStack } from '../lib/stateful'

const app = new cdk.App()
const stateful = new StatefulStack(app, 'StatefulStack', {})
cdk.Tags.of(stateful).add('StateType', 'Full')
