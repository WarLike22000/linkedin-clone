import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./_components/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to linkedin</h1>
            <p className="text-muted-foreground">
              A place where even you can find friend.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link
              href="/login"
              className="block text-center text-blue-500 hover:underline"
            >
              Already have an account? log in
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

export default SignUp;
