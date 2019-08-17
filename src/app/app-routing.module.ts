import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentoComponent } from './atendimento/atendimento.component'
import { LoginComponent } from './acesso/login/login.component';
import { LoggedInGuardService } from './services/logged-in-guard.service';


const routes: Routes = [
  {path: '', component: AtendimentoComponent, canActivate: [LoggedInGuardService], data: {title: 'Formulário de Atendimento'}},
  {path: 'login', component: LoginComponent, data: {title: 'Tela de Acesso'}},
  {path: '**', component: LoginComponent, data: {title: 'Tela de Acesso'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
