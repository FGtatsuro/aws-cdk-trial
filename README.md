# aws-cdk-trial

Trial of AWS CDK

## Prerequisite

- Make
- Node.js
- [peco](https://github.com/peco/peco)

## Recommendations

- [AWS Vault](https://github.com/99designs/aws-vault)

## Development

### Build

```bash
$ make lint fmt build
```

### Test

```bash
$ make test
```

## Deployment

- For deploy, the IAM user executing commands must have permissions to assume roles AWS CDK uses.
  - Ref: https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html#bootstrapping-contract

```bash
# Check if we need
$ make cdk/synth
$ aws-vault exec {profile of IAM user} -- make cdk/diff

$ aws-vault exec {profile of IAM user} -- make deploy
```
