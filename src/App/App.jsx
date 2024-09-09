import React from 'react';
import Profile from '../Profile/Profile';
import userData from '../userData.json'; // Імпорт JSON-файлу

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
