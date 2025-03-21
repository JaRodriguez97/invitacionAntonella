import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  {
    path: 'splash',
    loadChildren: () =>
      import('./modules/splash/splash.module').then((m) => m.SplashModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/Inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'marco',
    loadChildren: () =>
      import('./modules/Marco/marco.module').then((m) => m.MarcoModule),
  },
  {
    path: 'confirmacion',
    loadChildren: () =>
      import('./modules/confirmacion/confirmacion.module').then(
        (m) => m.ConfirmacionModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
