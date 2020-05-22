import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formFormulario: FormGroup;

  constructor(private servicioService: ServicioService, private router: Router) {
    this.formFormulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //Agrega los datos del formulario a un nuevo Post.
    console.log(this.formFormulario.value);
    const newPost: Post = new Post(
      this.formFormulario.value.titulo,
      this.formFormulario.value.texto,
      this.formFormulario.value.autor,
      this.formFormulario.value.imagen, 
      this.formFormulario.value.fecha,
      this.formFormulario.value.categoria
    );
    this.servicioService.agregarPost(newPost) ;
    this.router.navigate(['/blog'])
  }

}
