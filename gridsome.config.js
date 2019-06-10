require('dotenv').config()
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        typeName: 'Sanity',
        projectId: 'usfurirw',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: true,
        watchMode: true,
        routes: {
          sanityPost: ':slug__current'
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
