import {Component} from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {ApiEntitySingleAbstractComponent} from "./api-entity-single.abstract.component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ApiEntityService} from "../services/api-entity.service";

@Component({
  selector: 'oswis-api-entity-edit',
  template: `
    <oswis-api-entity-editor [entityService]="apiEntityService" [fields]="fields" [help]="help" [transform]="transform" class="entity-card-container">
    </oswis-api-entity-editor>
  `,
})
export class ApiEntityEditComponent extends ApiEntitySingleAbstractComponent {
  public fields: FormlyFieldConfig[];
  public help?: string;
  public transform?: (object) => object;

  constructor(route: ActivatedRoute, router: Router, apiEntityService: ApiEntityService, dialog: MatDialog) {
    super(route, router, apiEntityService, dialog);
  }
}
