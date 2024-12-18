React (JSX) code:

```jsx
import React from 'react';

interface NameInputProps {
  firstName: string;
  lastName: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
}


const NameInput: React.FC<NameInputProps> = ({ firstName, lastName, onFirstNameChange, onLastNameChange }) => {
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => onFirstNameChange(e.target.value)}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => onLastNameChange(e.target.value)}
      />
    </div>
  );
};

export default NameInput;
```

