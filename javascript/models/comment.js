class Comment{
    static allComments = []
    contrsuctor({id,name,content,beer_id}){
        this.id = id
        this.name = name 
        this.content = content
        this.beer_id = beer_id
        Comment.allComments.push(this)
        this.renderComments()
    }

    renderComments(){
        const commentContainer = document.getElementById('comment-container')
        const commentDiv = document.createElement('div')
        commentDiv.innerHTML = this.commentHtml()
        commentContainer.appendChild(commentDiv)
        
    }

    commentHtml(){
       `<ul>
          <li>Beer: ${this.name}
              Comment: ${this.content}
          </li>
        </ul>`
    }
}