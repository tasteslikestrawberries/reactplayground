import React, { useState, useEffect } from "react";

import axios from "axios";

export default function CodePractice() {
  //setCounter is a function that let us update the count variable
  const [counter, setCounter] = useState(0);
  const [userInfos, setUserInfos] = useState<any>([]);
  const [dataJSON, setDataJSON] = useState("");

  interface UserName {
    first: string;
    last: string;
    title: string;
  }

  interface UserPicture {
    thumbnail: string;
  }

  interface UserInfo {
    name: UserName;
    picture: UserPicture;
  }

  const fetchUserData = () => {
    return axios
      .get<any>("https://randomuser.me/api")
      .then(({ data }) => {
        //handle success
        console.log(data);
        return data;
      })
      .catch((err) => {
        // handle error
        console.error(err);
      });
  };

  const getFullUserName = (userInfo: UserInfo) => {
    const {
      name: { first, last },
    } = userInfo;
    return `${first} ${last}`;
  };

  useEffect(() => {
    fetchUserData().then((userData) => {
      setDataJSON(JSON.stringify(userData, null, 2) || "No user data found");
      setUserInfos(userData.results);
    });
  }, []);

  return (
    <>
      <p>{counter}</p>
      {/*When the user clicks, we call setCount with a new value*/}
      <button
        style={{ padding: "10px", margin: "1rem" }}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
        style={{ padding: "10px", margin: "1rem" }}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>

      {userInfos.map((userInfo: UserInfo, idx: number) => (
        <div key={idx}>
          <p>{getFullUserName(userInfo)}</p>
          <img src={userInfo.picture.thumbnail} />
        </div>
      ))}

      <br />
      <br />

      <pre>{dataJSON}</pre>
    </>
  );
}
