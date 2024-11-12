# What is a Patcher Patch?

A Patcher Patch is a set of instructions that Patcher can carry out to resolve a breaking change. 
This instruction sheet is delivered by means of a `yaml` file in a specific format:

```yaml
name: "<name-of-patch>"
description: "<description for patch>"
author: <your-name-here> <<your-email-address-here>>

# Optional dependencies. Terrapatch is a typical one
dependencies:
  - name: terrapatch
    version: "0.1.0"

# Steps necessary to resolve breaking change
steps:
  - name: "<name-of-step>"
    run: <command-to-run>
  - name: "<name-of-second-step>"
    run: <second-command-to-run>
  # etc
```

## As a Consumer of Patches...

All that's required to ingest patches for breaking IaC changes is to run a `patcher update` (with whatever flags you deem appropriate). 

This command can be run locally, in which case, the steps outlined in the patch(es) would be executed within your codebase, and it would be up to you to apply IoC changes, or open them in a PR against your codebase, whichever is appropriate for your use case. 

Additionally, Gruntwork offers a GitHub Action to automate this process for you.
Using the GitHub action, PRs will be opened against your codebase on a cadence specified by you, against environments, versions, etc. specified by you. 
The intention with this GitHub action is to leave you, the repo owner, in full control of your upgrade cadence. 

Regardless of methodology, the concept remains the same. 
Patcher will suggest changes to your codebase in order to keep your infrastructure up to date, however you see fit. 

## As an Author of Patches...

As an author of a patch, this means that you are publishing a breaking change with a release of your module. 
Therefore, as the introducer of the breaking change, you are most likely the person who knows the best how to introduce the fixes necessary to resolve the breaking change.

In a Patcher ecosystem, the resolution to such a change is written once, in a patch, and distributed to all consumers. 
Although your release will succeed with or without a patch, downstream consumers of your breakig change will praise you thoroughly for your advance work. 

In theory, you may write whatever command execution steps you want to perform patch steps. 
For example, there are many cases where validating tool versions are required, or using `sed` to find and replace certain values. 
However, we _strongly_ recommend using `terrapatch`, a Gruntwork tool that surgically updates Terraform/OpenTofu HCL files.  
