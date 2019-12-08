import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = ['Angular', 'Spring', 'MySql'];
  courseSelected: string;
  freeCourse = 'Angular';
  modalOptions: NgbModalOptions;
  closeResult: string;
  openPopup = false;

  constructor(
    private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  this.courseSelected = 'Spring';
  }
 checkFreeCourse(val: string) {
  this.courseSelected = val;
  if (val === 'Angular') {
      this.openPopup = true;
      console.log('free course is selected' + this.courseSelected);
    } else {
      this.openPopup = false;
      console.log('paid course is selected' + this.courseSelected);
    }
  }

  open(content) {
    this.modalService.open(content, this.modalOptions);
  }
}
