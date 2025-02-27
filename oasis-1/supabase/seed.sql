CREATE TABLE public.cabins (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    discount DECIMAL(10, 2) NOT NULL,
    capacity INT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE public.guests (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    nationality VARCHAR(255) NOT NULL,
    countryflag TEXT NOT NULL
);

CREATE TABLE public.bookings (
    id SERIAL PRIMARY KEY,
    startdate TIMESTAMP NOT NULL,
    enddate TIMESTAMP NOT NULL,
    numnights INT NOT NULL,
    numguests INT NOT NULL,
    cabinprice DECIMAL(10, 2) NOT NULL,
    extrasprice DECIMAL(10, 2) NOT NULL,
    totalprice DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    hasbreakfast BOOLEAN NOT NULL,
    ispaid BOOLEAN NOT NULL,
    observations TEXT,
    cabinid INT NOT NULL REFERENCES public.cabins(id),
    guestid INT NOT NULL REFERENCES public.guests(id)
);

CREATE TABLE public.profiles {
    id uuid,
    fullname text,
    
}

CREATE TABLE public.settings (
    minBookingLength INT NOT NULL,
    maxBookingLength INT NOT NULL,
    maxGuestsPerBooking INT NOT NULL,
    breakfastPrice DECIMAL(10, 2) NOT NULL
);


INSERT INTO public.cabins (id,name,description,price,discount,capacity,image) VALUES (1, 'Forest Cabin', 'A cabin situated in the middle of a forest', 90, 10, 5, 'https://nxvxtdqarbflrhkujbbn.supabase.co/storage/v1/object/sign/cabin-images/image01.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvaW1hZ2UwMS5qcGciLCJpYXQiOjE3MzA3ODQxNDksImV4cCI6MTc2MjMyMDE0OX0.zQWK0_SctFu7EoZehNhf8B6t-iX5VS6BRBsMwS0WFTk&t=2024-11-05T05%3A22%3A30.280Z'), (2, 'Rain Forest Cabin', 'A cabin situated in the middle of a rain forest', 150, 20, 3, 'https://nxvxtdqarbflrhkujbbn.supabase.co/storage/v1/object/sign/cabin-images/image02.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvaW1hZ2UwMS5qcGciLCJpYXQiOjE3MzA3ODQxNDksImV4cCI6MTc2MjMyMDE0OX0.zQWK0_SctFu7EoZehNhf8B6t-iX5VS6BRBsMwS0WFTk&t=2024-11-05T05%3A22%3A30.280Z'), (3, 'Desert Cabin', 'A cabin situated in the middle of a desert', 50, 10, 2, 'https://nxvxtdqarbflrhkujbbn.supabase.co/storage/v1/object/sign/cabin-images/image03.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvaW1hZ2UwMS5qcGciLCJpYXQiOjE3MzA3ODQxNDksImV4cCI6MTc2MjMyMDE0OX0.zQWK0_SctFu7EoZehNhf8B6t-iX5VS6BRBsMwS0WFTk&t=2024-11-05T05%3A22%3A30.280Z');
SELECT setval('"public"."cabins_id_seq"'::regclass, (SELECT MAX("id") FROM "public"."cabins"));
INSERT INTO public.guests (id,fullname,email,nationality,countryflag) VALUES (1, 'Ng Pheng Loong', 'ngpl-wm19@student.tarc.edu.my', 'Malaysia', '≡ƒç▓≡ƒç╛'), (2, 'Ng Pheng Wei', 'ngpw-19@student.tarc.edu.my', 'Malaysia', '≡ƒç▓≡ƒç╛'), (3, 'Ng Poh Ting', 'ngpt-wm19@student.tarc.edu.my', 'Malaysia', '≡ƒç▓≡ƒç╛');
SELECT setval('"public"."guests_id_seq"'::regclass, (SELECT MAX("id") FROM "public"."guests"));
INSERT INTO public.bookings (id,startdate,enddate,numnights,numguests,cabinprice,extrasprice,totalprice,status,hasbreakfast,ispaid,observations,cabinid,guestid) VALUES (1, '2023-01-01 12:00:00', '2023-01-01 12:00:00', 5, 2, 200, 10, 210, 'Checked in', 't', 't', 'Not sus at all', 1, 1), (2, '2023-01-01 12:00:00', '2023-01-01 12:00:00', 4, 2, 210, 15, 225, 'Reserved', 'f', 't', 'First-time guests, requested quiet cabin.', 2, 2), (3, '2023-01-01 12:00:00', '2023-01-01 12:00:00', 2, 3, 250, 20, 270, 'Cancelled', 't', 'f', 'Cancelled due to scheduling conflict.', 3, 3);
SELECT setval('"public"."bookings_id_seq"'::regclass, (SELECT MAX("id") FROM "public"."bookings"));
INSERT INTO settings (minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice) 
VALUES (1, 20, 20, 20);

CREATE POLICY "Enable select settings for authenticated user" on "public"."settings"
AS PERMISSIVE FOR SELECT
TO public
USING ((auth.role() = 'authenticated'::text));

CREATE POLICY "Policy for authenticated user to update settings" on "public"."settings"
AS PERMISSIVE FOR UPDATE
TO public
USING ((auth.role() = 'authenticated'::text));

CREATE POLICY "Eanble supabase admin to update" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO supabase_admin
USING (true);

CREATE POLICY "Enable all roles to update" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO supabase_auth_admin
USING (true);

CREATE POLICY "Enable Anon updates" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO anon
USING (true);

CREATE POLICY "Enable insert for public" on "public"."profiles"
AS PERMISSIVE FOR INSERT
TO public;

CREATE POLICY "enable select for all roles" on "public"."profiles"
AS PERMISSIVE FOR SELECT
TO supabase_auth_admin
USING (true);

CREATE POLICY "Enable Update for Authenticated users" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Enable update for suapabse auth admin" on "public"."profiles"
AS PERMISSIVE FOR UPDATE
TO supabase_auth_admin
USING (true);

CREATE POLICY "Enable delete for authenticated users only" on "public"."cabins"
AS PERMISSIVE FOR DELETE
TO public
USING ((auth.role() = 'authenticated'::text));

CREATE POLICY "Enable insert for authenticated users only" on "public"."cabins"
AS PERMISSIVE FOR INSERT
TO authenticated

WITH CHECK (true);

CREATE POLICY "Enable read access for all users" on "public"."cabins"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable update for authenticated users only" on "public"."cabins"
AS PERMISSIVE FOR UPDATE
TO authenticated

WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users onlys" on "public"."cabins"
AS PERMISSIVE FOR UPDATE
TO public

WITH CHECK ((auth.role() = 'authenticated'::text));

CREATE POLICY "Enable update for authenticated users onlyss" on "public"."cabins"
AS PERMISSIVE FOR UPDATE
TO public
USING ((auth.role() = 'authenticated'::text));

CREATE POLICY "Enable read access for all users" on "public"."bookings"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

create
or replace function check_if_today_between_start_and_end_date (startdate date, enddate date) returns integer language sql as $$
    select count(*) from bookings where current_date >= startdate and current_date <= enddate;
$$;

create or replace function get_booking_today()
returns TABLE(
  fullname text,
  status text,
  numnights integer,
  id integer
) as $$
    select
    guests.fullname,
    bookings.status,
    bookings.numnights,
    bookings.id
    from
    bookings
    inner join guests on bookings.guestid = guests.id
    where
    to_char((select today()), 'dd/mm/yyyy') = to_char(startdate, 'dd/mm/yyyy');
$$
language sql;

create function get_summary_numnights()
returns TABLE(numnights integer)
as $$
    select numnights from bookings;
$$
language sql;

create function insert_metadata_profile1()
returns trigger
as $$
    insert into public.profiles (id, fullname)
    values (new.id, new.raw_user_meta_data ->> 'fullname');
    return new;
$$
language sql

create function is_super_admin()
returns boolean
as $$
    BEGIN
    RETURN EXISTS (
        SELECT 1 FROM auth.users WHERE id = user_id AND is_super_admin = TRUE
    );
    END;
$$
language plpgsql

create function testing(query_startdate date, query_enddate date)
returns TABLE(date_col date, totalsales integer)
as $$
    declare 
    test record;
    begin
    DROP TABLE IF EXISTS date_temp_table;
    create temp table date_temp_table(
    date_col date,
    totalsales integer
    );
    for test in select generate_series(query_startdate::date, query_enddate::date, '1 day'::interval)
    loop
    insert into date_temp_table(date_col, totalsales) values (test.generate_series, (select sum(totalprice) from bookings where to_char(startdate, 'yyyy-mm-dd')=to_char(test.generate_series, 'yyyy-mm-dd')));
    end loop;

    RETURN QUERY select
    *
    from
    date_temp_table;
    end;
$$
language plpgsql

create function today()
returns date
as $$
begin
    select current_date;
end;
$$
language plpgsql

create function update_profile_row()
returns trigger
as $$
    begin
        update public.profiles set filename=new.raw_user_meta_data->>'filename' where id::text=new.raw_user_meta_data->>'id';
        
        raise warning 'ran this update_profile_row function';
        raise warning '%',new.raw_user_meta_data->>'filename';
        raise warning '%',new.raw_user_meta_data->>'id';
        return new;
    end;
$$
language plpgsql

create or replace trigger after_register
after insert on auth.users
for each row
execute function insert_metadata_profile1();

create or replace trigger after_update_user
after update on auth.users
for each row
execute function update_profile_row();