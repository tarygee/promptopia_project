"use client"

import {useState, useEffect } from 'react';
import { useSession } from 'next-auth';
import { useRouter } from 'next/navigation';

import Profile from '@components/profile';


const MyProfile = () => {

    const handleEdit = () =>{

    }

    const handleDelete= async () =>{

    }

  return (
    <Profile
    name="My"
    desc="Welcome to my personalized profile page"
    data={[]}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default MyProfile;