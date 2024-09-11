import { useCallback, useReducer } from 'react'
import './App.css'
import Input from './components/lib/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from './utils/validate'



function App() {
  useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid:false
      },
      description: {
        value: '',
        isValid:false
      }
    },
    isValid:false
  })
  const inputChangeHanlder = useCallback((id, value, isValid) => {
    console.log('id', id, value, 'isValid', isValid);
  }, []);
  const descriptionChangeHanlder = useCallback((id, value, isValid) => {
    console.log('id', id, value, 'isValid', isValid);
  }, []);

  return (
    <>
      <div className="card">
        <form action="">
          <Input id="title" element="input" type="text" label="First Name" placeholder="Enter Your Name"
            errorText="Please enter Valid"
            onInput={ inputChangeHanlder}
            validators={[VALIDATOR_REQUIRE()]}
          />
           <Input id="description" element="textarea" label="Description" placeholder="Enter your thought about this"
            errorText="Please enter Valid description atleast 10 character"
            onInput={ descriptionChangeHanlder}
            validators={[VALIDATOR_MINLENGTH(10)]}
            />
        </form>
      </div>
     
    </>
  )
}

export default App
