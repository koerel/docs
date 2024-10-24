const kbLink =
  "https://github.com/orgs/gruntwork-io/discussions?discussions_q=" +
  // filter by discussions with the label s:CI/Pipelines & sort by top voted discussions first
  encodeURIComponent("label:s:CI/Pipelines sort:top")

const sidebar = [
  {
    label: "How To Guides",
    type: "category",
    link: { type: 'generated-index', title: "Gruntwork How-To Guides", slug: "2.0/guides" },
    collapsible: false,
    items: [
      {
        label: "Gruntwork Library",
        type: "category",
        collapsed: true,
        link: { type: 'generated-index', title: "Library Guides", slug: "2.0/guides/library/index" },
        items: [
          {
            label: "Create your own Service Module",
            type: "doc",
            id: "2.0/guides/library/create-service-module",
          },
          {
            label: "Customize a Module",
            type: "doc",
            id: "2.0/guides/library/customize-module",
          },
          {
            label: "Integrate with Terraform Cloud",
            type: "doc",
            id: "2.0/guides/library/integrate-tfc",
          },
          {
            label: "Contributing to the Library",
            type: "doc",
            id: "2.0/guides/library/contributing",
          },
          {
            label: "Self-Hosting the Library",
            type: "doc",
            id: "2.0/guides/library/self-hosting",
          },
          {
            label: "Updating a module to a newer version",
            type: "doc",
            id: "2.0/guides/library/updating-modules",
          },
          {
            label: "Module Reference",
            type: "link",
            className: 'external-link',
            href: '/2.0/reference/library',
          },
        ],
      },
      {
        label: "Gruntwork Pipelines",
        type: "category",
        collapsed: true,
        link: { type: 'generated-index', title: "Pipelines Guides", slug: "2.0/guides/pipelines" },
        items: [
          {
            label: "Managing Secrets in your Pipelines",
            type: "doc",
            id: "2.0/guides/pipelines/managing-secrets",
          },
          {
            label: "Updating Pipelines",
            type: "doc",
            id: "2.0/guides/pipelines/updating-pipelines",
          },
          {
            label: "Configuration Reference",
            type: "link",
            className: 'external-link',
            href: '/2.0/reference/pipelines',
          },
        ],
      },
      {
        label: "Gruntwork Patcher",
        type: "category",
        collapsed: true,
        link: { type: 'generated-index', title: "Patcher Guides", slug: "2.0/guides/patcher" },
        items: [
          {
            label: "Setting up Promotion Workflows",
            type: "doc",
            id: "2.0/guides/patcher/promotion-workflows",
          },
          {
            label: "Configuration Reference",
            type: "link",
            className: 'external-link',
            href: '/2.0/reference/patcher',
          },
        ],
      },
      {
        label: "Gruntwork Account Factory",
        type: "category",
        collapsed: true,
        link: { type: 'generated-index', title: "Patcher Guides", slug: "2.0/guides/accountfactory" },
        items: [
          {
            label: "Customizing something",
            type: "doc",
            id: "2.0/guides/accountfactory/index",
          },
          {
            label: "Configuration Reference",
            type: "link",
            className: 'external-link',
            href: '/2.0/reference/accountfactory',
          },
        ],
      },
    ],
  },
]

module.exports = sidebar
