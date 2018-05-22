import { executionUpdate } from './execution-update';
import { FlowState, INITIAL_STATE } from '../flow.state';
import { GraphNode, NodeType } from '@flogo/core/interfaces/graph/node';

describe('state.cases.execution-update', function () {
  let mainNode: GraphNode;
  let errorNode: GraphNode;
  let state: FlowState;

  beforeEach(function () {
    mainNode = {
      id: 'mainNode',
      type: NodeType.Task,
      children: [],
      parents: [],
      features: {},
      status: {
        executed: true,
      },
    };
    errorNode = {
      id: 'errorNode',
      type: NodeType.Task,
      children: [],
      parents: [],
      features: {},
      status: {
        executed: false,
      },
    };
    state = {
      ...INITIAL_STATE,
      isErrorPanelOpen: false,
      mainGraph: {
        rootId: mainNode.id,
        nodes: {
          [mainNode.id]: mainNode,
        }
      },
      errorGraph: {
        rootId: errorNode.id,
        nodes: {
          [errorNode.id]: errorNode,
        }
      }
    };
  });

  it('should reveal the error panel if the at least one task in the error handler was executed', function () {
    const newState = executionUpdate(
      state,
      {
        changes: {
          errorGraphNodes: {
            [errorNode.id]: {...errorNode, status: { executed: true }}
          }
        },
      }
    );
    expect(newState.isErrorPanelOpen).toBe(true);
  });

  it('should not reveal the error panel if no tasks in error panel were executed', function() {
    const newState = executionUpdate(
      state,
      {
        changes: {
          errorGraphNodes: {
            [errorNode.id]: {...errorNode, status: { executed: false }}
          }
        },
      }
    );
    expect(newState.isErrorPanelOpen).toBe(false);
  });

});