import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/landing/about/about.component';
import { ContactComponent } from './views/landing/contact/contact.component';
// import { MechanicLayoutComponent } from './containers/mechanic-layout/mechanic-layout.component';
// import { UserLayoutComponent } from './containers/user-layout/user-layout.component'; 
import { LandingLayoutComponent } from './containers/landing-layout/landing-layout/landing-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landingx',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingLayoutComponent,
    data: {
      title: 'Home'
    }, 
    children: [
      {
        path: 'landingx',
        loadChildren: () =>
          import('./containers/landing-layout/landing-layout.module').then((m) => m.LandingLayoutModule)
      },  
 
    ]
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'landing',
        loadChildren: () =>
          import('./views/landing/landing.module').then((m) => m.LandingModule)
      },  
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {path: '**', redirectTo: 'landingx'}
    ]
  },
  // {
  //   path: '',
  //   component: MechanicLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   }, 
  //   children: [
  //     {
  //       path: 'landing',
  //       loadChildren: () =>
  //         import('./views/landing/landing.module').then((m) => m.LandingModule)
  //     },  
 
  //   ]
  // },
  // {
  //   path: '',
  //   component: UserLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   }, 
  //   children: [
  //     {
  //       path: 'landing',
  //       loadChildren: () =>
  //         import('./views/landing/landing.module').then((m) => m.LandingModule)
  //     },  
 
  //   ]
  // },

  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
    {
    path: 'landing',
    component: LandingLayoutComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'landingx'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
