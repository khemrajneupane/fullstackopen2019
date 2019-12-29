import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../index.css'
import blogService from '../services/blogs'

const Blog = (props) => {
    const [itemObj, setItemObj] = useState([])
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    const addLikes = async blog => {
        try {
            const blogObj = { ...blog }
            blogObj.likes++
            await blogService.updateLikes(blogObj.id, blog)
            setItemObj(blogObj)
        } catch (error) {
            alert()
            let r = window.confirm(`${error.message}! Would you like to refresh?`);
            if (r === true) {
                window.location.reload()
            } else { return }
        }
    }

    const createEachItems = async item =>
        await setItemObj({
            title: item.title,
            author: item.author,
            url: item.url,
            likes: item.likes,
            user: item.user,
            id: item.id
        })

    const itemsTitleAuthor = props.blogs.map(item => {
        const isLogged = item.user.username.indexOf(props.user) > -1
        return (
            <div key={item.title} className="blogStyle" data-testid="visible">
                <span
                    style={hideWhenVisible}
                    onClick={toggleVisibility}
                    className="ptr"
                >
                    {item.title}
                </span>
                <div
                    key={item.id}
                    onClick={() => createEachItems(item)}
                    className="ptr"
                    data-testid="createItems"
                >
                    {item.author}
                    {isLogged ? (
                        <button onClick={() => props.deleteList(item, setItemObj)}>remove</button>
                    ) : (
                            <button className="hide"></button>
                        )}
                </div>
            </div>
        )
    })
    const eachItems = () =>
        itemObj.title === undefined ? (
            <div className="hide" data-testid="invisible"></div>
        ) : (
                <div className="eachBlogStyle" data-testid="revisible">
                    <span
                        style={showWhenVisible}
                        onClick={toggleVisibility}
                        className="ptr"
                        data-testid="spanvisible"
                    >
                        {itemObj.title}
                    </span>{" "}

                    <span>
                        <a href={itemObj.url} >{itemObj.url}</a>
                    </span>
                    {`${itemObj.likes} likes `}
                    <button onClick={() => addLikes(itemObj)}>like</button>

                    {` added by ${itemObj.author}`}
                </div>
            )
    return (
        <div>
            <div data-testid="eachitems" >{eachItems()}</div>

            {itemsTitleAuthor}
        </div>
    )
}

Blog.propTypes = {
    blogs: PropTypes.array.isRequired,
    deleteList: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
}

export default Blog
