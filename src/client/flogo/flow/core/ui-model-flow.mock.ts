export let mockFlow = {
  'id': 'test_flow_1',
  'name': 'Test flow 1',
  'description': 'Hello world!!',
  'app': {
    'id': 'e9712c97-4a9e-4e95-b815-33204ba1fb3a',
    'name': 'Sample Application',
    'normalizedName': 'sample-application',
    'version': '',
    'description': '',
    'createdAt': '2017-03-21T09:43:38.614Z',
    'updatedAt': '2017-03-21T09:43:53.073Z'
  },
  'ref': 'github.com/TIBCOSoftware/flogo-contrib/action/flow',
  'tasks': [
    {
      'id': 'log_1',
      'name': 'First Log',
      'description': 'description log 1',
      'activityRef': 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      'type': 1,
      'attributes': [
        {
          'name': 'message',
          'value': 'I am here 1',
          'type': 'string'
        },
        {
          'name': 'flowInfo',
          'value': 'true',
          'type': 'boolean'
        },
        {
          'name': 'addToFlow',
          'value': 'true',
          'type': 'boolean'
        }
      ]
    },
    {
      'id': 'counter_1',
      'name': 'Counter1',
      'description': 'description counter 1',
      'activityRef': 'github.com/TIBCOSoftware/flogo-contrib/activity/counter',
      'type': 1,
      'attributes': [
        {
          'name': 'counterName',
          'value': 'counter1',
          'type': 'string'
        },
        {
          'name': 'increment',
          'value': 'true',
          'type': 'boolean'
        },
        {
          'name': 'reset',
          'value': false,
          'type': 'boolean'
        }
      ]
    },
    {
      'id': 'log_2',
      'name': 'Second Log',
      'description': 'description second log',
      'activityRef': 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      'type': 1,
      'attributes': [
        {
          'name': 'message',
          'value': 'I am here 2',
          'type': 'string'
        },
        {
          'name': 'flowInfo',
          'value': 'true',
          'type': 'boolean'
        },
        {
          'name': 'addToFlow',
          'value': 'true',
          'type': 'boolean'
        }
      ]
    },
    {
      'id': 'log_3',
      'name': 'Third Log',
      'description': 'description third Log',
      'activityRef': 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      'type': 1,
      'attributes': [
        {
          'name': 'message',
          'value': 'I am here 3',
          'type': 'string'
        },
        {
          'name': 'flowInfo',
          'value': 'true',
          'type': 'boolean'
        },
        {
          'name': 'addToFlow',
          'value': 'true',
          'type': 'boolean'
        }
      ]
    }
  ],
  'links': [
    {
      'id': 1,
      'from': 'log_1',
      'to': 'counter_1',
      'type': 0
    },
    {
      'id': 2,
      'from': 'counter_1',
      'to': 'log_2',
      'type': 1,
      'value': 'true'
    },
    {
      'id': 3,
      'from': 'log_2',
      'to': 'log_3',
      'type': 1,
      'value': 'false'
    }
  ]
};

export let mockErrorFlow = {
  'id': 'test_flow_1',
  'name': 'Test flow 1',
  'description': 'Hello world!!',
  'app': {
    'id': 'e9712c97-4a9e-4e95-b815-33204ba1fb3a',
    'name': 'Sample Application',
    'normalizedName': 'sample-application',
    'version': '',
    'description': '',
    'createdAt': '2017-03-21T09:43:38.614Z',
    'updatedAt': '2017-03-21T09:43:53.073Z'
  },
  'ref': 'github.com/TIBCOSoftware/flogo-contrib/action/flow',
  'tasks': [
    {
      'id': 2,
      'name': 'First Log',
      'description': 'log',
      'type': 1,
      'attributes': [
        {
          'name': 'message',
          'value': 'I am here 1',
          'type': 'string'
        },
        {
          'name': 'flowInfo',
          'value': 'true',
          'type': 'boolean'
        },
        {
          'name': 'addToFlow',
          'value': 'true',
          'type': 'boolean'
        }
      ]
    }
  ],
  'links': []
};

export let mockTransformationData = {
  'attributes': [
    {
      'name': 'message',
      'value': null,
      'type': 'string'
    },
    {
      'name': 'flowInfo',
      'value': 'true',
      'type': 'boolean'
    },
    {
      'name': 'addToFlow',
      'value': 'true',
      'type': 'boolean'
    }
  ],
  'inputMappings': [
    {
      'type': 1,
      'value': '{T.content}',
      'mapTo': 'message'
    }
  ]
};

