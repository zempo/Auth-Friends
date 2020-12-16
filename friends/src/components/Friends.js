import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFriend = {
  name: "",
  age: "",
  email: "",
};

const Friends = () => {
  const [list, setList] = useState([]);
  const [friend, setFriend] = useState(initialFriend);

  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // reset
    setFriend(initialFriend);
  };

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  return (
    <section className='pg friends-pg'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={friend.name}
          onChange={handleChange}
          placeholder='Sammy'
        ></input>
        <input
          type='text'
          name='age'
          value={friend.age}
          onChange={handleChange}
          placeholder='24'
        ></input>
        <input
          type='email'
          name='email'
          value={friend.email}
          onChange={handleChange}
          placeholder='sammy24@bingbing.com'
        ></input>
        <button>Submit</button>
      </form>
      <section className='friends-container'>
        <ul className='friends-list'>
          {list.map((item) => {
            return (
              <li className='friends-list-item'>
                <h2>{item.name}</h2>
                <p>AGE: {item.age}</p>
                <p>EMAIL: {item.email}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Friends;
