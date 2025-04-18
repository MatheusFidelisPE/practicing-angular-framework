export interface IRole{
    roleId: number;
    role: string;
}

export interface ApiResponseModel {
    message:string;
    result: boolean;
    data:any;
}

export interface IDesignation{
    designationId: number;
    designation: string;
}