export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //it will true or false;
//   const isFullNameValid=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname)
//   if(!isFullNameValid) return "Name is not valid!Write Full Name";
  if(!isEmailValid) return "Email ID is not valid";
  if(!isPasswordValid) return "Password is not valid";


    return null;
};
export const checkValidDataForSignUp = (email, password,fullname) => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    //it will true or false;
    if(fullname==null) return null;
    const isFullNameValid=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname);
    if(!isFullNameValid) return "Name is not valid!Write Full Name";
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
  
  
      return null;
  };
