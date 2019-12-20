import Blog from './Blog'
import React from 'react'
import AddBlogsForm from './AddBlogsForm'
import LogOut from './LogOut'
import Togglable from './Togglable'

const UserBlogInfo = ({
    deleteList,
    setBlogs,
    user,
    blog,
    onSubmit,
    handleTitle,
    handleAuthor,
    handleUrl,
    handleLikes,
    likes,
    url,
    author,
    title
}) => {
    return (
        <div>
      blogs
            <p>
                {`${user} is logged in`} <LogOut />
            </p>
            <div>
                <Togglable buttonLabel="ShowAllBlogs" label="HideAllBlogs">
                    {'All blogs '}
                    <Blog blog={blog} deleteList={deleteList} setBlogs={setBlogs} />
                </Togglable>
            </div>
            <div>
                {' '}
                <Togglable buttonLabel="AddNewBlog" label="cancel">
                    <p>add Blogs</p>
                    <AddBlogsForm
                        onSubmit={onSubmit}
                        handleTitle={handleTitle}
                        handleAuthor={handleAuthor}
                        handleUrl={handleUrl}
                        handleLikes={handleLikes}
                        likes={likes}
                        url={url}
                        author={author}
                        title={title}
                    />
                </Togglable>
            </div>
        </div>
    )
}

export default UserBlogInfo
