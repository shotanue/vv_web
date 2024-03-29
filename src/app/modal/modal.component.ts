import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalService} from './modal.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inner', {read: ViewContainerRef}) vcr;
  private subscription: Subscription;
  public display = 'none';

  constructor(private modal: ModalService) {
  }

  ngAfterViewInit() {
    this.modal.vcr = this.vcr;
  }

  ngOnInit() {
    this.subscription = this.modal.content$.subscribe(
      value => {
        if (value) {
          this.display = '';
        } else {
          this.display = 'none';
        }
      });
  }

  containerClick($event) {
    $event.stopPropagation();
  }

  close() {
    this.modal.close();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
