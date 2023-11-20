import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8800",
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users`,
            providesTags: ["User"]
        }),
        getUser: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET"
            })
        }),
        addUser: builder.mutation({
            query: (formData) => ({
                url: `/users`,
                method: "POST",
                body: formData
            }),
            invalidatesTags: ["User"],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["User"]
        }),
    })
})

export const { useAddUserMutation, useDeleteUserMutation, useGetUserQuery, useGetUsersQuery } = userApi;