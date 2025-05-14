// src/hooks/useAuth.js
'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const ref = doc(db, 'users', currentUser.uid);
        const snap = await getDoc(ref);
        const data = snap.exists() ? snap.data() : {};
        setUser({ ...currentUser, username: data.username || '' });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}