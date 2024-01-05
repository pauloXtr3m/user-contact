"use client"

import {Button} from "@/components/ui/button"
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React, {useMemo, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "@/components/ui/input";
import {Icons} from "@/components/ui/icons";
import {useRouter} from "next/navigation";
import {toast} from "sonner"
import {useMessage} from "@/hooks/message";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type Search = {
  email: string;
}

const contactSchema = z.object({
  email: z.string({required_error: 'Email é obrigatório'}).email({
    message: "Insira um email válido"
  }),
})
export default function Search() {
  const form = useForm<Search>({resolver: zodResolver(contactSchema)});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const message = useMessage();


  const onSubmit = async (data: Search) => {
    setLoading(true);
    try {
      await message.search(data);
    } catch (e) {
      toast.error('Erro ao buscar mensagem, tente novamente mais tarde!', {style: {background: 'red', color: 'white'}});
      console.error('Erro ao buscar mensagem \n\n', e);
    } finally {
      setLoading(false);
    }
  }

  const hasResults = useMemo(() => !!message.searchResults && !!message.searchResults.length, [message.searchResults]);

  return (
    <div className="p-10 flex flex-col justify-center align-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
        Busca de mensagens
      </h1>
      <p>Veja as mensagens recebidas com este email</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Seu email" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <Button className="mr-8" disabled={loading} onClick={() => router.replace('/')} variant="secondary">
            Voltar
          </Button>
          <Button type="submit" disabled={loading}>
            {loading && <><Icons.spinner className="h-4 w-4 animate-spin"/> Carregando</>}
            {!loading && 'Buscar'}
          </Button>
        </form>
      </Form>

      <div className="mt-4">
        {message.noResult && <h3>Nenhum resultado foi encontrado, tente novamente com outro email</h3>}

        {hasResults && <>
            <h3>{`${message.searchResults.length} ${message.searchResults.length > 1 ? 'resultados' : 'resultado'} ${message.searchResults.length > 1 ? 'encontrados' : 'encontrado'}`}</h3>
          {message.searchResults.map(result => (
            <Card className="mb-4" key={`result-card-${result.id}`}>
              <CardHeader>
                <CardTitle>{result.name}</CardTitle>
                <CardDescription>{result.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{result.content}</p>
              </CardContent>
              <CardFooter>
                <p>{`Id: ${result.id}`}</p>
              </CardFooter>
            </Card>
          ))}

        </>
        }

      </div>

    </div>
  );

}
