"use client"

import { Button } from "@/components/ui/button"
import {useForm} from "react-hook-form";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React, {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {MessageService} from "@/services/message";
import { Icons } from "@/components/ui/icons";
import {useRouter} from "next/navigation";
import { toast } from "sonner"

export type Message = {
  name: string;
  email: string;
  phone: string;
  content: string;
}

const contactSchema = z.object({
  name: z.string({required_error: 'Nome é obrigatório'}).min(2, {
    message: 'Nome deve ter no mínimo 2 caracteres'
  }),
  email: z.string({required_error: 'Email é obrigatório'}).email({
    message: "Insira um email válido"
  }),
  phone: z.string({required_error: 'Telefone é obrigatório'}).min(11, {
    message: "Telefone deve ter 11 caracteres"
  }),
  content: z.string({required_error: 'Mensagem é obrigatória'})
})
export default function Home() {
  const form = useForm<Message>({ resolver: zodResolver(contactSchema)});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: Message) => {
    setLoading(true);
    try {
      await MessageService.create(data);
      router.push('/contato/sucesso');
    } catch (e) {
      toast.error('Erro ao enviar mensagem, tente novamente mais tarde!', { style: {background: 'red', color: 'white'}});
      console.error('Erro ao enviar mensagem \n\n', e);
    } finally {
      setLoading(false);
    }
  }
    return (
      <div className="p-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
        Fale conosco
      </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(11) 981509414" {...field} />
                  </FormControl>
                  <FormDescription>
                    Seu telefone com DDD
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Digite sua mensagem aqui" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading && <><Icons.spinner className="h-4 w-4 animate-spin" /> Carregando</>}
              {!loading && 'Enviar'}
            </Button>
          </form>
        </Form>
      </div>

    );

}
