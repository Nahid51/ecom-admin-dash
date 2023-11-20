import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8800",
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
            providesTags: ["Products"]
        }),
        getProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET"
            })
        }),
        addProduct: builder.mutation({
            query: (formData) => ({
                url: `/products`,
                method: "POST",
                body: formData
            })
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        }),
    })
})

export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, useDeleteProductMutation } = productApi;