import Blog from './Blog'
import React from 'react'
import AddBlogsForm from './AddBlogsForm'
import LogOut from './LogOut'
import Togglable from './Togglable'

const UserBlogInfo = (props) => { 
    return (
        <div>
      blogs
            <p>
                {`${props.user} is logged in`} <LogOut />
            </p>
            <div>
                <Togglable buttonLabel="ShowAllBlogs" label="HideAllBlogs">
                    {'All blogs '}
                    <Blog blogs={props.blogs} deleteList={props.deleteList}  user={props.user}/>
                </Togglable>
            </div>
            <div>
                {' '}
                <Togglable buttonLabel="AddNewBlog" label="cancel">
                    <p>add Blogs</p>
                    <AddBlogsForm
                        onSubmit={props.onSubmit}
                        handleTitle={props.handleTitle}
                        handleAuthor={props.handleAuthor}
                        handleUrl={props.handleUrl}
                        handleLikes={props.handleLikes}
                        likes={props.likes}
                        url={props.url}
                        author={props.author}
                        title={props.title}
                    />
                </Togglable>
            </div>
        </div>
    )
}

export default UserBlogInfo
