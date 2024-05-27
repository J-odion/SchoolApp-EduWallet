export const signup = {
  status: "success",
  message: "success",
  user: {
    id: "7194250033063852398",
    firstName: "victor",
    lastName: "Peter",
    email: "Emmet.Altenwerth@gmail.com",
    password: "$2b$10$bvSrWbXV6SiZL9TXZWUQd.OjIu5EtOO2LElAGKCulTRJ5yG/GGs6S",
    signupToken:
      "f0a12c0c62cbed9832b3f76672ba0e35c753d025a8871b424df465f3c6cabfd9",
    userName: null,
    passwordChangedAt: null,
    passwordResetToken: null,
    resetTokenExpiresAt: null,
    verify: false,
    createdAt: "2024-05-09T07:21:10.885Z",
    updatedAt: "2024-05-09T07:21:10.885Z",
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxOTQyNTAwMzMwNjM4NTIzOTgiLCJpYXQiOjE3MTUyNDI4NzYxMDcsImV4cCI6MTcxNTI0Mjk2MjUwN30.PNeSxZARUgnA3idEq2kFw3Ib1Q5ZlwEo6756V519DFg",
};

export const verifyEmail = {
  code: 200,
  status: "success",
  message: "Request completed successfully.",
  id: "7194251216069182921",
  firstName: "victor",
  lastName: "Peter",
  email: "muhammadmubarak1345@gmail.com",
  userName: null,
  password: "$2b$10$eW7LMvGrcsBjY6uXSGaoneuP7ikmHfsdt3UsD8ZPJ2CSOjxjFePmC",
  passwordChangedAt: null,
  verify: true,
  signupToken: null,
  passwordResetToken: null,
  resetTokenExpiresAt: null,
  createdAt: "2024-05-09T07:25:52.949Z",
  updatedAt: "2024-05-09T07:29:45.144Z",
};

export const signIn = {
  code: 401,
  status: "error",
  message: "Email not yet verified",
};

export const fetchProfile = {
  code: 200,
  status: "success",
  message: "Request completed successfully.",
  id: "7193970904841140015",
  firstName: "victor",
  lastName: "Peter",
  email: "Jerrod_Tromp19@yahoo.com",
  userName: null,
  password: "password",
  passwordChangedAt: null,
  verify: false,
  signupToken:
    "4101b3de1d01e28698346ffb91d7bae2d4044de1b81abd2d8f26567ba60b9f27",
  passwordResetToken: null,
  resetTokenExpiresAt: null,
  createdAt: "2024-05-08T12:52:01.204Z",
  updatedAt: "2024-05-08T12:52:01.204Z",
};

export const updateProfile = {
  code: 200,
  status: "success",
  message: "success",
  generatedMaps: [],
  raw: [],
  affected: 1,
};

export const updatePassword = {
  status: "success",
  message: "success",
  user: {
    id: "7194251216069182921",
    firstName: "Peter",
    lastName: "Victor",
    email: "muhammadmubarak1345@gmail.com",
    userName: null,
    password: "$2b$10$CoEzLolSh/S5fWXEib/bTukLr8UjRJ6Z0spukvmBDg/LP2zBn/xLS",
    passwordChangedAt: null,
    verify: true,
    signupToken:
      "09a602c10eb2d1ad01a81a48744715237ac4142be49255723d6b10ef3c98ee35",
    passwordResetToken: null,
    resetTokenExpiresAt: null,
    createdAt: "2024-05-09T07:25:52.949Z",
    updatedAt: "2024-05-09T08:39:52.521Z",
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxOTQyNTEyMTYwNjkxODI5MjEiLCJpYXQiOjE3MTUyNDc1OTUwMTAsImV4cCI6MTcxNTI0NzY4MTQxMH0.bu9qDDdii3KGa2ZMEVLFNtobsrfxLT2XMhestRtEVxs",
};

export const addChild = {
  code: 200,
  status: "success",
  message: "success",
  firstName: "Emma",
  lastName: "Peter",
  DOB: "Mon Oct 16 2023 10:38:31 GMT+0100 (West Africa Standard Time)",
  schoolName: "little angel",
  schoolId: "5432",
};

export const children = {
  0: {
    id: "7194251216069434355",
    firstName: "Emma",
    lastName: "Peter",
    username: null,
    DOB: "2023-07-05T22:06:33.000Z",
    schoolName: "lorens",
    schoolId: "1245",
  },
  1: {
    id: "7194371257868706682",
    firstName: "Emma",
    lastName: "Peter",
    username: null,
    DOB: "2023-10-16T09:38:31.000Z",
    schoolName: "little angel",
    schoolId: "5432",
  },
  code: 200,
  status: "success",
  message: "Request completed successfully.",
};

export const childProfile = {
  code: 200,
  status: "success",
  message: "Request completed successfully.",
  id: "7194371257868706682",
  firstName: "Emma",
  lastName: "Peter",
  username: null,
  DOB: "2023-10-16T09:38:31.000Z",
  schoolName: "little angel",
  schoolId: "5432",
};
