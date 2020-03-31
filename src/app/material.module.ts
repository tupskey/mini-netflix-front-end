import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [MatTabsModule, BrowserModule],
    exports: [MatTabsModule]
})

export class MaterialModule{
    
}