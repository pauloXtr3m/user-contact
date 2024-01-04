'use client'

import {Button} from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import React from "react";

export default function ContactSuccess () {
  const router = useRouter();

  return (
    <div className="p-28 flex flex-col justify-center align-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">Sua mensagem foi enviada com sucesso!</h1>
      <Button onClick={() => router.replace('/contato')}>Enviar outra mensagem</Button>
    </div>
  )
}
