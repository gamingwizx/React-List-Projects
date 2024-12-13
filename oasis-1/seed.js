import { insertBookings, insertGuests, insertCabins, insertSettings, deleteAllData } from "./seedOperation.js"

// 1) create table
// 2) insert data into table
// 3) enable smtp
// 4) enable rls

// ALTER SEQUENCE settings_id_seq RESTART WITH 1;
// ALTER SEQUENCE cabins_id_seq RESTART WITH 1;
// ALTER SEQUENCE bookings_id_seq RESTART WITH 1;
// ALTER SEQUENCE guests_id_seq RESTART WITH 1;

// create policy "policy_name"
// on storage.objects for insert to authenticated with check (
//   bucket_id = 'cabin_images'
// );

// CREATE POLICY "Enable delete for authenticated users only" ON public.cabins FOR UPDATE USING (auth.role() = 'authenticated');

// SELECT *
// FROM information_schema.role_table_grants 
// WHERE table_schema='public' and table_name='profiles'

// grant all privileges on all tables in schema public to authenticated

// create or replace trigger on_update_users()
// after update of raw_user_meta_data on auth.users
// for each row
// execute function update_profile_row()

//revoke all on all tables in schema public from anon;

// SELECT grantee, privilege_type 
// FROM information_schema.role_table_grants 

async function main() {
  
  const insertData = () => {
    return new Promise(async (resolve, reject) => {
      await deleteAllData()
      const cabinRes = await insertCabins()
      const guestRes = await insertGuests()
      const settingsRes = await insertSettings()
      const {cabins, cabinError} = await cabinRes
      const {guests, guestError} = await guestRes
      const {settings, settingsError} = await settingsRes
      
      if (cabinError) console.error(cabinError)
      if (guestError) console.error(guestError)
      if (settingsError) console.error(settingsError)

      resolve({cabins, guests})
    })
  }

  const data = insertData()
  data.then(async (data) => {
    if (data.cabins && data.guests) {
      const bookingRes = await insertBookings()
      const {bookings, bookingError} = await bookingRes

      if (bookingError) {
        console.error(bookingError)
      }
      
    }
    
  }).catch((error) => {
    throw new Error(error)
  })

  console.log("Successfully inserted cabins")
}

main()