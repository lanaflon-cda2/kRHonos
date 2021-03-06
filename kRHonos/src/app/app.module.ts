import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SalarieListComponent} from './components/salarie/salarie-list/salarie-list.component';
import {UtilisateurService} from './services/utilisateur.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import {MainNavComponent} from './components/dashboard/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MainDashComponent} from './components/dashboard/main-dash/main-dash.component';
import {AbsenceComponent} from './components/absence/absence.component';
import {AccueilComponent} from './components/accueil/accueil.component';
import {SalarieFormComponent} from './components/salarie/salarie-form/salarie-form.component';
import {SalarieTestComponent} from './components/salarie/salarie-test/salarie-test.component';
import {ClockPickerDirective} from './directives/clockpicker.directive';
import {ContratComponent} from './components/contrat/contrat.component';
import {ContratFormComponent} from './components/contrat/contrat-form/contrat-form.component';
import {ContratFormQuestionComponent} from './components/contrat/contrat-form/contrat-form-question/contrat-form-question.component';
import {OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {PlanningViewComponent} from './components/planning/planning-view/planning-view.component';
import {PlanningDialogComponent} from './components/planning/planning-dialog/planning-dialog.component';
import {LoginComponent} from './components/login/login.component';
import {UtilisateurComponent} from './components/utilisateur/utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    SalarieListComponent,
    SalarieFormComponent,
    MainNavComponent,
    MainDashComponent,
    AbsenceComponent,
    AccueilComponent,
    PlanningViewComponent,
    ClockPickerDirective,
    SalarieTestComponent,
    ContratComponent,
    ContratFormComponent,
    ContratFormQuestionComponent,
    ContratFormQuestionComponent,
    PlanningDialogComponent,
    LoginComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'fr'},
    {provide: HttpClientModule},
    {provide: UtilisateurService},
  ],
  exports: [MatTableModule],
  entryComponents: [PlanningDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
