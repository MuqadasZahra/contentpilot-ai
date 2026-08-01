"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm bg-white rounded-xl border border-gray-100 shadow-sm p-8"
      >
        <h1 className="text-xl font-bold mb-1">Create your account</h1>
        <p className="text-gray-500 text-sm mb-6">Start planning content with AI, free.</p>

        <label className="text-sm font-medium block mb-1">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-sm"
          placeholder="you@business.com"
        />

        <label className="text-sm font-medium block mb-1">Password</label>
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-sm"
          placeholder="At least 6 characters"
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-500 text-white rounded-lg py-2 font-medium hover:bg-brand-600 disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-brand-600 font-medium">
            Log in
          </Link>
        </p>
      </form>
    </main>
  );
}
