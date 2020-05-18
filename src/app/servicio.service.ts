import { Injectable, Attribute } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[];
  newPost: Post;

  constructor() {
    this.arrPosts = [
      new Post('Esto es un titulo', 'El texto de la noticia', 'Autor', 'Imagen', 'Fecha', 'Categoria'),
      new Post('Esto es otra noticia', 'El texto de otra noticia', 'Autor', 'Imagen', 'Fecha', 'Categoria')
    ]
   }

   //New Post

  agregarPost(Post){
  }

  getAllPost(): Post[] {
    return this.arrPosts;
    
  }

  getPostsByCategoria(cat){

  }
}
