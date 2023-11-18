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
    key: "salary",
    title: "Salary",
    type: "number",
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
    key: "desc",
    title: "Description",
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
        value: 500,
        message: "you have not enough characters, enter bettwen 4-25",
      },
    },
  },
  {
    key: "currency",
    title: "Currency",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "enter values",
      },
    },
  },
  {
    key: "jobLocation",
    title: "Location",
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
    type: "select",
    values: [
      {
        label: "Intership",
        value: "intership",
      },

      {
        label: "Part-time",
        value: "part-time",
      },

      {
        label: "Full-time",
        value: "full-time",
      },
    ],
  },
  //   {
  //     key: "job-status",
  //     title: "Job status",
  //     type: "select",
  //     values: {
  //       value1: {
  //         value: "pending",
  //         name: "Pending",
  //       },
  //
  //       value2: {
  //         value: "intership",
  //         name: "intership",
  //       },
  //
  //       value3: {
  //         value: "full-time",
  //         name: "full-time",
  //       },
  //     },
  //   },
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
    name: "salary",
    message: "enter values",
  },
  {
    type: "required",
    name: "desc",
    message: "enter values",
  },
  {
    type: "required",
    name: "currency",
    message: "enter values",
  },
  {
    type: "required",
    name: "jobType",
    message: "enter values",
  },
];
