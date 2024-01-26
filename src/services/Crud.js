import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const CrudApi = createApi({
  reducerPath: 'CrudApi',
  tagTypes: ['crud'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7070/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `users`,
      method: 'GET',
      providesTags: ['crud'],
    }),
    getSpecificUser: builder.query({
      query: (id) => `users/${id}`,
      method: 'GET',
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `users/${id}`,
          method: 'DELETE',
        };
      },
    }),
    updateUser: builder.mutation({
      query: (userinfo) => {
        console.log(userinfo);
        return {
          url: `users/${userinfo.id}`,
          method: 'PUT',
          body: JSON.stringify(userinfo),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
    createUser: builder.mutation({
      query: (userinfo) => {
        console.log(userinfo);
        return {
          url: `users`,
          method: 'POST',
          body: JSON.stringify(userinfo),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
      invalidatesTags: ['crud'],
    }),
  }),
});
export const {
  useGetAllUsersQuery,
  useGetSpecificUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useCreateUserMutation,
} = CrudApi;
