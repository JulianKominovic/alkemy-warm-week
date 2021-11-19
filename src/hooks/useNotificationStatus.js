import { useState } from "react";

export default function useNotificationStatus() {
  const [showNotification, setShowNotification] = useState(false);
  const [actionName, setActionName] = useState("");
  const [error, setError] = useState("");
  const activateNotification = () => setShowNotification(true);
  const deactivateNotification = () => setShowNotification(false);
  const setNewErrorName = (error) => {
    setActionName("");
    setError(error);
  };
  const setNewActionName = (action) => {
    setError("");
    setActionName(action);
  };
  return {
    showNotification,
    actionName,
    deactivateNotification,
    activateNotification,
    setNewActionName,
    setNewErrorName,
    setShowNotification,
    error,
  };
}
