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
  const imageName = `${Math.random()}-${newCabin?.imageName?.replace(" ", "%")}`
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


export async function editCabin(cabin) {
  const hasImageChanged = cabin.imageName?.startsWith(SUPABASE_URL)
  const imageName = `${Math.random()}-${cabin?.imageName?.replace(" ", "")}`
  const imagePath = hasImageChanged ? cabin?.imageName : `${BASE_URL}/${imageName}`
  const editedCabin = {
    id: cabin.id,
    capacity: cabin.capacity,
    description: cabin.description,
    discount: cabin.discount,
    image: imagePath,
    name: cabin.name,
    price: cabin.price
  }
  let query = await supabase.from("cabins")

  query = query.update(editedCabin).eq('id', cabin.id)
  const {data, error} = await query.select()

  if (error) {
    console.error(error)
    throw new Error(error)
  }

  if (hasImageChanged) return data
  const {error: insertStorageError} = await supabase.storage.from("cabin-images").upload(imageName, cabin.image)
  if (insertStorageError) {
    await supabase.from("cabins").delete().eq("id", data.id)
    console.error(storageError)
    throw new Error("Cabin image could not be uploaded and the cabin was not created")
  }

  const oldImageFilename = cabin.oldImage.split("/")[cabin.oldImage.split("/").length - 1]
  const {error: deleteOldImageStorageError} = await supabase.storage.from("cabin-images").remove([oldImageFilename])

  if (deleteOldImageStorageError) {
    console.error(deleteOldImageStorageError)
  }

  return data
}

export async function deleteCabin({id}) {
  let query = supabase.from("cabins")
  const {data, error} = await query.delete().eq("id", id)
  if (error) {
    console.error(error)
    throw new Error(error)

  }

  return error
}

export async function createGetTotalCabins() {
  const {data, error} = await supabase.from("cabins").select("", {count: "exact"})
  if (error) {
    console.error(error)
    throw new Error(error)
  }
  return data
}