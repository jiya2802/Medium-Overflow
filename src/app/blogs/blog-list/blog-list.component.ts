import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/interfaces/blog.interface';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{
  selectedBlog!:Blog;
  BlogData!:Blog[];


  constructor(private blogsService:BlogsService){
    
  }

  ngOnInit(): void {
    this.BlogData=this.blogsService.getBlogData();
    console.log(this.BlogData);
  }

  selectBlog(blog:Blog):void{
    this.selectedBlog=blog;
    console.log(this.selectedBlog);
  }
  
}
