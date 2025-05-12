import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
  standalone: true // si estás usando componentes standalone
})
export class SafePipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    const embedUrl = url.replace('watch?v=', 'embed/');
    return this._sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
