import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">Login to linkedin</h1>
          <div className="space-y-5">
            <LoginForm />
            <Link
              href="/sign-up"
              className="block text-center text-blue-500 hover:underline"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
        <div className="relative hidden w-1/2 md:block">
          <Image
            src="/assets/auth.jpg"
            fill
            alt="sign up page"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Login;
