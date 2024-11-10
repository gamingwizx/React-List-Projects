import supabase, {SUPABASE_URL} from "./supabase"

const BASE_URL = `${SUPABASE_URL}/storage/v1/object/public/cabin-images`

export async function getCabin() {
  let { data, error } = await supabase
  .from('cabins')
  .select('*')

  if (error) {
    console.error(error)
    throw new Error("Cabis could not be loaded")
  }

  return data
}

export async function createCabin(newCabin) {
  let query = supabase.from("cabins")
  const cabin = {
    capacity: newCabin.capacity,
    description: newCabin.description,
    discount: newCabin.discount,
    image: newCabin.imageName,
    name: newCabin.name,
    price: newCabin.price
  }
  const imageName = `${Math.random()}-${newCabin?.imageName.replace(" ", "")}`
  const imageUrl = `${BASE_URL}/${imageName}`
  query = query.insert({...cabin, image: imageUrl})
  const { data, error } = await query.select().single()
  if (error) {
    console.error(error)
    throw new Error(error)
  }

  const {data: storageName, error: bucketError} = await supabase.storage.listBuckets()

  const {error: storageError} = await supabase.storage.from("cabin-images").upload(imageName, newCabin.image)

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id)
    console.error(storageError)
    throw new Error("Something went wrong when uploading cabin image")
  }

  return data;
}
