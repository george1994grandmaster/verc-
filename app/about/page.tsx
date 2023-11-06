/*async function getData() {
  //const response = await fetch(`https://george1994grandmaster.github.io/postman-test/test.json`);
  const response = await fetch("/api/posts/");
  const dataResponse = await response.json(); // Wait for the JSON to be parsed
  return dataResponse;
}


export default async function About() {

  const data = await getData();
  return (
    <div>
      {data.map((item: any) => (
        <div>
          <p>Name: {item.name}</p>
          <p>Surname: {item.surname}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
}*/

"use client";

import React, { useState, useEffect } from 'react';

export default function About() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Inside the useEffect callback, you can make a fetch request
    fetch("/api/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []); 

  return (
    <div>
      {data.map((item: any) => (
        <div>
          <p>Name: {item.name}</p>
          <p>Surname: {item.surname}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );

}

