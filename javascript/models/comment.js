class Comment{
    static allComments = []
    constructor({id,name,content,beer_id}){
        this.id = id
        this.name = name 
        this.content = content
        this.beer_id = beer_id
        Comment.allComments.push(this)
        
    }

    renderComments(){
        const commentContainer = document.getElementById('comment-container')
        const commentDiv = document.createElement('div')
        commentDiv.innerHTML = this.commentHtml()
        commentContainer.appendChild(commentDiv)
        
    }

    commentHtml(){
        return`<ul>
          <li id="comment">Beer: ${this.name}<br>
              Comment: ${this.content}
          </li>
        </ul>`
        
    }
}