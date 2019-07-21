import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ModalService {
  public vcr: ViewContainerRef;
  private currentComponent = null;

  private contentSource: Subject<boolean> = new Subject<boolean>();
  public content$ = this.contentSource.asObservable();

  constructor(private resolver: ComponentFactoryResolver) {
  }

  open(data: any, params?: any): void {
    if (!data) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(data);
    const component = this.vcr.createComponent(factory);

    // if other modal container is created
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;

    // todo 型でinit叩けるか保障したいところ
    if (this.currentComponent.instance.init !== undefined && params !== null) {
      this.currentComponent.instance.init(params);
    }

    this.contentSource.next(true);
  }

  close(): void {
    if (this.currentComponent) {
      this.currentComponent.destroy();
      this.contentSource.next(false);
    }
  }
}
