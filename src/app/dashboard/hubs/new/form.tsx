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
import { type NewHubSchema, newHubSchema } from "./schema";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { createHub } from "./actions";
import { FormSubmitButton } from "@/components/forms";

export function NewHubForm() {
  const [_, formAction, isPending] = useActionState(createHub, {
    ok: undefined,
    message: undefined,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<NewHubSchema>({
    resolver: zodResolver(newHubSchema),
    defaultValues: {
      name: "",
      location: "",
    },
  });

  const onSubmit = () => {
    formRef.current?.requestSubmit();
  };

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
        <FormSubmitButton
          isPending={isPending}
          className="mt-4 self-center"
          onClick={form.handleSubmit(onSubmit)}
        >
          Submit
        </FormSubmitButton>
      </form>
    </Form>
  );
}
