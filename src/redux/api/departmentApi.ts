import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all departments
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

    // add department
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    // get single department
    department: build.query({
      query: (id: string) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),

    // update single department
    updateDepartment: build.mutation({
      query: ({ id, data }) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    // delete single department
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useAddDepartmentMutation,
  useDepartmentsQuery,
  useDepartmentQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
