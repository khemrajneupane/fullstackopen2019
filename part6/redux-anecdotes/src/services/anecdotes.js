import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async content => {
  const newObj = { content, votes: 0 };
  const response = await axios.post(baseUrl, newObj);
  return response.data;
};

const addVoteByOne = async id => {
  let existingVotes = await axios.get(`${baseUrl}/${id}`);

  const modifiedVotes = {
    ...existingVotes.data,
    votes: existingVotes.data.votes + 1
  };
  const response = await axios.put(`${baseUrl}/${id}`, {
    modifiedVotes
  });
  return response;
};

export default { getAll, createNew, addVoteByOne };
