import { useState } from 'react'

type Props = {}

export function InputIssue() {
  const [firstName, setFirstName] = useState('something')
  const [lastName, setLastName] = useState('something')

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    // firstName = e.target.value
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    // lastName = e.target.value
    setLastName(e.target.value)
  }

  function handleReset() {
    // firstName = ''
    // lastName = ''
    setFirstName('')
    setLastName('')
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input placeholder="First name" value={firstName} onChange={handleFirstNameChange} />
        <input placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
        <h1>
          Hi, {firstName} {lastName}
        </h1>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  )
}
