import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { userRoleSchema } from "@/lib/validations/user";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/shared/icons";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

interface User {
  id: string;
  role: UserRole;
}

interface UserRoleFormProps {
  user: User;
}

type FormData = {
  role: UserRole;
};

export function UserRoleForm({ user }: UserRoleFormProps) {
  const [updated, setUpdated] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [role, setRole] = useState(user.role);

  const form = useForm<FormData>({
    resolver: zodResolver(userRoleSchema),
    values: {
      role: role,
    },
  });

  const onSubmit = async (data: z.infer<typeof userRoleSchema>) => {
    setIsPending(true);
    try {
      // Replace this with your actual update logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUpdated(false);
      toast.success("Your role has been updated.");
    } catch (error) {
      toast.error("Something went wrong.", {
        description: "Your role was not updated. Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="space-y-2">
            <CardTitle>Your Role</CardTitle>
            <CardDescription className="text-[15px]">
              Select the role what you want for test the app.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Role</FormLabel>
                  <Select
                    onValueChange={(value: UserRole) => {
                      setUpdated(user.role !== value);
                      setRole(value);
                      field.onChange(value);
                    }}
                    defaultValue={user.role}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full sm:w-[400px]">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(UserRole).map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between gap-x-4 border-t bg-accent py-2">
            <p className="text-balance text-sm font-medium text-muted-foreground">
              Remove this card on real production.
            </p>
            <Button
              type="submit"
              className="shrink-0"
              disabled={isPending || !updated}
              variant={updated ? "default" : "disable"}
            >
              {isPending && (
                <Icons.spinner className="mr-2 size-4 animate-spin" />
              )}
              <span>Save Changes</span>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}