export interface IHttpResponse<T> {
  status: number
  success: boolean
  data: T
  message?: string
}
