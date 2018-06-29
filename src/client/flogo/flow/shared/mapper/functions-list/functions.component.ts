import { Component, OnDestroy, OnInit } from '@angular/core';

import { shareReplay, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { SingleEmissionSubject } from '../shared/single-emission-subject';
import { TYPE_PARAM_FUNCTION } from '../services/dragging.service';

import { EditorService } from '../editor/editor.service';
import { MapperTreeNode } from '../models/mapper-treenode.model';
import { MapperService } from '../services/mapper.service';
import { selectedInputKey, selectFilterFromFunctions, selectNodesFromFunctions } from '../services/selectors';

@Component({
  selector: 'flogo-mapper-functions',
  templateUrl: 'functions.component.html',
  styleUrls: ['functions.component.css']
})
export class FunctionsComponent implements OnInit, OnDestroy {
  help: MapperTreeNode;
  name: string;
  functions$: Observable<MapperTreeNode[]>;
  filterTerm$: Observable<string>;
  dragType = TYPE_PARAM_FUNCTION;

  private ngDestroy: SingleEmissionSubject = SingleEmissionSubject.create();

  constructor(private mapperService: MapperService, private editorService: EditorService) {
  }

  ngOnInit() {
    const state$ = this.mapperService.state$.pipe(shareReplay());
    this.functions$ = state$.pipe(selectNodesFromFunctions);
    this.filterTerm$ = state$.pipe(selectFilterFromFunctions);
    state$
      .pipe(
        selectedInputKey,
        takeUntil(this.ngDestroy)
      )
      .subscribe(() => {
        this.name = '';
        this.help = null;
      });
  }

  ngOnDestroy() {
    this.ngDestroy.emitAndComplete();
  }

  onSelect(node: MapperTreeNode) {
    const data = node.data;
    if (data && data.snippet) {
      this.editorService.insertText(data.snippet);
    }
  }

  onHover(node: MapperTreeNode) {
    if (node.data && node.data.help) {
      this.name = node.label;
      this.help = node.data.help;
    }
  }

  onSearch(searchTerm: string) {
    this.mapperService.filterFunctions(searchTerm);
  }


}
