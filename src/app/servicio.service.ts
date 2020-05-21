import { Injectable} from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[];
  newPost: Post;

  constructor() {
    this.arrPosts = [
      new Post('Esto es un titulo', 'El texto de la noticia', 'Autor', 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/04/19/467841.jpg', 'Fecha', 'Categoria'),
      new Post('Esto es otra noticia', 'El texto de otra noticia', 'Autor', 'https://sm.ign.com/ign_es/screenshot/default/blob_s5sr.jpg', 'Fecha', 'Salud'),
      new Post('BlogAngular', 'Me agrega todos los post creados en arrPosts', 'Alex2', 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/04/19/467841.jpg', '18 de Mayo, 2020', 'Progresa adecuadamente'),
      
    ]
   }

   //New Post

  agregarPost(Post){
    this.arrPosts.push(Post);
    console.log(this.arrPosts)
  }

  getAllPost(): Post[] {
    return this.arrPosts;
    
  }

  getPostsByCategoria(cat){

  }
}
