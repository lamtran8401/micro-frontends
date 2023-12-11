import { useState } from 'react'

export const Button = () => {
  const [state, setState] = useState<number>(0)

  return (
    <button className="shared-btn" onClick={() => setState(prev => prev + 1)}>
      Click me: {state}
    </button>
  )
}

export default Button
