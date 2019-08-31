import React from "react";
export const Input = ({ text, inputValue, handler }) => {
  return (
    <div>
      {text}: <input value={inputValue} onChange={handler} />
    </div>
  );
};
const Button = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};

const AddBlogsForm = ({
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
      <form onSubmit={onSubmit}>
        <div>
          <Input text="title" inputValue={title} handler={handleTitle} />
        </div>
        <div>
          <Input text="author" inputValue={author} handler={handleAuthor} />
        </div>
        <div>
          <Input text="url" inputValue={url} handler={handleUrl} />
        </div>
        <div>
          <Input text="likes" inputValue={likes} handler={handleLikes} />
        </div>
        <Button type="submit" text="create" />
      </form>
    </div>
  );
};
export default AddBlogsForm;
