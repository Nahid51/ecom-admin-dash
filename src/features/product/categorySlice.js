import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8800",
    }),
    tagTypes: ["Category"],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `/category`,
            providesTags: ["Category"]
        }),
        getCategory: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
                method: "GET"
            })
        }),
        addCategory: builder.mutation({
            query: (formData) => ({
                url: `/category`,
                method: "POST",
                body: formData
            })
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Category"]
        }),
    })
})

export const { useAddCategoryMutation, useDeleteCategoryMutation, useGetCategoriesQuery, useGetCategoryQuery } = categoryApi;