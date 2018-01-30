export function fullDeviceAppSchema() {
  return {
    $schema: 'http://json-schema.org/draft-04/schema#',
    additionalProperties: false,
    type: 'object',
    required: [
      'name',
      'type',
      'version',
      'triggers',
      'actions',
      'device',
    ],
    properties: {
      name: {
        type: 'string',
      },
      type: {
        type: 'string',
        default: 'flogo:device',
      },
      version: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      device: {
        type: 'object',
        required: [
          'profile',
        ],
        properties: {
          profile: {
            type: 'string',
          },
        },
      },
      triggers: {
        additionalProperties: false,
        default: [],
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            id: {
              type: 'string',
            },
            ref: {
              type: 'string',
              'trigger-installed': true,
            },
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            settings: {
              type: 'object',
              default: null,
            },
            actionId: {
              type: 'string',
            },
          },
          required: [
            'id',
            'ref',
            'actionId',
            'settings',
          ],
        },
      },
      actions: {
        default: [],
        type: 'array',
        items: {
          $ref: '#/definitions/ActionFlow',
        },
      },
    },
    definitions: {
      ActionFlow: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          ref: {
            type: 'string',
          },
          data: {
            type: 'object',
            properties: {
              flow: {
                $ref: '#/definitions/Flow',
              },
            },
          },
        },
        required: [
          'id',
          'ref',
          'data',
        ],
      },
      Flow: {
        title: 'flow',
        type: 'object',
        additionalProperties: false,
        properties: {
          name: {
            type: 'string',
          },
          tasks: {
            type: 'array',
            default: [],
            items: {
              $ref: '#/definitions/Flow/definitions/task',
            },
          },
          links: {
            type: 'array',
            items: {
              $ref: '#/definitions/Flow/definitions/link',
            },
          },
        },
        required: [
          'tasks',
          'links',
        ],
        definitions: {
          attribute: {
            title: 'attribute',
            type: 'object',
          },
          link: {
            title: 'link',
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              id: {
                type: 'integer',
              },
              from: {
                type: 'integer',
              },
              to: {
                type: 'integer',
              },
              type: {
                type: 'integer',
              },
              value: {
                type: 'string',
              },
            },
            required: [
              'id',
              'from',
              'to',
            ],
          },
          task: {
            title: 'task',
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              name: {
                type: 'string',
              },
              title: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
              activityRef: {
                type: 'string',
                'activity-installed': true,
              },
              attributes: {
                $ref: '#/definitions/Flow/definitions/attribute',
              },
            },
            required: [
              'id',
              'name',
              'activityRef',
            ],
          },
        },
      },
    },
  };
}
