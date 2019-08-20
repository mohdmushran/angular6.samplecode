import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ListCarComponent } from './list-car/list-car.component';

import { UserService } from './services/user.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import {TabViewModule} from 'primeng/tabview';
import {FileUploadModule} from 'primeng/fileupload';
import {AccordionModule} from 'primeng/accordion';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {SlideMenuModule} from 'primeng/slidemenu';
import {PaginatorModule} from 'primeng/paginator';
import {GrowlModule} from 'primeng/growl';
import {DialogModule} from 'primeng/dialog';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { FormWizardModule } from 'angular2-wizard';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MenuModule} from 'primeng/menu';
import { FullCalendarModule } from 'ng-fullcalendar';
import {RatingModule} from 'primeng/rating';
import {CheckboxModule} from 'primeng/checkbox';
// import {Fullcalendar} from 'primeng/fullcalendar';

// import {GMapModule} from 'primeng/gmap';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { SearchComponent } from './search/search.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { ContactUsComponent } from './static-pages/contact-us/contact-us.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { OwlModule } from 'ngx-owl-carousel';
import {TableModule} from 'primeng/table';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { FormatStringPipe } from './format-string.pipe';
import { VerifyPasswordComponent } from './verify-password/verify-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FAQComponent } from './faq/faq.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookingComponent } from './booking/booking.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { CarBucksComponent } from './car-bucks/car-bucks.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomePageComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    ForgotPasswordComponent,
    VerifyAccountComponent,
    RecoverAccountComponent,
    ProfileComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SideNavComponent,
    AddCarComponent,
    ListCarComponent,
    SearchComponent,
    StaticPagesComponent,
    ContactUsComponent,
    AddOfferComponent,
    ListOfferComponent,
    EditCarComponent,
    ScrollTopComponent,
    EditOfferComponent,
    ChangeEmailComponent,
    VerifyEmailComponent,
    AccountSettingsComponent,
    FormatStringPipe,
    VerifyPasswordComponent,
    DashboardComponent,
    SubscriptionComponent,
    AddTicketComponent,
    ListTicketsComponent,
    ViewTicketComponent,
    GooglePlacesDirective,
    HowItWorksComponent,
    OurServicesComponent,
    FAQComponent,
    ReservationComponent,
    EmployerDashboardComponent,
    HeaderDashboardComponent,
    AppointmentComponent,
    BookingComponent,
    AppointmentHistoryComponent,
    CarBucksComponent
  ],
  imports: [
    FormWizardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabViewModule,
    FileUploadModule,
    AccordionModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    DropdownModule,
    ConfirmDialogModule,
    SlideMenuModule,
    AutoCompleteModule,
    PaginatorModule,
    GrowlModule,
    OwlModule,
    TableModule,
    DialogModule,
    BreadcrumbModule,
    InputSwitchModule,
    MenuModule,
    FullCalendarModule,
    RatingModule,
    CheckboxModule
    // FullCalendarModule
    // GMapModule
  ],
  providers: [MessageService, UserService, ConfirmationService, { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
