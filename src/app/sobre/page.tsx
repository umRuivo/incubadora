import { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: 'Sobre',
// }

export async function generateMetadata({ }) {
  const data =  await getData()
  const name = data.Material[0].name

  return {
    title: name,
    description: 'descrição',
    openGraph: {
      title: name,
      description: 'essa é a descrição',
    }
  }
}

async function getData() {
  const res = await fetch('http://45.33.100.218/cat/2', {cache: 'no-store'})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Sobre() {
  const data =  await getData()
  const name = data.Material[0].name
  console.log(name)
    return (
      <main className="flex mt-11 min-h-screen flex-col items-center justify-between p-10">
        <h4>quem somos - {name}</h4>
      </main>
    )
  }