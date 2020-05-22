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
      new Post('Menuda caloh', 'Me quedo muerta', 'La monja', 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/04/19/467841.jpg', 'Fecha', 'Que caloh'),
      new Post('Edward!', 'Sube el pan!', 'Lorrain Warren', 'https://sm.ign.com/ign_es/screenshot/default/blob_s5sr.jpg', '22 de Mayo, 2020', 'Salud'),
      new Post('BlogAngular', 'Me agrega todos los post creados en arrPosts', 'Alex2', 'https://ep01.epimg.net/verne/imagenes/2019/04/11/articulo/1554972800_831594_1554992991_noticia_normal.jpg', '18 de Mayo, 2020', 'Progresa adecuadamente'),
      
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

  getPostsByCategoria(categoria: string): Promise<Post[]> {
    const promesa = new Promise<Post[]>((resolve, reject) => {
      if( categoria === ''){
        resolve(this.arrPosts)
      }else {
        const arrFiltrado = this.arrPosts.filter(post => post.categoria === categoria);
        resolve(arrFiltrado);
      }
    });
    return promesa;
  }
}
