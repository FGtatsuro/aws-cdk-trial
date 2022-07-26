import * as cdk from 'aws-cdk-lib'
import { Stack, StackProps } from 'aws-cdk-lib'
import { aws_s3 as s3 } from 'aws-cdk-lib'

import type { Construct } from 'constructs'

export class StatefulStack extends Stack {
  readonly bucket: s3.Bucket

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    this.bucket = new s3.Bucket(this, 'cdk-trial-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })
  }
}
