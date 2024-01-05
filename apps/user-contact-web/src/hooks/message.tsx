"use client"

import {Message} from "@/app/contato/page";
import {MessageResponseDTO} from "@/services/dtos/MessageResponseDTO";
import {createContext, useContext, useState} from "react";
import {MessageService} from "@/services/message";
import {Search} from "@/app/mensagens/busca/page";
import {BaseProps} from "@/components/baseProps";

export interface IMessageContextData {
  search(message: Search): Promise<MessageResponseDTO[]>;
  create(message: Message): Promise<MessageResponseDTO>;
  searchResults: MessageResponseDTO[];
  noResult: boolean;
}

export const MessageContext = createContext({} as IMessageContextData);

const MessageContextProvider = ({ children }: BaseProps) => {
  const [searchResults, setSearchResults] = useState<MessageResponseDTO[]>([]);
  const [noResult, setNoResult] = useState(false);
  const create = async (message: Message) => {
    return await MessageService.create(message);
  }

  const search = async (search: Search) => {
    const response =  await MessageService.search(search);
    if(!response || response.length === 0) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
    setSearchResults(response);

    return response;
  }

  return (
    <MessageContext.Provider value={{ create, search, searchResults, noResult }}>
      {children}
    </MessageContext.Provider>
  )
}

function useMessage(): IMessageContextData {
   return useContext(MessageContext);;
}

export {MessageContextProvider, useMessage}
