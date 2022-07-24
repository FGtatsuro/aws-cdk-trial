// Don't use SyntheticDefaultImports(ex. import cdk from 'aws-cdk-lib')
// because cdk list doesn't work properly with SyntheticDefaultImports.
import * as cdk from 'aws-cdk-lib'

import { StatefulStack } from '../lib/statefull-stack'

const app = new cdk.App()
new StatefulStack(app, 'StatefulStack', {})
