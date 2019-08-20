import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {EditorModule} from 'primeng/editor';
import {PaginatorModule} from 'primeng/paginator';
import {FileUploadModule} from 'primeng/fileupload';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {GrowlModule} from 'primeng/growl';
import {SlideMenuModule} from 'primeng/slidemenu';

import { UserService } from './webservice/user.service';
// import { AuthService } from './webservice/auth.service';
import {ConfirmationService} from 'primeng/api';
// import { HttpInterceptorService } from 'http-interceptor.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { AboutComponent } from './about/about.component';
import { ListAboutComponent } from './list-about/list-about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BusinessComponent } from './business/business.component';
import { ListBusinessComponent } from './list-business/list-business.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { JobComponent } from './job/job.component';
import { ListJobComponent } from './list-job/list-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './login/login.component';
import { ListInfoComponent } from './list-info/list-info.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { DesignComponent } from './design/design.component';
import { DesignTwoComponent } from './design-two/design-two.component';
import { DesignThreeComponent } from './design-three/design-three.component';
import { InformationComponent } from './information/information.component';
import { ListInformationComponent } from './list-information/list-information.component';
import { EditInformationComponent } from './edit-information/edit-information.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListDetailComponent,
    AboutComponent,
    ListAboutComponent,
    GalleryComponent,
    BusinessComponent,
    ListBusinessComponent,
    EditDetailComponent,
    EditAboutComponent,
    JobComponent,
    ListJobComponent,
    EditJobComponent,
    VehicleComponent,
    ListVehicleComponent,
    EditVehicleComponent,
    SideMenuComponent,
    LoginComponent,
    ListInfoComponent,
    LoginPageComponent,
    RegistrationComponent,
    DesignComponent,
    DesignTwoComponent,
    DesignThreeComponent,
    InformationComponent,
    ListInformationComponent,
    EditInformationComponent,
    RegistrationFormComponent,
    LoginRegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    PaginatorModule,
    CalendarModule,
    FileUploadModule,
    ConfirmDialogModule,
    GrowlModule,
    SlideMenuModule,
  ],
  providers: [UserService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
