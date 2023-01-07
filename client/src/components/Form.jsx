import React , {useState, useRef}from 'react'
import emailjs from '@emailjs/browser'

function Form() {
    const [formData, setFormData] = useState ({
        name: '',
        phone: '',
        email: '',
        message: ''
      })

      const form = useRef(null)

      const submit = (e) => {
        e.preventDefault() 
        console.log(formData)

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          alert(`Hi, ${formData.name}! We have recieved your message! We'll be in touch soon`);
      }, (error) => {
          alert('Sorry something went wrong :(');
      });

      setFormData ({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
      }

      const inputChange = (e) => {
        const {name, value} = e.target;
        setFormData(pre => ({
          ...pre,
          [name]:value
        })
        )
      }

  return (
    <form onSubmit={submit} ref={form}>
        <div>
            <div className='inputs--container'>
                <div className='input--box'>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    required name='name' 
                    value={formData.name}
                    onChange={(e) => inputChange(e)}/>
                </div>
                <div className='input--box'>
                    <label htmlFor="phone">Phone</label>
                    <input 
                    type="number"
                    name='phone' 
                    value={formData.phone}
                    min='10'
                    onChange={(e) => inputChange(e)} />
                </div>
                <div className='input--box'>
                    <label htmlFor="email">Email</label>
                    <input  type='email' 
                    value={formData.email}
                    required name='email'
                     onChange={(e) => inputChange(e)}/>
                </div>
            </div>
                <label htmlFor="message">Message</label>
                <textarea name="message" 
                value={formData.message}
                required id='message'cols="30" rows="10" onChange={(e) => inputChange(e)} ></textarea>
        </div>
            <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default Form