class Comment{
    static allComments = []
    contrsuctor({name,content}){
        this.name = name 
        this.content = content
        Comment.allComments.push(this)
    }

    renderComments(){
        const commentContainer = document.getElementById('comment-container')
        const commentDiv = document.createElement('div')
    }
}