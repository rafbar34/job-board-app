export const addJobData = [
  {
    key: "title",
    title: "Title",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "enter values",
      },
      minLength: {
        value: 4,
        message: "you have not enough characters, enter bettwen 4-25",
      },
      maxLength: {
        value: 25,
        message: "you have to many characters, enter bettwen 4-25",
      },
    },
  },
  {
    key: "company",
    title: "Company",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "enter values",
      },
      minLength: {
        value: 1,
        message: "you have not enough characters, enter bettwen 4-25",
      },
      maxLength: {
        value: 25,
        message: "you have not enough characters, enter bettwen 4-25",
      },
    },
  },
  {
    key: "job-type",
    title: "Job type",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "enter values",
      },
      minLength: {
        value: 1,
        message: "you have not enough characters, enter bettwen 4-25",
      },
      maxLength: {
        value: 25,
        message: "you have not enough characters, enter bettwen 4-25",
      },
    },
  },
  {
    key: "job-status",
    title: "Job status",
    type: "text",
    defaultValue:'pending',
    rules: {
      required: {
        value: true,
        message: "enter values",
      },
      minLength: {
        value: 1,
        message: "you have not enough characters, enter bettwen 4-25",
      },
      maxLength: {
        value: 25,
        message: "you have not enough characters, enter bettwen 4-25",
      },
    },
  },
];

export const addJobErrors = [
  {
    type: "required",
    name: "title",
    message: "enter values",
  },
  {
    type: "required",
    name: "company",
    message: "enter values",
  },
  {
    type: "required",
    name: "job-type",
    message: "enter values",
  },
];