export let mockErrorHandler = {
  'tasks': [
    {
      'id': 'error_log',
      'name': 'Error Log',
      'description': 'error log description',
      'activityRef': 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      'type': 1,
      'attributes': [
        {
          'name': 'message',
          'value': 'Error Log 1',
          'type': 'string'
        },
        {
          'name': 'flowInfo',
          'value': 'true',
          'type': 'boolean'
        },
        {
          'name': 'addToFlow',
          'value': 'true',
          'type': 'boolean'
        }
      ]
    }
  ],
  'links': []
};

export let mockActivitiesDetails = [
  {
    'id': 'tibco-log',
    'name': 'tibco-log',
    'version': '0.0.1',
    'description': 'Simple Log Activity',
    'ref': 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
    'homepage': 'https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/log',
    'inputs': [
      {
        'name': 'message',
        'type': 'string',
        'value': ''
      },
      {
        'name': 'flowInfo',
        'type': 'boolean',
        'value': 'true'
      },
      {
        'name': 'addToFlow',
        'type': 'boolean',
        'value': 'true'
      }
    ],
    'outputs': [
      {
        'name': 'message',
        'type': 'string'
      }
    ]
  },
  {
    'id': 'tibco-counter',
    'name': 'tibco-counter',
    'version': '0.0.1',
    'description': 'Simple Global Counter Activity',
    'ref': 'github.com/TIBCOSoftware/flogo-contrib/activity/counter',
    'homepage': 'https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/counter',
    'inputs': [
      {
        'name': 'counterName',
        'type': 'string',
        'required': true
      },
      {
        'name': 'increment',
        'type': 'boolean'
      },
      {
        'name': 'reset',
        'type': 'boolean'
      }
    ],
    'outputs': [
      {
        'name': 'value',
        'type': 'integer'
      }
    ]
  }
];

export const mockResultantUIFlow = {
  id: 'test_flow_1',
  name: 'Test flow 1',
  description: 'Hello world!!',
  appId: 'e9712c97-4a9e-4e95-b815-33204ba1fb3a',
  app: {
    id: 'e9712c97-4a9e-4e95-b815-33204ba1fb3a',
    name: 'Sample Application',
    normalizedName: 'sample-application',
    version: '',
    description: '',
    createdAt: '2017-03-21T09:43:38.614Z',
    updatedAt: '2017-03-21T09:43:53.073Z'
  },
  mainItems: {
    log_1: {
      name: 'First Log',
      description: 'description log 1',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_1',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'I am here 1',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    counter_1: {
      name: 'Counter1',
      description: 'description counter 1',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/counter',
      id: 'counter_1',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        counterName: 'counter1',
        increment: 'true',
        reset: false
      }
    },
    log_2: {
      name: 'Second Log',
      description: 'description second log',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_2',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'I am here 2',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    log_3: {
      name: 'Third Log',
      description: 'description third Log',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_3',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'I am here 3',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    '::branch::1': {
      id: '::branch::1',
      type: 3,
      condition: 'true'
    },
    '::branch::2': {
      id: '::branch::2',
      type: 3,
      condition: 'false'
    }
  },
  errorItems: {},
  mainGraph: {
    rootId: 'log_1',
    nodes: {
      log_1: {
        title: 'First Log',
        description: 'description log 1',
        type: 'task',
        id: 'log_1',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [
          'counter_1'
        ],
        parents: []
      },
      counter_1: {
        title: 'Counter1',
        description: 'description counter 1',
        type: 'task',
        id: 'counter_1',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [
          '::branch::1'
        ],
        parents: [
          'log_1'
        ]
      },
      log_2: {
        title: 'Second Log',
        description: 'description second log',
        type: 'task',
        id: 'log_2',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [
          '::branch::2'
        ],
        parents: [
          '::branch::1'
        ]
      },
      log_3: {
        title: 'Third Log',
        description: 'description third Log',
        type: 'task',
        id: 'log_3',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [],
        parents: [
          '::branch::2'
        ]
      },
      '::branch::1': {
        id: '::branch::1',
        type: 'branch',
        parents: [
          'counter_1'
        ],
        children: [
          'log_2'
        ],
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false
        }
      },
      '::branch::2': {
        id: '::branch::2',
        type: 'branch',
        parents: [
          'log_2'
        ],
        children: [
          'log_3'
        ],
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false
        }
      }
    }
  },
  errorGraph: {
    rootId: null,
    nodes: {}
  },
  schemas: {
    'github.com/TIBCOSoftware/flogo-contrib/activity/log': {
      id: 'tibco-log',
      name: 'tibco-log',
      version: '0.0.1',
      description: 'Simple Log Activity',
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      homepage: 'https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/log',
      inputs: [
        {
          name: 'message',
          type: 'string',
          value: ''
        },
        {
          name: 'flowInfo',
          type: 'boolean',
          value: 'true'
        },
        {
          name: 'addToFlow',
          type: 'boolean',
          value: 'true'
        }
      ],
      outputs: [
        {
          name: 'message',
          type: 'string'
        }
      ]
    },
    'github.com/TIBCOSoftware/flogo-contrib/activity/counter': {
      id: 'tibco-counter',
      name: 'tibco-counter',
      version: '0.0.1',
      description: 'Simple Global Counter Activity',
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/counter',
      homepage: 'https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/counter',
      inputs: [
        {
          name: 'counterName',
          type: 'string',
          required: true
        },
        {
          name: 'increment',
          type: 'boolean'
        },
        {
          name: 'reset',
          type: 'boolean'
        }
      ],
      outputs: [
        {
          name: 'value',
          type: 'integer'
        }
      ]
    }
  },
  metadata: {
    input: [],
    output: []
  }
};

