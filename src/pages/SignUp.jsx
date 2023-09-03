import React,{useState} from 'react';
import { Container,Row,Col, FormGroup, Form } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import { Link } from 'react-router-dom';
import '../Styles/login.css';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.config'

const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const signup = async(e)=>{
    e.preventDefault()
    setLoading(true)

    try{
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
      const user = userCredential.user;
      console.log(user);
    }catch(error){}
  };


  return (
    <Helmet title='SignUp'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>SignUp-Let's get started!!</h3>
 
              <Form className='auth__form' onSubmit={signup}>
                <FormGroup className='form__group'>
                 <input 
                  type="text" 
                  placeholder='Enter your Name'
                  value={name} 
                  onChange={e=>setName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                 <input 
                  type="email" 
                  placeholder='Enter your email address'
                  value={email} 
                  onChange={e=>setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                 <input 
                  type="password"
                  placeholder='Enter your password'
                  value={password} 
                  onChange={e=>setPassword(e.target.value)} 
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                 <input 
                  type="file"
                  onChange={e=>setFile(e.target.files[0])} 
                  />
                </FormGroup>

                <button className="buy__btn auth__btn">Create an Account</button>
                <p>Already have an account? <Link to='/login'>Go to Login</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default SignUp
