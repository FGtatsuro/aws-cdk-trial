import { expect, test } from 'vitest'

import { Capture, Template } from 'aws-cdk-lib/assertions'
import * as cdk from 'aws-cdk-lib'

import { StatefulStack } from '../lib/stateful-stack'

test('stateful-stack', () => {
  const stack = new StatefulStack(new cdk.App(), 'StatefulStack', {})
  const template = Template.fromStack(stack)

  // For example usage of Capture
  const updateReplacePolicy = new Capture()
  const deletionPolicy = new Capture()
  template.hasResource('AWS::S3::Bucket', {
    UpdateReplacePolicy: updateReplacePolicy,
    DeletionPolicy: deletionPolicy,
  })

  expect(updateReplacePolicy.asString()).toEqual('Delete')
  expect(deletionPolicy.asString()).toEqual('Delete')

  expect(stack.bucket.node.path).toEqual('StatefulStack/cdk-trial-bucket')
})
