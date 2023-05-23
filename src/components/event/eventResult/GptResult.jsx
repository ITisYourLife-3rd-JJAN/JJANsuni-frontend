import React from "react";

const GptResult = ({ apiResponse }) => {
  return (
    <div>
      <pre>
        <strong>API response:</strong>
        {apiResponse}
      </pre>
    </div>
  );
};

export default GptResult;
