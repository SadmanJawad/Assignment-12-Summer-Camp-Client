// export const getRole = async email => {
//     const response =await fetch(`http://localhost:5000/users/${email}`)
//     const user = await response.json();
//     return user?.role
//   }
  

  export const getRole = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${email}`);
      const user = await response.json();
      return user?.role;
    } catch (error) {
      console.error("Error fetching user role:", error);
      return null; // or you can throw an error if desired
    }
  };
  