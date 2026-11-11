import React, { useState } from "react";

export default function NotificationBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) {
    return null;
  }
  return (
    <div>
      <p>Welcome! You have a new notification.</p>

      <button onClick={() => setDismissed(true)}>Dismiss</button>
    </div>
  );
}
