'use client';

import { useEffect, useState } from 'react';
import { authClient } from "@/lib/auth-client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Mail } from "lucide-react";

export default function EmailVerificationAlert() {
  const { data: session, isPending } = authClient.useSession();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isPending && session?.user && !session.user.emailVerified) {
      setOpen(true);
    }
  }, [session, isPending]);

  if (isPending || !session?.user) return null;

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2 justify-center mb-2">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
                <Mail className="w-6 h-6" />
            </div>
          </div>
          <AlertDialogTitle className="text-center">Verify your email address</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Please check your email <span className="font-medium text-foreground">{session.user.email}</span> and click the verification link to activate your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogAction onClick={() => window.location.reload()}>
            I have verified
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
