import {Component} from '@angular/core';
import {ApiEntitySingleAbstractComponent} from "./api-entity-single.abstract.component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ApiEntityService} from "../services/api-entity.service";

@Component({
  selector: 'oswis-api-entity-show',
  templateUrl: './api-entity-show.component.html',
})
export class ApiEntityShowComponent extends ApiEntitySingleAbstractComponent {
  constructor(route: ActivatedRoute, router: Router, apiEntityService: ApiEntityService, dialog: MatDialog) {
    super(route, router, apiEntityService, dialog);
  }

  public static textParagraphOrNullField(title ?: string, value?: string): string {
    return value ? ('<p *ngIf="value"><strong>' + (title ? title + ': ' : null) + '</strong> value </p>') : null;
  }

  static downloadVCard(data: any) {
    const blob = new Blob([data], {type: 'text/vcard'});
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');
  }
}



