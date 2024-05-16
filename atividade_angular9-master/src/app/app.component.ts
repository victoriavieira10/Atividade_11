import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitioComponent } from './titio/titio.component';
import { ConteudoComponent } from './conteudo/conteudo.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TitioComponent,ConteudoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MeuPrimeiroProjeto';
}
