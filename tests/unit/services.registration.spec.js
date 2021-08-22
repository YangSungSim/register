import moxios from 'moxios'
import registrationService from '@/services/registration'

describe('services/registration', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall() // 사용한 목을 제거
  })

  it('should pass the response to caller when request succeeded', () => {
    expect.assertions(2)  // assertion 이 호출되는 횟수를 검증한다.
    moxios.wait(() => { // 목 요청이 만들어질때까지 기다림
      let request = moxios.requests.mostRecent()  // 가장 최근의 요청
      expect(request).toBeTruthy()  // 최근 요청이 존재하는 지 확인
      request.respondWith({  //요청에의한 응답 지정
        status: 200,
        response: {result: 'success'}
      })
    })
    return registrationService.register().then(data => { // register 메소드를 호출하고 반환된 값의 result 프로퍼티가 성공인지 확인
      expect(data.result).toEqual('success')
    })
  })

  it('should propagate the error to caller when request failed', () => {
    expect.assertions(2)
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      expect(request).toBeTruthy()
      request.reject({ //실패 테스트에 쓰이는 reject
        status: 400,
        response: {message: 'Bad request'}
      })
    })
    return registrationService.register().catch(error => {
      expect(error.response.message).toEqual('Bad request')
    })
  })
})
