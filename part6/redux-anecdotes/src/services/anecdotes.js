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

const getOneById = async (anecdoteId) => {
  const responses = await axios.get(`${baseUrl}/${anecdoteId}`);
  return responses.data;
};

const addVoteByOne = async (anecdoteId, anecdote) => {
  const anecObj = { ...anecdote }
  anecObj.votes++
  const request = await axios.put(`${baseUrl}/${anecdoteId}`, anecObj)
  return request.data
}


export default { getAll, createNew, addVoteByOne,getOneById };
