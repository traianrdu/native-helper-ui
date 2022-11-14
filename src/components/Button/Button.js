import React from 'react';

export default function Button({ children, type, isDisabled, onClick }) {
  return (
    <div>
      <button type={type} disabled={isDisabled} onClick={onClick}>{children}</button>
    </div>
  );
}

// onClick={() => btnClick("<?xml version=\"1.0\" encoding=\"utf-8\"?><resources><string name=\"string_name\">text_string</string></resources>")}