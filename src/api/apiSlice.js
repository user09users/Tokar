import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: [
        'Reasons',
        'Variations',
        'CatalogFirstPage',
        'MaterialsData',
        'AboutStats',
        'LastStates',
        'CeoSlider',
        'FooterNavigation'
    ],
    endpoints: builder => ({
        getReasons: builder.query({
            query: () => '/reasons',
            providesTags: ['Reasons']
        }),
        getCatalogFirstPage: builder.query({
            query: () => '/catalogFirstPage',
            providesTags: ['CatalogFirstPage']
        }),
        getVariations: builder.query({
            query: () => '/variations',
            providesTags: ['Variations']
        }),
        getMaterialsData: builder.query({
            query: () => '/materialsData',
            providesTags: ['MaterialsData']
        }),
        getAboutStats: builder.query({
            query: () => '/aboutStats',
            providesTags: ['AboutStats']
        }),
        getLastStates: builder.query({
            query: () => '/lastStates',
            providesTags: ['LastStates']
        }),
        getCeo: builder.query({
            query: () => '/ceoSlider',
            providesTags: ['CeoSlider']
        }),
        getFooterNavigation: builder.query({
            query: () => '/navigation',
            providesTags: ['FooterNavigation']
        })
    })
})

export const {
    useGetReasonsQuery,
    useGetVariationsQuery,
    useGetCatalogFirstPageQuery,
    useGetMaterialsDataQuery,
    useGetAboutStatsQuery,
    useGetLastStatesQuery,
    useGetCeoQuery,
    useGetFooterNavigationQuery
} = apiSlice;