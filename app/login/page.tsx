"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      router.push("/dashboard");  // ou a rota que quiser redirecionar
    } else {
      alert("Usuário ou senha inválido");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
       <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500">
  Login
</h1>

<label className="block mb-2 font-medium text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500">
  Usuário
</label>

<input
  type="text"
  className="w-full p-3 border border-gray-300 rounded-lg mb-4"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

<label className="block mb-2 font-medium text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500">
  Senha
</label>

<input
  type="password"
  className="w-full p-3 border border-gray-300 rounded-lg mb-6"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>



        <button
          type="submit"
          className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-purple-700 transition"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
