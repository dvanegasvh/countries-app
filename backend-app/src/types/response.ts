export interface ResponseObject<T> {
    status: number;
    data: T | unknown;
}
