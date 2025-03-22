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
    title: 'Algo Ocurre Bajo el Mar',
  },
  {
    path: 'marco',
    loadChildren: () =>
      import('./modules/Marco/marco.module').then((m) => m.MarcoModule),
    title: 'Antonella Cumple 1 añito',
  },
  {
    path: 'confirmacion',
    loadChildren: () =>
      import('./modules/confirmacion/confirmacion.module').then(
        (m) => m.ConfirmacionModule
      ),
    title: 'Confirma tu Asistencia al Mejor Evento de Atlantica',
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
