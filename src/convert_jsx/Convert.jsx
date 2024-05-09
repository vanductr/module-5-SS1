import React from 'react'

export default function Convert() {
  return (
    <div>
      <div className="container">
        <h1 className='heading'>Xin chào các bạn!</h1>
      </div>

      <form action="">
        <label htmlFor="name" className='form-lable'>Tên Đăng nhập</label>
        <br />
        <input type="text" className='form-input' id='name' />
        <br />
        <button className='form-submit' type='submit'>Đăng nhập</button>
      </form>
    </div>
  )
}
