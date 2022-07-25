import { expect, test } from 'vitest'

import { Capture, Template } from 'aws-cdk-lib/assertions'
import * as cdk from 'aws-cdk-lib'

import { StatefulStack } from '../lib/stateful-stack'

test('stateful-stack', () => {
  const template = Template.fromStack(new StatefulStack(new cdk.App(), 'StatefulStack', {}))

  // For example usage of Capture
  const updateReplacePolicy = new Capture()
  const deletionPolicy = new Capture()
  template.hasResource('AWS::S3::Bucket', {
    UpdateReplacePolicy: updateReplacePolicy,
    DeletionPolicy: deletionPolicy,
  })

  expect(updateReplacePolicy.asString()).toEqual('Delete')
  expect(deletionPolicy.asString()).toEqual('Delete')
})
