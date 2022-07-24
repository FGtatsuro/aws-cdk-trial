import { Stack, StackProps } from 'aws-cdk-lib'
import { aws_s3 as s3 } from 'aws-cdk-lib'

import type { Construct } from 'constructs'

export class StatefulStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    new s3.Bucket(this, 'cdk-trial-bucket')
  }
}
