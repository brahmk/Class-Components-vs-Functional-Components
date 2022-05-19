import { configure } from "@testing-library/react";
import { useState } from "react";

export default function ContactForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [terms, setTerms] = useState('false')


    const contactFormInfo = {
        firstName: firstName,
        lastName: lastName,
        terms:terms
    }
    if(contactFormInfo.firstName && contactFormInfo.lastName && contactFormInfo.terms){}

    const sendData = (e) => {
        e.preventDefault()
        console.log('button pressed')
        console.log(contactFormInfo)
    }

    

 
  return (
    <>
      <form method="post">
        <label>
          First Name:
          <input 
          type="text" 
          name="firstName" 
          
          onChange={(event) => setFirstName(event.target.value)}>
          </input>
        </label>

        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={(event) => setLastName(event.target.value)}></input>
        </label>

        <br />
        <label>
          Address:
          <input type="text" name="Address"></input>
        </label>
        <br />
        <label>
          Zip:
          <input type="text" name="zip" maxLength={5}></input>
        </label>
        <br />
        <label>
          State:
          <select name="state">
            <option value=""></option>
            <option value="fl">FL</option>
            <option value="il">IL</option>
            <option value="ca">CA</option>
            <option value="tx">TX</option>
          </select>
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <br />
        <label>Terms and Conditions</label>
        <input type="checkbox" onChange={(event) => setTerms(true)} />
        <br />
        <button onClick={(e) => sendData(e)} disabled={contactFormInfo.firstName ? false : true}>Submit</button>
      </form>
    </>
  );
}
