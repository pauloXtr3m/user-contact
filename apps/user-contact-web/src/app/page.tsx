'use client'

import {Button} from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import React from "react";

export default function Home () {
  const router = useRouter();

  return (
    <div className="p-28 flex flex-col justify-center align-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">Fale conosco</h1>
      <Button className="mb-20" onClick={() => router.replace('/contato')}>Enviar mensagem</Button>
      <Button onClick={() => router.replace('/mensagens/busca')}>Pesquisar mensagens enviadas</Button>
    </div>
  )
}
