import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  AllPosts: Post[];


  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.AllPosts = this.servicioService.getAllPost();
  }

  filtrarPost($event) {
    console.log($event.target.value)
    //captura el valor del option.
    this.servicioService.getPostsByCategoria($event.target.value)
    .then(arrPost => {
      this.AllPosts = arrPost;
    })

  }

}
