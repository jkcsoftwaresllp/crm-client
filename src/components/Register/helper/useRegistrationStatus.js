import { useState, useEffect } from 'react';

export const useRegistrationStatus = () => {
  const [status, setStatus] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetch from backend (replace with real API call when ready)
    const fetchStatus = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        const mockResponse = {
          status: 'error', // Default to pending for demo; replace with actual data
          userEmail: 'user@example.com'
        };
        setStatus(mockResponse.status);
        setUserEmail(mockResponse.userEmail);
      } catch (error) {
        console.error('Failed to fetch status:', error);
        setStatus('error'); // Fallback state
        setUserEmail('user@example.com');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return { status, userEmail, loading };
};