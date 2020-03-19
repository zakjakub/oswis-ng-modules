import {Injectable} from '@angular/core';
import {AuthenticationService} from '../modules/auth/services/authentication.service';

@Injectable({
  providedIn: "root",
})
export class SidebarShowService {
  aside: Array<boolean>;

  constructor(private authenticationService: AuthenticationService) {
    this.aside = [];
  }

  toggleSidebar(id: number = 1): boolean {
    return this.aside[id] = !this.aside[id] ? true : !this.aside[id];
  }

  getSidebarStatus(id: number = 1): boolean {
    return this.authenticationService.isLoggedIn() && this.aside[id] ? this.aside[id] : false;
  }

  closeAllSidebars() {
    this.aside.forEach((item, index) => {
      this.aside[index] = false;
      return null;
    });
  }
}
