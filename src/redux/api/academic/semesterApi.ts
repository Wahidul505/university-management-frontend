import { IAcademicSemester, IMeta } from "@/types";
import { baseApi } from "../baseApi";
import { tagTypes } from "@/redux/tagTypes";

const AC_SEMESTER_URL = "/academic-semesters";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic semesters
    academicSemesters: build.query({
      query: (query: Record<string, any>) => ({
        url: AC_SEMESTER_URL,
        method: "GET",
        params: query,
      }),
      transformResponse: (response: IAcademicSemester[], meta: IMeta) => {
        return {
          academicSemesters: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicSemester],
    }),

    // add academic semester
    addAcademicSemester: build.mutation({
      query: (data: IAcademicSemester) => ({
        url: AC_SEMESTER_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
  }),
});

export const { useAcademicSemestersQuery, useAddAcademicSemesterMutation } =
  academicSemesterApi;
