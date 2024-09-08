import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ParenttComponent } from './components/child-to-parent/parentt/parentt.component';
import { ChilddComponent } from './components/child-to-parent/childd/childd.component';
import { Child1Component } from './components/between-two-childs/child1/child1.component';
import { Child2Component } from './components/between-two-childs/child2/child2.component';
import { Parent11Component } from './components/between-two-childs/parent11/parent11.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    ParentComponent,
    ChildComponent,
    ParenttComponent,
    ChilddComponent,
    Child1Component,
    Child2Component,
    Parent11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
