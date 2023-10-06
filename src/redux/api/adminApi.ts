import { IAdmin, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create admin
    createAdminWithFormData: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/users/create-admin",
          method: "POST",
          data: data,
          contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.admin],
    }),

    // get all admins
    admins: build.query({
      query: (query: Record<string, any>) => ({
        url: "/admins",
        method: "GET",
        params: query,
      }),
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateAdminWithFormDataMutation, useAdminsQuery } = adminApi;
