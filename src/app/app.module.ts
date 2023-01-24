import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
// import {DashboardMComponent} './views/dashboard-m/dashboard-m.component';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular'; 

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MechanicLayoutComponent } from './containers/mechanic-layout/mechanic-layout.component';
import { MechanicFooterComponent } from './containers/mechanic-layout/mechanic-footer/mechanic-footer.component';
import { MechanicHeaderComponent } from './containers/mechanic-layout/mechanic-header/mechanic-header.component';
import { UserLayoutComponent } from './containers/user-layout';
import { UserHeaderComponent } from './containers/user-layout';
import { DashboardMComponent } from './views/dashboard-m/dashboard-m.component';
import{DashboardMModule}from "./views/dashboard-m/dashboard-m.module";
import { ActivitesOnMapComponent } from './containers/default-layout/activites-on-map/activites-on-map.component';
import { CustomerMessagesComponent } from './containers/default-layout/customer-messages/customer-messages.component';
import { MechanicMessagesComponent } from './containers/default-layout/mechanic-messages/mechanic-messages.component';
import { FeedbackComponent } from './containers/default-layout/feedback/feedback.component';
import { PaymentHistoryComponent } from './containers/default-layout/payment-history/payment-history.component';
import { ManageCustomerComponent } from './containers/default-layout/manage-customer/manage-customer.component';
import { ManageMechanicComponent } from './containers/default-layout/manage-mechanic/manage-mechanic.component';
import { StatesComponent } from './containers/default-layout/states/states.component';
import { LocalGovtComponent } from './containers/default-layout/local-govt/local-govt.component';
import { ServiceCartegoriesComponent } from './containers/default-layout/service-cartegories/service-cartegories.component';
import { ProfileComponent } from './containers/mechanic-layout/profile/profile.component';
import { RequestListComponent } from './containers/mechanic-layout/request-list/request-list.component';
import { ContactManagementComponent } from './containers/mechanic-layout/contact-management/contact-management.component';
import { NewRequestComponent } from './containers/user-layout/new-request/new-request.component';
import { RequestHistoryComponent } from './containers/user-layout/request-history/request-history.component' 
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { DxFileUploaderModule, DxSelectBoxModule, DxTextAreaModule, DxDateBoxModule, DxFormModule, DxDataGridModule, DxSpeedDialActionModule, DxPivotGridModule, DxChartModule, DxCheckBoxModule, DxPieChartModule, DxFunnelModule, DxTabPanelModule, DxButtonModule, DxToolbarModule, DxMapModule, DxTemplateModule } from 'devextreme-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,  
  MechanicLayoutComponent,
   MechanicFooterComponent, MechanicHeaderComponent,
    UserLayoutComponent,
    UserHeaderComponent,
  DashboardMComponent,
   ActivitesOnMapComponent,
   CustomerMessagesComponent,
   MechanicMessagesComponent,
   FeedbackComponent,
   PaymentHistoryComponent,
   ManageCustomerComponent,
   ManageMechanicComponent,
   StatesComponent,
   LocalGovtComponent,
   ServiceCartegoriesComponent,
   ProfileComponent,
   RequestListComponent,
   ContactManagementComponent,
   NewRequestComponent,
   RequestHistoryComponent,
  StatesComponent
];


@NgModule({
  declarations: [AppComponent,
     ...APP_CONTAINERS,
   ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgbModule,  
    // DashboardMComponent,
    // DashboardMModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,   
    FormsModule,
    NgbModule,   
    DxFileUploaderModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
    DxPivotGridModule,
    DxChartModule,
    DxCheckBoxModule,
    DxPieChartModule,
    DxFileUploaderModule,
    DxFunnelModule,
    DxTabPanelModule,
    DxButtonModule,
    DxToolbarModule, 
    // SweetAlert2Module.forRoot(),
    ReactiveFormsModule, 
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
    FontAwesomeModule, 
    // NgSelectModule, 
    DxMapModule,
    // NgSelectModule,
    DxSpeedDialActionModule,
    DxPivotGridModule,
    DxChartModule,
    DxCheckBoxModule,
    DxPieChartModule,
    DxFileUploaderModule,
    DxFunnelModule,
    DxTabPanelModule,
    DxButtonModule,
    DxToolbarModule, 

    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
    DxFileUploaderModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxTemplateModule,
    ReactiveFormsModule,
    // GoogleMapModule,
    // CardSnippetModule,
    // CoreCommonModule,
    // GoogleMapsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title 
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
