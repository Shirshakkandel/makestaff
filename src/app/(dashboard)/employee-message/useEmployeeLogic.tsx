'use client';
import { useState } from 'react';

export default function useEmployeeLogic() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isInterviewCancel, setIsInterviewCancel] = useState(false);

  return { isModelOpen, setIsModelOpen, isInterviewCancel, setIsInterviewCancel };
}
