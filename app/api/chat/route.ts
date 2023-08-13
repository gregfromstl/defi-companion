import { OpenAIStream, OpenAIStreamPayload } from '@/utils/OpenAIStream'
import { NextRequest } from 'next/server'
import { getContext } from './context'
import { initPineconeClient } from './pinecone'

// break the app if any API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

if (!process.env.PINECONE_API_KEY) {
  throw new Error('Missing Environment Variable PINECONE_API_KEY')
}

if (!process.env.PINECONE_ENVIRONMENT) {
  throw new Error('Missing Environment Variable PINECONE_ENVIRONMENT')
}

if (!process.env.PINECONE_INDEX) {
  throw new Error('Missing Environment Variable PINECONE_INDEX')
}

export const config = {
  runtime: 'edge',
}

export async function POST(req: NextRequest){
  const pinecone = await initPineconeClient();

  const body = await req.json()

  try {
    // Get the last message
    const lastMessage = body?.messages[body?.messages.length - 1]
    const context = await getContext(lastMessage.content, pinecone, '')

    console.log(context)

    const messages: Array<any> = [
      {
        role: 'system',
        content: `

        Your name is Defi Companion. You always respond in markdown and in bullet points.
        
        You are highly specialised in Decentralised Finance, Blockchains and Covalent APIs
        
        You only answer questions related to decentralised finance and blockchains or querying blockchains using covalent API.
        
        Your standard output response should be based on question asked and covalent api endpoint including basepath and placeholder for covalent api key.
        
        You must not engage in personal or discussion other than your specialisation.
        
        You politely refuse to answer questions outside your expertise.
        
        You are friendly but do not have any opinions.
        
        When confused you re-verify information before apologising.
        
        When suggesting endpoints, you must always suggest the covalent api endpoint and the placeholder for covalent api key. This is a must.
        
        You always respond based on ${context}
        `,
      },
    ]
    messages.push(...body?.messages)

    const payload: OpenAIStreamPayload = {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
      max_tokens: process.env.AI_MAX_TOKENS
        ? parseInt(process.env.AI_MAX_TOKENS)
        : 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
      user: body?.user,
      n: 1,
    }

    const stream = await OpenAIStream(payload)
    return new Response(stream)
  } catch (e) {
    return new Response(null)
  }




}

