import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IconService } from './icon.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-icon',
  template: `<div class="icon-inner" [innerHTML]="svgContent | async"></div>`,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class IconComponent {
  @Input()
  @HostBinding('class')
  size: 'small' | 'large' | 'default' = 'default';

  public svgContent: Observable<SafeHtml> | undefined;

  constructor(
    private sanitizer: DomSanitizer,
    private iconService: IconService
  ) {}

  @Input()
  set src(value: string) {
    this.setSvgContent(value);
  }

  private setSvgContent(src: string): void {
    this.svgContent = this.iconService
      .getSvgContent(src)
      .pipe(map(
        content => this.sanitizer.bypassSecurityTrustHtml(content)
      ));
  }
}