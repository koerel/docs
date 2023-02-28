---
title: "SSM Healthchecks IAM Permissions"
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBadge from '../../../../../src/components/VersionBadge.tsx';
import { HclListItem, HclListItemDescription, HclListItemTypeDetails, HclListItemDefaultValue, HclGeneralListItem } from '../../../../../src/components/HclListItem.tsx';

<a href="https://github.com/gruntwork-io/terraform-aws-security/tree/main/modules/ssm-healthchecks-iam-permissions" className="link-button" title="View the source code for this module in GitHub.">View Source</a>

<a href="https://github.com/gruntwork-io/terraform-aws-security/releases?q=" className="link-button" title="Release notes for only the service catalog versions which impacted this service.">Release Notes</a>

# SSM Healthchecks IAM Permissions

This modules adds the necessary IAM policies to an IAM role so that the [AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html) [agent](https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-agent.html) gets necessary permissions in order to do automated health checks.

## Motivation

From: https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-agent.html

> SSM Agent is installed, by default, on the following Amazon EC2 Amazon Machine Images (AMIs):
>
> *   Windows Server (all SKUs)
> *   Amazon Linux
> *   Amazon Linux 2
> *   Ubuntu Server 18.04
> *   Ubuntu Server 20.04

We recommend using this module with just about every single EC2 Instance and Auto Scaling Group you launch, or you'll end up with confusing SSM errors in your logs (`syslog`).


<!-- ##DOCS-SOURCER-START
{
  "originalSources": [
    "https://github.com/gruntwork-io/terraform-aws-security/tree/modules/ssm-healthchecks-iam-permissions/readme.md",
    "https://github.com/gruntwork-io/terraform-aws-security/tree/modules/ssm-healthchecks-iam-permissions/variables.tf",
    "https://github.com/gruntwork-io/terraform-aws-security/tree/modules/ssm-healthchecks-iam-permissions/outputs.tf"
  ],
  "sourcePlugin": "module-catalog-api",
  "hash": "6e2b51ab0c237a72a18e4133a783fa30"
}
##DOCS-SOURCER-END -->