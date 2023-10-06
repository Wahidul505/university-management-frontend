export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export type IResponseSuccess = {
  data?: any;
  meta?: IMeta;
};

export type IResponseError = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IManagementDepartment = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type IAdmin = {
  bloodGroup: string;
  contactNo: string;
  createdAt: string;
  dateOfBirth: string;
  designation: string;
  email: string;
  emergencyContactNo: string;
  gender: string;
  id: string;
  managementDepartment: {
    _id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  name: { firstName: string; lastName: string; middleName: string };
  permanentAddress: string;
  presentAddress: string;
  updatedAt: string;
  __v: number;
};

export type IAcademicFaculty = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type IAcademicDepartment = {
  id: string;
  title: string;
  academicFacultyId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
