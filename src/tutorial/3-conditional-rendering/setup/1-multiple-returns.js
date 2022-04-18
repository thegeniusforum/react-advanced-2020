import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      let response = await fetch(url);
      let user = await response.json();
      response.status >= 200 && response.status <= 299
        ? (function () {
            setIsLoading(false);
            setUser(user);
          })()
        : (function () {
            setIsError(true);
            setIsLoading(false);
          })();
    } catch (e) {
      setIsError(true);
    } finally {
      isError ? setIsLoading(true) : setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
    fetch(url)
      .then((response) => {
        response.status >= 200 && response.status <= 299
          ? (function () {
              setIsLoading(false);
              response.json();
              // console.log(response.json());
            })()
          : (function () {
              setIsError(true);
              setIsLoading(false);
            })();
      })
      .catch((error) => console.error(error));
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : isError ? (
    <h2 style={{ color: "red" }}>
      An error occured, contact your system administrator.
    </h2>
  ) : (
    <>
      <ul className="users">
        <ul className="user">
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login}></img>
            <div>
              <h4>{user.login}</h4>
              <a href={user.html_url}>Profile</a>
            </div>
          </li>
        </ul>

        {/* {() => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        }} */}
      </ul>
    </>
  );
};

export default MultipleReturns;
