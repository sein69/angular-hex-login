export interface LoginRequest {
  data: {
    type: 'login',
    attributes: {
      email: string,
      password: string
    }
  }
}
