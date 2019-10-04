import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [MainNavComponent, FooterComponent],
	exports: [MainNavComponent, FooterComponent],
	imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
