import { MongoClient } from 'mongodb'

export const connectdatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://milosavljevic:PaCGKdQ1RHZggdDj@jugometal.htx0dxc.mongodb.net/?retryWrites=true&w=majority'
  )

  return client
}
