import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  availableLanguages = [{
    name: 'english',
    code: 'en',
  }, {
    name: 'japanese',
    code: 'ja',
  }]

  appLanguage = null;

  constructor(private translate: TranslateService) {
    this.appLanguage = this.availableLanguages[0];
    const languageCode = translate.currentLang || this.appLanguage.code;
    translate.setDefaultLang(languageCode);
  }

  switchLanguage(event) {
    const newLanguage = event.target.value;
    this.appLanguage = this.availableLanguages.find(language => language.code === newLanguage);
    this.translate.use(newLanguage);
  }
}
