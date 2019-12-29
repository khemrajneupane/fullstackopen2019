import React from 'react'
import {Button} from '../components/LoginForm'

export const Input = ({ text, inputValue, handler,type }) => <div>{text}: <input value={inputValue} onChange={handler} type={type}/></div> 
        

const AddBlogsForm = ({
    onSubmit,
    handleTitle,
    handleAuthor,
    handleUrl,
    handleLikes,

}) => {
    return (
        <div>
 {           <form onSubmit={onSubmit}>
                <div>
                    <Input text="title" value="title" handler={handleTitle} />
                </div>
                <div>
                    <Input text="author" value="author" handler={handleAuthor} />
                </div>
                <div>
                    <Input text="url" value="url" type ="url" handler={handleUrl} />
                </div>
                <div>
                    <Input text="likes" type="number" value="likes" handler={handleLikes} />
                </div>
                <Button type="submit" text="Create" />
            </form>}
        </div>
    )
}
export default AddBlogsForm
