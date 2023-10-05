import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    departments: build.query({
      query: (query: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: query,
      }),
      transformResponse: (response: IDepartment[], meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),

    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    department: build.query({
      query: (id: string) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useAddDepartmentMutation,
  useDepartmentsQuery,
  useDepartmentQuery,
} = departmentApi;
