export const registerData = [
  {
    key: 'name',
    title: 'Name',
    type: 'text',
    rules: {
      required: {
        value: true,
        message: 'enter values',
      },
      minLength: {
        value: 4,
        message: 'you have not enough characters, enter bettwen 4-12',
      },
      maxLength: {
        value: 12,
        message: 'you have to many characters, enter bettwen 4-12',
      },
    },
  },
  {
    key: 'lastName',
    title: 'Last name',
    type: 'text',
    rules: {
      required: {
        value: true,
        message: 'enter values',
      },
      minLength: {
        value: 4,
        message: 'you have not enough characters, enter bettwen 4-12',
      },
      maxLength: {
        value: 12,
        message: 'you have to many characters, enter bettwen 4-12',
      },
    },
  },
  {
    key: 'email',
    title: 'E-mail',
    type: 'email',
    rules: {
      required: {
        value: true,
        message: 'enter values',
      },
      minLength: {
        value: 4,
        message: 'you have not enough characters, enter bettwen 4-12',
      },
      maxLength: {
        value: 20,
        message: 'you have to many characters, enter bettwen 4-20',
      },
    },
  },
  {
    key: 'password',
    title: 'Password',
    type: 'password',
    rules: {
      required: {
        value: true,
        message: 'enter values',
      },
      minLength: {
        value: 4,
        message: 'you have not enough characters, enter bettwen 4-12',
      },
    },
  },
];

export const registerErrors = [
  {
    type: 'minLength',
    name: 'name',
  },
  {
    type: 'minLength',
    name: 'lastName',
  },
  {
    type: 'maxLength',
    name: 'name',
  },
  {
    type: 'maxLength',
    name: 'lastName',
  },
  {
    type: 'required',
    name: 'email',
    message: 'enter values',
  },
  {
    type: 'required',
    name: 'password',
  },
  {
    type: 'required',
    name: 'lastName',
  },
  {
    type: 'required',
    name: 'name',
  },
];
export const loginData = [
  
  {
    key: 'email',
    title: 'E-mail',
    type: 'email',
    rules: {
      required: {
        value: true,
        message: 'enter values',
      },
      minLength: {
        value: 4,
        message: 'you have not enough characters, enter bettwen 4-12',
      },
      maxLength: {
        value: 20,
        message: 'you have to many characters, enter bettwen 4-20',
      },
    },
  },
  {
    key: 'password',
    title: 'Password',
    type: 'password',
    rules: {
      required: {
        value: true,
        message: 'enter values',
      },
      minLength: {
        value: 4,
        message: 'you have not enough characters, enter bettwen 4-12',
      },
    },
  },
];

export const loginErrors = [
 
  {
    type: 'required',
    name: 'email',
    message: 'enter values',
  },
  {
    type: 'required',
    name: 'password',
  },

  
];
