import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: [
        'Menu',
        'Reasons',
        'Variations',
        'CatalogFirstPage',
        'MaterialsData',
        'AboutStats',
        'LastStates',
        'CeoSlider',
        'FooterNavigation',
        'Catalog',
        'FiltersData',
        'Catalog',
        'CardPageData',
        'Processes',
        'CasesPageData',
        'PostData',
        'FactoryPhotos',
        'Contacts',
        'Details',
        'Social'
    ],
    endpoints: builder => ({
        postData: builder.mutation({
            query: (data) => ({
                url: '/requests',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['PostData'], // optional: for refetching related data
        }),
        getMenu: builder.query({
            query: () => '/menu',
            providesTags: ['Menu']
        }),
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
        }),
        getCatalog: builder.query({
            query: ({ catalogBaseName, offset = 0, limit = 4 }) =>
                `${catalogBaseName}?_start=${offset}&_limit=${limit}`,
        }),
        getFiltersData: builder.query({
            query: () => '/filtersData',
            providesTags: ['FiltersData']
        }),
        getCardPageData: builder.query({
            query: (id) => `/catalogCardsInfo/${id}`,
            providesTags: ['CardPageData']
        }),
        getProcesses: builder.query({
            query: () => '/processes',
            providesTags: ['Processes']
        }),
        getCasesPageData: builder.query({
            query: (id) => `/casesCardsInfo/${id}`,
            providesTags: ['CasesPageData']
        }),
        getFactoryPhotos: builder.query({
            query: () => '/factoryPhotos',
            providesTags: ['FactoryPhotos']
        }),
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts']
        }),
        getDetails: builder.query({
            query: () => '/details',
            providesTags: ['Details']
        }),
        getSocial: builder.query({
            query: () => '/social',
            providesTags: ['Social']
        }),
    })
})
export const {
    useGetMenuQuery,
    usePostDataMutation,
    useGetReasonsQuery,
    useGetVariationsQuery,
    useGetCatalogFirstPageQuery,
    useGetMaterialsDataQuery,
    useGetAboutStatsQuery,
    useGetLastStatesQuery,
    useGetCeoQuery,
    useGetFooterNavigationQuery,
    useGetCatalogQuery,
    useGetFiltersDataQuery,
    useGetCardPageDataQuery,
    useGetProcessesQuery,
    useGetCasesPageDataQuery,
    useGetFactoryPhotosQuery,
    useGetContactsQuery,
    useGetDetailsQuery,
    useGetSocialQuery
} = apiSlice;