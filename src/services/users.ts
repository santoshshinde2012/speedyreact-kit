import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUser {
  name: string;
  blog: string;
  linkedin: string;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => `users.json`,
    }),
  }),
});

export const { useGetUserQuery } = usersApi;
