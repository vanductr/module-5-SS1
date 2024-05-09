import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString() // Lấy thời gian hiện tại
    };
  }

  // Hàm này được gọi sau khi component được render lần đầu tiên
  componentDidMount() {
    // Sử dụng hàm setInterval để cập nhật thời gian mỗi giây
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  // Hàm này được gọi trước khi component bị unmount
  componentWillUnmount() {
    // Xóa interval để tránh rò rỉ bộ nhớ khi component không còn tồn tại
    clearInterval(this.timerID);
  }

  // Hàm cập nhật thời gian
  updateTime() {
    this.setState({
      time: new Date().toLocaleTimeString() // Lấy thời gian hiện tại
    });
  }

  render() {
    return (
      <div>
        <h2>Clock</h2>
        <p>Current time: {this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
