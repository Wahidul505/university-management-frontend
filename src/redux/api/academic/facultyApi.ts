import { IAcademicFaculty, IMeta } from "@/types";
import { baseApi } from "../baseApi";
import { tagTypes } from "@/redux/tagTypes";

const AC_FACULTY_URL = "/academic-faculties";

export const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic faculties
    academicFaculties: build.query({
      query: (query: Record<string, any>) => ({
        url: AC_FACULTY_URL,
        method: "GET",
        params: query,
      }),
      transformResponse: (response: IAcademicFaculty[], meta: IMeta) => {
        return {
          academicFaculties: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicFaculty],
    }),

    // add academic faculty
    addAcademicFaculty: build.mutation({
      query: (data: IAcademicFaculty) => ({
        url: AC_FACULTY_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.academicFaculty],
    }),
  }),
});

export const { useAcademicFacultiesQuery, useAddAcademicFacultyMutation } =
  academicFacultyApi;
