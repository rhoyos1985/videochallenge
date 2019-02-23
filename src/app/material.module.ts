import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule
 } from '@angular/material';


/**
 * ## Material Module
 * 
 * It has all the material component's
 */
@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
        MatInputModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
        MatInputModule
    ],
    providers: [],
})
export class MaterialModule {}