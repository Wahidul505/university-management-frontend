import { IAcademicDepartment, IMeta } from "@/types";
import { baseApi } from "../baseApi";
import { tagTypes } from "@/redux/tagTypes";

const AC_DEPARTMENT_URL = "/academic-departments";

export const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic departments
    academicDepartments: build.query({
      query: (query: Record<string, any>) => ({
        url: AC_DEPARTMENT_URL,
        method: "GET",
        params: query,
      }),
      transformResponse: (response: IAcademicDepartment[], meta: IMeta) => {
        return {
          academicDepartments: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicDepartment],
    }),

    // add academic department
    addAcademicDepartment: build.mutation({
      query: (data: IAcademicDepartment) => ({
        url: AC_DEPARTMENT_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
  }),
});

export const { useAcademicDepartmentsQuery, useAddAcademicDepartmentMutation } =
  academicDepartmentApi;
