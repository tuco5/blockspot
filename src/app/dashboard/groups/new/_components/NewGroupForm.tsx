"use client";
import { useActionState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { type FormSchema, schema } from "../schema";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { createGroup } from "../actions";

export default function NewGroupForm() {
  const [state, formAction] = useActionState(createGroup, { message: "" });

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      location: "",
    },
  });

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        className="flex w-full max-w-md flex-col gap-2 rounded-md bg-card p-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre de tu organización..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input placeholder="Lugar de tu organización..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isPrivate"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem className="h-16">
              <div className="flex h-full items-center gap-2">
                <FormLabel className="">Visibilidad: </FormLabel>
                <FormDescription>
                  {value ? "Privado." : "Publico."}
                </FormDescription>
                <FormControl>
                  <Switch
                    checked={value}
                    onCheckedChange={onChange}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="primary"
          className="mt-4"
          onClick={form.handleSubmit(() => formRef.current?.requestSubmit())}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
