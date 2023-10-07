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
  profileImage: string;
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

export type IFaculty = {
  faculty: {
    name: {
      firstName: string;
      lastName: string;
      middleName: string;
    };
    dateOfBirth: string;
    gender: string;
    bloodGroup: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
    academicFaculty: string;
    academicDepartment: string;
    designation: string;
    profileImage: string;
  };
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

export type IAcademicSemester = {
  id: string;
  year: number;
  title: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
