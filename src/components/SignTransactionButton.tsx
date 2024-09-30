"use client";

import React, { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAccount } from "@/hooks/useAccount";
import { Application } from "@/types/application";

interface SignTransactionButtonProps {
  application: Application;
  text: string;
}

export default function SignTransactionButton({
  application,
  text,
}: SignTransactionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { account, proposeAddVerifier } = useAccount();
  const { toast } = useToast();

  const signTransaction = async () => {
    setIsPending(true);
    try {
      const messageId = await proposeAddVerifier(application.address, application.datacap);
      toast({
        title: "RKH Transaction Proposed",
        description: `Transaction proposed with message id: ${messageId}`,
      });
    } catch (error) {
      console.error('Error proposing verifier:', error);
      toast({
        title: "Error",
        description: "Failed to propose verifier",
        variant: "destructive",
      });
    }
    setIsPending(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        className="w-[150px]"
        disabled={!account?.isConnected || isPending}
        onClick={() => setIsOpen(true)}
      >
        {text}
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Transaction</DialogTitle>
          <DialogDescription>
            Signing a RKH transaction to add a datacap allocator.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center p-8">
          {isPending && <ScaleLoader />}
          {!isPending && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow key="verifier">
                  <TableCell>{"Verifier"}</TableCell>
                  <TableCell>{application.actorId}</TableCell>
                </TableRow>
                <TableRow key="datacap">
                  <TableCell>{"DataCap"}</TableCell>
                  <TableCell>{application.datacap} PiB</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
        </div>
        <Button className="w-[150px]" disabled={isPending} onClick={() => signTransaction()}>
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
