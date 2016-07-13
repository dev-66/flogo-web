import {
  IFlogoFlowDiagramTaskAttributeMapping,
  IFlogoFlowDiagramTaskLink,
  IFlogoFlowDiagramTaskAttributes
} from '../models';
import { FLOGO_TASK_TYPE } from '../../../common/constants';
import { flogoIDEncode } from '../../../common/utils';

export interface IFlogoFlowDiagramTask {
  id : string;
  type : FLOGO_TASK_TYPE;
  version ? : string;
  name ? : string;
  description ? : string;
  title ? : string;
  activityType? : string;
  triggerType? : string;
  attributes ? : IFlogoFlowDiagramTaskAttributes;
  inputMappings ? : IFlogoFlowDiagramTaskAttributeMapping[ ];
  outputMappings ? : IFlogoFlowDiagramTaskAttributeMapping[ ];
  tasks ? : IFlogoFlowDiagramTask[ ];
  links ? : IFlogoFlowDiagramTaskLink[ ];
  condition? : string;
  __props? : {
    [key : string] : any;
    errors? : {msg : string;}[];
    warnings? : {msg : string;}[];
  }; // internal only properties in design time
  __status? : {
    [key : string] : boolean;
  }; // internal only properties in design time
}

export class FlogoFlowDiagramTask implements IFlogoFlowDiagramTask {
  id : string;
  type : FLOGO_TASK_TYPE;
  version : string;
  name : string;
  description : string;
  title : string;
  activityType : string;
  triggerType : string;
  attributes : IFlogoFlowDiagramTaskAttributes;
  inputMappings : IFlogoFlowDiagramTaskAttributeMapping[ ];
  outputMappings : IFlogoFlowDiagramTaskAttributeMapping[ ];
  tasks : IFlogoFlowDiagramTask[ ];
  links : IFlogoFlowDiagramTaskLink[ ];
  __status : {
    [key : string] : boolean;
  };

  constructor( task ? : IFlogoFlowDiagramTask ) {
    this.update( task );
  };

  static genTaskID() : string {
    return flogoIDEncode( 'FlogoFlowDiagramTask::' + Date.now() );
  };

  update( task : IFlogoFlowDiagramTask ) {
    if ( !task ) {
      task = < IFlogoFlowDiagramTask > {};
    }

    this.id = task.id || this.id || FlogoFlowDiagramTask.genTaskID();
    this.type = task.type || this.type || FLOGO_TASK_TYPE.TASK;
    this.version = task.version || this.version || '';
    this.name = task.name || this.name || 'new task';
    this.description = task.description || this.description || '';
    this.title = task.title || this.title || '';
    this.activityType = task.activityType || this.activityType || '';
    this.triggerType = task.triggerType || this.triggerType || '';
    this.attributes = _.isEmpty( task.attributes ) ?
                      this.attributes || < IFlogoFlowDiagramTaskAttributes > {} :
                      _.cloneDeep( task.attributes );
    this.inputMappings = _.isEmpty( task.inputMappings ) ? this.inputMappings || [] : _.cloneDeep( task.inputMappings );
    this.outputMappings = _.isEmpty( task.outputMappings ) ?
                          this.outputMappings || [] :
                          _.cloneDeep( task.outputMappings );

    if ( !_.isEmpty( task.tasks ) ) {
      this.tasks = _.cloneDeep( task.tasks );
    }

    if ( !_.isEmpty( task.links ) ) {
      this.links = _.cloneDeep( task.links );
    }

    if ( !_.isEmpty( task.__status ) ) {
      this.__status = _.cloneDeep( task.__status );
    }

  };
}