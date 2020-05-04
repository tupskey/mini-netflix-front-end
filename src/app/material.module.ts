import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [MatTabsModule, BrowserModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule],
    exports: [MatTabsModule, MatProgressSpinnerModule, MatCardModule,MatButtonModule]
})

export class MaterialModule{
    
}