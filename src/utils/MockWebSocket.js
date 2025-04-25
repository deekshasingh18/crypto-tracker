// src/utils/MockWebSocket.js
export default class MockWebSocket {
    constructor(url) {
      this.url = url;
      this.onmessage = null;
      this.interval = setInterval(() => {
        if (this.onmessage) {
          this.onmessage({ data: JSON.stringify({ type: 'update' }) });
        }
      }, 2000);
    }
  
    close() {
      clearInterval(this.interval);
    }
  }
  