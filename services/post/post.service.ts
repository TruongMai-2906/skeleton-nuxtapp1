
import { Post } from "~/interfaces/dtos/post.dto";

class PostService {
  title: string = 'this is post service';

  postList1: Array<Post> = [
    {title: 'ser1', description:'des1'},
    {title: 'ser2', description:'des2'},
    {title: 'ser3', description:'des3'},
    {title: 'ser4', description:'des4'},
  ];

   public addPost(data: Post) {
    this.postList1.push(data);
  }

  getTitle() {
    return this.title;
  }

  getPostList() {
    return this.postList1;
  }

}

export default PostService
