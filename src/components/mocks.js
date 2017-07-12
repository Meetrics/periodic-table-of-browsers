/**
 * Data mocks
 */
export default {
  documentProperties: [
    {
      name: 'referrer',
      type: 'string'
    },
    {
      name: 'getElementById',
      type: 'Function'
    },
    {
      name: 'querySelectorAll',
      type: 'Function'
    },
    {
      name: 'defaultView',
      type: 'Object'
    },
    {
      name: 'location',
      type: 'Object'
    }
  ],
  windowProperties: [
    {
      name: 'referrer',
      type: 'string'
    },
    {
      name: 'getElementById',
      type: 'Function'
    },
    {
      name: 'querySelectorAll',
      type: 'Function'
    },
    {
      name: 'defaultView',
      type: 'Object'
    },
    {
      name: 'location',
      type: 'Object'
    }
  ],
  browsers: {
    columns: ['internetexplorer', 'chrome', 'firefox', 'opera', 'edge'],
    data: [
      [6, 46, 21, 4, 12],
      [7, 47, 22, 5, 13],
      [8, 48, 23, 6, 14],
      [9, 49, 24, 7, 15],
      [10, 50, 25, 8, 16],
      [11, 51, null, 9]
    ]
  }
}
