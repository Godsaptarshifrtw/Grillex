"use client";

import React, { useState, useTransition } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import Button from "../Button";
import { sendMail } from "@/utils/sendEmail";
import SpinnerSvg from "../SpinnerSvg";

interface IProps {
  gridpercol ? : string;
}

export default function ContactPageForm({gridpercol} : IProps) {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmitForm = async (data: FormData) => {
    startTransition(async () => {
      setResponse(null);
      setError(null);
      const { response: res, error } = await sendMail<string, string>({
        Name: data.get("first-name") + " " + data.get("last-name"),
        Email: data.get("email"),
        Number: data.get("number"),
        Message: data.get("message"),
      });

      if (error) {
        setError(error);
      } else {
        setResponse(res);
      }
    });
  };

  return (
    <form action={handleSubmitForm} className="space-y-4">
      <div className={`grid grid-cols-2 gap-4`}>
        <Input
          required
          name="first-name"
          type="text"
          placeholder="Your first name *"
        />
        <Input
          required
          name="last-name"
          type="text"
          placeholder="Your Last name *"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 ts:grid-cols-1">
        <Input
          required
          name="email"
          type="email"
          placeholder="Your email address *"
        />
        <Input
          required
          name="number"
          type="text"
          maxLength={10}
          pattern="[0-9\s]{10}"
          title="Please enter a 10 digit valid mobile number"
          placeholder="Your contact number *"
        />
      </div>
      <TextArea placeholder="Your message" rows={8} />
      <Button className="w-full py-[12px] flex-center">
        {isPending ? <SpinnerSvg size="1rem" /> : <span>SUBMIT</span>}
      </Button>
      <p
        className={`text-center ${
          response || error ? "opacity-100" : "opacity-0"
        } ${error ? "text-red-700" : "text-green-700"}`}
      >
        Successfully submitted
      </p>
    </form>
  );
}