export const mockResultantUIFlowWithError = {
  id: 'test_flow_1',
  name: 'Test flow 1',
  description: 'Hello world!!',
  appId: 'e9712c97-4a9e-4e95-b815-33204ba1fb3a',
  app: {
    id: 'e9712c97-4a9e-4e95-b815-33204ba1fb3a',
    name: 'Sample Application',
    normalizedName: 'sample-application',
    version: '',
    description: '',
    createdAt: '2017-03-21T09:43:38.614Z',
    updatedAt: '2017-03-21T09:43:53.073Z'
  },
  mainItems: {
    log_1: {
      name: 'First Log',
      description: 'description log 1',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_1',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'I am here 1',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    counter_1: {
      name: 'Counter1',
      description: 'description counter 1',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/counter',
      id: 'counter_1',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        counterName: 'counter1',
        increment: 'true',
        reset: false
      }
    },
    log_2: {
      name: 'Second Log',
      description: 'description second log',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_2',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'I am here 2',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    log_3: {
      name: 'Third Log',
      description: 'description third Log',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_3',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'I am here 3',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    '::branch::3': {
      id: '::branch::3',
      type: 3,
      condition: 'true'
    },
    '::branch::4': {
      id: '::branch::4',
      type: 3,
      condition: 'false'
    }
  },
  errorItems: {
    error_log: {
      name: 'Error Log',
      description: 'error log description',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'error_log',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'Error Log 1',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    }
  },
  mainGraph: {
    rootId: 'log_1',
    nodes: {
      log_1: {
        title: 'First Log',
        description: 'description log 1',
        type: 'task',
        id: 'log_1',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [
          'counter_1'
        ],
        parents: []
      },
      counter_1: {
        title: 'Counter1',
        description: 'description counter 1',
        type: 'task',
        id: 'counter_1',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [
          '::branch::3'
        ],
        parents: [
          'log_1'
        ]
      },
      log_2: {
        title: 'Second Log',
        description: 'description second log',
        type: 'task',
        id: 'log_2',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [
          '::branch::4'
        ],
        parents: [
          '::branch::3'
        ]
      },
      log_3: {
        title: 'Third Log',
        description: 'description third Log',
        type: 'task',
        id: 'log_3',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [],
        parents: [
          '::branch::4'
        ]
      },
      '::branch::3': {
        id: '::branch::3',
        type: 'branch',
        parents: [
          'counter_1'
        ],
        children: [
          'log_2'
        ],
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false
        }
      },
      '::branch::4': {
        id: '::branch::4',
        type: 'branch',
        parents: [
          'log_2'
        ],
        children: [
          'log_3'
        ],
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false
        }
      }
    }
  },
  errorGraph: {
    rootId: 'error_log',
    nodes: {
      error_log: {
        title: 'Error Log',
        type: 'task',
        description: 'error log description',
        id: 'error_log',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [],
        parents: []
      }
    }
  },
  schemas: {
    'github.com/TIBCOSoftware/flogo-contrib/activity/log': {
      id: 'tibco-log',
      name: 'tibco-log',
      version: '0.0.1',
      description: 'Simple Log Activity',
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      homepage: 'https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/log',
      inputs: [
        {
          name: 'message',
          type: 'string',
          value: ''
        },
        {
          name: 'flowInfo',
          type: 'boolean',
          value: 'true'
        },
        {
          name: 'addToFlow',
          type: 'boolean',
          value: 'true'
        }
      ],
      outputs: [
        {
          name: 'message',
          type: 'string'
        }
      ]
    },
    'github.com/TIBCOSoftware/flogo-contrib/activity/counter': {
      id: 'tibco-counter',
      name: 'tibco-counter',
      version: '0.0.1',
      description: 'Simple Global Counter Activity',
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/counter',
      homepage: 'https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/counter',
      inputs: [
        {
          name: 'counterName',
          type: 'string',
          required: true
        },
        {
          name: 'increment',
          type: 'boolean'
        },
        {
          name: 'reset',
          type: 'boolean'
        }
      ],
      outputs: [
        {
          name: 'value',
          type: 'integer'
        }
      ]
    }
  },
  metadata: {
    input: [],
    output: []
  }
};

