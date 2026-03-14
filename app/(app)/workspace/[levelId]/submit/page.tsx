"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { completeLevel } from "@/lib/actions/gamification";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SubmitPage() {
  const params = useParams();
  const levelId = params.levelId as string;
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const result = await completeLevel(levelId, url);
    if (result.success) {
      setSuccess(true);
      setTimeout(() => router.push("/dashboard"), 2000);
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center py-20 text-center">
        <div className="text-5xl">+100 XP</div>
        <h1 className="font-display mt-4 text-2xl font-bold">Level Complete!</h1>
        <p className="mt-2 text-muted-foreground">
          Redirecting to dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md py-12">
      <h1 className="font-display text-2xl font-bold">Submit {levelId}</h1>
      <p className="mt-2 text-muted-foreground">
        Paste the URL to your deployed project. Honor system — you built it,
        you earned it.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          type="url"
          placeholder="https://your-project.vercel.app"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Mark as Complete"}
        </Button>
      </form>
    </div>
  );
}
