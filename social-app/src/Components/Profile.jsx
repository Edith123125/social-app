import React from 'react';

const Profile = () => {
  const user = {
    name: "Eddie",
    bio: "React Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg", 
  };

  return (
    <div>
      <img src={user.avatar} alt="Avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;