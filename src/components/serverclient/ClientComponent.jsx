"use client";
const ClientComponent = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default ClientComponent;
