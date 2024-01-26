import Link from 'next/link';
import React from 'react';
import { Button } from '@nextui-org/react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col text-white">
        {/* Logo */}
        <img src='../logo.png' alt="Logo" className="h-64" />

        <h1
        style={{marginTop: '-40px'}}
        className="text-4xl font-bold mb-4">Track Your Fitness Journey</h1>
        <p className="text-lg mb-8">Start tracking your exercises and stay fit!</p>

        <Link href="/login">
          <Button className="px-12 py-6" color="primary" variant="shadow">
            LOGIN
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
