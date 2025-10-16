export class APIUtitils {
  constructor(apiContext, loginpayload) {
    this.apiContext = apiContext;
    this.loginpayload = loginpayload;
  }

  async getToken() {
    const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: this.loginpayload
        });
    // expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    console.log(token);
    return token;
  }
// orderId = await orderResponseJson.orders[0];

  async createOrder(orderpayload) {
    let response = {};
    const token = await this.getToken();
    const orderResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderpayload,
        headers: {
          authorization: token,
          "content-type": "application/json",
        },
      }
    );
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    let orderId;
    orderId = await orderResponseJson.orders[0];
    console.log(orderId);
    response.orderId = orderId;
    response.token = token;
    return response;
  }
}