export let mockResultantUIFlowWithTransformations = {
  id: 'test_flow_1',
  name: 'Test flow 1',
  description: 'Hello world!!',
  appId: 'e9712c97-4a9e-4e95-b815-33204ba1fb3a',
  app: {
    id: 'e9712c97-4a9e-4e95-b815-33204ba1fb3a',
    name: 'Sample Application',
    normalizedName: 'sample-application',
    version: '',
    description: '',
    createdAt: '2017-03-21T09:43:38.614Z',
    updatedAt: '2017-03-21T09:43:53.073Z'
  },
  mainItems: {
    log_1: {
      name: 'First Log',
      description: 'description log 1',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_1',
      inputMappings: [
        {
          type: 1,
          value: '{T.content}',
          mapTo: 'message'
        }
      ],
      type: 1,
      'return': false,
      input: {
        message: null,
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    counter_1: {
      name: 'Counter1',
      description: 'description counter 1',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/counter',
      id: 'counter_1',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        counterName: 'counter1',
        increment: 'true',
        reset: false
      }
    },
    log_2: {
      name: 'Second Log',
      description: 'description second log',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_2',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'I am here 2',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    log_3: {
      name: 'Third Log',
      description: 'description third Log',
      settings: {},
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      id: 'log_3',
      inputMappings: [],
      type: 1,
      'return': false,
      input: {
        message: 'I am here 3',
        flowInfo: 'true',
        addToFlow: 'true'
      }
    },
    '::branch::5': {
      id: '::branch::5',
      type: 3,
      condition: 'true'
    },
    '::branch::6': {
      id: '::branch::6',
      type: 3,
      condition: 'false'
    }
  },
  errorItems: {},
  mainGraph: {
    rootId: 'log_1',
    nodes: {
      log_1: {
        title: 'First Log',
        description: 'description log 1',
        type: 'task',
        id: 'log_1',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: true
        },
        children: [
          'counter_1'
        ],
        parents: []
      },
      counter_1: {
        title: 'Counter1',
        description: 'description counter 1',
        type: 'task',
        id: 'counter_1',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [
          '::branch::5'
        ],
        parents: [
          'log_1'
        ]
      },
      log_2: {
        title: 'Second Log',
        description: 'description second log',
        type: 'task',
        id: 'log_2',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [
          '::branch::6'
        ],
        parents: [
          '::branch::5'
        ]
      },
      log_3: {
        title: 'Third Log',
        description: 'description third Log',
        type: 'task',
        id: 'log_3',
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false,
          configured: false
        },
        children: [],
        parents: [
          '::branch::6'
        ]
      },
      '::branch::5': {
        id: '::branch::5',
        type: 'branch',
        parents: [
          'counter_1'
        ],
        children: [
          'log_2'
        ],
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false
        }
      },
      '::branch::6': {
        id: '::branch::6',
        type: 'branch',
        parents: [
          'log_2'
        ],
        children: [
          'log_3'
        ],
        features: {
          selectable: true,
          canHaveChildren: true,
          canBranch: true,
          deletable: true,
          subflow: false,
          'final': false
        },
        status: {
          invalid: false,
          executed: false,
          executionErrored: null,
          iterable: false
        }
      }
    }
  },
  errorGraph: {
    rootId: null,
    nodes: {}
  },
  schemas: {
    'github.com/TIBCOSoftware/flogo-contrib/activity/log': {
      id: 'tibco-log',
      name: 'tibco-log',
      version: '0.0.1',
      description: 'Simple Log Activity',
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/log',
      homepage: 'https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/log',
      inputs: [
        {
          name: 'message',
          type: 'string',
          value: ''
        },
        {
          name: 'flowInfo',
          type: 'boolean',
          value: 'true'
        },
        {
          name: 'addToFlow',
          type: 'boolean',
          value: 'true'
        }
      ],
      outputs: [
        {
          name: 'message',
          type: 'string'
        }
      ]
    },
    'github.com/TIBCOSoftware/flogo-contrib/activity/counter': {
      id: 'tibco-counter',
      name: 'tibco-counter',
      version: '0.0.1',
      description: 'Simple Global Counter Activity',
      ref: 'github.com/TIBCOSoftware/flogo-contrib/activity/counter',
      homepage: 'https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/counter',
      inputs: [
        {
          name: 'counterName',
          type: 'string',
          required: true
        },
        {
          name: 'increment',
          type: 'boolean'
        },
        {
          name: 'reset',
          type: 'boolean'
        }
      ],
      outputs: [
        {
          name: 'value',
          type: 'integer'
        }
      ]
    }
  },
  metadata: {
    input: [],
    output: []
  }
};
