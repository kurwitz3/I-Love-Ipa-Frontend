class Comment{
    static allComments = []
    constructor({id,name,content,beer_id}){
        this.id = id
        this.name = name 
        this.content = content
        this.beer_id = beer_id
        this.renderComments()
        Comment.allComments.push(this)
        
    }

    renderComments(){
        const commentDiv = document.createElement('div')
        commentDiv.innerHTML = this.commentHtml()
        commentContainer.appendChild(commentDiv)
    }

    commentHtml(){
        return`<ul id='ul'>
          <li id="comment"><h4>Beer:   ${this.name}</h4>
               ${this.content}
          </li>
        </ul>`
        
    }
   static  commentButton(){
        commentContainer.innerHTML = ''
        Comment.allComments.forEach(comment =>{
            return comment.renderComments()
        })
    }
}