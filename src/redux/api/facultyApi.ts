import { IFaculty, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const FACULTY_URL = "/faculties";

export const facultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all faculties
    faculties: build.query({
      query: (query: Record<string, any>) => ({
        url: FACULTY_URL,
        method: "GET",
        params: query,
      }),
      transformResponse: (response: IFaculty[], meta: IMeta) => {
        return {
          faculties: response,
          meta,
        };
      },
      providesTags: [tagTypes.faculty],
    }),

    // create faculty
    createFacultyWithFormData: build.mutation({
      query: (data) => ({
        url: `/users/create-faculty`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
  }),
});

export const { useFacultiesQuery, useCreateFacultyWithFormDataMutation } =
  facultyApi;
