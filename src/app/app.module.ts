import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { CookieService } from 'ngx-cookie-service'

import { AppComponent } from './app.component'
import { OptionsComponent } from './options/options.component'
import { CardListComponent } from './card-list/card-list.component'
import { CardDetailComponent } from './card-detail/card-detail.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		AppComponent,
		OptionsComponent,
		CardListComponent,
		CardDetailComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [CookieService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
