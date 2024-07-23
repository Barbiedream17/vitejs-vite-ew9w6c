import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { userNameSchema } from "@/lib/validations/user";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/shared/icons";

interface User {
  id: string;
  name: string;
}

interface UserNameFormProps {
  user: User;
}

type FormData = {
  name: string;
};

export function UserNameForm({ user }: UserNameFormProps) {
  const [updated, setUpdated] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      name: user?.name || "",
    },
  });

  const checkUpdate = (value: string) => {
    setUpdated(user.name !== value);
  };

  const onSubmit = async (data: FormData) => {
    setIsPending(true);
    try {
      // Replace this with your actual update logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUpdated(false);
      toast.success("Your name has been updated.");
    } catch (error) {
      toast.error("Something went wrong.", {
        description: "Your name was not updated. Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader className="space-y-2">
          <CardTitle>Your Name</CardTitle>
          <CardDescription className="text-[15px]">
            Please enter your full name or a display name you are comfortable
            with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              className="w-full sm:w-[400px]"
              size={32}
              {...register("name")}
              onChange={(e) => checkUpdate(e.target.value)}
            />
            {errors?.name && (
              <p className="px-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t bg-accent py-2">
          <p className="text-sm font-medium text-muted-foreground">
            Max 32 characters
          </p>
          <Button
            type="submit"
            variant={updated ? "default" : "disable"}
            disabled={isPending || !updated}
          >
            {isPending && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            <span>Save Changes</span>
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}